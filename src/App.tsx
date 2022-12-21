import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import { AppStyled } from './App.style';

function App() {
  const [count, setCount] = useState(0)

  return (
    <AppStyled className={ 'app' }>
    {/* <div className={ 'menu' }>
      <SearchBar />
      <NavBar />
    </div> */}
    <div className={ 'feature' }>
      <Routes>
        {/* <Route path='login' element={<Login />} />
        <Route path='home' element={<Home />} />
        <Route path='notes/' element={<Notes />} />
        <Route path='notes/:id' element={<NotesDisplay />} />
        <Route path='ateliers' element={<Ateliers />} />
        <Route path='ateliers/:id' element={<AteliersDisplay />} /> */}
        <Route path='admin' element={<p>PAGE D'ADMIN</p>} />
        <Route path='*' element={<p>404</p>} />
      </Routes>
    </div>
</AppStyled>
  )
}

export default App
