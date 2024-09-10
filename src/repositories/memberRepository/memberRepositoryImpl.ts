import QvickAxios from "src/libs/axios/customAxios";
import { memberType } from "src/types/member/member.type";

export interface memberRepository {
    getAllMembers(): Promise<memberType[]>;
    getCheckedMembers(checked: boolean): Promise<memberType[]>;
}

class MemberRepositoryImpl implements memberRepository {
    public async getAllMembers(): Promise<memberType[]> {
        const { data } = await QvickAxios.get("/check");
        return data;
    }

    public async getCheckedMembers(checked: boolean): Promise<memberType[]> {
        const { data } = await QvickAxios.get("/check", {
            params: { checked }
        });
        return data;
    }
}

export default new MemberRepositoryImpl();
