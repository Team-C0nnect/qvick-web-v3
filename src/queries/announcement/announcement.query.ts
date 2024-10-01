import { useQuery } from "react-query";
import { AxiosError } from "axios";
import { AnnouncementTypes } from "src/types/Announcement/announcement.types";
import AnnouncementRepositoryImpl from "src/repositories/announcementRepository/announcementRepositoryImpl";
import { qvickQueryKey } from "src/queries/queriesKey";

export const useGetAnnouncement = () => {
    return useQuery<AnnouncementTypes[], AxiosError>({
        queryKey: [qvickQueryKey.announcement.getAnnouncement],
        queryFn: AnnouncementRepositoryImpl.getAnnouncement,
        staleTime: 30 * 1000,
        cacheTime: 60 * 1000,
    });
}

export const useGetDetailAnnouncement = () => {
    return useQuery<AnnouncementTypes[], AxiosError>({
       queryKey: [qvickQueryKey.announcement.getDetailAnnouncement],
       queryFn: AnnouncementRepositoryImpl.getDetailAnnouncement,
       staleTime: 30 * 1000,
       cacheTime: 60 * 1000,
    });
}

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
    return useQuery<AnnouncementTypes[], AxiosError>({
        queryKey: [qvickQueryKey.announcement.deleteAnnouncement],
        queryFn: AnnouncementRepositoryImpl.deleteAnnouncement,
    })
}
