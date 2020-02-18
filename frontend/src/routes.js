import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Cart from './pages/Cart';
import Favorite from './pages/Favorite';
import Main from './pages/main';
import Login from './pages/login';
import Cadastro from './pages/Cadastro';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/main/:id" component={Main} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/cart" component={Cart} />
      <Route exact path="/favorites" component={Favorite} />
      <Route exact path="/cadastro" component={Cadastro} />
    </Switch>
  );
}
