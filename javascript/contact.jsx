import React from 'react';

const Contact = () => (
  <section className="contact">
    <h1 className="copy green">Let's talk.</h1>
    <ul>
      <li><img src="assets/icons/twitter.png"/></li>
      <li><img src="assets/icons/twitter.png"/></li>
      <li><img src="assets/icons/twitter.png"/></li>
      <li><img src="assets/icons/twitter.png"/></li>
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