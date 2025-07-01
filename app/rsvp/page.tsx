"use client";

import { useEffect, useState } from "react";
import { set, useForm } from "react-hook-form";
import { TopHero } from "@/app/components/Hero/Hero";
import { useParams } from "next/navigation";
import Section from "@/app/components/Section/Section";
import Wrapper from "@/app/components/Wrapper/Wrapper";
import { Guest, Reservation } from "@/app/utilities/types";
// import { getAirtableRecords } from "@/app/utilities/airtable";

type RSVPLookupFormData = {
  FirstName: string;
  LastName: string;
};

const RSVPLookupForm = ({
  guests,
  reservations,
}: {
  guests: Guest[];
  reservations: Reservation[];
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RSVPLookupFormData>();

  const [guestLookup, setGuestLookup] = useState<Guest | null>(null);
  const [reservationLookup, setReservationLookup] =
    useState<Reservation | null>(null);

  const handleFormSubmit = async (formData: RSVPLookupFormData) => {
    console.log({ formData });
    const { FirstName, LastName } = formData;
    const formattedFirstName = FirstName.trim().toLowerCase();
    const formattedLastName = LastName.trim().toLowerCase();
    const guestLookup = guests.find((guest) => {
      const guestFirstName = guest.fields.FirstName.trim().toLowerCase();
      const guestLastName = guest.fields.LastName.trim().toLowerCase();
      return (
        guestFirstName === formattedFirstName.toLowerCase() &&
        guestLastName === formattedLastName.toLowerCase()
      );
    });
    const reservationLookup = reservations.find((reservation) => {
      return (
        reservation.fields.Assignee &&
        reservation.fields.Assignee.includes(guestLookup?.id)
      );
    });
    console.log({ guestLookup, reservationLookup });
    setGuestLookup(guestLookup);
    setReservationLookup(reservationLookup);
  };

  const handleResetClick = () => {
    setGuestLookup(null);
    setReservationLookup(null);
    reset();
  };

  useEffect(() => {
    // This effect can be used to handle any side effects after form submission
    console.log({ errors });
  }, [errors]);

  return (
    <form action="" onSubmit={handleSubmit(handleFormSubmit)}>
      <div style={{ marginBottom: "1rem" }}>
        <div>
          <label htmlFor="search">First Name:</label>
          <input
            id="FirstName"
            type="text"
            placeholder="Enter guest first name..."
            {...register("FirstName", { required: "First name is required" })}
          />
          {errors.FirstName && <p>{errors.FirstName.message}</p>}
        </div>
        <div>
          <label htmlFor="search">Last Name:</label>
          <input
            id="LastName"
            type="text"
            placeholder="Enter guest last name..."
            {...register("LastName", { required: "Last name is required" })}
          />
          {errors.LastName && <p>{errors.LastName.message}</p>}
        </div>
      </div>

      <button type="submit">Look up</button>
      {guestLookup && reservationLookup && (
        <>
          <button
            type="button"
            onClick={() => handleResetClick()}
            style={{ marginLeft: "1rem" }}
          >
            Clear
          </button>
          <div>
            <a
              href={`${window.location.origin}/?reservationId=${reservationLookup?.fields.Invite_Code}`}
            >
              {guestLookup.fields.FirstName} {guestLookup.fields.LastName} -
              RSVP
            </a>
          </div>
        </>
      )}
    </form>
  );
};

export default function RSVP() {
  const [guests, setGuests] = useState<Guest[] | null>(null);
  const [reservations, setReservations] = useState<Reservation[] | null>(null); // Adjust type as needed

  useEffect(() => {
    // Fetch all guests from Airtable
    if (guests && reservations) return; // Prevent refetching if already loaded

    Promise.all([
      fetch(`/api/airtable?tableName=Guests`).then((res) => res.json()),
      fetch(`/api/airtable?tableName=Reservations`).then((res) => res.json()),
    ])
      .then(([guestsData, reservationsData]) => {
        const formattedGuests: Guest[] = guestsData.map((guest) => ({
          id: guest.id,
          fields: guest.fields,
        }));
        setGuests(formattedGuests);

        const formattedReservations: Reservation[] = reservationsData.map(
          (reservation) => ({
            id: reservation.id,
            fields: reservation.fields,
          })
        );
        setReservations(formattedReservations);
      })
      .catch((error) =>
        console.error("Error fetching Airtable records:", error)
      );
  }, [guests, reservations]);

  if (!guests || !reservations) {
    return (
      <div className="page">
        <TopHero title="Loading..." />
      </div>
    );
  }

  return (
    <div className="page">
      <TopHero title={"RSVP"} />
      <Section
        classNames="cream-section"
        backgroundColor="var(--cream)"
        textColor="var(--black)"
      >
        <Wrapper>
          {guests && (
            <RSVPLookupForm guests={guests} reservations={reservations} />
          )}
        </Wrapper>
      </Section>
    </div>
  );
}
