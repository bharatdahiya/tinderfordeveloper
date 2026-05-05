import { useSelector } from "react-redux";
import { removeUser } from "../../store/user-slice";
import { useDispatch } from "react-redux";
import { Link } from "react-router";
import { BASE_URL } from "../../utils/constants";
import axios from "axios";
import defaultUser from "../../../public/default-user.png";

export const NavBar = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const logoutHandler = async () => {
    try {
      const response = await axios.post(
        BASE_URL + "/logout",
        {},
        {
          withCredentials: true,
        },
      );
      if (response.ok) {
        dispatch(removeUser());
      }
    } catch (error) {
      console.error("Error occurred while logging out:", error);
    }
  };
  console.log("User in NavBar:", user);
  return (
    <div className="navbar bg-neutral  shadow-sm">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          Developer Tinder
        </Link>
      </div>
      {user && (
        <div className="flex gap-2">
          <div className="flex items-center dropdown dropdown-end">
            <div className="pr-1.5">Welcome, {user.firstName} </div>
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img alt="image" src={user.photourl || defaultUser} />
              </div>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/profile/view" className="justify-between">
                  Profile
                </Link>
              </li>
              <li>
                <Link to="/settings">Settings</Link>
              </li>
              <li onClick={logoutHandler}>
                <Link to="/login">Logout</Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
