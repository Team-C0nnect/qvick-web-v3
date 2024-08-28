import { ProvidersProps } from "../providers/type";
import { useEffect } from "react";
import { ACCESS_TOKEN_KEY } from 'src/constants/token/token.constants';
import Token from 'src/libs/token/token';
import {tokenCheck} from "src/libs/tokenCheck/tokenCheck";
const AuthCheck = ({ children }: ProvidersProps)=>{
    const { setTokenCheck } = tokenCheck();

    useEffect(() => {
        const token = Token.getToken(ACCESS_TOKEN_KEY);
        if (token) {
            setTokenCheck(true);
        } else {
            setTokenCheck(false);
        }
    }, [setTokenCheck]);

    return <>{children}</>;
}
export default AuthCheck;