import { useEffect, useState } from "react";
import { client } from "../sanity/client";

export default function Assignments() {
  const [data, setData] = useState([]);

  useEffect(() => {
    client
      .fetch(`*[_type == "assignment"] | order(title asc){_id, title, description}`)
      .then((res) => {
        console.log("DATA:", res);
        setData(res);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <section>
      <h2>Arbeidskrav</h2>

      {data.length === 0 && <p>Laster arbeidskrav...</p>}

      {data.map((item) => (
        <article key={item._id}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </article>
      ))}
    </section>
  );
}