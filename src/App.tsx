// import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NameEntryPage from './pages/NameEntryPage';
import MatchManagementPage from './pages/MatchManagementPage';
import GameManagementPage from './pages/GameManagementPage';
import ScoreDisplayPage from './pages/ScoreDisplayPage';
import Home from './pages/Home';


const App: React.FC = () => {
  return (
    <Router>
    <Switch>
      <Route path="/" component={HomePage} exact />
      <Route path="/name-entry" component={NameEntryPage} exact />
      <Route path="/match-management" component={MatchManagementPage} exact />
      <Route path="/game-management" component={GameManagementPage} exact />
      <Route path="/score-display" component={ScoreDisplayPage} exact />
      <Route component={Home} /> {/* Render Home component for unmatched routes */}
    </Switch>
  </Router>
  );
};

export default App;
