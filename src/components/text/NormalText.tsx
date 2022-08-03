import { TextProps } from "@interfaces/text";
import { Typography, TypographyProps } from "@mui/material";
import { MEDIUM_FONT_SIZE } from "@utils/constants/font";

const NormalText = ({
  children,
  color,
  bold,
  ...otherProps
}: TextProps & TypographyProps) => {
  return (
    <Typography
      fontWeight={bold ? "bold" : "normal"}
      fontSize={MEDIUM_FONT_SIZE}
      {...otherProps}
    >
      {children}
    </Typography>
  );
};

export default NormalText;
