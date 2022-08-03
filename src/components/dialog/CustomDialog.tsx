import { UIButton } from "@components/ui/Button";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogProps,
  DialogTitle,
  Slide,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  DIALOG_TRANSITION_DURATION,
  DIALOG_TRANSITION_EXIT_DURATION,
} from "@utils/constants";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";

interface CustomDialogProps extends DialogProps {
  actions?: React.ReactNode;
  responsive?: Boolean;
  handleClose: React.MouseEventHandler<HTMLButtonElement>;
  dialogTitle: string;
}

const CustomDialog = ({
  open,
  children,
  dialogTitle,
  responsive,
  handleClose,
  actions,
  ...otherProps
}: CustomDialogProps) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("tablet"));
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      maxWidth={"tablet"}
      fullScreen={responsive && fullScreen}
      TransitionComponent={Slide}
      transitionDuration={{
        enter: DIALOG_TRANSITION_DURATION,
        exit: DIALOG_TRANSITION_EXIT_DURATION,
      }}
      {...otherProps}
    >
      {dialogTitle && (
        <DialogTitle
          sx={{
            fontWeight: "bold",
          }}
        >
          {dialogTitle}
          <UIButton
            as="icon"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: "dark.light",
            }}
          >
            <CloseIcon />
          </UIButton>
        </DialogTitle>
      )}
      <DialogContent dividers>{children}</DialogContent>
      {actions && <DialogActions>{actions}</DialogActions>}
    </Dialog>
  );
};

export default CustomDialog;
