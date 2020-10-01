import React from "react";
import { useTranslation } from "react-i18next";
import { css } from "styled-components";

import { styled, media } from "../../Theme";
import { FooterButtonTypes } from "../../interfaces/data";
import FooterButton from "../UI/FooterButton";

import { ReactComponent as Coffee } from "../../images/coffee.svg";

const Footer: React.FC<{}> = () => {
    const { t } = useTranslation();
    const buttons: FooterButtonTypes[] = t("footer.buttons", {
        returnObjects: true,
    });
    return (
        <Wrapper>
            <Container>
                <Image>
                    <Coffee />
                    <SteamOne />
                    <SteamTwo />
                    <SteamThree />
                    <SteamFour />
                </Image>
                <Buttons>
                    {buttons.map((item: FooterButtonTypes, index: number) => (
                        <FooterButton item={item} key={index} />
                    ))}
                </Buttons>
            </Container>
            <Text>{"@" + t("footer.copyright.year")}</Text>
            <Text>{t("footer.copyright.text")}</Text>
        </Wrapper>
    );
};

const Wrapper = styled.footer`
    background-color: ${(props: any) => props.theme.color.primary};
    padding: 150px 30px 30px 30px;
`;
const Container = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;
const Image = styled.div`
    flex: 0 1 350px;
    position: relative;
`;
const Buttons = styled.div`
    display: flex;
    flex: 0 1 350px;
    ${media.lg} {
        margin-bottom: 50px;
    }
`;
const Text = styled.footer`
    color: ${(props: any) => props.theme.color.lightDarkText};
    font-size: 0.5em;
    text-align: center;
`;
const steam = css`
    border-radius: 50%;
    bottom: 190px;
    background-color: #fff;
    height: 50px;
    left: 60px;
    opacity: 0;
    position: absolute;
    width: 50px;
    z-index: 0;
`;
const SteamOne = styled.div`
    ${steam};
    animation: steam 4s ease-out infinite;
`;
const SteamTwo = styled.div`
    ${steam};
    animation: steam 4s ease-out 0.5s infinite;
`;
const SteamThree = styled.div`
    ${steam};
    animation: steam 4s ease-out 1s infinite;
`;
const SteamFour = styled.div`
    ${steam};
    animation: steam 4s ease-out 1.5s infinite;
`;

export default Footer;
