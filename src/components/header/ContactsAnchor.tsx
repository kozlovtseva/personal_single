import React from "react";

import { styled, media } from "../../Theme";
import { useTranslation } from "react-i18next";

const ContactsAnchor: React.FC<{}> = () => {
    const { t } = useTranslation();
    return (
        <Wrapper>
            <Anchor href="#contacts">{t("header.anchor")}</Anchor>
            <Arrow>
                <ArrowBody />
                <ArrowHead />
            </Arrow>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    ${media.sm} {
        font-size: 0.7em;
    }
    bottom: 35px;
    display: flex;
    position: absolute;
    right: 35px;
`;
const Anchor = styled.a`
    color: ${(props) => props.theme.color.lightText};
    &:hover {
        cursor: pointer;
        text-shadow: 0 0 10px #fff, 0 0 50px #fff;
    }
`;
const Arrow = styled.div`
    ${media.sm} {
        margin-top: 0px;
    }
    @keyframes bounce {
        from {
            transform: translate3d(0, 0, 0);
        }
        to {
            transform: translate3d(0, 10px, 0);
        }
    }
    animation: bounce 0.6s infinite alternate;
    margin-top: 10px;
    margin-left: 7px;
`;
const ArrowBody = styled.div`
    background-color: ${(props) => props.theme.color.lightText};
    height: 20px;
    margin-left: 4px;
    width: 2px;
`;
const ArrowHead = styled.div`
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid ${(props) => props.theme.color.lightText};
    height: 0;
    width: 0;
`;

export default ContactsAnchor;
