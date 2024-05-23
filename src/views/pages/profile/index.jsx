import React, { useState } from "react";
import './styles.css';

const Profile = () => {
    const [ name, setName ] = useState('');
    const [ subject, setSubject ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ message, setMessage ] = useState('');

    return (
        <div>
            <section className="s1">
                <div className="main-container">
                    <div className="greeting-wrapper">
                        <h1>About me</h1>
                    </div>
                    <div className="intro-wrapper">
                        <div className="nav-wrapper">
                            <a href="{% url 'profile' %}">
                                <div className="dots-wrapper">
                                    <div id="dot-1" className="browser-dot"></div>
                                    <div id="dot-2" className="browser-dot"></div>
                                    <div id="dot-3" className="browser-dot"></div>
                                </div>
                            </a>


                            <ul id="navigation">
                                <li><a href="#contact">Contact</a></li>

                            </ul>
                        </div>

                        <div className="left-column">
                            <img id="profile_pic" src={require('../../../resources/images/lalit.jpeg')} alt="profile-img" />
                            <br />
                            <h5 className="profile-name">Hi, I'm Lalit Verma</h5>

                            <div id="theme-options-wrapper">
                                <div data-mode="light" id="light-mode" className="theme-dot"></div>
                                <div data-mode="blue" id="blue-mode" className="theme-dot"></div>
                                {/* <div data-mode="green" id="green-mode" className="theme-dot"></div>
                                <div data-mode="purple" id="purple-mode" className="theme-dot"></div> */}
                            </div>

                            <p id="settings-note">*Theme settings will be saved for<br />your next vist</p>
                        </div>

                        <div className="right-column">
                            <div id="preview-shadow">
                                <div id="preview">
                                    <div id="corner-tl" className="corner"></div>
                                    <div id="corner-tr" className="corner"></div>
                                    <h3>What I Do</h3>
                                    <p>I am a lead developer with 7+ years of experience developing innovative software solutions and applications for enterprise customers.</p>
                                    <div id="corner-br" className="corner"></div>
                                    <div id="corner-bl" className="corner"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="s2">
                <div class="main-container">

                    <div class="about-wrapper">
                        <div class="about-me">
                            <h4>More about me</h4>
                            <p>As a software developer, I am a skilled professional who designs, develops and maintains software applications and systems.</p>

                            <p>I have expertise in programming languages like Python, ReactJs and React-Native also with software development methodologies and tools.</p>

                            <p>Overall, my job as a software developer is challenging, rewarding, and essential to the success of many businesses and organizations.</p>

                            <hr />
                            <h4>TOP EXPERTISE</h4>
                            <p>Fullstack developer with primary focus on Django + ReactJs and Django + React-Native: <a target="_blank" href="{% static 'pdfs/resume.pdf' %}">Download Resume</a></p>

                            <div id="skills">
                                <ul>
                                    <li>Python</li>
                                    <li>Django</li>
                                    <li>ReactJs</li>
                                </ul>
                                <ul>
                                    <li>React-Native</li>
                                    <li>JavaScript</li>
                                    <li>NextJs</li>
                                </ul>
                                <ul>
                                    <li>Angular</li>
                                    <li>NativeScript</li>
                                    <li>HTML/CSS</li>
                                </ul>

                            </div>

                        </div>


                        <div class="social-links">
                            <img id="social_img" src={require('../../../resources/images/follow.jpeg')} alt="social-img" />
                        </div>

                    </div>
                    <hr />
                    <div class="flex-wrapper">
                        <h3>Find me on LinkedIn <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/lalit-verma-a6460b1a4">click here.</a></h3>

                    </div>
                </div>
            </section>
            <section class="s2">
                <div class="main-container">
                    <h3 class="content-header" id="contact">Get In Touch</h3>
                    <form id="contact-form">
                        <label>Name</label>
                        <input
                            className="input-field"
                            type="text"
                            value={name}
                            onChange={(e)=>setName(e?.target?.value)}
                        />
                        <label>Subject</label>
                        <input
                            className="input-field"
                            type="text"
                            value={subject}
                            onChange={(e)=>setSubject(e?.target?.value)}
                        />
                        <label>Email</label>
                        <input
                            className="input-field"
                            type="email"
                            value={email}
                            onChange={(e)=>setEmail(e?.target?.value)}
                        />
                        <label>Message</label>
                        <textarea
                            className="input-field"
                            value={message}
                            onChange={(e)=>setMessage(e?.target?.value)}
                        />
                        <button id="submit-btn" type="submit">
                            Submit
                        </button>
                    </form>
                </div>
            </section>
        </div>
    )
};

export default Profile;