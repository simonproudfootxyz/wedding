import Image from "next/image";
import styles from "./page.module.scss";
import { TopHero } from "./components/Hero/Hero";
import Nav from "./components/Nav/Nav";
import Section from "./components/Section/Section";
import Wrapper from "./components/Wrapper/Wrapper";
import OuijaBackground from "@/public/images/OuijaBackground.jpg";
import Scrabble from "@/public/images/Scrabble.jpg";
import Misty from "@/public/images/Misty.jpg";
import RSVPImage from "@/public/images/RSVP.jpg";
import FooterSkkull from "@/public/images/Footer Skull.png";
import Card from "./components/Card/Card";
import { EventSchedule } from "./components/EventSchedule/EventSchedule";
import EventInfo, {
  Column,
  EventInfoContainer,
  TimeStamps,
} from "./components/EventInfo/EventInfo";
import FrequentlyAskedQuestion from "./components/FrequentlyAskedQuestion/FrequentlyAskedQuestion";
import EventOverview from "./components/EventOverview/EventOverview";
import Callout from "./components/Callout/Callout";
import { StyledRSVPWrapper } from "./components/Wrapper/WrapperStyles";
import { FooterSection } from "./components/Section/SectionStyles";

export default function Home() {
  return (
    <div className={styles.page}>
      <Nav />
      <TopHero title="mhairi and simon are&nbsp;getting married." />
      <div>
        <Image
          src="/images/M+S_CreativeEngagementSession_Toronto_2025-10 1.jpg"
          alt="Creative Engagement Session in Toronto"
          width={1152} // Replace with the actual width of the image
          height={768} // Replace with the actual height of the image
          layout="responsive" // Ensures the image is responsive
          priority // Optional: Preloads the image for better performance
        />
      </div>
      <Section backgroundColor="var(--cream)">
        <Wrapper>
          <EventOverview />
        </Wrapper>
      </Section>
      <Section classNames="ouija-section" backgroundImage={OuijaBackground.src}>
        <Wrapper classNames="ouija-wrapper">
          <Card imageSrc={Scrabble.src} />
        </Wrapper>
      </Section>
      <Section classNames="event-section">
        <Wrapper>
          <EventSchedule />
        </Wrapper>
      </Section>
      <Section classNames="event-section">
        <Wrapper classNames="event-wrapper">
          <EventInfo
            heading="the <em>mini</em>-party"
            date="Wednesday, Oct 29"
            time="7-9pm"
            location="<a href='https://maps.app.goo.gl/mF4WvGyWZXgzvHmV7'>Get Well Bar</a> <br />1181 Dundas St W, M6H 1Y3"
          >
            <p>
              Those in town are welcome to join us for a drink before the big
              day at one of our favourite spots in the city. Play pinball and
              arcade games. Drink local beers. We don’t know what else you could
              want.
            </p>
            <p>
              <small>
                <strong>Very fun. Very, very optional</strong>{" "}
              </small>
              <strong className="color--pink">******</strong>
            </p>
          </EventInfo>
        </Wrapper>
      </Section>
      <Section classNames="event-section">
        <Wrapper classNames="event-wrapper">
          <EventInfo
            heading="the <strong>biiiiiiiiig</strong> party"
            date="Friday, Oct 31"
            time="7:30pm"
            location="<a href='https://maps.app.goo.gl/fUR4PK6AuuRELQHo7'>Rainhard Brewing</a> </br> 100 Symes Road,  M6N 0A8"
          >
            <div className="content-section">
              <p>
                Raise a glass, eat some snacks, and celebrate the fact that
                Mhairi and Simon will be chillin’ like villains in this life and
                the next. Wear a costume (or don’t) and get up to some good old
                fashioned witching night mischief.{" "}
              </p>
              <p>
                <span className="highlight--yellow color--black">Note</span>:
                While we will have snacks later on (see below), we recommend you
                have dinner beforehand.
              </p>
            </div>
            <div className="content-section">
              <TimeStamps>7:30pm</TimeStamps>
              <p>
                Party start time, but it’s cool, it’s chill, it’s casual. You
                can come at 8, or 9, or whenever works best for your schedule.{" "}
              </p>
            </div>
            <div className="content-section">
              <TimeStamps>9:00pm</TimeStamps>
              <p>Snack drop. Time to get radical.</p>
            </div>
            <div className="content-section">
              <TimeStamps>1:30am</TimeStamps>
              <p> Last call! Final opportunity for drinks on us.</p>
            </div>
          </EventInfo>
        </Wrapper>
      </Section>
      <Section classNames="cream-section" backgroundColor="var(--cream)">
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
      <Section classNames="cream-section" backgroundColor="var(--cream)">
        <Wrapper>
          <div className="flex-column">
            <h2>the vibes</h2>
          </div>
          <div className="flex-column">
            <FrequentlyAskedQuestion
              question="wait, so like, when are guys actually getting married?"
              answer="Great question! Simon and Mhairi will be having an intimate ceremony earlier in the day but cannot wait to party with you all in the evening."
            />
            <FrequentlyAskedQuestion
              question="is this a costume party?"
              answer="It sure can be! <span class='highlight--transparent-red'>Costumes are encouraged but most definitely optional.</span> Wear whatever you feel most comfortable in. Feel free to go ham-town on a costume. Feel free to channel your inner goth. Feel free to wear jeans (we mean it). It’s a night of drinking beer at a brewery on Halloween, there’s no need for a dress code lol."
            />
            <FrequentlyAskedQuestion
              question="is this a kid-friendly event?"
              answer="Your kinders are cute and we love them but this is an evening event with no real entertainment planned other than yapping. I’m sure they would much rather be watching Hocus Pocus and indulging in the sweet results of their trick or treating. We kindly ask that the little ones stay home for this one. <br /> <br /><span class='highlight--transparent-red'>TL;DR No :(<span>"
            />
            <FrequentlyAskedQuestion
              question="do you have a gift registry?"
              answer="Nope! :) <br /> <br />We both lived solo before we met and we had to consolidate two apartments worth of stuff when we moved in together. Then we moved across the country twice and boy did that kick our butt in the stuff department. <span class='highlight--transparent-red'>Your earthly presence and support are all we need.</span>"
            />
          </div>
        </Wrapper>
      </Section>
      <Section classNames="cream-section" backgroundColor="var(--cream)">
        <Wrapper classNames="event-wrapper">
          <Callout backgroundImage={Misty.src} backgroundColor="var(--black)">
            <h3>a note from mhairi, simon & sofia</h3>
            <p>
              Hi, we know that for our fellow millennials, Halloween is
              considered one of the high holidays. It’s an occasion that’s
              beloved by many, including us (I mean heck, we’re getting married
              on it) but can be particularly special for many of our friends who
              now have young families.
            </p>
            <p>
              <span className="color--black highlight--yellow">
                Please do not feel guilty prioritizing your own family
                traditions, even if that means you’re unable to attend our
                celebration.
              </span>{" "}
              It’s all good! Seriously! We’ll happily catch you guys on the
              flippity flip.
            </p>
          </Callout>
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
              answer="The party’s at <a href='https://maps.app.goo.gl/5rZwWyGLvvM58WTu9'>Rainhard Brewing</a> (100 Symes Rd, Toronto, M6N 0A8), which is located in the Junction. You can get there via the TTC by taking the 189 bus from Keele station. Uber, Lyft, etc., also good options."
            />
            <FrequentlyAskedQuestion
              question="what’s the parking situation?"
              answer="There is tons of parking available at the venue for free."
            />
            <FrequentlyAskedQuestion
              question="is there a hotel block?"
              answer="There is not!  Since most of our guests are based in Toronto we are not organizing a hotel block. If needed, please feel free to book the accommodations that work best for you. There are tons of Airbnb’s in Toronto, and here’s are a couple of hotels we like:"
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
                  Please don’t stay at the Liberty, Liberty Village is a garbage
                  place.
                </small>
              </p>
            </FrequentlyAskedQuestion>
          </div>
        </Wrapper>
      </Section>
      <Section classNames="cream-section" backgroundColor="var(--cream)">
        <Wrapper>
          <div className="flex-column">
            <h2>the libations</h2>
          </div>
          <div className="flex-column">
            <FrequentlyAskedQuestion
              question="will there be food?"
              answer="<span class='highlight--transparent-red'>Snacks, yes! Dinner, no.</span> We highly encourage everyone to eat prior to arriving at the venue as we will not be serving dinner.  There will be some spooky snacks at 9:30pm."
            />
            <FrequentlyAskedQuestion
              question="should I bring cash for the bar?"
              answer="Please leave your wallets at home and prepare to party, <span class='highlight--transparent-red'>this is an open bar event. 🎉</span>"
            />
            <FrequentlyAskedQuestion
              question="I don’t like beer!"
              answer="Unfortunate, but Rainhard has you covered. There will be <span class='highlight--transparent-red'>wine, spirits, and non-alcoholic options</span> available for those who prefer. "
            />
          </div>
        </Wrapper>
      </Section>
      <Section backgroundImage={RSVPImage.src}>
        <StyledRSVPWrapper>
          <h1 className="rsvp-title">
            <span className="floating-letter floating-R">R</span>
            <strong className="floating-letter floating-S">S</strong>
            <span className="floating-letter floating-V">V</span>
            <strong className="floating-letter floating-P">P</strong>
          </h1>
          <div className="rsvp-content text-align-center">
            <p>Let us know if you will be joining us in the flesh.</p>
            <p>We kindly ask you RSVP by October 1st.</p>
          </div>
        </StyledRSVPWrapper>
      </Section>

      <FooterSection>
        <Wrapper justifyContent="center">
          <p>
            <small>Designed by mhairi. ✨ Brought to life by simon. 👽</small>
          </p>
        </Wrapper>
      </FooterSection>
    </div>
  );
}
