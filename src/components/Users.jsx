import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);
  return (
    <div>
      <h2 className="text-3xl">Users: {users.length}</h2>
    </div>
  );
};

export default Users;
