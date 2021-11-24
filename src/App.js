// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import './App.css';
import Listcrypto from './Pages/Listcrypto';
import About from './Pages/About';
import Exchangelist from './Pages/Exchangelist'
import Topcoin from './Pages/Topcoin'
import Detail  from './Pages/Detail';


import {
  BrowserRouter,
  Routes,
  Route,
  NavLink
} from "react-router-dom";

import {createBrowserHistory} from 'history'

const history = createBrowserHistory()


function App() {
  return (
    <BrowserRouter history = {history}>
    <div className="app">
    <header className = "header">
        <div className = "containerhead">
          <h1>CoinFomo</h1>
          
        </div>
      </header>
    <div className="content">
    <Routes>
        <Route path="/About" element={<About />}></Route>
        <Route path="/topcoin" element={<Topcoin />}></Route>
        <Route path="/topcoin/:itemId" element={<Detail />}></Route>
        <Route path="/listcrypto" element={<Listcrypto />}></Route>
        <Route path="/detail" element={<Detail />}></Route>
        <Route path="/exchangelist" element={<Exchangelist />}></Route>


        </Routes>
    <footer>
          <div className="containernav">
            <NavLink to="/topcoin" className="iconwrapper">
              TopCoin
            </NavLink>
            <NavLink to="/Listcrypto" className="iconwrapper">
              Market
            </NavLink>
            <NavLink to="/Exchangelist" className="iconwrapper">
              Exchange
            </NavLink>
            <NavLink to="/about" className="iconwrapper">
              About
            </NavLink>
          </div>
        </footer>
        </div>
      </div>
    </BrowserRouter>


);
}

export default App;
