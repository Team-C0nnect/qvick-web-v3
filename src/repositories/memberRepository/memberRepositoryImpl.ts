import QvickAxios from "src/libs/axios/customAxios";
import { memberType } from "src/types/member/member.type";
import { memberRepository } from "./memberRepository";

class MemberRepositoryImpl implements memberRepository {
    public async getAllMembers(): Promise<memberType[]> {
        const { data } = await QvickAxios.get("/check");
        return data.data;
    }

    public async getCheckedMembers(checked: boolean): Promise<memberType[]> {
        const { data } = await QvickAxios.get("/check", {
            params: { checked }
        });
        return data.data; 
    }
}

export default new MemberRepositoryImpl();
