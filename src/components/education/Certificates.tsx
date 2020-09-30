import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import { styled, media } from "../../Theme";

import CertificatesFilters from "./CertificatesFilters";
import CertificatesItem from "./CertificatesItem";
import {
    CertificatesTypes,
    CertificatesItemTypes,
    Filter,
} from "../../interfaces/data";

const Certificates: React.FC<{}> = () => {
    const { t } = useTranslation();
    const filters: Filter[] = t("filters", { returnObjects: true });
    const [list, setList] = useState(filters[0].id);

    const certificates: CertificatesTypes[] = t("certificates", {
        returnObjects: true,
    });
    const setListItem = (id: number) => {
        setList(id);
    };

    const activeCertificates: any = certificates.find((x) => x.id === list);
    return (
        <Container>
            <CertificatesFilters
                filters={filters}
                list={list}
                setListItem={setListItem}
            />
            <CertificatesList>
                {activeCertificates.items.map(
                    (item: CertificatesItemTypes, key: number) => (
                        <CertificatesItem item={item} key={key} value={key} />
                    )
                )}
            </CertificatesList>
        </Container>
    );
};
const CertificatesList = styled.ul`
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fill, 300px);
    grid-auto-rows: minmax(20px, auto);
    justify-content: center;
    margin: 30px auto;
    max-width: 980px;
`;
const Container = styled.div`
    padding: 100px;
    ${media.xl} {
        padding: 100px 50px;
    }
    ${media.md} {
        padding: 50px;
    }
    ${media.sm} {
        padding: 30px;
    }
    ${media.xs} {
        padding: 30px 15px;
    }
`;

export default Certificates;
