import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/nav-bar/NavBar";
import Home from "./feature/Admin/Home";
import Ateliers from "./feature/Users/ateliers/Ateliers";
import HomeUser from "./feature/Users/home/Home-user";
import Notes from "./feature/Users/notesDeCours/Notes";
import Tests from "./feature/Users/tests/Tests";


export const App = () => (
  <div className={ 'app' }>
    <div className={ 'menu' }>
      <NavBar />
    </div>
    <div className={ 'feature' }>
      <Routes>
      <Route path="/atelier" element={<Ateliers />} />
        <Route path="atelier" element={<Ateliers />} />
        <Route path='true' element={<Notes />} />
        <Route path="test" element={<Tests />} />
        <Route path="admin" element={<Home />} />
        <Route path="*" element={<HomeUser />} />
      </Routes>
    </div>
</div>
);
