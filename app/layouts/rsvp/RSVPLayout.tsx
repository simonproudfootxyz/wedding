import Image from "next/image";
import React, { ReactNode } from "react";
import { StyledRSVPLayout } from "./StyledRSVPLayout";
import Link from "next/link";
import styled from "styled-components";

interface RSVPLayoutProps {
  children?: ReactNode;
  loading?: boolean;
  titleText?: string;
  showRSVPLink?: boolean;
  RSVPLinkText?: string;
}

const RSVPLayout: React.FC<RSVPLayoutProps> = ({
  children,
  loading = true,
  titleText = "With which spirit are we speaking?",
}) => {
  const title = loading ? "Loading..." : titleText;

  return (
    <StyledRSVPLayout>
      <Image
        src="/images/Upright_Scan_Planchette.png"
        className={`floating planchette`}
        alt="Next.js logo"
        width={398 / 2}
        height={566 / 2}
        priority
      />
      <div className="background">
        <div className="wrapper--tight">
          <div className="heading-box">
            <h1>{title}</h1>
          </div>
          {children && <div className="page-content">{children}</div>}
        </div>
      </div>
    </StyledRSVPLayout>
  );
};

export default RSVPLayout;
