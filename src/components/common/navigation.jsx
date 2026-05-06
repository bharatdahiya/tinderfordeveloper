import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router";
import defaultUser from "../../../public/default-user.png";
import { logoutUser } from "../../store/user-slice";

export const NavBar = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logoutUser());
  };
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
                <Link to="/connections">Connections</Link>
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
