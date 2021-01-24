import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Startup from './pages/Startup';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/startup/:sid" component={Startup} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
