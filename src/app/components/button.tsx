import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ButtonApp = ({
  label,
  icon,
  href,
  onClick,
  type
}: {
  label: string;
  icon?: React.JSX.Element;
  href?: string;
  onClick?: () => void
  type?: "button" | "submit" | "reset" | undefined
}) => {
  const BootstrapButton = styled(Button)({
    boxShadow: "none",
    textTransform: "none",
    fontSize: 18,
    padding: "6px 12px",
    border: "1px solid",
    borderRadius: "8px",
    width: "320px",
    height: "30px",
    lineHeight: 1.5,
    marginTop: "15px",
    backgroundColor: "#133A6F",
    borderColor: "#133A6F",
    "&:hover": {
      backgroundColor: "#4D4D4D",
      borderColor: "#4D4D4D",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#133A6F",
      borderColor: "#133A6F",
    },
  });

  return (
    <BootstrapButton type={type} onClick={onClick} href={href} variant="contained" disableRipple>
      <Box fontSize={12} mr={1}>
        {label}
      </Box>
      {icon}
    </BootstrapButton>
  );
};
