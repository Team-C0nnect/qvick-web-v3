import React, { useState } from "react";
import Login from "src/components/auth/Login/index"
import Signup from "src/components/auth/Signup/index";

const AuthSign = () => {
    const [isLogin, setIsLogin] = useState(true);
    return (
        <div className="authWrap">
            <div className="authView">
                {isLogin ? (
                    <Login setIsLogin={setIsLogin} />
                ) : (
                    <Signup setIsLogin={setIsLogin} />
                )}
            </div>
        </div>
    )
}

export default AuthSign;