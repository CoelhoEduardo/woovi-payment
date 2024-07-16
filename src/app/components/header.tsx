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
      mt={3}
      gap={2}
      display="flex"
      flexDirection="column"
      alignItems="center"
      textAlign="center"
      sx={{ width: "100%", color: "#4D4D4D" }}
    >
      <Box sx={{ position: "relative", width: "100%" }}>
        {showingButton === true ? (
          <Box sx={{ position: "absolute", bottom: "0px", left: "0px" }}>
            <Button href={href} sx={{ color: "#4D4D4D" }}>
              <ArrowBackIosIcon />
            </Button>
          </Box>
        ) : null}
        <Image
          src="/woovi.svg"
          alt="Woovi logo"
          width={180}
          height={37}
          priority
        />
      </Box>
      <h3>{subtitle}</h3>
    </Box>
  );
};
