export enum ColorOptions {
    green = "green",
    lightGreen = "light-green",
    lightGray = "light-gray",
    gray = "gray",
    darkGray = "dark-gray",
    black = "black",
    white = "white",
}

export interface TagType {
    title: string;
    link: string;
}

export interface ProjectType {
    title: string;
    image: string;
    link: string;
    tags: TagType[];
}