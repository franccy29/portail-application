import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppStyled } from './App.style';
import NavBar from './components/nav-bar/NavBar';
import Ateliers from './feature/ateliers/Ateliers';
import AteliersDisplay from './feature/ateliers/display/AteliersDisplay';
import Home from './feature/home/Home';
import NotesDisplay from './feature/notes/display/NotesDisplay';
import Notes from './feature/notes/Notes';

const App = () => {
  // if (permission === 'pasCool') {
    // <Route path='login' element={<Login />} />
  // }

  return (
    <AppStyled className={ 'app' }>
      <NavBar />
      <div className={ 'feature' }>
        <Routes>
          <Route path='home' element={<Home />} />
          <Route path='notes' element={<Notes />} />
          <Route path='notes/:id' element={<NotesDisplay />} />
          <Route path='ateliers' element={<Ateliers />} />
          <Route path='ateliers/:id' element={<AteliersDisplay />} />
          <Route path='admin' element={<p>PAGE D'ADMIN</p>} />
          <Route path='*' element={<p>PAGE RANDOM</p>} />
        </Routes>
      </div>
    </AppStyled>
  )
}

export default App;
