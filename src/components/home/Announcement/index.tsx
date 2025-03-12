import React, { useState } from "react";
import {
    useGetAnnouncement,
    useDeleteAnnouncement,
    usePostAnnouncement
} from "src/queries/announcement/announcement.query";
import { AnnouncementTypes } from "src/types/Announcement/announcement.types";
import * as S from "src/components/home/Announcement/style";

const Announcement = () => {
    const { data: announcements, isLoading, refetch } = useGetAnnouncement();
    const { mutate: deleteAnnouncement } = useDeleteAnnouncement();
    const { mutate: postAnnouncement } = usePostAnnouncement();

    const [selectedAnnouncement, setSelectedAnnouncement] = useState<number | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [searchQuery, setSearchQuery] = useState("");

    if (isLoading) return <p>Loading...</p>;

    const handleDelete = (idx: number) => {
        if (window.confirm("정말 삭제하시겠습니까?")) {
            deleteAnnouncement(idx, {
                onSuccess: () => {
                    refetch();
                }
            });
        }
    };

    const handlePost = () => {
        if (!title.trim() || !content.trim()) {
            alert("제목과 내용을 입력해주세요.");
            return;
        }
        postAnnouncement({ title, content }, {
            onSuccess: () => {
                setIsModalOpen(false);
                setTitle("");
                setContent("");
                refetch();
            }
        });
    };

    const filteredAnnouncements = announcements?.filter((announcement: AnnouncementTypes) =>
        announcement.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        announcement.content.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <S.AnnouncementBackground>
            <S.HeaderContainer>
                <S.Header>
                    <S.AnnouncementTitle>공지사항</S.AnnouncementTitle>
                    <S.SearchInput
                        type="text"
                        placeholder="찾으시는 점호내용을 입력해주세요."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <S.WriteButton onClick={() => setIsModalOpen(true)}>글쓰기</S.WriteButton>
                </S.Header>
            </S.HeaderContainer>
            <S.AnnouncementContainer>
                <S.AnnouncementList>
                    {filteredAnnouncements?.map((announcement: AnnouncementTypes) => (
                        <S.AnnouncementItem
                            key={announcement.idx}
                            onClick={() => setSelectedAnnouncement(announcement.idx)}
                            selected={selectedAnnouncement === announcement.idx}
                        >
                            <S.AnnouncementInfo>
                                <h3>{announcement.title}</h3>
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

            {isModalOpen && (
                <S.ModalOverlay>
                    <S.ModalContainer>
                        <S.ModalTitle>공지사항 작성</S.ModalTitle>
                        <S.Input
                            type="text"
                            placeholder="제목을 입력하세요"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <S.TextArea
                            placeholder="내용을 입력하세요"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        />
                        <S.ButtonContainer>
                            <S.CancelButton onClick={() => setIsModalOpen(false)}>취소</S.CancelButton>
                            <S.SubmitButton onClick={handlePost}>등록</S.SubmitButton>
                        </S.ButtonContainer>
                    </S.ModalContainer>
                </S.ModalOverlay>
            )}
        </S.AnnouncementBackground>
    );
};

export default Announcement;
