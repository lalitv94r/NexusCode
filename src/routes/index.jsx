import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoadingScreen from "../views/pages/loading";

const Layout = React.lazy(()=>import("../views/layout"));
const PageNotFound = React.lazy(()=>import("../views/pages/pageNotFound"));
const ProjectDetail = React.lazy(()=>import("../views/pages/projectDetails"));

const DefaultRouters = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<LoadingScreen/>}>
                <Routes>
                    <Route
                        path="/" element={<Layout/>}
                    />
                    <Route
                        path="/project-detail" element={<ProjectDetail/>}
                    />
                    <Route
                        path="*" element={<PageNotFound/>}
                    />
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}

export default DefaultRouters;