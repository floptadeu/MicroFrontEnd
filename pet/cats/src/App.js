import React from "react";
import {Route, Routes} from "react-router-dom";
import { BrowserRouter} from "react-router-dom";
import { createBrowserHistory } from "history";
import GreetingCat from "./Feature/GreetingCats";
import RandomCat from "./Feature/RandomCat";
import "./App.css";

const defaultHistory = createBrowserHistory();

function App({ history = defaultHistory }) {
  return (

    <BrowserRouter history={history}>
    <Routes>
      <Route path="/" element={<RandomCat/>}>
        <Route path="cat/:greeting" element={<GreetingCat/>} />
      </Route>
    </Routes>
  </BrowserRouter>

    


  
  );
}

export default App;
