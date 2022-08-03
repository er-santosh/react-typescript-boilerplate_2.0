import XLargeText from "@components/text/XLarge";
import { UIButton } from "@components/ui/Button";
import { DRAWER_TRANSITION_EXIT_DURATION } from "@utils/constants";
import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    setTimeout(() => {
      navigate("/");
    }, DRAWER_TRANSITION_EXIT_DURATION);
  };

  return (
    <UIButton
      sx={{
        ":hover": {
          backgroundColor: "unset",
        },
      }}
      onClick={handleClick}
    >
      <XLargeText
        bold
        sx={{
          mr: 2,
          fontFamily: "monospace",
          letterSpacing: ".3rem",
          color: "primary.main",
          textAlign: {
            mobile: "center",
            tablet: "start",
          },
        }}
      >
        LOGO
      </XLargeText>
    </UIButton>
  );
};

export default Logo;
