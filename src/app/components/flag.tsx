import { Box } from "@mui/material";

export const Flag = ({ label, checked }: { label?: string, checked: boolean }) => {
  return (
    <Box
      position="relative"
      display="flex"
      sx={{
        backgroundColor: "#133A6F",
        top: "4px",
        width: "230px",
        borderRadius: "2px",
        height: "0px",
        borderTop: "10px solid transparent",
        borderBottom: "10px solid transparent",
        borderRight: checked ? "10px solid #d5f4e670" : "10px solid white",
        
      }}
    >
      <Box
        sx={{
          color: "#FFF",
          marginLeft: "4px",
          alignSelf: "center",
          fontSize: "9px",
        }}
      >
        {label}
      </Box>
    </Box>
  );
};
