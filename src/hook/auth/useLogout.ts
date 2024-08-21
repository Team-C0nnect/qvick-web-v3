import Token from "src/libs/token/token";

const useLogout = () => {
    const handleLogout = () => {
        window.location.href = "/"
        Token.clearToken();
    }

    return { handleLogout };
}

export default useLogout;
