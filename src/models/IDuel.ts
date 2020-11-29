import IScore from './IScore';

export default interface IDuel {
  id?: string
  duelScores: IScore[],
}

export class Duel implements IDuel {
  constructor(
    public duelScores: IScore[],
    public id?: string
  ) { }
}