import { useEffect, useState } from "react";

const Nlulist = () => {
  const [nlus, setNLUs] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [empty, setEmpty] = useState(true);

  useEffect(() => {
      fetch("../src/nlus.json")
        .then((res) => res.json())
        .then((data) => {
          setNLUs(data);
        });
  }, []);

  return (
    <>
    { empty && <div className="empty">Search for an NLU...</div> }
      <ul>
        {nlus.map((nlus) => (
          <li key={filtered.nlu}>
            {filtered.name}<span className="nlu-number">{filtered.nlu}</span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Nlulist;
