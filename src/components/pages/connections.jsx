import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addConnection } from "../../store/connection-slice";
import axios from "axios";
import { BASE_URL } from "../../utils/constants";
import { useSelector } from "react-redux";

export const Connections = () => {
  const connections = useSelector((state) => state.connections);
  const dispatch = useDispatch();

  const fetchConnections = useCallback(async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/connections`, {
        withCredentials: true,
      });
      const data = await response.data.data;
      dispatch(addConnection(data));
    } catch (error) {
      console.error("Error fetching connections:", error);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchConnections();
  }, [fetchConnections]);

  if (!connections || connections.length === 0) {
    return (
      <div className="flex items-center justify-center">
        <h1 className="text-2xl font-bold">No Connections Found</h1>
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold">Connections</h1>
      {connections.map((connection) => (
        <div
          key={connection._id ?? connection.id}
          className="bg-base-300 shadow-md rounded-lg p-4 m-2 max-w-md"
        >
          <h2 className="text-xl font-bold">{connection.firstName}</h2>
          <p className="opacity-70">{connection.lastName}</p>
        </div>
      ))}
    </div>
  );
};
