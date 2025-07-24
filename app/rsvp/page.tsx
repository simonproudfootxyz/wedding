"use client";

import { useEffect, useState } from "react";

import { Guest, Reservation } from "@/app/utilities/types";
import RSVPLayout from "../layouts/rsvp/RSVPLayout";
import { RSVPLookupForm } from "./RSVPLookupForm";

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
        <RSVPLayout />
      </div>
    );
  }

  return (
    <RSVPLayout loading={false}>
      {guests && <RSVPLookupForm guests={guests} reservations={reservations} />}
    </RSVPLayout>
  );
}
