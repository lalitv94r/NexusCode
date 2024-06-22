import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Layout = React.lazy(()=>import("../views/layout"));
const PageNotFound = React.lazy(()=>import("../views/pages/pageNotFound"));
const ProjectDetail = React.lazy(()=>import("../views/pages/projectDetails"));

const DefaultRouters = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={(<h1>Loading...</h1>)}>
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