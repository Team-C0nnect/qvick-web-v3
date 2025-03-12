import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import PromotionVideo from "src/assets/video/PromotionVideo.mov";
import PromotionVideo from "src/assets/video/video.mov";
import * as S from "src/components/home/Promotion/style";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

const Promotion = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timeline = gsap.timeline({ repeat: -1, repeatDelay: 1 });

        timeline
            .fromTo(
                ".animated-text span",
                {
                    opacity: 0,
                    y: 20,
                },
                {
                    opacity: 1,
                    y: 0,
                    stagger: 0.6,
                    duration: 1.5,
                }
            )
            .to(".animated-text span", {
                opacity: 0,
                y: -20,
                stagger: 0.6,
                duration: 1.5,
                delay: 1.5,
            })
            .set(".animated-text", { clearProps: "all" })

            .to(".animated-text", {
                opacity: 1,
                stagger: 0.6,
                duration: 1.5,
                text: "Qvick",
            })
            .to(".animated-text span", {
                opacity: 0,
                y: -20,
                stagger: 0.6,
                duration: 1.5,
                delay: 1.5,
            })
            .set(".animated-text", { clearProps: "all" })

            .to(".animated-text", {
                opacity: 1,
                stagger: 0.6,
                duration: 1.5,
                text: "오프라인 기숙사 관리 온라인으로 편안하게",
            });
    }, []);

    const handleLoginClick = () => {
        navigate("/sign");
    };

    return (
        <S.VideoWrapper>
            <S.StyledVideo
                autoPlay
                muted
                loop
                playsInline
                src={PromotionVideo}
            />
            <S.TextContainer>
                <S.AnimatedText className="animated-text">
                    {/* 텍스트는 GSAP 애니메이션을 통해 추가될 예정 */}
                </S.AnimatedText>
                <S.LoginButton onClick={handleLoginClick}>Qvick 이용하기</S.LoginButton>
            </S.TextContainer>
        </S.VideoWrapper>
    );
};

export default Promotion;
