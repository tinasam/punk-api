import { useState, useEffect } from 'react'
import "./Main.scss";
import beers from '../../assets/data/beers';
import SearchBox from '../../components/SearchBox/SearchBox';
import Card from '../../components/Card/Card';
import CardList from '../../components/CardList/CardList';
import Navbar from '../../components/Navbar/Navbar';




const Main = () => {
    const [beers, setBeers] = useState([]);
    const [searchBeer, setSearchBeer] = useState("");

    const url = "https://api.punkapi.com/v2/beers?page=1&per_page=80"

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
        return beerName.includes(searchBeer);
        }
    );



  return (
    <div className="mainScreen">
      {/* <h1 className='header'>Punk API</h1> */}
        <div className='searchBox'>
            <SearchBox handleInput={handleInput} searchBeer={searchBeer} />
            <div className='navBar'>
                <Navbar />
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