import { memberType } from "src/types/member/member.type";

export interface memberRepository {
    getMembers(page?: number, size?: number): Promise<memberType[]>;
}