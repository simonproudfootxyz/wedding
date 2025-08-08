"use client";

import { useEffect, useState } from "react";
import { Guest } from "@/app/utilities/types";
import RSVPLayout from "@/app/layouts/rsvp/RSVPLayout";
import { RSVPForm } from "@/app/components/RSVPForm/RSVPForm";
// import { getAirtableRecords } from "@/app/utilities/airtable";

export default function RSVP({ params }: any) {
  const [guests, setGuests] = useState<Guest[] | null>(null);
  const slug = params.id;

  useEffect(() => {
    // Fetch the guests based on the slug
    fetch(`/api/getGuestsByReservation?slug=${slug}`)
      .then((res) => res.json())
      .then((data) => {
        const formattedGuests: Guest[] = data.map((guest: any) => ({
          id: guest.id,
          fields: {
            ...guest.fields,
            Attending:
              typeof guest.fields.Attending === "boolean"
                ? guest.fields.Attending
                  ? "true"
                  : "false"
                : guest.fields.Attending,
          },
        }));
        setGuests(formattedGuests);
        localStorage.setItem("reservationId", slug);
      })
      .catch((error) =>
        console.error("Error fetching Airtable records:", error)
      );
  }, [slug]);

  if (!guests) {
    return <RSVPLayout loading={true} />;
  }

  const hasPluralGuests = guests?.length > 1;
  const spiritText = hasPluralGuests ? "spirits" : "spirit";
  const guestText = guests?.map((guest) => guest.fields.FirstName).join(" & ");
  const pageTitle = `Welcome, ${spiritText} of ${guestText}!`;
  return (
    <RSVPLayout loading={false} titleText={pageTitle}>
      <RSVPForm guests={guests} />
    </RSVPLayout>
  );
}
