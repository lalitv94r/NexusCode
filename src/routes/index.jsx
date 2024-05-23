import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../views/pages/layout";
import PageNotFound from "../views/pages/pageNotFound";

const DefaultRouters = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/" element={<Layout/>}
                />
                <Route
                    path="*" element={<PageNotFound/>}
                />
            </Routes>
        </BrowserRouter>
    )
}

export default DefaultRouters;