// Libs
import React from 'react';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';

// Components
import App from './components/App';
import Home from './components/Home';
import About from './components/About';
import Languages from './components/Languages';
import Projects from './components/Projects';
import NotFound from './components/NotFound';
import LanguageContainer from './components/languages/LanguageContainer';
import LanguageList from './server/languages';
import Featured from './components/Featured';

// Routes
const routes = (
  <Router history={browserHistory}>
    <Route component={App}>
      <Route path="/" component={Home} />
      <Route path="about" component={About} title="About" />
      <Route path="projects" component={Projects} />
      <Route path="languages" component={Languages}>
        <IndexRedirect to="javascript" />
        <Route path="html" component={LanguageContainer} server={LanguageList.HTML} />
        <Route path="css" component={LanguageContainer} server={LanguageList.CSS} />
        <Route path="javascript" component={LanguageContainer} server={LanguageList.JS} />
      </Route>
      <Route path="featured/:topic/:subject" component={Featured} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
);

export default routes;
