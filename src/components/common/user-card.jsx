import defaultUserImage from "../../../public/default-user.png";
export const UserCard = ({ user, hideButtons }) => {
  return (
    <div className="card pt-10 flex items-center justify-center w-96 bg-base-300 shadow-xl">
      <figure>
        <img
          style={{ height: "100%", objectFit: "cover", aspectRatio: "1/1" }}
          src={user?.photourl ?? defaultUserImage}
          alt="User Avatar"
          onError={(e) => (e.currentTarget.src = defaultUserImage)}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {user?.firstName} {user?.lastName}, {user?.age}
        </h2>
        <div className="flex flex-col">
          <label className="label">
            <span className="label-text">Tech Stack</span>
          </label>
          <div className="flex flex-wrap gap-2">
            {user?.skill?.map((tech) => (
              <div key={tech} className="badge badge-info">
                {tech}
              </div>
            ))}
          </div>
        </div>
        {!hideButtons && (
          <div className="card-actions justify-end">
            <button className="btn btn-error">Ignore</button>
            <button className="btn btn-success">Interested</button>
          </div>
        )}
      </div>
    </div>
  );
};
