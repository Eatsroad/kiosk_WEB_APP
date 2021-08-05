import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DetailMenuPage from '../page/detail';
import HomePage from '../page/home';

const AppRouter = () => (
  <Switch>
    <Route exact path="/:storeId" component={HomePage}/>
    <Route exact path="/:storeId/menu/:menuId" component={DetailMenuPage}/>
    <Route exact path="/bucket/:tableId"/>
    <Route exact path="/reciept"/>
    <Route exact path="/check"/>
    <Route exact path="/complete"/>
  </Switch>

);

export default AppRouter;