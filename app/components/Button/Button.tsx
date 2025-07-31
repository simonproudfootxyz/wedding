import { StyledButton } from "./ButtonStyles";

export const StylizedButton = ({
  children,
  type,
  onClick,
  disabled = false,
}: {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
}) => {
  return (
    <StyledButton type={type} onClick={onClick} disabled={disabled}>
      <span className="button__text">{children}</span>
    </StyledButton>
  );
};
