import IRound from './IRound';
import { ITeam } from './ITeam';

export default interface IBracket {
  id: string;
  name: string;
  editionMode: boolean;
  rounds: IRound[];
  teams: ITeam[];
  nbRoundMax: number; // 0 > infini
  nbTeamMaxByDuel: number;
  nbTeamWinner: number;
}
