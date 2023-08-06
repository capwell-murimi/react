import { useEffect , useMemo, useState} from "react";
import { BrowserRouter as Router , Switch, Route } from "react-router-dom"
import './main-page.css';
import Header from './header';
import featuredHouse from "./featured-house";

export default function App() {
  const [allHouses, setAllHouses] =  useState([]);
  useEffect(() => {
    const fetchHouses = async () => {
      const rsp = await fetch("/houses.json");
      const houses = await rsp.json();
      setAllHouses(houses);
    };
    fetchHouses();
  }, []);

  const featuredHouse = useMemo(() => {
    if(allHouses.length){
      const randomIndex = Math.floor(Math.random() * allHouses.length);
      return  allHouses[randomIndex];
  }
  },  [allHouses]);
  
  return ( 
    <Router>
      <div  className='container'>
        <Header 
          subtitle="providing houses all over the world"/>

          <Switch>
            <Route path="/">
              <featuredHouse house={featuredHouse}/>
            </Route>
          </Switch>
      </div>
    </Router>
  );
}
