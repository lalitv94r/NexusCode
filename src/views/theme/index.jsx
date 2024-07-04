import React, { useState } from "react";
import fetchRequest from "../../network";
import { SwalError, SwalSuccess } from "../../utils/appAlerts";
import { isNotNull } from "../../utils/constants";
import './styles.css';

//...Header Section...
const ThemeBannerSection = ({
    title="",
    navLink=[{
        label:"",
        link:"",
        labelClass:""
    }],
    content=null
}) => {
    return (
        <section className="s1">
            <div className="greeting-wrapper">
                <h3 className="page-title">{title}</h3>
            </div>
            <div className="main-container">
                
                <div className="intro-wrapper">
                    <div className="nav-wrapper">
                        <a href="/">
                            <div className="dots-wrapper">
                                <div id="dot-1" className="browser-dot"></div>
                                <div id="dot-2" className="browser-dot"></div>
                                <div id="dot-3" className="browser-dot"></div>
                            </div>
                        </a>


                        <ul id="navigation">
                            {
                                navLink?.map((i, idx)=>(
                                    <li key={idx} className={i?.labelClass}><a href={i?.link}>{i?.label}</a></li>
                                ))
                            }
                        </ul>
                    </div>
                    {
                        isNotNull(content) &&
                        <>
                            {content()}
                        </>
                    }
                </div>
            </div>
        </section>
    )
}

//...Middle Content Section...
const ThemeContentSection = ({
    content=null
}) => {
    return (
        <section className="s2">
            <div className="main-container">
                {
                    isNotNull(content) &&
                    <>
                        {content()}
                    </>
                }
            </div>
        </section>
    )
}

//...Contact Us Form...
const ThemeContactForm = () => {
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ message, setMessage ] = useState('');

    const handleFormSubmit=()=>{
        let body = {
            "name":name,
            "email":email,
            "description":message
        }
        fetchRequest.post('/accounts/contactus/', body)
            .then((response)=>{
                if (response?.Status === 202){
                    clearAll();
                    SwalSuccess("Thank you for your message. We will get back to you soon.");
                }else{
                    SwalError(response?.Data);
                }
            })
            .catch((error)=>{
                console.log("ERROR", error);
                SwalError(error?.message);
            });
    }

    const clearAll=()=>{
        setName('');
        setEmail('');
        setMessage('');
    }

    return (
        <section className="s2">
            <div className="main-container">
                <h3 className="content-header" id="contact">Get In Touch</h3>
                <form id="contact-form">
                    <label>Name</label>
                    <input
                        className="input-field"
                        type="text"
                        value={name}
                        onChange={(e)=>setName(e?.target?.value)}
                    />
                    <label>Email</label>
                    <input
                        className="input-field"
                        type="email"
                        value={email}
                        onChange={(e)=>setEmail(e?.target?.value)}
                    />
                    <label>Description</label>
                    <textarea
                        className="input-field"
                        value={message}
                        onChange={(e)=>setMessage(e?.target?.value)}
                    />
                    <div id="btn-container">
                        <button id="submit-btn" type="button"
                            onClick={()=>handleFormSubmit()}
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}

// ...Footer Section...
const ThemeFooterSection = () => {
    return (
        <section className="s1">
            <div className="flex-wrapper">
                <h3>Find me on LinkedIn <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/lalit-verma-a6460b1a4">click here.</a></h3>
            </div>
        </section>
    )
}

export {
    ThemeBannerSection,
    ThemeContentSection,
    ThemeContactForm,
    ThemeFooterSection
}