import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import fetchRequest from "../../../network";
import { SwalError } from "../../../utils/appAlerts";
import { setTheme } from "../../../utils/appTheme";
import {
    ThemeBannerSection,
    ThemeContactForm,
    ThemeContentSection,
    ThemeFooterSection
} from "../../theme";
import './styles.css';

const Profile = () => {

    const navigate = useNavigate();

    const [ projects, setProjects ] = useState([]);
    const [ sliceIndex, setSliceIndex ] = useState(3);

    const navLinks = [
        {
            label:"Projects",
            link:"#project-list",
            labelClass:"m-r-15" 
        },
        {
            label:"Contact",
            link:"#contact",
            labelClass:""
        }
    ];

    useEffect(()=>{
        const fetchProjects=async()=>{
            fetchRequest.get('/project/')
                .then((response)=>{
                    if (response?.Status === 200){
                        setProjects(response?.Data)
                    }
                })
                .catch((error)=>{
                    console.log("ERROR", error);
                    SwalError(error?.message);
                })
        };
        fetchProjects();
    },[]);

    return (
        <div>
            <ThemeBannerSection
                title="Discover My Story"
                navLink={navLinks}
                content={()=>(
                    <>
                        <div className="left-column">
                            <img id="profile_pic" src={require('../../../resources/images/lalit.jpeg')} alt="profile-img" />
                            <br />
                            <h5 className="profile-name">Hi, I'm Lalit Verma</h5>

                            <div id="theme-options-wrapper">
                                <button data-mode="light" id="light-mode" className="theme-dot" onClick={()=>setTheme('light')}/>
                                <button data-mode="blue" id="blue-mode" className="theme-dot" onClick={()=>setTheme('dark')}/>
                            </div>

                            <p id="settings-note">*Theme settings will be saved for<br />your next vist</p>
                        </div>

                        <div className="right-column">
                            <div id="preview-shadow">
                                <div id="preview">
                                    <div id="corner-tl" className="corner"></div>
                                    <div id="corner-tr" className="corner"></div>
                                    <h3>What I Do</h3>
                                    <p>I am a lead developer with 8+ years of experience developing innovative software solutions and applications for enterprise customers.</p>
                                    <div id="corner-br" className="corner"></div>
                                    <div id="corner-bl" className="corner"></div>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            />
            <ThemeContentSection
                content={()=>(
                    <div className="about-wrapper">
                        <div className="about-me">
                            <h4>DISCOVER MORE</h4>
                            <p>As a software developer, I am a skilled professional who designs, develops and maintains software applications and systems.</p>

                            <p>I have expertise in programming languages like Python, ReactJs and React-Native also with software development methodologies and tools.</p>

                            <p>Overall, my job as a software developer is challenging, rewarding, and essential to the success of many businesses and organizations.</p>

                            <hr />
                            <h4>TOP EXPERTISE</h4>
                            <p>Fullstack developer with primary focus on Django + ReactJs and Django + React-Native: <a target="_blank" rel="noreferrer" href={require('../../../resources/files/resume.pdf')}>Download Resume</a></p>
                            
                            <div id="preview-shadow">
                                <div id="preview">
                                    <div id="corner-tl" className="corner"></div>
                                    <div id="corner-tr" className="corner"></div>
                                    <ul>
                                        <li>Python</li>
                                        <li>Django</li>
                                        <li>ReactJs</li>
                                        <li>React-Native</li>
                                        <li>JavaScript</li>
                                        <li>NextJs</li>
                                        <li>Angular</li>
                                        <li>HTML/CSS</li>
                                    </ul>
                                    <div id="corner-br" className="corner"></div>
                                    <div id="corner-bl" className="corner"></div>
                                </div>
                            </div>
                        </div>


                        <div className="social-links">
                            <img id="social_img" src={require('../../../resources/images/follow.jpeg')} alt="social-img" />
                        </div>

                    </div>
                )}
            />
            <section className="s1" id="project-list">
                <div className="main-container">
                    <h3 className="content-header" id="projects">Recent Projects</h3>

                    <div className="post-wrapper">
                        {
                            projects?.slice(0, sliceIndex)?.map((i, idx)=>(
                                <div key={idx}>
                                    <div className="post">
                                        <img className="thumbnail" src={i?.image} alt={`img-${idx}`}/>
                                        <div className="post-preview">
                                            <h6 className="post-title">{i?.project_name}</h6>
                                            <p className="post-intro">{i?.short_description}</p>
                                            <div className="card-more">
                                                <button className="link-button" onClick={()=>navigate("/project-detail",{
                                                    state:{
                                                        id:i?.id
                                                    }
                                                })}>Read More</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    {
                        sliceIndex !== projects?.length &&
                        <p align="center">
                            <a href="#projects" onClick={()=>setSliceIndex(projects?.length)}>View More</a>
                        </p>
                    }
                </div>
            </section>
            <ThemeContactForm/>
            <ThemeFooterSection/>
        </div>
    )
};

export default Profile;