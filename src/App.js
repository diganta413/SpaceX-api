import React,{ useState,useEffect } from "react";
import './App.css';
import Row from "./Row";
import axios from "axios";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Launch from "./Launch";

function App() {
  const [launchpads,setlaunchpads] = useState([]);

  useEffect(() => {
    async function launch(){
      await axios.get("https://api.spacexdata.com/v4/landpads")
      .then((response) => setlaunchpads(response.data))
      .catch((err) => console.log(err))
    }
    launch();
  }, [])

  return (
    <Router>
      <div className="App">
      <Switch>
        
        <Route path="/launch/:launchid">
            <Launch/>
        </Route>
        <Route path="/"> 
            <div className="contents">
              <h1>Launchpads</h1>
              {launchpads.map((launchpad) => <Row launchpad={launchpad}/>)}
            </div>
        </Route>
      </Switch>
      
      
    </div>
    </Router>
    
  );
}

export default App;
