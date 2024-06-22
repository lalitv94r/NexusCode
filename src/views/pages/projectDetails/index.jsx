import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import fetchRequest from "../../../network";

const ProjectDetail=()=>{

    const location = useLocation();
    const [project, setProject] = useState([]);

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
            <h1>{project?.project_name}</h1>
        </div>
    )
}

export default ProjectDetail;