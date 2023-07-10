import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Header from './components/header';
import './components/css/style.css';
import Main from './components/main';

function App() {
  return (
    <div className="App container text-center border border-muted rounded mt-5 col-sm-12 col-md-8 col-lg-6">
      <Header />
      <Main />
    </div>
  );
}

export default App;
