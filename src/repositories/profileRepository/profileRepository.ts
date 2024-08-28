import { profileType } from "src/types/profile/profile.type";

export interface profileRepository {
    getProfileInfo(): Promise<profileType>;
}

export interface patchProfile {
    email : string,
    name : string,
    password : string,
    stdId : string,
    room : string,
    phoneNum : string,
    gender : string,
    userRole : string,
}