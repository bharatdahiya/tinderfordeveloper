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
  }, []);

  return (
    <div className="flex flex-col justify-center items-center gap-4 flex-wrap">
      <UserCard key={'feed[0].id'} user={feed[0]} />
    </div>
  );
};
