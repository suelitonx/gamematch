//mmorpg, shooter, strategy, moba, racing, sports, social, sandbox, open-world, survival, pvp, pve, pixel, voxel, zombie, turn-based, first-person, third-Person, top-down, tank, space, sailing, side-scroller, superhero, permadeath, card, battle-royale, mmo, mmofps, mmotps, 3d, 2d, anime, fantasy, sci-fi, fighting, action-rpg, action, military, martial-arts, flight, low-spec, tower-defense, horror, mmorts
const generos: { original: string; traducao: string }[] = [
    { original: "mmorpg", traducao: "RPG online massivo multijogador" },
    { original: "shooter", traducao: "Atirador" },
    { original: "strategy", traducao: "estratégia" },
    { original: "moba", traducao: "arena de batalha online multijogador" },
    { original: "racing", traducao: "corrida" },
    { original: "sports", traducao: "esportes" },
    { original: "social", traducao: "social" },
    { original: "sandbox", traducao: "mundo aberto" },
    { original: "open-world", traducao: "mundo aberto" },
    { original: "survival", traducao: "sobrevivência" },
    { original: "pvp", traducao: "jogador contra jogador" },
    { original: "pve", traducao: "jogador contra ambiente" },
    { original: "pixel", traducao: "pixel" },
    { original: "voxel", traducao: "voxel" },
    { original: "zombie", traducao: "zumbi" },
    { original: "turn-based", traducao: "baseado em turnos" },
    { original: "first-person", traducao: "primeira pessoa" },
    { original: "third-person", traducao: "terceira pessoa" },
    { original: "top-down", traducao: "visão de cima" },
    { original: "tank", traducao: "tanque" },
    { original: "space", traducao: "espaço" },
    { original: "sailing", traducao: "navegação" },
    { original: "side-scroller", traducao: "jogo de rolagem lateral" },
    { original: "superhero", traducao: "super-herói" },
    { original: "permadeath", traducao: "morte permanente" },
    { original: "card", traducao: "cartas" },
    { original: "battle-royale", traducao: "batalha real" },
    { original: "mmo", traducao: "RPG online massivo" },
    { original: "mmofps", traducao: "FPS online massivo" },
    { original: "mmotps", traducao: "TPS online massivo" },
    { original: "3d", traducao: "tridimensional" },
    { original: "2d", traducao: "bidimensional" },
    { original: "anime", traducao: "anime" },
    { original: "fantasy", traducao: "fantasia" },
    { original: "sci-fi", traducao: "ficção científica" },
    { original: "fighting", traducao: "luta" },
    { original: "action-rpg", traducao: "RPG de ação" },
    { original: "action", traducao: "ação" },
    { original: "military", traducao: "militar" },
    { original: "martial-arts", traducao: "artes marciais" },
    { original: "flight", traducao: "voo" },
    { original: "low-spec", traducao: "requisitos mínimos" },
    { original: "tower-defense", traducao: "defesa de torre" },
    { original: "horror", traducao: "terror" },
    { original: "mmorts", traducao: "estratégia em tempo real massiva online" },
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

export { generos, ordenacao, plataformas }