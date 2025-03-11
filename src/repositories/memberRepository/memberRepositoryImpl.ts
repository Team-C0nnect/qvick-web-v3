import QvickAxios from "src/libs/axios/customAxios";
import { memberType } from "src/types/member/member.type";
import { memberRepository } from "./memberRepository";

class MemberRepositoryImpl implements memberRepository {
    public async getAllMembers(page: number = 1, size: number = 10): Promise<memberType[]> {
        const { data } = await QvickAxios.get("/user/list", {
            params: { page, size }
        });
        return data.data;
    }

    public async getCheckedMembers(checked: boolean, page: number = 1, size: number = 10): Promise<memberType[]> {
        const { data } = await QvickAxios.get("/check", {
            params: { checked, page, size }
        });
        return data.data;
    }
}

export default new MemberRepositoryImpl();
