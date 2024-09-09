import React from "react";
import { Route, Routes } from "react-router-dom";
import Sign from "src/pages/auth/page";
import Notfound from "src/components/common/notfound";
import MainPage from "src/pages/Main/page";

const Routers = () => {
    return (
        <Routes>
            <Route path="/sign" element={<Sign />} />
            <Route path="*" element={<Notfound />} />
            <Route path="/main" element={<MainPage />} />
        </Routes>
    )
}

export default Routers;