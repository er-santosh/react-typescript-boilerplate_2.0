import {
  PRIMARY_MAIN_COLOR,
  LIGHT_MAIN_COLOR,
  DARK_MAIN_COLOR,
} from "@utils/constants";

const palette = {
  primary: {
    main: PRIMARY_MAIN_COLOR,
  },
  dark: {
    main: DARK_MAIN_COLOR,
    contrastText: LIGHT_MAIN_COLOR,
  },
  light: {
    main: LIGHT_MAIN_COLOR,
  },
  contrastThreshold: 3,
  tonalOffset: 0.1,
};
export default palette;
