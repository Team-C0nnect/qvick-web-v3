import React from "react";
import { Route, Routes } from "react-router-dom";
import Sign from "src/pages/auth/page";
import Notfound from "src/components/common/notfound";
import MainPage from "src/pages/Main/page";
import Announcement from "src/pages/Announcement/page";
import CkMember from "src/pages/CkMember/page";
import NckMember from "src/pages/NckMember/page";

const Routers = () => {
    return (
        <Routes>
            <Route path="/sign" element={<Sign />} />
            <Route path="*" element={<Notfound />} />
            <Route path="/main" element={<MainPage />} />
            <Route path="/announcement" element={<Announcement />} />
            <Route path="/ckmember" element={<CkMember />} />
            <Route path="/nckmember" element={<NckMember />} />
        </Routes>
    );
};

export default Routers;
