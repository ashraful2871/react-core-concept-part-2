import { useEffect, useState } from "react";
import "./friends.css";
export default function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div>
      <h2>Users: {users.length}</h2>
    </div>
  );
}

/**
 * 1. declare a state to load data.
 * 2. useEffect with call back and dependency array
 * 3. ude fetch to load data.
 */
