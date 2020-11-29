export default interface ITeam {
  id: string,
  name: string,
  playersId: string[]
  short_name?: string,
  avatar?: string,
}

export class Team implements ITeam {
  constructor(
    public id: string,
    public name: string,
    public playersId: string[],
    public short_name?: string,
    public avatar?: string
  ) { }
}