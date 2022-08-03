import { createTheme } from "@mui/material/styles";
import palette from "@assets/theme/palette";
import breakpoints from "@assets/theme/breakpoints";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: false; // removes the `xs` breakpoint
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true; // adds the `mobile` breakpoint
    lmobile: true;
    tablet: true;
    laptop: true;
    desktop: true;
  }
}
declare module "@mui/material/styles" {
  interface Palette {
    dark: Palette["primary"];
    light: Palette["primary"];
  }
  // allow configuration using `createTheme`
  interface PaletteOptions {
    dark?: PaletteOptions["primary"];
    light?: PaletteOptions["primary"];
  }
}

// Update the Button's color prop options
declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    dark: true;
    light: true;
  }
}

// Update the Icon Button's color prop options
declare module "@mui/material/IconButton" {
  interface IconButtonPropsColorOverrides {
    dark: true;
    light: true;
  }
}

// Update the Loading Button's color prop options
declare module "@mui/lab/LoadingButton" {
  interface LoadingButtonPropsColorOverrides {
    dark: true;
    light: true;
  }
}

const theme = createTheme({
  palette,
  breakpoints,
});

export default theme;
