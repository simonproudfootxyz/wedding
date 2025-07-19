import Wrapper from "@/app/components/Wrapper/Wrapper";
import { Layout } from "antd";
import Image from "next/image";
import { title } from "process";
import React, { ReactNode } from "react";
import styled from "styled-components";

interface RSVPLayoutProps {
  children?: ReactNode;
  loading?: boolean;
  titleText?: string;
}

const LayoutComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 8rem 2rem 6rem;

  h1,
  h2,
  h3,
  h4,
  p,
  ul,
  li {
    color: var(--white);
  }

  .background {
    background: var(--black);
    width: 100%;
    position: relative;
    padding-top: 12rem;
    padding-bottom: 6rem;
  }

  h1 {
    max-width: var(--inner-max-width);
    text-align: center;
    margin-bottom: 8rem;
  }

  .floating {
    top: -90px;
    left: calc(50% - (398px / 4));
    animation: float 7.1s ease-in-out infinite;
  }
`;

const RSVPLayout: React.FC<RSVPLayoutProps> = ({
  children,
  loading = true,
  titleText = "With which spirit are we speaking?",
}) => {
  const title = loading ? "Loading..." : titleText;
  return (
    <LayoutComponent>
      <div className="background">
        <div className="wrapper--tight">
          <Image
            src="/images/Upright_Scan_Planchette.png"
            className={`floating planchette`}
            alt="Next.js logo"
            width={398 / 2}
            height={566 / 2}
            priority
          />
          <h1>{title}</h1>
          {children && <div className="page-content">{children}</div>}
        </div>
      </div>
    </LayoutComponent>
  );
};

export default RSVPLayout;
