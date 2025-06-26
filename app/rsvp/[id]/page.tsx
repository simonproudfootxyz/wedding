"use client";

import Image from "next/image";
// import styles from "./page.module.scss";
// import { TopHero } from "./components/Hero/Hero";
// import Nav from "./components/Nav/Nav";
// import Section from "./components/Section/Section";
// import Wrapper from "./components/Wrapper/Wrapper";
// import OuijaBackground from "@/public/images/OuijaBackground.jpg";
// import Scrabble from "@/public/images/Scrabble.jpg";
// import Misty from "@/public/images/Misty.jpg";
// import RSVPImage from "@/public/images/RSVP.jpg";
// // import FooterSkkull from "@/public/images/Footer Skull.png";
// import Card from "./components/Card/Card";
// import { EventSchedule } from "./components/EventSchedule/EventSchedule";
// import EventInfo, { TimeStamps } from "./components/EventInfo/EventInfo";
// import FrequentlyAskedQuestion from "./components/FrequentlyAskedQuestion/FrequentlyAskedQuestion";
// import EventOverview from "./components/EventOverview/EventOverview";
// import Callout from "./components/Callout/Callout";
// import { StyledRSVPWrapper } from "./components/Wrapper/WrapperStyles";
// import { FooterSection } from "./components/Section/SectionStyles";
import { useEffect, useState } from "react";
import { TopHero } from "@/app/components/Hero/Hero";
import { get } from "http";
import { useParams } from "next/navigation";
// import { getAirtableRecords } from "@/app/utilities/airtable";

export default function RSVP() {
  //   useEffect(() => {
  //     // Ensure this runs only on the client side
  //     const urlParams = new URLSearchParams(window.location.search);
  //     const reservationId = urlParams.get("reservationId");

  //     if (reservationId) {
  //       // Save the reservationId to local storage
  //       localStorage.setItem("reservationId", reservationId as string);
  //     }
  //   }, []);

  type Reservation = { id: string; [key: string]: any };
  const [reservation, setReservation] = useState<Reservation | null>(null);
  const [guests, setGuests] = useState(null);
  const params = useParams();
  const slug = params?.id;
  console.log("Slug:", slug);

  useEffect(() => {
    // fetch("/api/airtable?tableName=Reservations&identifier=mhairiandsimon")
    //   .then((res) => res.json())
    //   .then((data) => setRecords(data))
    //   .catch((error) =>
    //     console.error("Error fetching Airtable records:", error)
    //   );

    fetch(`/api/getGuestsByReservation?slug=${slug}`)
      .then((res) => res.json())
      .then((data) => {
        setGuests(data);
      })
      .catch((error) =>
        console.error("Error fetching Airtable records:", error)
      );
  }, []);
  console.log({ reservation });
  console.log({ guests });
  const pageTitle = `RSVP - !`;
  if (!guests) {
    return <div>Loading...</div>;
  }
  return (
    <div className="page">
      <TopHero title={pageTitle} />
      {/* <p>{reservation}</p> */}
      {guests && (
        <ul>
          {guests.map((record) => (
            <li key={record.id}>{JSON.stringify(record)}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
