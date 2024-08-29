import { useAtom, useSetAtom } from 'jotai';
import { tokenValidAtom } from 'src/store/token/token.atom';

export const useTokenCheck = () => {
    const setTokenValid = useSetAtom(tokenValidAtom);
    const [tokenValid] = useAtom(tokenValidAtom);

    const setTokenCheck = (token: boolean): void => {
        setTokenValid(token);
    };

    const getTokenCheck = () => {
        return tokenValid;
    };

    return { setTokenCheck, getTokenCheck };
};
