import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// import myHistory from './myHistory';

import Header from './components/Header';
import Home from './pages/Home';
import StartupPage from './pages/StartupPage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/startup/:sid" component={StartupPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
