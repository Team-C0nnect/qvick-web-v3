import React from "react";
import * as S from "src/components/common/pageTemplate/style";
import { ProvidersProps } from "src/components/common/providers/type";
import useExceptionHandling from "src/constants/exceptionHandling/constants";
import Layout from "src/components/common/layout";
import Header from "src/components/common/header";

const pageTemplate = ({ children }: ProvidersProps) => {
    const exceptionHandling = useExceptionHandling();
    return (
        <S.layoutWrap>
            {exceptionHandling && <Header />}
            <Layout>{ children }</Layout>
        </S.layoutWrap>
    );
};

export default pageTemplate;