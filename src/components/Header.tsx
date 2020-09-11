import React from "react";
import styled, { css } from "styled-components";

const Header: React.FC<{}> = () => {
    return (
        <Wrapper>
            <Title>//frontend developer</Title>
            <SubTitle>//coding mum</SubTitle>
        </Wrapper>
    );
};

const Wrapper = styled.header`
    color: #2196f3;
    text-align: center;
    font-size: 26px;
    margin-top: 30px;
`;
const title = css`
    color: #000;
    text-align: center;
    font-size: 26px;
    margin-top: 30px;
`;
const Title = styled.h1`
    ${title};
`;
const SubTitle = styled.h2`
    ${title};
`;

export default Header;
