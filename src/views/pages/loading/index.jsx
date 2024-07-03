import React from "react";
import './styles.css';
import lightVideo from '../../../resources/videos/lightLoading.mp4';
import darkVideo from '../../../resources/videos/darkLoading.mp4';


const LoadingScreen=()=>{
    let theme = localStorage.getItem('theme');
    
    return (
        <div className="loading-container">
            <video width={`${window?.innerHeight}px`} height={`${window?.innerHeight}px`} controls={false} autoPlay loop >
                <source src={theme === 'dark' ? darkVideo : lightVideo} type="video/mp4"/>
            </video>
        </div>
    )
}

export default LoadingScreen;