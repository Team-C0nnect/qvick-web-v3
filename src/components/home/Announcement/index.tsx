import React, { useState } from "react";
import { useGetAnnouncement, useDeleteAnnouncement } from "src/queries/announcement/announcement.query";
import { AnnouncementTypes } from "src/types/Announcement/announcement.types";
import * as S from "src/components/home/Announcement/style";

const Announcement = () => {
    const { data: announcements, isLoading } = useGetAnnouncement();
    const { mutate: deleteAnnouncement } = useDeleteAnnouncement();
    const [selectedAnnouncement, setSelectedAnnouncement] = useState<number | null>(null);

    if (isLoading) return <p>Loading...</p>;

    const handleDelete = (idx: number) => {
        if (window.confirm("정말 삭제하시겠습니까?")) {
            deleteAnnouncement(idx);
        }
    };

    return (
        <S.AnnouncementBackground>
            <S.AnnouncementContainer>
                <h2>공지사항</h2>
                <S.AnnouncementList>
                    {announcements?.map((announcement: AnnouncementTypes) => (
                        <S.AnnouncementItem
                            key={announcement.idx}
                            onClick={() => setSelectedAnnouncement(announcement.idx)}
                            selected={selectedAnnouncement === announcement.idx}
                        >
                            <S.AnnouncementInfo>
                                <p>{announcement.writer}</p>
                                <p>{announcement.content}</p>
                                <p>{new Date(announcement.createdDateTime).toLocaleDateString()}</p>
                            </S.AnnouncementInfo>
                            <S.ButtonContainer>
                                <S.EditButton onClick={() => alert("수정 기능 구현 예정")}>수정</S.EditButton>
                                <S.DeleteButton onClick={() => handleDelete(announcement.idx)}>삭제</S.DeleteButton>
                            </S.ButtonContainer>
                        </S.AnnouncementItem>
                    ))}
                </S.AnnouncementList>
            </S.AnnouncementContainer>
        </S.AnnouncementBackground>
    );
};

export default Announcement;