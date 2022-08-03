import { useState } from "react";

const useDialog = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const onDialogToggle = () => {
    setIsDialogOpen(!isDialogOpen);
  };

  return { isDialogOpen, onDialogToggle };
};

export default useDialog;
