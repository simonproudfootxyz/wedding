"use client";

import RSVPLayout from "../layouts/rsvp/RSVPLayout";
import { RSVPLookupForm } from "./RSVPLookupForm";

export default function RSVP() {
  return (
    <RSVPLayout loading={false}>
      <RSVPLookupForm />
    </RSVPLayout>
  );
}
