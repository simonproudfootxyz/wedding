"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Guest } from "@/app/utilities/types";
import RSVPLayout from "@/app/layouts/rsvp/RSVPLayout";
import { RSVPForm } from "@/app/components/RSVPForm/RSVPForm";
import { StylizedButton } from "@/app/components/Button/Button";
import Modal from "@/app/components/Modal/Modal";
import Image from "next/image";
import ButtonLink from "@/app/components/ButtonLink/ButtonLink";
// import { getAirtableRecords } from "@/app/utilities/airtable";

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

  const [modalConfirmOpen, setModalConfirmOpen] = useState(false);

  const handleConfirm = () => setModalConfirmOpen(true);
  const handleConfirmClose = () => setModalConfirmOpen(false);

  const [modalDeclineOpen, setModalDeclineOpen] = useState(false);

  const handleDecline = () => setModalDeclineOpen(true);
  const handleDeclineClose = () => setModalDeclineOpen(false);

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
      <div>
        <StylizedButton type="button" onClick={() => handleConfirm()}>
          Confirm
        </StylizedButton>
        <StylizedButton type="button" onClick={() => handleDecline()}>
          Deny
        </StylizedButton>
      </div>
      <Modal
        classNames="confirm-modal"
        open={modalConfirmOpen}
        onClose={handleConfirmClose}
      >
        <div className="modal__heading-container">
          <h2 className="modal__heading">party on, people!</h2>
          <Image
            className="modal__image"
            src="/images/CheersAnimation.png"
            alt="Cheers"
            width={407}
            height={342}
            priority
          />
        </div>
        <p className="modal__content">
          Thanks for your RSVP, we look forward to sharing our special day with
          you this halloween.{" "}
        </p>
        <ButtonLink href="/">back to site</ButtonLink>
      </Modal>
      <Modal
        classNames="decline-modal"
        open={modalDeclineOpen}
        onClose={handleDeclineClose}
      >
        <div className="modal__heading-container">
          <Image
            className="modal__image"
            src="/images/DogAnimation.png"
            alt="Cheers"
            width={365}
            height={295}
            priority
          />
          <h2 className="modal__heading">
            catch you on the flippity flip, people!
          </h2>
        </div>
        <p className="modal__content">
          Thanks for letting us know. We’re sorry to miss you but we’ll see you
          next time!
        </p>
        <ButtonLink href="/">back to site</ButtonLink>
      </Modal>
    </RSVPLayout>
  );
}
