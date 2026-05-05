import { createBrowserRouter } from "react-router";
import { RootLayout } from "../layouts/RootLayout";
import { Error } from "../components/pages/error";
// import { NotFound } from "../components/pages/notfound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <Error />,
    children: [
      {
        path: "/profile",
        // element: Profile,
      },
      //   {
      //     path: "*",
      //     Component: NotFound,
      //   }
    ],
  },
]);
