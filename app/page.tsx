import Image from "next/image";
import styles from "./page.module.scss";
import { TopHero } from "./components/Hero/Hero";
import Nav from "./components/Nav/Nav";
import Section from "./components/Section/Section";
import Wrapper from "./components/Wrapper/Wrapper";
import OuijaBackground from "@/public/images/OuijaBackground.jpg";

export default function Home() {
  console.log(OuijaBackground.src);
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
          <div className="text-align-center">
            <Image
              src="/images/SunandMoons 1.png"
              alt="We are all made of stars"
              width={68}
              height={33}
              priority
            />
            <h2>
              Help celebrate our commitment to roaming this earthly plane
              together
            </h2>
          </div>
          <div className="grid-container">
            <div className="full-height-item">Full Height Item</div>
            <div className="split-column">
              <div className="half-height-item">First Half</div>
              <div className="half-height-item">Second Half</div>
            </div>
            <div className="test"></div>
          </div>
        </Wrapper>
      </Section>
      <Section classNames="ouija-section" backgroundImage={OuijaBackground.src}>
        <Wrapper>
          <div className="text-align-center">
            <h2>Hey this is the next section</h2>
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
