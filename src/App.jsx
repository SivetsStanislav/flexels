import React from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/pages/HomePage/HomePage';
import SearchPage from './components/pages/SearchPage/SearchPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/search/:query' element={<SearchPage />}/>
      </Routes>
    </>
  );
}

export default App;