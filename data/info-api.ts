//mmorpg, shooter, strategy, moba, racing, sports, social, sandbox, open-world, survival, pvp, pve, pixel, voxel, zombie, turn-based, first-person, third-Person, top-down, tank, space, sailing, side-scroller, superhero, permadeath, card, battle-royale, mmo, mmofps, mmotps, 3d, 2d, anime, fantasy, sci-fi, fighting, action-rpg, action, military, martial-arts, flight, low-spec, tower-defense, horror, mmorts

const generosFromAPI: { original: string; traducao: string }[] = [
    { original: 'Shooter', traducao: "Atirador"},
    { original: 'MMOARPG', traducao: "MMOARPG"},
    { original: 'ARPG', traducao: "ARPG"},
    { original: 'Strategy', traducao: "Estratégia"},
    { original: 'MMORPG', traducao: "MMORPG"},
    { original: 'Fighting', traducao: "Luta"},
    { original: 'Action RPG', traducao: "RPG de Ação"},
    { original: 'Battle Royale', traducao: "Battle Royale"},
    { original: 'MOBA', traducao: "MOBA"},
    { original: 'Card', traducao: "Cartas"},
    { original: 'Sports', traducao: "Esportes"},
    { original: 'Racing', traducao: "Corrida"},
    { original: 'Card Game', traducao: "Cartas"},
    { original: 'MMO', traducao: "MMO"},
    { original: 'Social', traducao: "Social"},
    { original: ' MMORPG', traducao: "MMORPG"},
    { original: 'Fantasy', traducao: "Fantasia"}
];

const generos: { original: string; traducao: string }[] = [
    { original: "mmorpg", traducao: "MMORPG" },
    { original: "shooter", traducao: "Atirador" },
    { original: "strategy", traducao: "Estratégia" },
    { original: "moba", traducao: "MOBA" },
    { original: "racing", traducao: "Corrida" },
    { original: "sports", traducao: "Esportes" },
    { original: "social", traducao: "Social" },
    { original: "sandbox", traducao: "Sandbox" },
    { original: "open-world", traducao: "Mundo aberto" },
    { original: "survival", traducao: "Sobrevivência" },
    { original: "pvp", traducao: "PVP" },
    { original: "pve", traducao: "PVE" },
    { original: "pixel", traducao: "Pixel" },
    { original: "voxel", traducao: "Voxel" },
    { original: "zombie", traducao: "Zumbi" },
    { original: "turn-based", traducao: "Baseado em turnos" },
    { original: "first-person", traducao: "1ª Pessoa" },
    { original: "third-person", traducao: "3ª Pessoa" },
    { original: "top-down", traducao: "Visão de cima" },
    { original: "tank", traducao: "Tanque" },
    { original: "space", traducao: "Espaço" },
    { original: "sailing", traducao: "Navegação" },
    { original: "side-scroller", traducao: "Rolagem lateral" },
    { original: "superhero", traducao: "Super-herói" },
    { original: "permadeath", traducao: "Morte permanente" },
    { original: "card", traducao: "Cartas" },
    { original: "battle-royale", traducao: "Battle Royale" },
    { original: "mmo", traducao: "RPG Online" },
    { original: "mmofps", traducao: "FPS Online" },
    { original: "mmotps", traducao: "TPS Online" },
    { original: "3d", traducao: "3D" },
    { original: "2d", traducao: "2D" },
    { original: "anime", traducao: "Anime" },
    { original: "fantasy", traducao: "Fantasia" },
    { original: "sci-fi", traducao: "Ficção científica" },
    { original: "fighting", traducao: "Luta" },
    { original: "action-rpg", traducao: "RPG de ação" },
    { original: "action", traducao: "Ação" },
    { original: "military", traducao: "Militar" },
    { original: "martial-arts", traducao: "Artes marciais" },
    { original: "flight", traducao: "Voo" },
    { original: "low-spec", traducao: "PC da Xuxa" },
    { original: "tower-defense", traducao: "Defesa de torre" },
    { original: "horror", traducao: "Terror" },
    { original: "mmorts", traducao: "Estratégia Online" },
];

//release-date, popularity, alphabetical or relevance
const ordenacao: { original: string; traducao: string }[] = [
    {original: "release-date", traducao: "Data de Lançamento"},
    {original: "popularity", traducao: "Popularidade"},
    {original: "alphabetical", traducao: "Ordem Alfabética"},   
    {original: "relevance", traducao: "Relevância"},
];

//pc, browser or all
const plataformas: {original: string; traducao: string}[] = [
    {original: "pc", traducao: "PC"},
    {original: "browser", traducao: "Navegador"},
    {original: "all", traducao: "Todas"},
];

export { generos, ordenacao, plataformas, generosFromAPI }