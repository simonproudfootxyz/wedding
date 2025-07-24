import { StyledButton } from "./ButtonStyles";

export const StylizedButton = ({
  children,
  type,
  onClick,
}: {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}) => {
  return (
    <StyledButton type={type} onClick={onClick}>
      <span>{children}</span>
    </StyledButton>
  );
};
