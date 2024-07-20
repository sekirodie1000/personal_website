import React, { useEffect, useRef, useState } from 'react';
import headerImg from "../assets/img/header-img.svg";
import AOS from 'aos';
import 'aos/dist/aos.css';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

export const AboutMe = () => {
  const [activeTab, setActiveTab] = useState('education');
  const [counterStarted, setCounterStarted] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <section className="about-me">
      <div className="container">
        <div className="about-me-content" data-aos="fade-up">
          <div className="about-me-image" data-aos="fade-up">
            <img src={headerImg} alt="About Me" />
          </div>
          <div className="about-me-text" data-aos="fade-up">
            <h2>About Me</h2>
            <p>Currently pursuing a Master's degree in Computer Science at Leiden University, I transitioned from a background in Management Science to become a backend developer. This shift is driven by my passion for coding and my desire to have a deeper impact by mastering server-side technologies and building robust, efficient backend systems.</p>
            <div className="about-me-tabs" data-aos="fade-up">
              <button onClick={() => setActiveTab('education')}>Education</button>
              <button onClick={() => setActiveTab('certifications')}>Certifications</button>
            </div>
            <div className="about-me-info">
              {activeTab === 'education' ? (
                <div>
                  <p><li>Master of Computer Science, Leiden University</li></p>
                </div>
              ) : (
                <div>
                  <p>
                    <li>Neural Networks and Deep Learning, Coursera</li>
                    <li>Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization, Coursera</li>
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className="about-me-stats" data-aos="fade-left">
            <div>
              <h3>
                <CountUp end={2} duration={2}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
                +
              </h3>
              <p>Personal Projects</p>
            </div>
            <div>
              <h3>
                <CountUp end={8} duration={2}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
                +
              </h3>
              <p>Current GPA</p>
            </div>
            <div>
              <h3>
                <CountUp end={134} duration={2}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
                +
              </h3>
              <p>Hours Played in Sekiro</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
