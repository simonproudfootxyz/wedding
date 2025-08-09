import { useForm } from "react-hook-form";
import { StyledRSVPLookupForm } from "./StyledRSVPLookupForm";
import { useEffect, useState } from "react";
import { Guest } from "../utilities/types";
import { StylizedButton } from "../components/Button/Button";
import { RSVPLink } from "../layouts/rsvp/RSVPLayout";
import styled from "styled-components";
import { RESERVATION_ID, RESERVTION_TYPE } from "../constants/params";
import Link from "next/link";
import { useRouter } from "next/navigation";
type RSVPLookupFormData = {
  FirstName: string;
  LastName: string;
};

const StyledRSVPLookupEntry = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 0;
  align-items: center;

  @media screen and (max-width: 780px) {
    display: block;
  }

  .lookup-name {
    font-size: 2rem;

    @media screen and (max-width: 780px) {
      font-size: 1.5rem;
      padding-bottom: 1.5rem;
    }
  }

  .lookup-link {
    font-size: 1.2rem;
    border: 1px solid var(--off-white);
    padding: 0.75rem 2rem;
    text-align: center;

    &::after {
      display: none;
    }

    &:hover,
    &:focus {
      background: var(--yellow);
      color: var(--black);
      border: 1px solid var(--yellow);
    }

    @media screen and (max-width: 780px) {
      display: block;
    }
  }
`;

const RSVPLookupEntry = ({ guest }: { guest: Guest }) => {
  const [inviteCode] = guest?.fields?.InviteCode ?? [];
  const [reservationType] = guest?.fields?.ReservationType ?? [];
  const router = useRouter();

  const handleReservationConfirmation = () => {
    localStorage.setItem(RESERVATION_ID, inviteCode);
    localStorage.setItem(RESERVTION_TYPE, reservationType);
    if (window.location.pathname === "/") {
      window.location.reload();
    } else {
      router.push("/");
    }
  };
  return (
    <StyledRSVPLookupEntry>
      <p className="lookup-name">
        {guest.fields.FirstName} {guest.fields.LastName}
      </p>
      <Link
        href={`/?${RESERVATION_ID}=${inviteCode}`}
        onClick={(e) => {
          e.preventDefault();
          handleReservationConfirmation();
        }}
        className="lookup-link"
      >
        Continue
      </Link>
    </StyledRSVPLookupEntry>
  );
};

export const RSVPLookupForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitted, isSubmitting },
  } = useForm<RSVPLookupFormData>();

  const [allGuests, setAllGuests] = useState<Guest[] | null>(null);
  // const [reservations, setReservations] = useState<Reservation[] | null>(null); // Adjust type as needed

  useEffect(() => {
    // Fetch all guests from Airtable
    if (allGuests) return; // Prevent refetching if already loaded

    fetch(`/api/airtable?tableName=Guests`)
      .then((res) => res.json())
      .then((guestsData) => {
        const formattedGuests: Guest[] = guestsData.map((guest: any) => ({
          id: guest.id,
          fields: guest.fields,
        }));
        setAllGuests(formattedGuests);
      })
      .catch((error) => {
        console.error("Error fetching Airtable records:", error);
      });
  }, [allGuests]);

  //   set up state
  const [possibleGuests, setPossibleGuests] = useState<
    { guest: Guest }[] | null
  >(null);

  // Form submission
  const handleFormSubmit = async (formData: RSVPLookupFormData) => {
    const { FirstName, LastName } = formData;
    const format = (s: string) => s.trim().toLowerCase();

    const possibleGuests = allGuests
      ? allGuests
          .filter(
            (g) =>
              format(g.fields.FirstName).includes(format(FirstName)) ||
              format(g.fields.LastName).includes(format(LastName))
          )
          .map((g) => ({ guest: g }))
      : [];

    setPossibleGuests(possibleGuests);
  };
  const hasGuestMatches = possibleGuests && possibleGuests.length > 0;

  // reset
  const handleResetClick = () => {
    setPossibleGuests(null);
    reset();
  };

  return (
    <StyledRSVPLookupForm action="" onSubmit={handleSubmit(handleFormSubmit)}>
      {!isSubmitted && (
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
      {isSubmitted && hasGuestMatches && (
        <div className="reset-link__container">
          <p>
            Not you?{" "}
            <RSVPLink
              className="heading-box__link"
              onClick={(e) => {
                e.preventDefault();
                handleResetClick();
              }}
              href={"/rsvp"}
            >
              Search again
            </RSVPLink>
          </p>
        </div>
      )}
      {!isSubmitted && (
        <div className="buttons-container">
          <div>
            <StylizedButton type="submit" disabled={!allGuests || isSubmitting}>
              submit
            </StylizedButton>
          </div>
        </div>
      )}
      {isSubmitted && hasGuestMatches && (
        <div className="lookup-list__container">
          <ul className="lookup-list">
            {possibleGuests.map((lookup) => {
              return (
                <li key={lookup.guest.id} className="lookup-list__item">
                  <RSVPLookupEntry guest={lookup.guest} />
                </li>
              );
            })}
          </ul>
        </div>
      )}
      {isSubmitted && !hasGuestMatches && (
        <div className="reset-link__container">
          <h3>We couldn&apos;t find any invites under that name</h3>
          <h3>
            Try{" "}
            <Link
              className="link--no-guests"
              onClick={(e) => {
                e.preventDefault();
                handleResetClick();
              }}
              href={"/rsvp"}
            >
              searching again
            </Link>
            or contact us
          </h3>
        </div>
      )}
    </StyledRSVPLookupForm>
  );
};
