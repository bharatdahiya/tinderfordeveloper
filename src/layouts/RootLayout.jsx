import { Outlet } from "react-router";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import { NavBar } from "../components/common/navigation";
import { Footer } from "../components/common/footer";
import { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { addUser } from "../store/user-slice";
import { useNavigate } from "react-router";

export const RootLayout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const getUser = async () => {
    if (user) return;
    try {
      const response = await axios.get(BASE_URL + "/profile/view", {
        withCredentials: true,
      });

      dispatch(addUser(response.data.data));
    } catch (error) {
      console.log(error);
      if (error.response?.status === 401) {
        navigate("/login", { replace: true });
        return;
      }
    }
  };

  useEffect(() => {
    getUser();
  }, []);

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
