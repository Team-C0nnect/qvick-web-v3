import { useQuery, useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { AnnouncementTypes } from "src/types/Announcement/announcement.types";
import AnnouncementRepositoryImpl from "src/repositories/announcementRepository/announcementRepositoryImpl";
import { qvickQueryKey } from "src/queries/queriesKey";

export const useGetAnnouncement = () => {
    return useQuery<AnnouncementTypes[], AxiosError>({
        queryKey: [qvickQueryKey.announcement.getAnnouncement],
        queryFn: AnnouncementRepositoryImpl.getAnnouncement,
        staleTime: 30 * 1000,
    });
};

export const usePatchAnnouncement = () => {
    return useQuery<AnnouncementTypes[], AxiosError>({
        queryKey: [qvickQueryKey.announcement.patchAnnouncement],
        queryFn: AnnouncementRepositoryImpl.patchAnnouncement,
    })
}

export const usePostAnnouncement = () => {
    return useQuery<AnnouncementTypes[], AxiosError>({
        queryKey: [qvickQueryKey.announcement.postAnnouncement],
        queryFn: AnnouncementRepositoryImpl.postAnnouncement,
    })
}

export const useDeleteAnnouncement = () => {
    return useMutation<void, AxiosError, number>({
        mutationFn: (id: number) => AnnouncementRepositoryImpl.deleteAnnouncement(id),
    });
};
