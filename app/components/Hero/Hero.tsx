import Image from "next/image";
import { StyledHero, StyledTopHero } from "./HeroStyles";

const Hero = ({
  classNames,
  children,
}: {
  classNames?: string;
  children?: React.ReactNode;
}) => {
  return <StyledHero className={`${classNames}`}>{children}</StyledHero>;
};

const TopHero = ({ title }: { title?: string }) => {
  return (
    <StyledTopHero id="top_hero">
      <div className={`wrapper`}>
        {title && <h1 className={`hero__title`}>{title}</h1>}
        <Image
          src="/images/Scan_Planchette 1.png"
          className={`floating planchette`}
          alt="Next.js logo"
          width={653 / 2}
          height={800 / 2}
          priority
        />
        <Image
          id="hero_ring"
          className={`floating ring`}
          src="/images/Scans_Ring 2.png"
          alt="Next.js logo"
          width={160 / 2}
          height={166 / 2}
          priority
        />
        <Image
          className={`floating photo`}
          src="/images/Scans_Photo 2.png"
          alt="Next.js logo"
          width={261}
          height={339}
          priority
        />
      </div>
    </StyledTopHero>
  );
};

export default Hero;

export { TopHero };
