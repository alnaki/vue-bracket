import IDuel from './IDuel';

export default interface IRound {
  id: string;
  name: string;
  roundNumber: number;
  duels: IDuel[];
}
