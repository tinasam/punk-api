import React, {useState} from 'react';
import CardList from '../CardList/CardList';
import Navbar from '../Navbar/Navbar';


const SearchBox = (props) => {

    const {beers} = props;
    const [filter, setFilter] = useState(beers);
    const handleSearch = (event) => {
            if (event.target.value === "") {
                setFilter(beers);
                return;
            }
    const filteredValues = beers.filter(
        (item) =>
        item.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
    );
    setFilter(filteredValues);
    };

  return (
    <div className="beerFilter">
            <div>
                Search: <input name="query" type="text" onChange={handleSearch} />
            </div>
            {filter &&
                filter.map((item, index) => (
                    <div key={index}>{item}</div>
                ))}
    </div>
  );
}

export default SearchBox;