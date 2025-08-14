"use client";

import Image from "next/image";
import styles from "./page.module.scss";
import { TopHero } from "./components/Hero/Hero";
import Nav from "./components/Nav/Nav";
import Section from "./components/Section/Section";
import Wrapper from "./components/Wrapper/Wrapper";
import OuijaBackground from "@/public/images/OuijaBackground.jpg";
import Scrabble from "@/public/images/Scrabble.jpg";
import ChairPhoto from "@/public/images/ChairPhoto.jpg";
import RSVPImage from "@/public/images/RSVP.jpg";
// import FooterSkkull from "@/public/images/Footer Skull.png";
import { EventSchedule } from "./components/EventSchedule/EventSchedule";
import EventInfo, { TimeStamps } from "./components/EventInfo/EventInfo";
import FrequentlyAskedQuestion from "./components/FrequentlyAskedQuestion/FrequentlyAskedQuestion";
import EventOverview, {
  CeremonyEventOverview,
} from "./components/EventOverview/EventOverview";
import { StyledRSVPWrapper } from "./components/Wrapper/WrapperStyles";
import {
  BannerSection,
  FooterSection,
} from "./components/Section/SectionStyles";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import RSVPLayout from "./layouts/rsvp/RSVPLayout";
import { RSVPLookupForm } from "./rsvp/RSVPLookupForm";
import { CEREMONY } from "./utilities/consts";
import { RESERVATION_ID, RESERVTION_TYPE } from "./constants/params";
import { SeconaryButtonLink } from "./components/ButtonLink/ButtonLink";
import styled from "styled-components";

const StyledImageBanner = styled.div`
  background: var(--black);
`;

export default function Home() {
  const router = useRouter();
  const [reservationId, setReservationId] = useState<string | null>(null);
  const [reservationType, setReservationType] = useState<string | null>(null);
  useEffect(() => {
    // Ensure this runs only on the client side

    if (typeof window !== "undefined") {
      const localReservationId = localStorage.getItem(RESERVATION_ID);
      const localReservationType = localStorage.getItem(RESERVTION_TYPE);
      setReservationId(localReservationId);
      setReservationType(localReservationType);
    }
    const searchParams = new URLSearchParams(window.location.search);
    const URLParam = searchParams.get("reservationId");
    if (URLParam) {
      console.log("has url param");
      // Save the reservationId to local storage
      if (typeof window !== "undefined") {
        // Safe to use localStorage here
        localStorage.setItem(RESERVATION_ID, URLParam as string);
      }

      // Fetch the reservation record based on the slug
      fetch(`/api/getReservationBySlug?slug=${reservationId}`)
        .then((res) => res.json())
        .then((reservation) => {
          if (typeof window !== "undefined") {
            // Safe to use localStorage here
            localStorage.setItem(
              "reservationType",
              reservation.fields.ReservationType
            );
          }
        })
        .catch((error) =>
          console.error("Error fetching Airtable records:", error)
        );
    }
  }, [router]);

  if (!reservationType) {
    return (
      <RSVPLayout loading={false}>
        <RSVPLookupForm />
      </RSVPLayout>
    );
  }

  const isCeremonyInvite = reservationType === CEREMONY;

  return (
    <div className={styles.page}>
      <Nav slug={reservationId ?? undefined} />
      <TopHero title="mhairi and simon are&nbsp;getting married." />
      <StyledImageBanner className="image-banner">
        <Image
          src="/images/M+S_CreativeEngagementSession_Toronto_2025-10 1.jpg"
          alt="Creative Engagement Session in Toronto"
          width={1152} // Replace with the actual width of the image
          height={768} // Replace with the actual height of the image
          layout="responsive" // Ensures the image is responsive
          priority // Optional: Preloads the image for better performance
        />
      </StyledImageBanner>
      <Section id="summary" backgroundColor="var(--cream)">
        <Wrapper>
          {isCeremonyInvite ? <CeremonyEventOverview /> : <EventOverview />}
        </Wrapper>
      </Section>
      <Section classNames="ouija-section" backgroundImage={OuijaBackground.src}>
        <Wrapper classNames="ouija-wrapper">
          <Image
            className="ouija-wrapper__photo "
            src={Scrabble.src}
            alt="Devil"
            width={231}
            height={288}
            priority
          />
          <Image
            className="ouija-wrapper__photo chair-photo"
            src={ChairPhoto.src}
            alt="Devil"
            width={2048 / 8}
            height={3072 / 8}
            priority
          />
        </Wrapper>
      </Section>
      <Section id="schedule" classNames="event-section">
        <Wrapper>
          <EventSchedule />
        </Wrapper>
      </Section>
      {isCeremonyInvite && (
        <Section classNames="event-section">
          <Wrapper classNames="event-wrapper">
            <EventInfo
              heading={`the <span class="ceremony-highlight">ceremony</span>`}
              description="As our nearest and dearest, nothing would make us happier than
                  having your support in the room with us when we say I do.
                  Please join us for a short ceremony and meal before we kick
                  the party into high gear."
            >
              <div className="content-section">
                <p>
                  <TimeStamps>3:00pm</TimeStamps>
                </p>
                <p>Arrive at the brewery and grab a drink before the vows.</p>
              </div>
              <div className="content-section">
                <p>
                  <TimeStamps>3:30pm</TimeStamps>
                  <span className="color--black highlight--confetti">
                    Ceremony
                  </span>
                </p>
                <p>
                  Sick nuptuals. Don't worry, it'll be short and sweet. We're
                  starting promply, so please don't be late (and yes, we know
                  that’s rich coming from us).
                </p>
                <p>
                  <strong>
                    Start time is firm, ya&apos;ll{" "}
                    <span className="color--pink">******</span>
                  </strong>
                </p>
              </div>
              <div className="content-section">
                <p>
                  <TimeStamps>5:00pm</TimeStamps>
                </p>
                <p>Family-style dinner for the recently deceased.</p>
              </div>
            </EventInfo>
          </Wrapper>
        </Section>
      )}
      <Section classNames="event-section">
        <Wrapper classNames="event-wrapper">
          <EventInfo
            heading="our <strong>biiiiiiiiig</strong> party"
            description="Raise a glass, eat some snacks, and celebrate the fact that
                Mhairi and Simon will be chillin’ like villains in this life and
                the next. Wear a costume (or don’t) and get up to some good old
                fashioned witching night mischief."
          >
            <div className="content-section">
              <p>
                <TimeStamps>7:30pm</TimeStamps>
              </p>
              <p>
                Party start time, but it’s cool, it’s chill, it’s casual. You
                can come at 8, or 9, or whenever works best for your schedule.{" "}
              </p>
            </div>
            <div className="content-section">
              <p>
                <TimeStamps>9:00pm</TimeStamps>
              </p>
              <p>Snack drop. Time to get radical.</p>
            </div>
            <div className="content-section">
              <p>
                <TimeStamps>12:00am</TimeStamps>
              </p>
              <p>
                Party's over, dude! You don't have to go home, but you can't
                stay here
              </p>
            </div>
          </EventInfo>
        </Wrapper>
      </Section>
      <Section
        id="FAQ"
        classNames="cream-section"
        backgroundColor="var(--cream)"
      >
        <Wrapper classNames="devil-wrapper">
          <div className="flex-column title-wrapper">
            <h1>the devilish details</h1>
            <p>
              <small>frequently asked questions</small>{" "}
              <strong className="color--orange">******</strong>
            </p>
          </div>
          <div className="flex-column image-wrapper">
            <Image
              className="devil floating"
              src="/images/Devil.png"
              alt="Devil"
              width={278}
              height={442}
              priority
            />
            <Image
              className="diablo floating"
              src="/images/Diablo.png"
              alt="Devil"
              width={136}
              height={218}
              priority
            />
          </div>
        </Wrapper>
      </Section>
      {isCeremonyInvite && (
        <Section classNames="cream-section" backgroundColor="var(--cream)">
          <Wrapper>
            <div className="flex-column">
              <h2>the ceremony</h2>
            </div>
            <div className="flex-column">
              <FrequentlyAskedQuestion
                question="what time should we arrive for the ceremony?"
                answer="Please <span class='highlight--transparent-red'>begin arriving at 3:00pm, the ceremony will take place at 3:30pm.</span> The bar will be open if you’d like to grab a drink while you wait."
              />
              <FrequentlyAskedQuestion
                question="what should we expect from the ceremony?"
                answer="We will not be doing traditional seated aisles and are opting for a <span class='highlight--transparent-red'>standing ceremony</span>. The ceremony itself will be <span class='highlight--transparent-red'>short and sweet</span> but we will have some stools set up in the back for those who may need them."
              />
              <FrequentlyAskedQuestion
                question="can I take photos?"
                answer="We kindly ask that you <span class='highlight--transparent-red'>don’t take your own photos or have your phone out during the ceremony.</span> We’d love for everyone to be fully present with us. Our <a href='https://justthedaisies.ca/' target='_blank'>amazing photographer</a> will be there to capture the moment."
              />
            </div>
          </Wrapper>
        </Section>
      )}
      <Section classNames="cream-section" backgroundColor="var(--cream)">
        <Wrapper>
          <div className="flex-column">
            <h2>the vibes</h2>
          </div>
          <div className="flex-column">
            {!isCeremonyInvite && (
              <FrequentlyAskedQuestion
                question="when are guys <em>actually</em> getting married?"
                answer="Great question! Simon and Mhairi will be having a small ceremony earlier in the day but cannot wait to <span class='highlight--transparent-red'>party with you all in the evening.</span>"
              />
            )}
            <FrequentlyAskedQuestion
              question="is this a kid-friendly event?"
              answer="<span class='highlight--transparent-red'>TL;DR No :(</span> <br /> <br /> Your kinders are cute and we love them but this is an evening event with no real entertainment planned other than yapping. I’m sure they would much rather be watching Hocus Pocus and indulging in the sweet results of their trick or treating. We kindly ask that the little ones stay home for this one."
            />
            <FrequentlyAskedQuestion
              question="can I bring a plus one?"
              answer="We kindly ask that you don’t bring anyone other than named invitees with you on the day. The name of every guest included in your party will be listed in your email invitation and when you click to RSVP."
            />
            <FrequentlyAskedQuestion
              question="do you have a gift registry?"
              answer="<span class='highlight--transparent-red'>Nope!</span> <br /> <br /> We both lived solo before we met and we had to consolidate two apartments worth of stuff when we moved in together. Then we moved across the country twice and boy did that kick our butt in the stuff department. <span class='highlight--transparent-red'>Your earthly presence and support are all we need.</span>"
            />
            {isCeremonyInvite ? (
              <FrequentlyAskedQuestion
                question="is this a costume party? what’s the dress code?"
                answer="Truly our most frequently asked question. The answer: it sure can be! <br /> <br /> <span class='highlight--transparent-red'>Costumes are encouraged but most definitely optional.</span>  Wear whatever you feel most comfortable in. Feel free to go ham-town on a costume. Feel free to channel your inner goth. Feel free to wear jeans (we mean it). It’s a night of drinking beer at a brewery on Halloween, there’s no need for a dress code lol."
              />
            ) : (
              <FrequentlyAskedQuestion
                question="is this a costume party? what’s the dress code?"
                answer="Truly our most frequently asked question. The answer: it sure can be! <br /> <br /> <span class='highlight--transparent-red'>Costumes are encouraged but most definitely optional.</span>  Wear whatever you feel most comfortable in. Feel free to go ham-town on a costume. Feel free to channel your inner goth. Feel free to wear jeans (we mean it). It’s a night of drinking beer at a brewery on Halloween, there’s no need for a dress code lol. <br /> <br /> <span class='highlight--pink'>Will we be in costume? Yes, of course.</span>"
              />
            )}
            {isCeremonyInvite && (
              <>
                <FrequentlyAskedQuestion
                  question="wait, so are you guys wearing costumes?"
                  answer="<span class='highlight--transparent-red'>Not for the ceremony.</span> Getting married in costume would be really fun, but we’ve opted to dress like cute ordinary humans for the ceremony and dinner portion of the event <span class='highlight--transparent-red'>We will be changing into costumes before the party begins.</span><br /><br /> Mhairi & Simon costume hint: you can summon him by <span class='highlight--pink'>saying his name three times in a row</span>"
                />
                <FrequentlyAskedQuestion
                  question="if I wanted to change into a costume after the dinner, can I do that?"
                  answer="Totally! <span class='highlight--transparent-red'>There will be about an hour between dinner ending and the party beginning.</span> This is a great time to change into a costume, goth up your outfit, whatever you desire! We’ll be using this time to change as well. <br /> <br /> If you <em>do</em> wish to change, there is one accessible washroom in the brewery and additional stalls available in the building. If you have a more complicated costume, you may wish to leave, change, and come back for the party reception. No problemo. <span class='highlight--transparent-red'>We'll be partying from 7:30pm onwards, feel free to join whenever you can.</span> Just keep in mind that bao buns will be dropping at 9PM."
                />
              </>
            )}
            <FrequentlyAskedQuestion
              question="when do you need my RSVP by?"
              answer="We kindly ask that you RSVP by <span class='highlight--transparent-red'>October 1st.</span>"
            />
          </div>
        </Wrapper>
      </Section>
      <Section classNames="cream-section" backgroundColor="var(--cream)">
        <Wrapper>
          <div className="flex-column">
            <h2>the venue</h2>
          </div>
          <div className="flex-column">
            <FrequentlyAskedQuestion
              question="where’s the venue?"
              answer="The party’s at <span class='highlight--transparent-red'>Rainhard Brewing</span> (<a href='https://maps.app.goo.gl/5rZwWyGLvvM58WTu9' target='_blank'>100 Symes Rd, Toronto</a>, M6N 0A8), which is located in the Junction. You can get there via the TTC by taking the 189 bus from Keele station. Uber, Lyft, etc., also good options. <br /> <br /> Please note that there’s two breweries in the building. Rainhard is the one tucked further in from the road, look for our sign out front to make sure you’re in the right place."
            />
            <FrequentlyAskedQuestion
              question="what’s the parking situation?"
              answer="There is tons of parking available at the venue for free."
            />
            <FrequentlyAskedQuestion
              question="is there a hotel block?"
              answer="There is not!  Since most of our guests are based in Toronto <span class='highlight--transparent-red'>we are not organizing a hotel block.</span> If needed, please feel free to book the accommodations that work best for you. There are tons of Airbnb’s in Toronto, and here’s are a couple of hotels we like:"
            >
              <ul>
                <li>
                  <a href="https://www.theburroughs.com/">Ace Hotel</a> $$$
                </li>
                <li>
                  <a href="https://www.theburroughs.com/">Sonder</a> $$
                </li>
              </ul>
              <p>
                <small>
                  Sonder hotels have multiple locations in the city.{" "}
                  <a
                    href="https://www.sonder.com/en-ca/destinations/toronto/TOR-BRIX6-712/c35785?sleeps=1"
                    target="_blank"
                  >
                    Sonder Artesa
                  </a>{" "}
                  is the closest to the venue and within walking distance to
                  Ossington, Parkdale and West Queen West neighbourhoods.{" "}
                  <a
                    href="https://www.sonder.com/en-ca/destinations/toronto/Sonder-The-Slate-Sun-Filled-Room/c31127?sleeps=1"
                    target="_blank"
                  >
                    Sonder Slate
                  </a>{" "}
                  is closest to Union Station if you are taking the train.
                  <span className="highlight--transparent-red">
                    Please don’t stay at the Liberty, Liberty Village is a
                    garbage place.
                  </span>
                </small>
              </p>
            </FrequentlyAskedQuestion>
          </div>
        </Wrapper>
      </Section>
      <Section classNames="cream-section" backgroundColor="var(--cream)">
        {isCeremonyInvite ? (
          <Wrapper>
            <div className="flex-column">
              <h2>provisions and libations</h2>
            </div>
            <div className="flex-column">
              <FrequentlyAskedQuestion
                question="do I get to pick a meal?"
                answer="Dinner will be served family style, so there’s no need to pick a specific meal when you RSVP. Whatever your dietary needs, we’ve got you covered from carnivores to vegans. <br /> <br /> <span class='highlight--transparent-red'>Please let us know of any dietary restrictions, allergies, etc. when you RSVP</span> so we can pass that information along to our caterers."
              />
              <FrequentlyAskedQuestion
                question="what about the drinks?"
                answer="Rainhard brews will be flowing in abundance and there will also be wine, spirits, and non-alcoholic options available.<br /><br /> Whatever your poison, this an <span class='highlight--transparent-red'>open bar event</span> so get ready to party"
              />
            </div>
          </Wrapper>
        ) : (
          <Wrapper>
            <div className="flex-column">
              <h2>the libations</h2>
            </div>
            <div className="flex-column">
              <FrequentlyAskedQuestion
                question="will there be food?"
                answer="<span class='highlight--transparent-red'>Snacks, yes! Dinner, no.</span> We highly encourage everyone to eat prior to arriving at the venue as we will not be serving dinner.  There will be some spooky snacks at 9:00pm."
              />
              <FrequentlyAskedQuestion
                question="what about the drinks?"
                answer="Rainhard brews will be flowing in abundance and there will also be wine, spirits, and non-alcoholic options available.<br /><br /> Whatever your poison, this an <span class='highlight--transparent-red'>open bar event</span> so get ready to party"
              />
            </div>
          </Wrapper>
        )}
      </Section>
      <Section classNames="rsvp-section" backgroundImage={RSVPImage.src}>
        <StyledRSVPWrapper />
      </Section>
      <BannerSection>
        <p className="marquee-text">
          <span>attend in the flesh</span>
          <Image
            className="marquee-image"
            src="/images/Bats.gif"
            alt="Creative Engagement Session in Toronto"
            width={205} // Replace with the actual width of the image
            height={144} // Replace with the actual height of the image
            priority // Optional: Preloads the image for better performance
          />
          <span>rsvp by october 1</span>
          <Image
            className="marquee-image"
            src="/images/Bats.gif"
            alt="Creative Engagement Session in Toronto"
            width={205} // Replace with the actual width of the image
            height={144} // Replace with the actual height of the image
            priority // Optional: Preloads the image for better performance
          />
          <span>attend in the flesh</span>
          <Image
            className="marquee-image"
            src="/images/Bats.gif"
            alt="Creative Engagement Session in Toronto"
            width={205} // Replace with the actual width of the image
            height={144} // Replace with the actual height of the image
            priority // Optional: Preloads the image for better performance
          />
          <span>rsvp by october 1</span>
          <Image
            className="marquee-image"
            src="/images/Bats.gif"
            alt="Creative Engagement Session in Toronto"
            width={205} // Replace with the actual width of the image
            height={144} // Replace with the actual height of the image
            priority // Optional: Preloads the image for better performance
          />
          <span>attend in the flesh</span>
          <Image
            className="marquee-image"
            src="/images/Bats.gif"
            alt="Creative Engagement Session in Toronto"
            width={205} // Replace with the actual width of the image
            height={144} // Replace with the actual height of the image
            priority // Optional: Preloads the image for better performance
          />
          <span>rsvp by october 1</span>
        </p>
      </BannerSection>
      <FooterSection>
        <Wrapper classNames="footer__wrapper" justifyContent="space-between">
          <div className="footer__content-box">
            <Image
              src="/images/FooterSkull.gif"
              alt="Creative Engagement Session in Toronto"
              width={79} // Replace with the actual width of the image
              height={115} // Replace with the actual height of the image
              priority // Optional: Preloads the image for better performance
            />
            <h3>
              mhairi and simon are getting married <br />
              <span className="color--off-white">
                can&apos;t wait to party with you
              </span>
            </h3>
          </div>
          <p>
            <SeconaryButtonLink href={`/rsvp/${reservationId}`}>
              rsvp
            </SeconaryButtonLink>
          </p>
        </Wrapper>
      </FooterSection>
      <FooterSection>
        <Wrapper classNames="footer-copyright__wrapper">
          <p className="footer__copyright">
            <small>Designed by mhairi. ✨</small>{" "}
            <small>Brought to life by simon. 👽</small>
          </p>
        </Wrapper>
      </FooterSection>
    </div>
  );
}
