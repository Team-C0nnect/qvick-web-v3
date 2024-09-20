import { memberType } from "src/types/member/member.type";

export interface memberRepository {
    getAllMembers(): Promise<memberType[]>;
    getCheckedMembers(checked: boolean): Promise<memberType[]>;
}