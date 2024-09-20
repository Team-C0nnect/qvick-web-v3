import { useQuery } from "react-query";
import { AxiosError } from "axios";
import { memberType } from "src/types/member/member.type";
import memberRepositoryImpl from "src/repositories/memberRepository/memberRepositoryImpl";
import { qvickQueryKey } from "src/queries/queriesKey";

export const useGetAllMembers = () => {
    return useQuery<memberType[], AxiosError>({
        queryKey: [qvickQueryKey.member.getAll],
        queryFn: memberRepositoryImpl.getAllMembers,
        staleTime: 30 * 1000,
        cacheTime: 60 * 1000,
    });
};

export const useGetCheckedMembersTrue = () => {
    return useQuery<memberType[], AxiosError>({
        queryKey: [qvickQueryKey.member.getCheckedTrue],
        queryFn: () => memberRepositoryImpl.getCheckedMembers(true),
        staleTime: 30 * 1000,
        cacheTime: 60 * 1000,
    });
};

export const useGetCheckedMembersFalse = () => {
    return useQuery<memberType[], AxiosError>({
        queryKey: [qvickQueryKey.member.getCheckedFalse],
        queryFn: () => memberRepositoryImpl.getCheckedMembers(false),
        staleTime: 30 * 1000,
        cacheTime: 60 * 1000,
    });
};
