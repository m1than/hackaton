import { React } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/header.jsx';
import Games from './layouts/games.jsx';
import Csgo from './layouts/csgo.jsx';
import Dota from './layouts/dota.jsx';
import Rust from './layouts/rust.jsx';
import Tf2 from './layouts/tf2.jsx';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" exact component={Games} />
        <Route path="/csgo" exact component={Csgo} />
        <Route path="/dota" exact component={Dota} />
        <Route path="/rust" exact component={Rust} />
        <Route path="/tf2" exact component={Tf2} />
      </Switch>
    </div>
  );
}

export default App;