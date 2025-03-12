import { AnnouncementTypes } from "src/types/Announcement/announcement.types";

export interface AnnouncementRepository {
    getAnnouncement(): Promise<AnnouncementTypes[]>;
    getDetailAnnouncement(): Promise<AnnouncementTypes[]>;
    patchAnnouncement(): Promise<AnnouncementTypes[]>;
    postAnnouncement(newAnnouncement: { title: string; content: string }): Promise<AnnouncementTypes>;
    deleteAnnouncement(id: number): Promise<void>;
}