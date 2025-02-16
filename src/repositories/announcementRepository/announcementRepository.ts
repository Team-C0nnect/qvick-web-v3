import { AnnouncementTypes } from "src/types/Announcement/announcement.types";

export interface AnnouncementRepository {
    getAnnouncement(): Promise<AnnouncementTypes[]>;
    getDetailAnnouncement(): Promise<AnnouncementTypes[]>;
    patchAnnouncement(): Promise<AnnouncementTypes[]>;
    postAnnouncement(): Promise<AnnouncementTypes[]>;
    deleteAnnouncement(): Promise<AnnouncementTypes[]>;
}
