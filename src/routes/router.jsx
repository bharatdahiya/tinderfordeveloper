import { createBrowserRouter } from "react-router";

import { RootLayout } from "../layouts/RootLayout";
import { Error } from "../components/pages/error";
import { Login } from "../components/pages/login";
import { Feed } from "../components/pages/feed";
import { Connections } from "../components/pages/connections";
import ViewProfile from "../components/pages/view-profile";
import EditProfile from "../components/pages/edit-profile";
// import { NotFound } from "../components/pages/notfound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <Error />,
    children: [
      {
        "path": "/",
        Component: Feed
      },
      {
        path: "/login",
        Component: Login
      },
      {
        path: "/profile/view",
        Component: ViewProfile
      }, 
      {
        path: "/profile/edit",
        Component: EditProfile
      },
      {
        path: "/connections",
        Component: Connections
      }
      //   {
      //     path: "*",
      //     Component: NotFound,
      //   }
    ],
  },
]);
