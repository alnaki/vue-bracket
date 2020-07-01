import IBracketNode from './IBracketNode';
import { IRound } from './IRound';

export default interface IBracket {
  id: string,
  name: string,
  fathersNode: IRound[]
  bracketNode: IBracketNode | null,
  editionMode: boolean,
  nbTeamMaxByDuel: number,
  nbTeamWinner: number
}