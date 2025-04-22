import Image from "next/image";
import styles from "./page.module.scss";
import { TopHero } from "./components/Hero/Hero";
import Nav from "./components/Nav/Nav";
import Section from "./components/Section/Section";
import Wrapper from "./components/Wrapper/Wrapper";
import OuijaBackground from "@/public/images/OuijaBackground.jpg";
import Scrabble from "@/public/images/Scrabble.jpg";
import Misty from "@/public/images/Misty.jpg";
import Card from "./components/Card/Card";
import { EventSchedule } from "./components/EventSchedule/EventSchedule";
import EventInfo, {
  Column,
  EventInfoContainer,
} from "./components/EventInfo/EventInfo";
import FrequentlyAskedQuestion from "./components/FrequentlyAskedQuestion/FrequentlyAskedQuestion";
import EventOverview from "./components/EventOverview/EventOverview";
import Callout from "./components/Callout/Callout";

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
      <Section>
        <Wrapper>
          <EventSchedule />
        </Wrapper>
      </Section>
      <Section>
        <Wrapper classNames="event-wrapper">
          <EventInfo
            heading="the <em>mini</em>-party"
            date="Wednesday, Oct 29"
            time="7-9pm"
            location="Get Well Bar 1181 Dundas St W, M6H 1Y3"
          >
            <p>
              Those in town are welcome to join us for a drink before the big
              day at one of our favourite spots in the city. Play pinball and
              arcade games. Drink local beers. We don’t know what else you could
              want.
            </p>
            <p>
              <strong>Very fun. Very, very optional</strong>{" "}
              <strong>******</strong>
            </p>
          </EventInfo>
        </Wrapper>
      </Section>
      <Section>
        <Wrapper classNames="event-wrapper">
          <EventInfo
            heading="the <strong>biiiiiiiiig</strong> party"
            date="Friday, Oct 31"
            time="7:30pm"
            location="Rainhard Brewing </br> 100 Symes Road,  M6N 0A8"
          >
            <p>
              Raise a glass, eat some snacks, and celebrate the fact that Mhairi
              and Simon will be chillin’ like villains in this life and the
              next. Wear a costume (or don’t) and get up to some good old
              fashioned witching night mischief.{" "}
            </p>
            <p>7:30pm</p>
            <p>
              Party start time, but it’s cool, it’s chill, it’s casual. You can
              come at 8, or 9, or whenever works best for your schedule.{" "}
            </p>
            <p>9:00pm</p>
            <p>
              Righteous snackitude. 1:30am Lastcall! Final opportunity for
              drinks on us.
            </p>
          </EventInfo>
        </Wrapper>
      </Section>
      <Section backgroundColor="var(--cream)">
        <Wrapper classNames="devil-wrapper">
          <div className="flex-column title-wrapper">
            <h1>the devilish details</h1>
            <p>Frequently asked questions ******</p>
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
      <Section backgroundColor="var(--cream)">
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
              answer="It sure can be!  Costumes are encouraged but most definitely optional.  Wear whatever you feel most comfortable in. Feel free to go ham-town on a costume. Feel free to channel your inner goth. Feel free to wear jeans (we mean it). It’s a night of drinking beer at a brewery on Halloween, there’s no need for a dress code lol."
            />
            <FrequentlyAskedQuestion
              question="is this a kid-friendly event?"
              answer="Your kinders are cute and we love them but this is an evening event with no real entertainment planned other than yapping. I’m sure they would much rather be watching Hocus Pocus and indulging in the sweet results of their trick or treating. We kindly ask that the little ones stay home for this one. <br /> <br />TL;DR No :("
            />
            <FrequentlyAskedQuestion
              question="do you have a gift registry?"
              answer="Nope! :) <br /> <br />We both lived solo before we met and we had to consolidate two apartments worth of stuff when we moved in together. Then we moved across the country twice and boy did that kick our butt in the stuff department. Your earthly presence and support are all we need."
            />
          </div>
        </Wrapper>
      </Section>
      <Section backgroundColor="var(--cream)">
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
              Please do not feel guilty prioritizing your own family traditions,
              even if that means you’re unable to attend our celebration. It’s
              all good! Seriously! We’ll happily catch you guys on the flippity
              flip.
            </p>
          </Callout>
        </Wrapper>
      </Section>
      <Section backgroundColor="var(--cream)">
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
                Sonder hotels have multiple locations in the city. Sonder Artesa
                is the closest to the venue and within walking distance to
                Ossington, Parkdale and West Queen West neighbourhoods. Sonder
                Slate is closest to Union Station if you are taking the train.
                Please don’t stay at the Liberty, Liberty Village is a garbage
                place.
              </p>
            </FrequentlyAskedQuestion>
          </div>
        </Wrapper>
      </Section>
      <Section backgroundColor="var(--cream)">
        <Wrapper>
          <div className="flex-column">
            <h2>the libations</h2>
          </div>
          <div className="flex-column">
            <FrequentlyAskedQuestion
              question="will there be food?"
              answer="Snacks, yes! Dinner, no. We highly encourage everyone to eat prior to arriving at the venue as we will not be serving dinner.  There will be some spooky snacks at 9:30pm."
            />
            <FrequentlyAskedQuestion
              question="should I bring cash for the bar?"
              answer="Please leave your wallets at home and prepare to party,  this is an open bar event. 🎉"
            />
            <FrequentlyAskedQuestion
              question="I don’t like beer!"
              answer="Unfortunate, but Rainhard has you covered. There will be wine, spirits, and non-alcoholic options available for those who prefer. "
            />
          </div>
        </Wrapper>
      </Section>
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
