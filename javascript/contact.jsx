import React from 'react';

const Contact = () => (
  <section className="contact">
    <h1 className="copy green">Let's talk.</h1>
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
          <img src="assets/icons/twitter.png"/>
        </a>
      </li>
    </ul>
    <form>
      <div>
        <label for="name">
          NAME
        </label>
        <input id="name"/>
      </div>

      <div>
        <label for="email">
          EMAIL
        </label>
        <input id="email"/>
      </div>

      <div className="message">
        <label for="message">
          MESSAGE
        </label>
        <input id="message"/>
      </div>

      <input type="submit" className="contact-submit" value="SUBMIT"/>
    </form>
  </section>
);

export default Contact;