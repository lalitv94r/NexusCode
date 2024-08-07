import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import fetchRequest from "../../../network";
import {
    ThemeBannerSection,
    ThemeContactForm,
    ThemeContentSection,
    ThemeFooterSection
} from "../../theme";
import './styles.css';

const ProjectDetail=()=>{

    const location = useLocation();
    const [project, setProject] = useState([]);

    const navLinks = [
        {
            label:"Profile",
            link:"/",
            labelClass:""
        }
    ];

    useEffect(()=>{
        const fetchProjectById=()=>{
            fetchRequest.get(`/project/${location?.state?.id}/`)
                .then((response)=>{
                    if (response?.Response && response?.Status === 200){
                        setProject(response?.Data?.[0]);
                    }
                })
                .catch((error)=>{
                    console.log("ERROR", error);
                })
        }
        fetchProjectById();
    },[location?.state?.id]);

    return (
        <div>
            <ThemeBannerSection
                title={project?.project_name}
                navLink={navLinks}
                content={()=>(
                    <div className="main-container-second">
                        {/* <div className="intro-wrapper"> */}
                            <img className="banner-img" src={project?.image} alt="banner-img" />
                        {/* </div> */}
                    </div>
                )}
            />
            <ThemeContentSection
                content={()=>(
                    <div className="about-wrapper-content">
                        <div>
                            <h4>{project?.project_name}</h4>
                            <p>{project?.description}</p>
                        </div>
                        <div>
                            <div id="preview-shadow">
                                <div id="preview">
                                    <div id="corner-tl" className="corner"></div>
                                    <div id="corner-tr" className="corner"></div>
                                    <h3 className="no-extra-space">Technologies & Frameworks</h3>
                                    <ul>
                                        {
                                            project?.tech?.map((i, idx)=>(
                                                <li key={idx}>{i?.tech_name}</li>
                                            ))
                                        }
                                    </ul>
                                    <div id="corner-br" className="corner"></div>
                                    <div id="corner-bl" className="corner"></div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                )}
            />
            <ThemeContactForm/>
            <ThemeFooterSection/>
        </div>
    )
}

export default ProjectDetail;