import React from 'react';
import SearchBox from '../SearchBox/SearchBox';


const Navbar = () => {
  return (
    <div>
      <label><input type="checkbox" className="checkbox__checkbox1"></input>High AVP(beyond 6.0%)</label>
      <label ><input type="checkbox" value=""className="checkbox__checkbox2"></input>Classic Range</label>
      <label ><input type="checkbox" value=""className="checkbox__checkbox3"></input>Acidic (less 4pH)</label>
    </div>
  )
}

export default Navbar