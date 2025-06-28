"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { TopHero } from "@/app/components/Hero/Hero";
import { useParams } from "next/navigation";
import Section from "@/app/components/Section/Section";
import Wrapper from "@/app/components/Wrapper/Wrapper";
import { Guest } from "@/app/utilities/types";
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
  const handleFormSubmit = (formData: RSVPFormData) => {
    const guestKeys = Object.keys(formData.guests);
    const formattedGuests = guestKeys.map((key) => {
      return formData.guests[key];
    });
    console.log({ formattedGuests });
    fetch("/api/updateGuests", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ payload: formattedGuests }),
    });
  };

  const { register, handleSubmit } = useForm();

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
              <br />
              <label>
                Other Dietary Notes:
                <input
                  type="text"
                  {...register(`guests.${record.id}.fields.OtherDietaryNotes`)}
                  defaultValue={record.fields.OtherDietaryNotes || ""}
                />
              </label>
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
    // Fetch the reservation record based on the slug
    fetch(`/api/getGuestsByReservation?slug=${slug}`)
      .then((res) => res.json())
      .then((data) => {
        const formattedGuests: Guest[] = data.map((guest) => ({
          id: guest.id,
          fields: guest.fields,
        }));
        setGuests(formattedGuests);
      })
      .catch((error) =>
        console.error("Error fetching Airtable records:", error)
      );
  }, []);
  const pageTitle = `RSVP - ${guests
    ?.map((guest) => guest.fields.FirstName)
    .join(" & ")}!`;
  if (!guests) {
    return (
      <div className="page">
        <TopHero title="Loading..." />
      </div>
    );
  }

  return (
    <div className="page">
      <TopHero title={guests ? pageTitle : ""} />
      <Section
        classNames="cream-section"
        backgroundColor="var(--cream)"
        textColor="var(--black)"
      >
        <Wrapper>{guests && <RSVPForm guests={guests} />}</Wrapper>
      </Section>
    </div>
  );
}
