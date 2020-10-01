import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import { styled, media } from "../../Theme";
import CheckVisibility from "../../helpers/CheckVisibility";
import BigTitle from "../UI/BigTitle";
import ThemeToggleButton from "../UI/ThemeToggleButton";
import { ReactComponent as DayHouse } from "../../images/day_house.svg";
import { ReactComponent as NightHouse } from "../../images/night_house.svg";

export interface ThemeProps {
    theme: any;
    color: string;
    isRefVisible?: Boolean;
}
const Contacts: React.FC<{}> = () => {
    const { t } = useTranslation();
    const [isRefVisible, ref] = CheckVisibility<HTMLDivElement>();
    const [day_theme, setTheme] = useState(true);
    const ToggleTheme = (theme: boolean) => {
        setTheme(theme);
    };
    return (
        <Section color={day_theme ? "#fff" : "#131313"}>
            <ThemeToggleButton
                day_theme={day_theme}
                ToggleTheme={ToggleTheme}
            />
            <TitleWrapper ref={ref} isRefVisible={isRefVisible} color="">
                <BigTitle
                    title={t("home.title")}
                    color={day_theme ? "lightDarkText" : "shine"}
                    shadow={!day_theme}
                />
            </TitleWrapper>
            <Container>
                <Wrapper ref={ref} isRefVisible={isRefVisible} color="">
                    <Subtitle color={day_theme ? "lightDarkText" : "shine"}>
                        {t("home.subtitle")}
                    </Subtitle>
                </Wrapper>
                <Image>{day_theme ? <DayHouse /> : <NightHouse />}</Image>
            </Container>
        </Section>
    );
};
const Section = styled.section`
    background-color: ${(props: ThemeProps) => props.color};
    padding: 100px;
    position: relative;
    ${media.md} {
        padding: 100px 50px;
    }
    ${media.sm} {
        padding: 100px 30px;
    }
    ${media.xs} {
        padding: 100px 15px;
    }
`;
const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;
const Subtitle = styled.p`
    color: ${(props: ThemeProps) => props.theme.color[props.color]};
    margin-bottom: 20px;
    transition: 0.3s ease-in-out;
    ${media.sm} {
        font-size: 0.5em;
    }
`;
const Wrapper = styled.div`
    animation: ${(props: ThemeProps) =>
        props.isRefVisible ? "text 0.7s linear" : "none"};
    animation-fill-mode: forwards;
    flex: 1 1;
    opacity: 0;
`;
const TitleWrapper = styled.div`
    animation: ${(props: ThemeProps) =>
        props.isRefVisible ? "text 0.7s linear" : "none"};
    animation-fill-mode: forwards;
    opacity: 0;
`;
const Image = styled.div`
    & svg {
        ${media.sm} {
            height: 261px;
            width: 300px;
        }
    }
    flex: 1 1;
`;
export default Contacts;
