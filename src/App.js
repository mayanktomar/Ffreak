import React from 'react';

import './App.css';
import MainComponent from './components/MainComponent';
import {Switch,Route,BrowserRouter} from 'react-router-dom';
import AuthScreen from './pages/AuthScreen';
import DashboardScreen from './pages/DashboardScreen';
import ProfileScreen from './pages/ProfileScreen';
import AchievementPage from './pages/AchievementPage';
import PrivateRoute from './PrivateRoutes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={AuthScreen}/>
          <Route exact path='/dashboard' component={DashboardScreen}/>
          <PrivateRoute exact path="/profile" component={ProfileScreen}/>
          <PrivateRoute exact path="/achievement" component={AchievementPage}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
