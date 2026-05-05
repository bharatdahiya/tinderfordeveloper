import { createBrowserRouter } from "react-router";
import { RootLayout } from "../layouts/RootLayout";
import { Error } from "../components/pages/error";
import { Login } from "../components/pages/login";
// import { NotFound } from "../components/pages/notfound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <Error />,
    children: [
      {
        path: "/login",
        Component: Login
      },
      //   {
      //     path: "*",
      //     Component: NotFound,
      //   }
    ],
  },
]);
