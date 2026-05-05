import axios from "axios";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { BASE_URL } from "../../utils/constants";
import { setFeed } from "../../store/feed-slice";
import { UserCard } from "../common/user-card";
import { useEffect } from "react";

export const Feed = () => {
  const feed = useSelector((state) => state.feed);

  const dispatch = useDispatch();

  const getFeed = async () => {
    try {
      const response = await axios.get(BASE_URL + "/users/feed", {
        withCredentials: true,
      });
      dispatch(setFeed(response.data.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFeed();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center gap-4 flex-wrap">
      <UserCard key={'feed[0].id'} user={feed[0]} />
    </div>
  );
};
