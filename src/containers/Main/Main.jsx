import { useState, useEffect } from 'react'
import "./Main.scss";
import beers from '../../assets/data/beers';
import filter from '../../assets/data/filter';
import SearchBox from '../../components/SearchBox/SearchBox';
import Card from '../../components/Card/Card';
import CardList from '../../components/CardList/CardList';
import Navbar from '../../components/Navbar/Navbar';
// import FilterList from '../../components/FilterList/FilterList';




const Main = () => {
    const [beers, setBeers] = useState([]);
    const [searchBeer, setSearchBeer] = useState("");
    const [filterBeer, updateBeerFilterArr] = useState(filter);

    const url = "https://api.punkapi.com/v2/beers?page=1&per_page=80"

  useEffect(()=>{
    getBeers();
  }, [searchBeer]);

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
        console.log(searchBeer);
        return beerName.includes(searchBeer);
        }
    );

    const filterBeerList = beers.filter((filter) => {
      if (text=="High ABV (>6/0%)"){
          return filter.abv >6;
      }
    else if (text=="Classic Range"){
        const year = filter.first_brewed.slice(-4,)
    }
    else if (text=="Acidic (ph <4)") {
      return filter.ph <4;
    }  
  }); 


  return (
    <div className="mainScreen">
      {/* <h1 className='header'>Punk API</h1> */}
        <div className='searchBox'>
            <SearchBox handleInput={handleInput} searchBeer={searchBeer} />
        </div>

        <div className='all-beers'>
            {/* <CardList beers={beers} /> */}
            {searchBeers.length !=0 && <CardList beers={searchBeers} />}
        </div>

        {/* <div className='updatedFilteredBeer'>
            <FilterList beerFilter={filterBeerList} filterBeer={filterBeer}
            />
        </div> */}
    </div>
    )
  }

export default Main;