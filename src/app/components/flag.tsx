import React from "react";
import { Box } from "@mui/material";

export const Flag = ({
  label,
  checked,
}: {
  label?: React.ReactNode;
  checked: boolean;
}) => {
  return (
    <Box
      position="relative"
      display="flex"
      sx={{
        backgroundColor: "#133A6F",
        top: "4px",
        width: "260px",
        borderRadius: "2px",
        height: "0px",
        borderTop: "12px solid transparent",
        borderBottom: "12px solid transparent",
        borderRight: checked ? "12px solid #d5f4e670" : "10px solid white",
      }}
    >
      <Box
        sx={{
          color: "#FFF",
          marginLeft: "4px",
          alignSelf: "center",
          fontSize: "11px",
          fontWeight: '400'
        }}
      >
        {label}
      </Box>
    </Box>
  );
};
