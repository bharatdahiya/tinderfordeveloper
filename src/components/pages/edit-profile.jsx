import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router";

import { addUser } from "../../store/user-slice";
import { BASE_URL } from "../../utils/constants";
import { UserCard } from "../common/user-card";

const EditProfile = () => {
  const user = useSelector((state) => state.user);
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [age, setAge] = useState(user.age);
  const [photourl, setPhotourl] = useState(user.photourl);
  const [error, setError] = useState(null);

  const dispatch = useDispatch();
  //   const navigate = useNavigate();

  const updateProfile = async () => {
    try {
      const response = await axios.patch(
        `${BASE_URL}/profile/edit`,
        { firstName, lastName, age, photourl },
        { withCredentials: true },
      );

      dispatch(addUser(response.data.data));
    } catch (error) {
      console.error("Profile update failed:", error);
      setError(
        error.response?.data || "An error occurred during profile update.",
      );
    }
  };

  return (
    <div className="flex justify-center items-center gap-4">
      <div className="flex min-h-full items-center justify-center px-4 py-10">
        <div className="card bg-base-300 w-full max-w-sm shadow-sm">
          <div className="card-body items-center text-center">
            <h2 className="card-title">Update Profile</h2>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">First Name</span>
              </label>
              <input
                type="text"
                placeholder="First Name"
                className="input input-bordered w-full max-w-xs"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Last Name</span>
              </label>
              <input
                type="text"
                placeholder="Last Name"
                className="input input-bordered w-full max-w-xs"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Age</span>
              </label>
              <input
                type="text"
                placeholder="Age"
                className="input input-bordered w-full max-w-xs"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Photo upload</span>
              </label>
              <input
                type="url"
                placeholder="Photo upload"
                className="input input-bordered w-full max-w-xs"
                value={photourl}
                onChange={(e) => setPhotourl(e.target.value)}
              />
            </div>

            <div>{error && <p className="text-error">{error}</p>}</div>
            <div className="card-actions">
              <button className="btn btn-primary" onClick={updateProfile}>
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
      <UserCard user={user} hideButtons />
    </div>
  );
};

export default EditProfile;
