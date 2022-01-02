import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import FirstPage from "./FirstPage/FirstPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/FirstPage" exact component={<FirstPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
