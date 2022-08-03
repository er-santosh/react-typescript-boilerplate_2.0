import useDialog from "@hooks/useDialog";
import { CustomDialogProps } from "@interfaces/dialog";
import { ReactElement } from "react";

interface DialogToggleProps {
  children: (props: CustomDialogProps) => ReactElement;
}

const DialogToggle = ({ children }: DialogToggleProps) => {
  const { isDialogOpen, onDialogToggle } = useDialog();

  const toggleDialog = () => {
    onDialogToggle();
  };

  return children({ isDialogOpen, toggleDialog });
};

export default DialogToggle;
