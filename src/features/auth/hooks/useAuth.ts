import { initialState } from "@redux/auth/auth-slice";
import { setDemoLogin } from "@redux/auth/auth-actions";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

interface stateInterface {
  auth: typeof initialState;
}

const useAuth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);

  const { isLoggedIn } = useSelector((state: stateInterface) => state.auth);

  const dispatch = useDispatch();

  const setIsLoggedIn = () => {
    dispatch(setDemoLogin());
  };

  return {
    isLoggedIn,
    isLogin,
    setIsLogin,
    loading,
    setLoading,
    setIsLoggedIn,
  };
};

export default useAuth;
