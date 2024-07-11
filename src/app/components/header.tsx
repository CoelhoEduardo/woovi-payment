import { Box } from "@mui/material";
import Image from "next/image";

export const Header = ({ subtitle }: { subtitle: string }) => {
  return (
    <Box
      fontSize={15}
      gap={2}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      sx={{ width: "100%", color: '#4D4D4D' }}
    >
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
