import React, {useState, useEffect} from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Layout';
import Todo from './screens/Todo';
import PersonalFinance from './screens/PersonalFinance';
import TicTacToe from './screens/TicTacToe';
import Calculator from './screens/Calculator';
import ChatApp from './screens/ChatApp';
import Quiz from './screens/Quiz';
import Weather from './screens/Weather';

import '@fontsource/inter';


function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path='tic-tac-toe' element={<TicTacToe />} />
          <Route index element={<Todo />} />
          <Route path='personal-finance' element={<PersonalFinance />} />
          <Route path='calculator' element={<Calculator />} />
          <Route path='chat-app' element={<ChatApp />} />
          <Route path='quiz' element={<Quiz />} />
          <Route path='weather' element={<Weather />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
