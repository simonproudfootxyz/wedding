import Image from "next/image";
import React, { ReactNode } from "react";
import { StyledRSVPLayout } from "./StyledRSVPLayout";
import { CloseLink } from "@/app/components/CloseLink/CloseLink";

interface RSVPLayoutProps {
  children?: ReactNode;
  loading?: boolean;
  titleText?: string;
  showRSVPLink?: boolean;
  RSVPLinkText?: string;
  exitLink?: boolean;
}

const RSVPLayout: React.FC<RSVPLayoutProps> = ({
  children,
  loading = true,
  titleText = "With which spirit are we speaking?",
  exitLink = true,
}) => {
  const title = loading ? "Loading..." : titleText;

  return (
    <StyledRSVPLayout>
      {exitLink && (
        <CloseLink
          href="/"
          title="Back to home page"
          aria-label="Back to home page"
        >
          &times;
        </CloseLink>
      )}
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
            <h1 className="heading-box__title">{title}</h1>
          </div>
          {children && <div className="page-content">{children}</div>}
        </div>
      </div>
    </StyledRSVPLayout>
  );
};

export default RSVPLayout;
