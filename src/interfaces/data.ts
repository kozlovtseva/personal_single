export interface Project {
    name: string;
    details: string[];
    link: string;
    image: string;
    button: string;
}
export interface Projects {
    projects: Project[];
}
export interface EducationItem {
    name: string;
    year: string;
    image: string;
    type: string;
    specialization: string[];
}
export interface CertificatesItemTypes {
    name: string;
    topics: string[];
    link: string;
}
export interface CertificatesTypes {
    id: number;
    items: CertificatesItemTypes[];
}
export interface Filter {
    id: number;
    name: string;
}
export interface ContactTypes {
    name: string;
    link: string;
    image: string;
    text_image: string;
}
export interface PersonalDataTypes {
    contacts: ContactTypes[];
    email: string;
}
