import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState();
  return (
    <div>
      <h2 className="text-3xl">Users</h2>
    </div>
  );
};

export default Users;
