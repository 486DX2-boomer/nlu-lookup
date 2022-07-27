import { useEffect, useState } from 'react';

const Searchbar = () => {

  const [search, setSearch] = useState<string | null>(null);

  const handleSetSearch = (e) => {
    setSearch(e.target.value);
    console.log(search);
    // pass the search value to the NLUList component
    
  };

  // useEffect(() => {
  //   // when searching, filter the list of NLUs
    
  // }, [search]);

  return (
    <div className="search-bar">
      <input
        type="search"
        placeholder="Search NLUs..."
        className="search-input"
        onChange={handleSetSearch}
      />
    </div>
  );
};

export default Searchbar;
