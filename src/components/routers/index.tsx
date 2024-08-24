import React from "react";
import { Route, Routes } from "react-router-dom";
import Sign from "src/pages/auth/page"
import Notfound from "src/components/common/notfound";

const Routers = () => {
    return (
        <Routes>
            <Route path="/sign" element={<Sign />} />
            <Route path="*" element={<Notfound />} />
        </Routes>
    )
}

export default Routers;