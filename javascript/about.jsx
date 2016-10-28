import React from 'react';

const About = () => (
  <section className="copy">
    <article className="about">
      <p>
        I’m Jane Hainze, a UX pro with a background in writing, research, and communications.

        <br/>
        <br/>

        <span className="green">
          A desire to build and shape the products I once told stories about&nbsp;
        </span>
        – and a long-standing interest in exploring the intersection of people, technology and design – led me to UX. I love seeing what makes people tick when it comes to tech, and

        <span className="green">
          striking a balance between the verbal and visual.&nbsp;
        </span>
      </p>
    </article>

    <section className="about-numbers">
      <div>
        <h2>By the numbers:</h2>
        <small className="green">(and beyond my resume)</small>
      </div>
      <section className="about-jane">
        <section className="about-numbers-list">
          <div className="about-fact">
            <figure>18</figure>
            <div>years spent playing the violin</div>
          </div>

          <br/>

          <div className="about-fact">
            <figure>3</figure>
            <div>Countries lived in: (Spain, England, U.S.)</div>
          </div>

          <br/>

          <div className="about-fact">
            <figure>288</figure>
            <div>hours spent DJing and hosting radio show</div>
          </div>

        </section>
        <img className="about-photo" src="assets/images/jane.png" />
      </section>

    </section>
  </section>
);

export default About;