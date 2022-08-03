import { Box, BoxProps } from "@mui/material";

const FlexBox = ({
  alignItems,
  justifyContent,
  children,
  ...other
}: BoxProps) => {
  return (
    <Box
      display={"flex"}
      alignItems={alignItems || "center"}
      justifyContent={justifyContent || "space-between"}
      {...other}
    >
      {children}
    </Box>
  );
};

export default FlexBox;
