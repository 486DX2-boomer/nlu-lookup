import { useEffect, useState } from 'react';

const Searchbar = ({searchString, setSearchString}) => {

  // const [search, setSearch] = useState<string | null>(null);

  const handleSetSearchString = (e) => {
    setSearchString(e.target.value);
    // console.log(search);
    // pass the search value to the NLUList component
  };

  return (
    <div className="search-bar">
      <input
        type="search"
        placeholder="Search NLUs..."
        className="search-input"
        onChange={handleSetSearchString}
      />
    </div>
  );
};

export default Searchbar;
