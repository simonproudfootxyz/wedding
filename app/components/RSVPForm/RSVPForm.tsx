"use client";
import React from "react";
import { StyledRSVPForm } from "./StyledRSVPForm";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { RSVPLink } from "@/app/layouts/rsvp/RSVPLayout";
import { StylizedButton } from "../Button/Button";

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

export const RSVPForm = ({ guests }) => {
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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RSVPFormData>();

  const hasCeremonyGuests = guests.some(
    (guest) => guest.fields.InviteType === "Ceremony"
  );

  return (
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
                      defaultChecked={record.fields.Attending === "Yes"}
                    />{" "}
                    <label htmlFor={`guests.${record.id}.fields.Attending.Yes`}>
                      Accept
                    </label>
                  </div>
                  <div className="guest_record__input">
                    <input
                      type="radio"
                      id={`guests.${record.id}.fields.Attending.No`}
                      {...register(`guests.${record.id}.fields.Attending`, {
                        required: "Please select Accept or Decline",
                      })}
                      value="No"
                      defaultChecked={record.fields.Attending === "No"}
                    />{" "}
                    <label htmlFor={`guests.${record.id}.fields.Attending.No`}>
                      Decline
                    </label>
                  </div>
                </div>
                {errors?.guests?.[record.id]?.fields?.Attending && (
                  <p className="error">
                    {errors.guests[record.id].fields.Attending.message}
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
                  {...register(`guests.${record.id}.fields.OtherDietaryNotes`)}
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
  );
};
