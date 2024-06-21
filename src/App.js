import React, {useState, useEffect} from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Layout';
import Todo from './screens/Todo';
import PersonalFinance from './screens/PersonalFinance';
import TicTacToe from './screens/TicTacToe';
import '@fontsource/inter';


function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Todo />} />
          <Route path='personal-finance' element={<PersonalFinance />} />
          <Route path='tic-tac-toe' element={<TicTacToe />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
