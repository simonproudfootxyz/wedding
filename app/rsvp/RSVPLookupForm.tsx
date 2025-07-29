import { useForm } from "react-hook-form";
import { StyledRSVPLookupForm } from "./StyledRSVPLookupForm";
import { useEffect, useState } from "react";
import { Guest, Reservation } from "../utilities/types";
import { StylizedButton } from "../components/Button/Button";
import { RSVPLink } from "../layouts/rsvp/RSVPLayout";
import styled from "styled-components";
type RSVPLookupFormData = {
  FirstName: string;
  LastName: string;
};

const StyledRSVPLookupEntry = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 0;
  align-items: center;

  .lookup-name {
    font-size: 2rem;
  }

  .lookup-link {
    font-size: 1.2rem;
    border: 1px solid var(--off-white);
    padding: 0.75rem 2rem;

    &::after {
      display: none;
    }

    &:hover,
    &:focus {
      background: var(--yellow);
      color: var(--black);
      border: 1px solid var(--yellow);
    }
  }
`;

const RSVPLookupEntry = ({
  guest,
  reservation,
}: {
  guest: Guest;
  reservation: Reservation | null;
}) => {
  return (
    <StyledRSVPLookupEntry>
      <p className="lookup-name">
        {guest.fields.FirstName} {guest.fields.LastName}
      </p>
      <a
        href={`${window.location.origin}?reservationId=${reservation?.fields.InviteCode}`}
        className="lookup-link"
      >
        Continue
      </a>
    </StyledRSVPLookupEntry>
  );
};

export const RSVPLookupForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RSVPLookupFormData>();

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

  //   set up state
  const [fuzzyLookups, setFuzzyLookups] = useState<[] | null>(null);
  const [guestLookup, setGuestLookup] = useState<Guest | null>(null);
  const [reservationLookup, setReservationLookup] =
    useState<Reservation | null>(null);

  // Form submission
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
    setFuzzyLookups(null);
    reset();
  };

  const hasExactGuest = guestLookup && reservationLookup;
  const requiresFuzzyLookup = !guestLookup && fuzzyLookups;

  return (
    <StyledRSVPLookupForm action="" onSubmit={handleSubmit(handleFormSubmit)}>
      {!requiresFuzzyLookup && !hasExactGuest && (
        <div className="inputs">
          <div className="input-container">
            <label htmlFor="FirstName">First Name:</label>
            <input
              id="FirstName"
              type="text"
              placeholder="Enter guest first name..."
              {...register("FirstName", {
                required: "First name is required",
              })}
            />
            {errors.FirstName && (
              <p className="error">{errors.FirstName.message}</p>
            )}
          </div>
          <div className="input-container">
            <label htmlFor="LastName">Last Name:</label>
            <input
              id="LastName"
              type="text"
              placeholder="Enter guest last name..."
              {...register("LastName", { required: "Last name is required" })}
            />
            {errors.LastName && (
              <p className="error">{errors.LastName.message}</p>
            )}
          </div>
        </div>
      )}
      {(requiresFuzzyLookup || hasExactGuest) && (
        <div className="reset-link__container">
          <p>
            Not you?{" "}
            <RSVPLink
              className="heading-box__link"
              onClick={(e) => {
                e.preventDefault();
                console.log("yo");
                handleResetClick();
              }}
              href={"/rsvp"}
            >
              Search again
            </RSVPLink>
          </p>
        </div>
      )}
      {!requiresFuzzyLookup && !hasExactGuest && (
        <div className="buttons-container">
          <div>
            <StylizedButton type="submit" disabled={!guests && !reservations}>
              submit
            </StylizedButton>
          </div>
        </div>
      )}

      {hasExactGuest && (
        <>
          <RSVPLookupEntry
            guest={guestLookup}
            reservation={reservationLookup}
          />
        </>
      )}
      {requiresFuzzyLookup && (
        <div className="lookup-list__container">
          <ul className="lookup-list">
            {fuzzyLookups.map((lookup) => {
              return (
                <li key={lookup.guest.id} className="lookup-list__item">
                  <RSVPLookupEntry
                    guest={lookup.guest}
                    reservation={lookup.reservation}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </StyledRSVPLookupForm>
  );
};
