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
