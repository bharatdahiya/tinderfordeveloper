import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { feedFetch } from "../../store/feed-slice";
import { UserCard } from "../common/user-card";

export const Feed = () => {
  const feed = useSelector((state) => state.feed.feed);
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(feedFetch());
  }, [dispatch]);

  if (!feed || feed.length === 0) {
    return (
      <div className="flex items-center justify-center">
        <h1 className="text-2xl font-bold">No new developers found</h1>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center gap-4 flex-wrap">
      <UserCard key={feed[0]._id} user={feed[0]} />
    </div>
  );
};
