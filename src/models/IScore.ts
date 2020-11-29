export default interface IScore {
    idTeam: string,
    score: number
}

export class Score implements IScore {
    constructor(
        public idTeam: string,
        public score: number
    ) { }
}