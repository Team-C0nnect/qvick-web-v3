import React from "react";
import { Route, Routes } from "react-router-dom";
import Sign from "src/pages/auth/page"

const Routers = () => {
    return (
        <Routes>
            <Route path="/sign" element={<Sign />} />
        </Routes>
    )
}

export default Routers;