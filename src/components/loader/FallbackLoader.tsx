import { Backdrop } from "@mui/material";
import { BACKDROP_COLOR, PRIMARY_MAIN_COLOR } from "@utils/constants";
import { ScaleLoader } from "react-spinners";

const FallbackLoader = () => {
  return (
    <Backdrop
      sx={{
        backgroundColor: BACKDROP_COLOR,
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
      open
    >
      <ScaleLoader color={PRIMARY_MAIN_COLOR} loading />
    </Backdrop>
  );
};
export default FallbackLoader;
