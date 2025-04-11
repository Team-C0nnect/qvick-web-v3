import QvickAxios from "src/libs/axios/customAxios";
import { memberType } from "src/types/member/member.type";
import { memberRepository } from "./memberRepository";

class MemberRepositoryImpl implements memberRepository {
    public async getAllMembers(page: number = 1, size: number = 1000): Promise<memberType[]> {
        const { data } = await QvickAxios.get("/user/list", { params: { page, size } });
        return data.data.filter((member: memberType) => member.userRole === "USER");
    }
}

export default new MemberRepositoryImpl();