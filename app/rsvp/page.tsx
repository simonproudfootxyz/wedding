"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { TopHero } from "@/app/components/Hero/Hero";
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

  const [fuzzyLookups, setFuzzyLookups] = useState<[] | null>(null);
  const [guestLookup, setGuestLookup] = useState<Guest | null>(null);
  const [reservationLookup, setReservationLookup] =
    useState<Reservation | null>(null);

  const handleFormSubmit = async (formData: RSVPLookupFormData) => {
    const { FirstName, LastName } = formData;
    const format = (s: string) => s.trim().toLowerCase();

    const exactGuest = guests.find(
      (g) =>
        format(g.fields.FirstName) === format(FirstName) &&
        format(g.fields.LastName) === format(LastName)
    );

    const exactReservation = exactGuest
      ? reservations.find((r) => r.fields.Assignee?.includes(exactGuest.id))
      : null;

    const fuzzyLookups = guests
      .filter(
        (g) =>
          format(g.fields.FirstName).includes(format(FirstName)) ||
          format(g.fields.LastName).includes(format(LastName))
      )
      .map((guest) => ({
        guest,
        reservation:
          reservations.find((r) => r.fields.Assignee?.includes(guest.id)) ||
          null,
      }));

    setFuzzyLookups(fuzzyLookups);
    setGuestLookup(exactGuest);
    setReservationLookup(exactReservation);
  };

  const handleResetClick = () => {
    setGuestLookup(null);
    setReservationLookup(null);
    reset();
  };

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
          <p>
            <a
              href={`${window.location.origin}/?reservationId=${reservationLookup?.fields.Invite_Code}`}
            >
              {guestLookup.fields.FirstName} {guestLookup.fields.LastName} -
              RSVP
            </a>
          </p>
        </>
      )}
      {!guestLookup && fuzzyLookups && fuzzyLookups.length > 0 && (
        <div>
          <h3>Fuzzy Matches:</h3>
          <ul>
            {fuzzyLookups.map((lookup) => {
              return (
                <li key={lookup.guest.id}>
                  <a
                    href={`${window.location.origin}/reservationId?=${lookup.reservation.fields.Invite_Code}`}
                  >
                    {lookup.guest.fields.FirstName}{" "}
                    {lookup.guest.fields.LastName}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
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
