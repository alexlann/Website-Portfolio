import { ReactElement } from "react";

// enums
export enum ColorOptions {
    green = "green",
    lightGreen = "light-green",
    lightGray = "light-gray",
    gray = "gray",
    darkGray = "dark-gray",
    black = "black",
    white = "white",
}


// Types
export interface ProjectType {
    title: string;
    image: string;
    link: string;
    tags: string[];
}

export interface SectionType {
    id: number;
    title: string;
    sectionTitle?: string;
    element: ReactElement;
    hero?: boolean
}

export interface SectionsType {
    [key: string]: SectionType
}