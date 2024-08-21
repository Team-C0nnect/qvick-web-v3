class ErrorHandler {
    loginError = (status: number) => {
        switch (status) {
            case 400:
                return "탈퇴된 회원입니다.";
            case 401:
                return "회원정보가 일치하지 않습니다.";
            case 403:
                return "회원정보가 일치하지 않습니다.";
            case 404:
                return "가입되지 않은 회원입니다.";
            case 500:
                return "서버에 문제가 있습니다. 관리자에게 문의해주세요.";
            default:
                return "로그인에 실패하셨습니다.";
        }
    }

    signupError = (status: number) => {
        switch (status) {
            case 400:
                return  "요청되지 않습니다.";
            case 404:
                return "이미 존재하는 멤버입니다.";
            case 500:
                return "서버 오류가 발생하였습니다.";
            default:
                return "회원가입에 실패하였습니다.";
        }
    };
}

export default new ErrorHandler();