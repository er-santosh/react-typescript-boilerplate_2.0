import CustomDialog from "@components/dialog/CustomDialog";
import DialogToggle from "@components/dialog/DialogToggle";
import { UIButton } from "@components/ui/Button";
import AuthForm from "@features/auth/components/AuthForm";
import { useState } from "react";

interface authToggleProps {
  isHome?: boolean;
  isCheckout?: boolean;
}
const AuthDialogToggle = ({ isHome }: authToggleProps) => {
  const [isLogin, setIsLogin] = useState(true);

  const handleButtonClick = (status: boolean, toggleFunction: () => void) => {
    setIsLogin(status);
    toggleFunction();
  };

  const toggleIsLogin = () => {
    setIsLogin(!isLogin);
  };

  return (
    <DialogToggle>
      {({ isDialogOpen, toggleDialog }) => (
        <>
          <UIButton
            onClick={() => handleButtonClick(true, toggleDialog)}
            sx={{
              mx: 1,
            }}
            variant="outlined"
          >
            Login
          </UIButton>
          {isHome && (
            <UIButton
              onClick={() => handleButtonClick(false, toggleDialog)}
              sx={{
                mx: 1,
              }}
              variant="contained"
            >
              Signup
            </UIButton>
          )}
          <CustomDialog
            open={isDialogOpen}
            handleClose={toggleDialog}
            dialogTitle={isLogin ? "LOGIN" : "SIGNUP"}
            responsive
            maxWidth={"lmobile"}
          >
            <>
              <AuthForm
                toggleIsLogin={toggleIsLogin}
                isLogin={isLogin}
                toggleDialog={toggleDialog}
              />
            </>
          </CustomDialog>
        </>
      )}
    </DialogToggle>
  );
};

export default AuthDialogToggle;
