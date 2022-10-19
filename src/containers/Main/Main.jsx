import { useState } from 'react'
import "./Main.scss";
import beers from '../../assets/data/beers';
import CardList from '../../components/CardList/CardList';
import SearchBox from '../../components/SearchBox/SearchBox';
import Navbar from '../../components/Navbar/Navbar';



const Main = (props) => {
    const { beersArr} = props;
    const [searchBeer, setSearchBeer] = useState("");

    const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchBeer(cleanInput);
  };



  return (
    <div className='mainScreen'>
        <div>
            <Navbar />
        </div>
        
        <div>
          <CardList beers={beers} />
        </div>
        
    </div>
  )
}

export default Main