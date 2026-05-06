import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { loginUser } from "../../store/user-slice";

export const Login = () => {
  const [email, setEmail] = useState("abcd@gmail.com");
  const [password, setPassword] = useState("Hash@989");
  const error = useSelector((state) => state.user.error);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const loggedInUser = await dispatch(loginUser({ email, password })).unwrap();

      if (loggedInUser) {
        navigate("/");
      }
    } catch {
      // Error message is stored in Redux and rendered below the form.
    }
  };

  return (
    <div className="flex min-h-full items-center justify-center px-4 py-10">
      <div className="card bg-base-300 w-full max-w-sm shadow-sm">
        <div className="card-body items-center text-center">
          <h2 className="card-title">Login</h2>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="email"
              className="input input-bordered w-full max-w-xs"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          {error && <div className="text-error">{error}</div>}
          <div className="card-actions">
            <button className="btn btn-primary" onClick={handleLogin}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
