import { Box, Button } from "@mui/material";
import Image from "next/image";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export const Header = ({
  subtitle,
  href,
  showingButton = false,
}: {
  subtitle: string;
  href?: string;
  showingButton?: boolean;
}) => {
  return (
    <Box
      fontSize={15}
      gap={2}
      display="flex"
      flexDirection="column"
      alignItems="center"
      textAlign="center"
      sx={{ width: "100%", color: "#4D4D4D" }}
    >
      {showingButton === true ? (
        <Button href={href}>
          <ArrowBackIosIcon />
        </Button>
      ) : null}

      <Image
        src="/woovi.svg"
        alt="Woovi logo"
        width={180}
        height={37}
        priority
      />
      <h3>{subtitle}</h3>
    </Box>
  );
};
