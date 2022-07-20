import React from 'react';
import authorPicture from '../../images/author-picture.jpg';
import './About.css';

const About = () => (
  <section className="about">
    <img src={authorPicture} alt="The author of the website" className="about__picture" />

    <div className="about__content">
      <h2 className="about__title">
        About the author
      </h2>

      <p className="about__paragraph">
        Hi! My name is Pavel Lantsman and I&apos;m a full-stack developer based in Israel.
      </p>

      <p className="about__paragraph">
        I built this website as part of Yandex Practicum100 program which I took part in. The
        frontend is build with React, and the backend with Node.js.
      </p>

      <p className="about__paragraph">
        You can find out more about me and contact me via my
        {' '}
        <a
          href="https://www.linkedin.com/in/pavel-lantsman"
          target="_blank"
          rel="noreferrer"
          className="about__link"
        >
          LinkedIn profile
        </a>
        {' '}
        or my
        {' '}
        <a
          href="https://github.com/Pavel-Lantsman"
          target="_blank"
          rel="noreferrer"
          className="about__link"
        >
          GitHub profile
        </a>
        .
      </p>
    </div>
  </section>
);

export default About;
