"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Guest } from "@/app/utilities/types";
import RSVPLayout from "@/app/layouts/rsvp/RSVPLayout";
import { RSVPForm } from "@/app/components/RSVPForm/RSVPForm";
import { StylizedButton } from "@/app/components/Button/Button";
import Modal from "@/app/components/Modal/Modal";
// import { getAirtableRecords } from "@/app/utilities/airtable";

export default function RSVP() {
  const [guests, setGuests] = useState<Guest[] | null>(null);
  const params = useParams();
  const slug = params?.id;

  useEffect(() => {
    // Fetch the guests based on the slug
    // fetch(`/api/getGuestsByReservation?slug=${slug}`)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     const formattedGuests: Guest[] = data.map((guest) => ({
    //       id: guest.id,
    //       fields: guest.fields,
    //     }));
    //     setGuests(formattedGuests);
    //     localStorage.setItem("reservationId", slug);
    //   })
    //   .catch((error) =>
    //     console.error("Error fetching Airtable records:", error)
    //   );
  }, [slug]);

  const [modalOpen, setModalOpen] = useState(false);

  const handleConfirm = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  // if (!guests) {
  //   return <RSVPLayout loading={true} />;
  // }

  // const handleClick = () => {
  //   console.log("handleClick");
  // };

  const hasPluralGuests = guests?.length > 1;
  const spiritText = hasPluralGuests ? "spirits" : "spirit";
  const guestText = guests?.map((guest) => guest.fields.FirstName).join(" & ");
  const pageTitle = `Welcome, ${spiritText} of ${guestText}!`;
  return (
    <RSVPLayout loading={false} titleText={pageTitle}>
      {/* <RSVPForm guests={guests} /> */}
      <div>
        <StylizedButton type="button" onClick={() => handleConfirm()}>
          Confirm
        </StylizedButton>
        <StylizedButton type="button" onClick={() => handleConfirm()}>
          Deny
        </StylizedButton>
      </div>
      <Modal open={modalOpen} onClose={handleClose}>
        <h2>Thank you for confirming!</h2>
        <p>Your RSVP has been received.</p>
      </Modal>
    </RSVPLayout>
  );
}
