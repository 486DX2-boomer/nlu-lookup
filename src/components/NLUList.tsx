import { useEffect, useState } from "react";
import jsonData from '../assets/nlus.json?url';

const Nlulist = ({nlus, setNLUs, filtered, setFiltered, empty, setEmpty, searchString}) => {
  // const [nlus, setNLUs] = useState([]);
  // const [filtered, setFiltered] = useState([]);
  // const [empty, setEmpty] = useState(true);

  useEffect(() => {
      fetch(jsonData)
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
    { empty && <div className="empty">Search by product name, get an NLU</div> }
    <div className="nlu-list">
      <ul>
        {filtered.map((f) => (
          <li key={f.nlu}>
            {f.name}<span className="nlu-number">{f.nlu}</span>
          </li>
        ))}
      </ul>
      </div>
    </>
  );
};

export default Nlulist;
