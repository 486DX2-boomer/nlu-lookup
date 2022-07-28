import { useEffect, useState } from "react";

const Nlulist = ({nlus, setNLUs, filtered, setFiltered, empty, setEmpty, searchString}) => {
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

  // Filter the data based on search string
  useEffect(() => {
    if (searchString) {
      const filteredData = nlus.filter((nlu) => {
        return nlu.name.toLowerCase().includes(searchString.toLowerCase());
      });
      setFiltered(filteredData);
      setEmpty(false);
      console.log(searchString);
      console.log(filtered);
    } else {
      setFiltered(nlus);
      setEmpty(true);
    }
  },[searchString]);

  return (
    <>
    { empty && <div className="empty">Search for an NLU...</div> }
      <ul>
        {filtered.map((f) => (
          <li key={f.nlu}>
            {f.name}<span className="nlu-number">{f.nlu}</span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Nlulist;
