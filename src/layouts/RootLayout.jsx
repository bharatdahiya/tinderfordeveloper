import { Outlet } from "react-router";

import { NavBar } from "../components/common/navigation";
import { Footer } from "../components/common/footer";

export const RootLayout = () => {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
