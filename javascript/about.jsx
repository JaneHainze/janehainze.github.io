import React from 'react';

const About = () => (
  <section className="copy">
    <article className="about">
      <p>
        I’m Jane Hainze, a UX pro with a background in writing, research, and communications. In my past life working at a tech PR agency, I helped tech companies tell complex stories for the right audiences, oftentimes via ghostwriting and publishing articles in outlets like Fortune, Quartz, and Entrepreneur.

        <br/>
        <br/>

        <span className="green">
          A desire to build and shape the products I once told stories about&nbsp;
        </span>
        – and a long-standing interest in exploring the intersection of people, technology and design – led me to UX. I love&nbsp;

        <span className="green">
          connecting the dots between the verbal and visual,&nbsp;
        </span>

        helping businesses identify and dig into into spoken (and unspoken) user needs, and designing accordingly.
      </p>
    </article>

    <section className="about-numbers">
      <div>
        <h2>By the numbers:</h2>
        <small className="green resume">(and beyond my resumé)</small>
      </div>
      <section className="about-numbers-list">
        <div className="about-fact">
          <figure>18</figure>
          <div>Played violin for over 18 years.</div>
        </div>

        <br/>

        <div className="about-fact">
          <figure>300</figure>
          <div>Spent over 300 hours DJing a radio show and running my college's radio station</div>
        </div>

        <br/>

        <div className="about-fact">
          <figure>3</figure>
          <div>Lived in three countries: (Spain, England, U.S.)</div>
        </div>

      </section>
    </section>
  </section>
);

export default About;