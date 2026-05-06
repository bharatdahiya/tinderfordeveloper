import { useSelector } from "react-redux";
import { UserCard } from "../common/user-card";
import { useNavigate } from "react-router";
const ViewProfile = () => {
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center">
      <UserCard hideButtons user={user} />
      <button className="btn btn-primary mt-4" onClick={() => navigate("/profile/edit")}>
        Edit Profile
      </button>
    </div>
  );
};

export default ViewProfile;
