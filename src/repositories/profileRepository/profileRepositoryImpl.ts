import { patchProfile, profileRepository } from "src/repositories/profileRepository/profileRepository";
import { profileType } from "src/types/profile/profile.type";
import QvickAxios from "src/libs/axios/customAxios";

class ProfileRepositoryImpl implements profileRepository {
    public async getProfileInfo(): Promise<profileType> {
        const { data } = await QvickAxios.get("/user");
        return data;
    }

    public async patchProfile(pramsData: patchProfile): Promise<void> {
        await QvickAxios.patch("/profile", pramsData);
    }
}

export default new ProfileRepositoryImpl();
