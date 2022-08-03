import { TextProps } from "@interfaces/text";
import { Typography, TypographyProps } from "@mui/material";
import { DEFAULT_CURRENCY_SYMBOL } from "@utils/constants/currency";
import { MEDIUM_FONT_SIZE, SMALL_FONT_SIZE } from "@utils/constants/font";

interface CustomProps extends TextProps {
  price: number;
}

const PriceText = ({
  children,
  color,
  price,
  bold,
  large,
  ...otherProps
}: CustomProps & TypographyProps) => {
  return (
    <Typography
      component={"span"}
      variant="caption"
      color={color || "light.grey"}
      fontWeight={bold ? "bold" : "normal"}
      fontSize={large ? MEDIUM_FONT_SIZE : SMALL_FONT_SIZE}
      {...otherProps}
    >
      {DEFAULT_CURRENCY_SYMBOL}
      {price}
    </Typography>
  );
};

export default PriceText;
