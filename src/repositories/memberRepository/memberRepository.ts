import { memberType } from "src/types/member/member.type";

export interface memberRepository {
    getMembers(): Promise<memberType[]>;
}