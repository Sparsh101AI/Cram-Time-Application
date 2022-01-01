import './App.css';

  
import {
    BrowserRouter as Router,
    Route,
    Switch,
  } from "react-router-dom";
  import HomePage from './HomePage/HomePage';
import FirstPage from './FirstPage/FirstPage';


function App() {
  return (
      <Router>
          <div className="App">

          

            <Switch>
          <Route path="/" exact component={HomePage}/>
          <Route path="/FirstPage" exact component={FirstPage}/>
          </Switch>



          </div>
      </Router>
  )
}

export default App;
