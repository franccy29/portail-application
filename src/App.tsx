import React from "react";
import { Routes, Route } from "react-router-dom";
import { AppStyled } from "./App.style";
import NavBar from "./components/nav-bar/NavBar";
import SearchBar from "./components/search-bar/search-bar";
import Home from "./feature/Admin/Home";
import Ateliers from "./feature/Users/ateliers/Ateliers";
import HomeUser from "./feature/Users/home/Home-user";
import Notes from "./feature/Users/notesDeCours/Notes";
import Tests from "./feature/Users/tests/Tests";


export const App = () => (
  <AppStyled className={ 'app' }>
    <div className={ 'menu' }>
      <SearchBar />
      <NavBar />
    </div>
    <div className={ 'feature' }>
      <Routes>
        <Route path="acceuil" element={<HomeUser />} />
        <Route path='notes' element={<Notes />} />
        <Route path="ateliers" element={<Ateliers />} />
        <Route path="capsules" element={<p>Capsule</p>} />
        <Route path="tests" element={<Tests />} />
        <Route path="ressources" element={<p>ressources</p>} />
        <Route path="admin" element={<Home />} />
        <Route path="*" element={<p>404</p>} />
      </Routes>
    </div>
</AppStyled>
);
