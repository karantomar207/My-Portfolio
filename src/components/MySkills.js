import React from 'react';

export const MySkills = () => {
  
  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>I am a creative designer and developer, who aims to work with small businesses and marginalized communities to bring their passions to life. I offer both design and development services of web applications or websites!</p>
                        <div className="new-container">
            

                          <div className="skill-box">
                              <span className="title">Website Designing</span>
                              <div className="skill-bar">
                                  <span className="skill-per html">
                                      <span className="tooltip">95%</span>
                                  </span>
                              </div>
                          </div>
                          <div className="skill-box">
                              <span className="title">Web Developement</span>
                              <div className="skill-bar">
                                  <span className="skill-per css">
                                      <span className="tooltip">80%</span>
                                  </span>
                              </div>
                          </div>
                          <div className="skill-box">
                              <span className="title">App Developement</span>
                              <div className="skill-bar">
                                  <span className="skill-per javascript">
                                      <span className="tooltip">60%</span>
                                  </span>
                              </div>
                          </div>
                          <div className="skill-box">
                              <span className="title">Support Services</span>
                              <div className="skill-bar">
                                  <span className="skill-per nodejs">
                                      <span className="tooltip">75%</span>
                                  </span>
                              </div>
                          </div>
                          
                      </div>
                    </div>
                </div>
            </div>
        </div>
        
    </section>
  )
}
