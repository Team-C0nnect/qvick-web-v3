import { useQuery } from "react-query";
import { AxiosError } from "axios";
import { memberType } from "src/types/member/member.type";
import memberRepositoryImpl from "src/repositories/memberRepository/memberRepositoryImpl";
import { qvickQueryKey } from "src/queries/queriesKey";

export const useGetMembers = () => {
    return useQuery<memberType[], AxiosError>(
        [qvickQueryKey.member.getAll],
        async () => await memberRepositoryImpl.getMembers(),
        {
            staleTime: 30 * 1000,
            cacheTime: 60 * 1000,
        }
    );
};