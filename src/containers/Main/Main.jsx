import { useState } from 'react'
import "./Main.scss";
import beers from '../../assets/data/beers';
import SearchBox from '../../components/SearchBox/SearchBox';
import CardList from '../../components/CardList/CardList';
import Navbar from '../../components/Navbar/Navbar';




const Main = (props) => {
    const { beersArr} = props;
    const [searchBeer, setSearchBeer] = useState("");

    const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchBeer(cleanInput);
  };



  return (
    <div className="mainScreen">
        <div className='searchBox'>
            <SearchBox />
              <div className='navBar'>
                  <Navbar />
            </div>
        </div>

        <div className="all-beers">
            <CardList beers={beers} />
        </div>
    </div>
  )
}

export default Main;