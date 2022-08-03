import { Button, ButtonProps, IconButton } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { PulseLoader } from "react-spinners";
import { GREY_COLOR } from "@utils/constants";
interface CustomButtonProps extends ButtonProps {
  as?: string;
  link?: boolean;
  loading?: boolean;
}

export const UIButton = ({
  as,
  type = "button",
  children,
  sx,
  link,
  loading,
  ...otherProps
}: CustomButtonProps) => {
  if (as === "icon") {
    return (
      <IconButton
        tabIndex={-1}
        disableRipple
        sx={{
          ...sx,
        }}
        {...otherProps}
      >
        {children}
      </IconButton>
    );
  }

  if (as === "loading") {
    return (
      <LoadingButton
        tabIndex={-1}
        loading={loading}
        variant="contained"
        type="submit"
        loadingIndicator={
          <PulseLoader role={"progressbar"} size={8} color={GREY_COLOR} />
        }
        sx={{
          mt: 3,
          mb: 2,
          p: 1.5,
          ":disabled": {
            backgroundColor: "grey.200",
            opacity: 0.5,
            cursor: "not-allowed",
          },
          ...sx,
        }}
        disabled={loading}
        {...otherProps}
      >
        {children}
      </LoadingButton>
    );
  }

  return (
    <Button
      tabIndex={-1}
      disableRipple
      disableFocusRipple
      sx={{
        textTransform: "none",
        ":hover": {
          backgroundColor: link ? "unset" : "",
          textDecoration: link ? "underline" : "",
        },
        ...sx,
      }}
      type={type}
      {...otherProps}
    >
      {children}
    </Button>
  );
};
