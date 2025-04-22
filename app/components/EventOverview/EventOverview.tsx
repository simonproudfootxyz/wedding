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
          <h3>what</h3>
          <div>
            <Image
              className="skeleton-dance"
              src="/images/SkeletonDance_Clip.png"
              alt="Skeleton Dance Clip"
              width={202}
              height={331}
              priority
            />
            <Image
              className="demon-dance"
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
                className="star"
                src="/images/Star.png"
                alt="Star"
                width={178}
                height={189}
                priority
              />
            </div>
            <div className="column vertical space-between">
              <h3>when</h3>
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
                className="chalice"
                src="/images/Chalice.png"
                alt="Star"
                width={178}
                height={189}
                priority
              />
            </div>
            <div className="column  vertical space-between">
              <h3>where</h3>
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
