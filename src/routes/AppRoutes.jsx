import { useRoutes } from "react-router-dom";
import Home from "../components/Home";
import { protectedRoutes } from "./protected";

export const AppRoutes = () => {
  console.log("app routes");

  const commonRoutes = [{ path: "/", element: <Home /> }];
  const routes = protectedRoutes;
  const element = useRoutes([...routes, ...commonRoutes]);
  return <>{element}</>;
};
