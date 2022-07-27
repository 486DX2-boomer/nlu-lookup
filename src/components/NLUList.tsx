import { useEffect, useState } from "react";

const Nlulist = ({nlus, setNLUs, filtered, empty, searchString}) => {
  // const [nlus, setNLUs] = useState([]);
  // const [filtered, setFiltered] = useState([]);
  // const [empty, setEmpty] = useState(true);

  useEffect(() => {
      fetch("../src/nlus.json")
        .then((res) => res.json())
        .then((data) => {
          setNLUs(data);
        });
  }, []);

  const filterResults = (search) => {
    console.log(search);
  }

  return (
    <>
    { empty && <div className="empty">Search for an NLU...</div> }
      <ul>
        {nlus.map((nlus) => (
          <li key={nlus.nlu}>
            {nlus.name}<span className="nlu-number">{nlus.nlu}</span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Nlulist;
