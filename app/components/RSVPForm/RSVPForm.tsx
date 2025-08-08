"use client";
import React, { useState } from "react";
import { StyledRSVPForm } from "./StyledRSVPForm";
import { useForm } from "react-hook-form";
import { RSVPLink } from "@/app/layouts/rsvp/RSVPLayout";
import { StylizedButton } from "../Button/Button";
import Image from "next/image";
import ButtonLink from "../ButtonLink/ButtonLink";
import Modal from "../Modal/Modal";
import { useRouter } from "next/navigation";
import { RESERVATION_ID } from "@/app/constants/params";
import { Guest } from "@/app/utilities/types";

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

interface RSVPFormProps {
  guests: Guest[];
}

export const RSVPForm = ({ guests }: RSVPFormProps) => {
  const rsvpId = localStorage.getItem("reservationId");
  const router = useRouter();
  const handleFormSubmit = async (formData: RSVPFormData) => {
    const guestKeys = Object.keys(formData.guests);
    const formattedGuests = guestKeys.map((key) => formData.guests[key]);
    const guestsConfirmation = formattedGuests.some(
      (guest) => guest.fields.Attending === "Yes"
    );
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
      if (guestsConfirmation) {
        handleConfirm();
      } else {
        handleDecline();
      }
      return data;
    } catch (error) {
      console.error("Error submitting RSVP:", error);
      alert("There was an error submitting your RSVP. Please try again.");
      return null;
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RSVPFormData>();

  const hasCeremonyGuests = guests.some((guest) => {
    const reservationTypes = guest.fields?.ReservationType;
    const reservationType = reservationTypes && reservationTypes[0];
    return reservationType === "Ceremony";
  });

  const [modalConfirmOpen, setModalConfirmOpen] = useState(false);
  const [modalDeclineOpen, setModalDeclineOpen] = useState(false);

  const handleConfirm = () => setModalConfirmOpen(true);
  const handleDecline = () => setModalDeclineOpen(true);

  const handleModalClose = () => {
    setModalConfirmOpen(false);
    setModalDeclineOpen(false);
    router.push(`/?${RESERVATION_ID}=${rsvpId}`);
  };

  return (
    <>
      <StyledRSVPForm action="" onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="reset-link__container">
          <p>
            Not you?{" "}
            <RSVPLink className="heading-box__link" href={"/rsvp"}>
              Search again
            </RSVPLink>
          </p>
        </div>
        <ul className="guest-record__list">
          {guests.map((record) => {
            const { FirstName, LastName } = record.fields;
            const FullName = `${FirstName} ${LastName}`;
            return (
              <li key={record.id} className="guest-record__item">
                <h3 className="guest-record__name">{FullName}</h3>

                <div className="guest-record__inputs-container">
                  <div className="guest-record__input-container">
                    <div className="guest-record__input">
                      <input
                        id={`guests.${record.id}.fields.Attending.Yes`}
                        type="radio"
                        {...register(`guests.${record.id}.fields.Attending`, {
                          required: "Please select Accept or Decline",
                        })}
                        value="Yes"
                        defaultChecked={
                          String(record.fields.Attending) === "Yes"
                        }
                      />{" "}
                      <label
                        htmlFor={`guests.${record.id}.fields.Attending.Yes`}
                      >
                        Accept
                      </label>
                    </div>
                    <div className="guest-record__input">
                      <input
                        type="radio"
                        id={`guests.${record.id}.fields.Attending.No`}
                        {...register(`guests.${record.id}.fields.Attending`, {
                          required: "Please select Accept or Decline",
                        })}
                        value="No"
                        defaultChecked={
                          String(record.fields.Attending) === "No"
                        }
                      />{" "}
                      <label
                        htmlFor={`guests.${record.id}.fields.Attending.No`}
                      >
                        Decline
                      </label>
                    </div>
                  </div>
                  {errors?.guests?.[record.id]?.fields?.Attending && (
                    <p className="error">
                      {errors.guests?.[record.id]?.fields?.Attending?.message}
                    </p>
                  )}
                </div>

                <input
                  type="hidden"
                  {...register(`guests.${record.id}.id`)}
                  value={record.id}
                />
              </li>
            );
          })}
        </ul>
        {hasCeremonyGuests && (
          <div className="guest-record__dietary">
            <h3 className="guest-record__dietary-heading">
              Any dietary restrictions?
            </h3>
            {guests.map((record) => {
              return (
                <div
                  key={`dietary-${record.id}`}
                  className="guest-record__dietary-item"
                >
                  <input
                    className="guest-record__dietary-input"
                    id={`guests.${record.id}.fields.OtherDietaryNotes`}
                    type="text"
                    placeholder={`Add a note for ${record.fields.FirstName}`}
                    {...register(
                      `guests.${record.id}.fields.OtherDietaryNotes`
                    )}
                    defaultValue={record.fields.OtherDietaryNotes || ""}
                  />
                </div>
              );
            })}
          </div>
        )}

        <div className="buttons-container">
          <StylizedButton type="submit">submit</StylizedButton>
        </div>
      </StyledRSVPForm>
      <Modal
        classNames="confirm-modal"
        open={modalConfirmOpen}
        onClose={handleModalClose}
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
        <ButtonLink href={`/?reservationId=${rsvpId}`}>back to site</ButtonLink>
      </Modal>
      <Modal
        classNames="decline-modal"
        open={modalDeclineOpen}
        onClose={handleModalClose}
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
        <ButtonLink href={`/?reservationId=${rsvpId}`}>back to site</ButtonLink>
      </Modal>
    </>
  );
};
