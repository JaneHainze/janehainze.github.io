import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute } from 'react-router'

import Splash from './splash'

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render((
    <Router>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="process" component={Process}/>
        <Route path="portfolio" component={Portfolio}/>
        <Route path="resume" component={Resume}/>
        <Route path="about" component={About}/>
        <Route path="contact" component={Contact}/>
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
                  <Link to={'/process'} className="header-link">My Process</Link>
                </li>
                <li className="header-item exp">
                  <Link to={'/portfolio'} className="header-link">Portfolio</Link>
                </li>
                <li className="header-item exp">
                  <Link to={'/resume'} className="header-link">Resum&eacute;</Link>
                </li>
                <li className="header-item">
                  <Link to={'/'} className="header-link">
                    <img className="icon" src="http://www.polyvore.com/cgi/img-thing?.out=jpg&size=l&tid=81892287"/>
                  </Link>
                </li>
                <li className="header-item exp">
                  <a href="https://medium.com/@jane_weese" className="header-link">Writing</a>
                </li>
                <li className="header-item exp">
                  <Link to={'/about'} className="header-link">About</Link>
                </li>
                <li className="header-item exp">
                  <Link to={'/contact'} className="header-link">Contact</Link>
                </li>
              </ul>
            </nav>
          </header>

          { this.props.children }
    		</div>

    		<footer>
    			<small>&copy; Jane Hainze 2016</small>
    		</footer>
      </div>

    );
  }
}

const Home = () => (
  <main>
    <section>
      <h2 className="copy hi fade-in one">Hi there.</h2>
      <h2 className="copy jane fade-in two">I'm Jane - a UX designer, researcher, and writer living and working in SF.</h2>
    </section>
  </main>
);

const Process = () => (
  <div>
    My Process!
  </div>
);

const Portfolio = () => (
  <div>
    My Portfolio!
  </div>
);

const Resume = () => (
  <div>
    My stuffs!
  </div>
);

const About = () => (
  <div>
    Me!
  </div>
);

const Contact = () => (
  <div>
    Call me!
  </div>
);