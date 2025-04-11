import QvickAxios from "src/libs/axios/customAxios";
import { AnnouncementTypes } from "src/types/Announcement/announcement.types";
import { AnnouncementRepository } from "src/repositories/announcementRepository/announcementRepository";



class AnnouncementRepositoryImpl implements AnnouncementRepository {
    public async getAnnouncement(): Promise<AnnouncementTypes[]> {
        const { data } = await QvickAxios.get('/notice/list');
        return data.data;
    }

    public async getDetailAnnouncement(): Promise<AnnouncementTypes[]> {
        const { data } = await QvickAxios.get('/notice');
        return data.data;
    }

    public async patchAnnouncement(): Promise<AnnouncementTypes[]> {
        const { data } = await QvickAxios.patch('/notice');
        return data.data;
    }

    public async postAnnouncement(newAnnouncement: { title: string; content: string }): Promise<AnnouncementTypes> {
        const { data } = await QvickAxios.post('/notice', newAnnouncement);
        return data.data;
    }

    public async deleteAnnouncement(idx: number): Promise<void> {
        await QvickAxios.delete(`/notice`, { params: { idx } });
    }
}

export default new AnnouncementRepositoryImpl();
