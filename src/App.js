import React from 'react';
import './App.css';
import DefaultRouters from './routes';
import { setTheme } from './utils/appTheme';

function App() {
  
  let theme = localStorage.getItem('theme');
  if (theme === null){
    setTheme('light');
  }else{
    setTheme(theme);
  }

  return (
    <div>
      <DefaultRouters/>
    </div>
  );
}

export default App;
