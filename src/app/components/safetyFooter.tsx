import { Box } from "@mui/material";
import Image from "next/image";

export const SafetyFooter = () => {
  return (
    <Box mt={2} sx={{ color: "#B2B2B2", fontSize: "10px" }}>
      <Image alt="safe icon" width={15} height={15} src="/safe_icon.svg" />{" "}
      Pagamento 100% seguro via:{" "}
      <Image alt="logo" width={38} height={12} src="/mini_logo.svg" />
    </Box>
  );
};
