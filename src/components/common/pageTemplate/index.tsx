import React from "react";
import * as S from "src/components/common/pageTemplate/style";
import { ProvidersProps } from "src/components/common/providers/type";
import useExceptionHandling from "src/constants/exceptionHandling/constants";
import Layout from "src/components/common/layout";
import Header from "src/components/common/header";
import { useLocation } from "react-router-dom";

const PageTemplate = ({ children }: ProvidersProps) => {
    const exceptionHandling = useExceptionHandling();
    const location = useLocation();
    const isPromotionPage = location.pathname === "/";

    return (
        <S.layoutWrap>
            {!isPromotionPage && exceptionHandling && <Header />}
            <Layout>{children}</Layout>
        </S.layoutWrap>
    );
};

export default PageTemplate;
