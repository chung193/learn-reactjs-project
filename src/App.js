import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react'
import { type } from '@testing-library/user-event/dist/type';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Layout';
import Todo from './screens/Todo';
import PersonalFinance from './screens/PersonalFinance';
import '@fontsource/inter';


function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Todo />} />
          <Route path='personal-finance' element={<PersonalFinance />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
