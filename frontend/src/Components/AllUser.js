import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function AllUser() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:8070/user/usersList");
        setUsers(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h2>All Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            <div>
              <strong>Name:</strong> {user.name}
            </div>
            <div>
              <strong>Email:</strong> {user.email}
            </div>
            <div>
              <strong>Address:</strong> {user.address}
            </div>
            <div>
              <Link to={`/user/${user._id}`}>View Details</Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
