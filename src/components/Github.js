import React, { useEffect, useState } from "react";

export default function Github() {
  const [users, setUsers] = useState([]);

  async function getUsers() {
    const res = await fetch("https://api.github.com/users");
    setUsers(await res.json());
  }

  useEffect(() => {
    getUsers();
  }, []);

  console.log(users);

  return (
    <div className="flex gap-4 flex-wrap">
      {users.map((i) => (
        <div>
          <a href={i.html_url}>
            <img className="w-40 h-40" src={i.avatar_url} />
            <p>{i.login}</p>
          </a>
        </div>
      ))}
    </div>
  );
}
