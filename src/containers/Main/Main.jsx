import { useState, useEffect } from 'react'
import "./Main.scss";
import beers from '../../assets/data/beers';
import initBeerFilterArr from '../../assets/data/filter';
import SearchBox from '../../components/SearchBox/SearchBox';
import Card from '../../components/Card/Card';
import CardList from '../../components/CardList/CardList';
import FilterItem from '../../components/FilterItem/FilterItem';
import FilterList from '../../components/FilterList/FilterList';

const Main = () => {
    const [beers, setBeers] = useState([]);
    const [searchBeer, setSearchBeer] = useState("");
    const [filterBeer, updateBeerFilterArr] = useState(initBeerFilterArr);

    const url = "https://api.punkapi.com/v2/beers?page=1&per_page=45"

  useEffect(()=>{
    getBeers();
  }, []);

  const getBeers = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setBeers(data);
  }

    const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchBeer(cleanInput);
  };

  // filtered array for typing search of beers
    const searchBeers = beers.filter((beer) => {
        const beerName = beer.name.toLowerCase();
        return beerName.includes(searchBeer)
        && (filterBeer[0].checked ? beer.abv > 6: true )
        && (filterBeer[1].checked ? beer.first_brewed.substr(3,6) < 2010: true )
        && (filterBeer[2].checked ? beer.ph < 4: true )
        }
    );

    
        


    const filterBeerList = beers.filter((filter) => {
      if (filter.text=="High ABV (>6/0%)"){
          return filter.abv >6;
      }
    else if (filter.text=="Classic Range"){
        const year = filter.first_brewed.slice(-4,)
    }
    else if (filter.text=="Acidic (ph <4)") {
      return filter.ph <4;
    }  
  }); 

  const toggleCheckedFilter = (filterId) => {
    const updatedFilterArr = filterBeer.map(filter => 
       filter.id === filterId ? {...filter, checked: !filter.checked} : {...filter}
      )
    updateBeerFilterArr (updatedFilterArr)
  }



  return (
    <div className="mainScreen">
      {/* <h1 className='header'>Punk API</h1> */}
        <div className='searchBox'>
            <SearchBox handleInput={handleInput} searchBeer={searchBeer} />

            <div className='updatedFilteredBeer'>
              <FilterList filterBeer={filterBeer} toggleCheckedFilter={toggleCheckedFilter} />
              {/* <FilterItem filterSome={initBeerFilterArr} /> */}
            </div>

        </div>

        <div className='all-beers'>
            {/* <CardList beers={beers} /> */}
            {searchBeers.length !=0 && <CardList beers={searchBeers} />}
        </div>

        
    </div>
    )
  }

export default Main;