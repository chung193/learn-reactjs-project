import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Layout';
import Todo from './screens/Todo';
import PersonalFinance from './screens/PersonalFinance';
import TicTacToe from './screens/TicTacToe';
import Calculator from './screens/Calculator';
import ChatApp from './screens/ChatApp';
import Quiz from './screens/Quiz';
import Weather from './screens/Weather';
import MusicPlayer from './screens/MusicPlayer';
import { CssVarsProvider, extendTheme } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';

import '@fontsource/inter';

const theme = extendTheme({ cssVarPrefix: 'demo' });

function App() {
  return (
    <CssVarsProvider
      defaultMode="system"
      theme={theme}
      disableNestedContext
      modeStorageKey="demo-system-mode"
    >
      <Sheet sx={{ minHeight: '100dvh' }}>
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
              <Route path='music-player' element={<MusicPlayer />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Sheet>
    </CssVarsProvider>
  );
}

export default App;
