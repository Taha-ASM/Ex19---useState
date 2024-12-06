import { useState, useEffect } from "react";

export default function Header() {
  const [cats, setCats] = useState([]);

  async function getCats() {
    const res = await fetch(
      "https://api.thecatapi.com/v1/images/search?limit=10"
    );
    setCats(await res.json());
  }

  useEffect(() => {
    getCats();
  }, []);

  // console.log(cats);

  return (
    <div className="flex gap-4">
      {cats.map((i) => (
        <div>
          <img className="w-40 h-40 obejct-cover" src={i.url} />
          <p>{i.id}</p>
        </div>
      ))}
    </div>
  );
}
