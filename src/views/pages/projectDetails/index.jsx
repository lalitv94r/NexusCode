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
                    <img className="banner-img" src={project?.image} alt="banner-img" />
                )}
            />
            <ThemeContentSection
                content={()=>(
                    <div>
                        <h4>{project?.project_name}</h4>
                        <p>{project?.description}</p>
                    </div>
                )}
            />
            <ThemeContactForm/>
            <ThemeFooterSection/>
        </div>
    )
}

export default ProjectDetail;