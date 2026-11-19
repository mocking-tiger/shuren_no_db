export enum Level {
    N1,
    N2,
    N3,
    N4,
    N5
}

export type UserProgress = {
    currentGrade: number;
    exp: number;
    isMaster: boolean;
    isPromotion: boolean;
}

export type Word = {
    id: number;

    word: string;
    wordKana: string;
    wordMeaning: string;
    example: string;
    exampleKana: string;
    exampleMeaning: string;
    level: Level;
}

export interface WordWithChoice extends Word {
    choice: string[];
}