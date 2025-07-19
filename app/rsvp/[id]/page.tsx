"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { TopHero } from "@/app/components/Hero/Hero";
import { useParams, useRouter } from "next/navigation";
import Section from "@/app/components/Section/Section";
import Wrapper from "@/app/components/Wrapper/Wrapper";
import { Guest } from "@/app/utilities/types";
import RSVPLayout from "@/app/layouts/rsvp/RSVPLayout";
// import { getAirtableRecords } from "@/app/utilities/airtable";

type RSVPFormData = {
  guests: {
    [guestId: string]: {
      id: string;
      fields: {
        Attending: string;
        OtherDietaryNotes: string;
      };
    };
  };
};

const RSVPForm = ({ guests }) => {
  const router = useRouter();
  const handleFormSubmit = async (formData: RSVPFormData) => {
    const guestKeys = Object.keys(formData.guests);
    const formattedGuests = guestKeys.map((key) => formData.guests[key]);
    try {
      const response = await fetch("/api/updateGuests", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ payload: formattedGuests }),
      });

      if (!response.ok) {
        alert("There was an error submitting your RSVP. Please try again.");
        return null;
      }

      const data = await response.json();
      alert("RSVP submitted successfully! \nThank you!");
      router.push(window.location.origin);
      return data;
    } catch (error) {
      console.error("Error submitting RSVP:", error);
      alert("There was an error submitting your RSVP. Please try again.");
      return null;
    }
  };

  const { register, handleSubmit } = useForm<RSVPFormData>();

  return (
    <form action="" onSubmit={handleSubmit(handleFormSubmit)}>
      <ul>
        {guests.map((record) => {
          const { FirstName, LastName } = record.fields;
          const FullName = `${FirstName} ${LastName}`;
          return (
            <li key={record.id}>
              <h3>{FullName}</h3>
              <input
                type="hidden"
                {...register(`guests.${record.id}.id`)}
                value={record.id}
              />
              <fieldset>
                <legend>Attending:</legend>
                <label>
                  <input
                    type="radio"
                    {...register(`guests.${record.id}.fields.Attending`)}
                    value="Yes"
                    defaultChecked={record.fields.Attending === "Yes"}
                  />{" "}
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    {...register(`guests.${record.id}.fields.Attending`)}
                    value="No"
                    defaultChecked={record.fields.Attending === "No"}
                  />{" "}
                  No
                </label>
              </fieldset>
              {record.fields.InviteType === "Ceremony" && (
                <div>
                  <label>
                    Other Dietary Notes:
                    <input
                      type="text"
                      {...register(
                        `guests.${record.id}.fields.OtherDietaryNotes`
                      )}
                      defaultValue={record.fields.OtherDietaryNotes || ""}
                    />
                  </label>
                </div>
              )}
              <hr />
            </li>
          );
        })}
      </ul>
      <button type="submit">Submit RSVP</button>
    </form>
  );
};

export default function RSVP() {
  const [guests, setGuests] = useState<Guest[] | null>(null);
  const params = useParams();
  const slug = params?.id;

  useEffect(() => {
    // Fetch the guests based on the slug
    fetch(`/api/getGuestsByReservation?slug=${slug}`)
      .then((res) => res.json())
      .then((data) => {
        const formattedGuests: Guest[] = data.map((guest) => ({
          id: guest.id,
          fields: guest.fields,
        }));
        setGuests(formattedGuests);
        localStorage.setItem("reservationId", slug);
      })
      .catch((error) =>
        console.error("Error fetching Airtable records:", error)
      );
  }, [slug]);

  const hasPluralGuests = guests?.length > 1;
  const spiritText = hasPluralGuests ? "spirits" : "spirit";
  const guestText = guests?.map((guest) => guest.fields.FirstName).join(" & ");
  const pageTitle = `Welcome, ${spiritText} of ${guestText}!`;
  if (!guests) {
    return <RSVPLayout loading={true} />;
  }

  return (
    <RSVPLayout loading={false} titleText={pageTitle}>
      <RSVPForm guests={guests} />
    </RSVPLayout>
  );
}
