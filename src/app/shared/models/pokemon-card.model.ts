export interface PokemonCard {
    id: string;
    name: string;
    supertype: string;
    subtypes: string[];
    level: string;
    hp: string;
    types: string[];
    evolvesFrom: string;
    evolvesTo: string[];
    rules: string[];
    ancientTrait: NameText;
    abilities: Abilities[];
    attacks: Attacks[];
    weaknesses: TypeValue[];
    resistances: TypeValue[];
    retreatCost: string[];
    convertedRetreatCost: number;
    set: {
        id: string;
        name: string;
        series: string;
        printedTotal: number;
        total: number;
        legalities: Legalities;
        ptcgoCode: string;
        releaseDate: Date;
        updatedAt: Date;
        images: {
          symbol: string;
          logo: string;
        }
    };
    number: string;
    artist: string;
    rarity: string;
    flavorText: string;
    nationalPokedexNumbers: number[];
    legalities: Legalities;
    regulationMark: string;
    images: {
        small: string;
        large: string;
    };
    tcgplayer: {
        url: string;
        updatedAt: string;
        prices: {
            normal: Price;
            reverseHolofoil: Price;
        };
    };
    cardmarket: {
        url: string;
        updatedAt: string;
        prices: {
            averageSellPrice: number;
            lowPrice: number;
            trendPrice: number;
            germanProLow: number;
            suggestedPrice: number;
            reverseHoloSell: number;
            reverseHoloLow: number;
            reverseHoloTrend: number;
            lowPriceExPlus: number;
            avg1: number;
            avg7: number;
            avg30: number;
            reverseHoloAvg1: number;
            reverseHoloAvg7: number;
            reverseHoloAvg30: number;
        }
    };
}

export interface Legalities {
    unlimited: string;
    standard: string;
    expanded: string;
}

export interface Price {
    low: number;
    mid: number;
    high: number;
    market: number;
    directLow: number;
}

export interface NameText {
    name: string;
    text: string;
}

export interface TypeValue {
    type: string;
    value: string;
}

export interface Attacks extends NameText {
    cost: string[];
    damage: string;
    convertedEnergyCost: number;
}

export interface Abilities extends NameText {
    type: string;
}


