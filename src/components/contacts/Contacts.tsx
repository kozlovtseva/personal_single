import React from "react";
import { useTranslation } from "react-i18next";

import { styled, media } from "../../Theme";

import { PersonalDataTypes, ContactTypes } from "../../interfaces/data";

const Contacts: React.FC<{}> = () => {
    const { t } = useTranslation();
    const personalData: PersonalDataTypes = t("personal", {
        returnObjects: true,
    });
    return (
        <Container>
            <List>
                {personalData.contacts.map(
                    (item: ContactTypes, index: number) => (
                        <ListItem key={index}>
                            <Link href={item.link} target="_blank" />
                            {item.image.length < 1 ? (
                                <TextImage>{item.text_image}</TextImage>
                            ) : (
                                <Image
                                    src={require(`../../images/${item.image}`)}
                                    alt={item.name}
                                />
                            )}
                        </ListItem>
                    )
                )}
            </List>
            <ContactsLink id="contacts" />
            <Email>{personalData.email}</Email>
        </Container>
    );
};

const Container = styled.section`
    padding: 100px;
    ${media.md} {
        padding: 50px;
    }
    ${media.sm} {
        padding: 30px;
    }
    ${media.xs} {
        padding: 15px;
    }
`;
const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;
const ListItem = styled.li`
    border: 1px solid ${(props: any) => props.theme.color.lightDarkText};
    border-radius: 50%;
    display: grid;
    flex: 0 1 300px;
    height: 300px;
    list-style: none;
    margin: 30px;
    place-items: center;
    position: relative;
    transition: 0.5s ease-in-out;
    width: 300px;
    &:hover {
        background-color: ${(props: any) => props.theme.color.primary};
        cursor: pointer;
    }
    ${media.sm} {
        flex: 0 1 200px;
        height: 200px;
        width: 200px;
    }
`;
const Link = styled.a`
    display: block;
    height: 100%;
    position: absolute;
    width: 100%;
`;
const Image = styled.img``;
const TextImage = styled.p`
    color: ${(props: any) => props.theme.color.lightDarkText};
    font-size: 1.7em;
`;
const Email = styled.div`
    border-bottom: 1px solid ${(props: any) => props.theme.color.lightDarkText};
    border-top: 1px solid ${(props: any) => props.theme.color.lightDarkText};
    color: ${(props: any) => props.theme.color.lightDarkText};
    font-size: 1.7em;
    height: 200px;
    line-height: 200px;
    margin: 30px 0;
    text-align: center;
    ${media.md} {
        font-size: 1.5em;
    }
    ${media.sm} {
        font-size: 1.2em;
        height: 100px;
        line-height: 100px;
    }
    ${media.xs} {
        font-size: 0.7em;
    }
`;
const ContactsLink = styled.a``;

export default Contacts;
