import IBracketNode from './IBracketNode';
import IRound from './IRound';

export default interface IBracket {
  id: string,
  name: string,
  fathersNode: IRound[]
  editionMode: boolean,
  nbTeamMaxByDuel: number,
  nbTeamWinner: number,
  bracketNode?: IBracketNode
}

export class Bracket implements IBracket {
  constructor(
    public id: string,
    public name: string,
    public fathersNode: IRound[],
    public editionMode: boolean,
    public nbTeamMaxByDuel: number,
    public nbTeamWinner: number,
    public bracketNode?: IBracketNode
  ) { }
}