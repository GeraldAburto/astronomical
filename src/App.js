import React from 'react';
import Routes from './Routes';
import MainLayout from './layouts/MainLayout/MainLayout';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <MainLayout>
      <Routes />
    </MainLayout>
  );
}

export default App;
