import React from "react";
import Image from "next/image";
import { StyledEventOverview } from "./EventOverviewStyles";
// import styles from "./EventOverview.module.css";

const EventOverview: React.FC = () => {
  return (
    <StyledEventOverview>
      <div className="text-align-center">
        <Image
          src="/images/SunandMoons 1.png"
          alt="We are all made of stars"
          width={68}
          height={33}
          priority
        />
        <h2>
          Help celebrate our commitment to roaming this earthly plane together
        </h2>
      </div>
      <div className="grid-container">
        <div className="full-height-item background-effect--slant">
          <h3 className="event-overview__title">what</h3>
          <div>
            <Image
              className="event-overview__image--half skeleton-dance"
              src="/images/SkeletonDance_Clip.png"
              alt="Skeleton Dance Clip"
              width={202}
              height={331}
              priority
            />
            <Image
              className="event-overview__image--half demon-dance"
              src="/images/Demon.png"
              alt="Demon"
              width={183}
              height={336}
              priority
            />
          </div>
          <div>
            <p>
              <strong>Pretty much the greatest halloween party ever.</strong>{" "}
              <br />
              Nuptials will be celebrated, but not observed.
            </p>
          </div>
        </div>
        <div className="split-column">
          <div className="half-height-item">
            <div className="column">
              <Image
                className="event-overview__image star"
                src="/images/Star.png"
                alt="Star"
                width={178}
                height={189}
                priority
              />
            </div>
            <div className="column vertical">
              <h3 className="event-overview__title">when</h3>
              <p>
                All Hallows Eve <br />
                October 31<sup>st</sup>, 2025 <br />
                7:30 in the evening
              </p>
            </div>
          </div>
          <div className="half-height-item background-effect--slant">
            <div className="column">
              <Image
                className="event-overview__image chalice"
                src="/images/Chalice.png"
                alt="Star"
                width={178}
                height={189}
                priority
              />
            </div>
            <div className="column  vertical">
              <h3 className="event-overview__title">where</h3>
              <p>
                Rainhard Brewing <br />
                100 Symes Road, Toronto <br />
                M6N 0A8
              </p>
            </div>
          </div>
        </div>
      </div>
    </StyledEventOverview>
  );
};

export const CeremonyEventOverview: React.FC = () => {
  return (
    <StyledEventOverview className="ceremony-event">
      <div className="text-align-center">
        <Image
          src="/images/SunandMoons 1.png"
          alt="We are all made of stars"
          width={68}
          height={33}
          priority
        />
        <h2>
          Help celebrate our commitment to roaming this earthly plane together
        </h2>
      </div>
      <div className="grid-container">
        <div className="full-height-item background-effect--slant">
          <h3 className="event-overview__title">what</h3>
          <div>
            <Image
              className="event-overview__image horn-hand"
              src="/images/HornHand.png"
              alt="a hand doing the 'horns' gesture"
              width={290}
              height={461}
              priority
            />
          </div>
          <div>
            <p>
              <strong>We’re finally binding it—legally.</strong> <br />
              Alsooooo, a sick as hell halloween party.
            </p>
          </div>
        </div>
        <div className="split-column">
          <div className="half-height-item">
            <div className="column">
              <Image
                className="event-overview__image star"
                src="/images/Star.png"
                alt="Star"
                width={178}
                height={189}
                priority
              />
            </div>
            <div className="column vertical">
              <h3 className="event-overview__title">when</h3>
              <p>
                All Hallows Eve <br />
                October 31<sup>st</sup>, 2025 <br />
                3:00 in the afternoon
              </p>
            </div>
          </div>
          <div className="half-height-item background-effect--slant">
            <div className="column">
              <Image
                className="event-overview__image chalice"
                src="/images/Chalice.png"
                alt="Star"
                width={178}
                height={189}
                priority
              />
            </div>
            <div className="column  vertical">
              <h3 className="event-overview__title">where</h3>
              <p>
                Rainhard Brewing <br />
                100 Symes Road, Toronto <br />
                M6N 0A8
              </p>
            </div>
          </div>
        </div>
      </div>
    </StyledEventOverview>
  );
};

export default EventOverview;
