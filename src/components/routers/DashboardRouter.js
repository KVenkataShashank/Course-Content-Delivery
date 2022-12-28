import React from "react";
import { Routes, Route } from "react-router-dom";
import BootstrapMenu from "../menubar/BootstrapMenu";

const DashboardRouter = () => {
    return (
        <div>
            <Routes>
                <Route path="" element={<BootstrapMenu />} />
            </Routes>
        </div>
    )
}
export default DashboardRouter