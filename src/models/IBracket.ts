import IBracketNode from './IBracketNode';

export default interface IBracket {
  id: string,
  name: string,
  bracketNode: IBracketNode | null,
  editionMode: boolean,
  nbTeamMaxByDuel: number,
  nbTeamWinner: number
}