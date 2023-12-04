export type Game = {
    id: number;
    title: string;
    thumbnail: string;
    short_description: string;
    game_url: string;
    genre: string;
    platform: string;
    publisher: string;
    developer: string;
    release_date: string;
    freetogame_profile_url: string;
};

export type UniqueGame = {
    id: number;
    title: string;
    thumbnail: string;
    status: string;
    short_description: string;
    description: string;
    game_url: string;
    genre: string;
    platform: string;
    publisher: string;
    developer: string;
    release_date: string;
    freetogame_profile_url: string;
    minimum_system_requirements: Requisitos;
    screenshots: Array<Screenshot>;
}

type Requisitos = {
    os: string;
    processor: string;
    memory: string;
    graphics: string;
    storage: string;
}

type Screenshot = {
    id: number;
    image: string;
};