import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Main, ProjectPage } from './pages';
import { BackToTop } from './components';
import ScrollToTop from './utils/ScrollToTop';
import './App.css';

function App() {
  return (
    <div className="app">
      <BrowserRouter basename="/shawn-portfolio">
        <ScrollToTop />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/projects" exact component={ProjectPage} />
          <Redirect to="/" />
        </Switch>
        <BackToTop />
      </BrowserRouter>
    </div>
  );
}

export default App;