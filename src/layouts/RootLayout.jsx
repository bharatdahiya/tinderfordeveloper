import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useLocation, useNavigate } from "react-router";

import { NavBar } from "../components/common/navigation";
import { Footer } from "../components/common/footer";
import { userFetch } from "../store/user-slice";

export const RootLayout = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  // Restore the session after a page refresh; send guests to /login.
  useEffect(() => {
    if (user || pathname === "/login") return;
    dispatch(userFetch())
      .unwrap()
      .catch(() => navigate("/login"));
  }, [user, pathname, dispatch, navigate]);

  return (
    <>
      <NavBar />
      <main className="pb-24">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
