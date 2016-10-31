import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router'

import Home from './home';
import Splash from './splash';
import About from './about';
import Process from './process';
import Portfolio from './portfolio';
import Resume from './resume';
import Contact from './contact';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render((
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="process" component={Process}/>
        <Route path="portfolio" component={Portfolio}/>
        <Route path="about" component={About}/>
      </Route>
    </Router>), root);
});

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="page-wrap">
          <header>
            <nav>
              <ul className="header-list">
                <li className="header-item exp">
                  <Link to={'/process'} className="header-link">Process</Link>
                </li>
                <li className="header-item exp">
                  <Link to={'/portfolio'} className="header-link">Portfolio</Link>
                </li>
                <li className="header-item">
                  <Link to={'/'} className="header-link">
                    <img className="icon" src="assets/images/header.jpg"/>
                  </Link>
                </li>
                <li className="header-item exp">
                  <a href="https://medium.com/@jane_weese" className="header-link">Writing</a>
                </li>
                <li className="header-item exp">
                  <Link to={'/about'} className="header-link">About</Link>
                </li>
              </ul>
            </nav>
          </header>

          <main className="tab-container">
            { this.props.children }
          </main>
    		</div>

    		<footer>
          <small className="green">Get in touch:</small>
          <ul>
            <li>
              <a href="https://twitter.com/Jane_Weese">
                <img src="assets/icons/twitter.png"/>
              </a>
            </li>
            <li>
              <a href="http://www.linkedin.com/in/jane-hainze">
                <img src="assets/icons/linked-in.svg"/>
              </a>
            </li>
            <li>
              <a href="https://medium.com/@jane_weese">
                <img src="assets/icons/medium.svg"/>
              </a>
            </li>
            <li>
              <a href="mailto:jane.hainze@gmail.com">
                <img src="assets/icons/mail.png"/>
              </a>
            </li>
          </ul>
    			<small className="copyright">&copy; Jane Hainze 2016</small>
    		</footer>
      </div>

    );
  }
}