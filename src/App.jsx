import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// import myHistory from './myHistory';

import Header from './components/Header';
import Home from './pages/Home';
import Ranking from './pages/Ranking';
// import StartupPage from './pages/StartupPage';

import GlobalStyles from './styles/global';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <main>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/ranking" component={Ranking} />
          {/* <Route path="/startup/:sid" component={StartupPage} /> */}
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
