import { lazyImport } from "@utils/helpers";
import { useRoutes } from "react-router-dom";
const { Home } = lazyImport(() => import("@features/home/routes/Home"), "Home");

export const AppRoutes = () => {
  const commonRoutes = [{ path: "/", element: <Home /> }];

  const element = useRoutes([...commonRoutes]);

  return <>{element}</>;
};
