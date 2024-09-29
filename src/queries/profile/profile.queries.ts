import { useMutation, useQuery } from "react-query";
import { AxiosError } from "axios";
import { profileType } from "src/types/profile/profile.type";
import profileRepositoryImpl from "src/repositories/profileRepository/profileRepositoryImpl";
import { qvickQueryKey } from "src/queries/queriesKey";

export const usePatchProfileMutation = () => {
    return useMutation(profileRepositoryImpl.patchProfile);
};

export const useGetProfile = () => {
    return useQuery<profileType, AxiosError>({
        queryKey: [qvickQueryKey.profile.getProfile],
        queryFn: profileRepositoryImpl.getProfileInfo,
        staleTime: 30 * 1000,
        cacheTime: 60 * 1000,
    });
};
