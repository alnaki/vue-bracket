export interface IPlayerModel {
  id: string,
  name: string,
  idBDD?: string,
  avatar?: string,
}

export class PlayerModel implements IPlayerModel {
  constructor(
    public id: string,
    public name: string,
    public idBDD?: string,
    public avatar?: string
  ) { }
}
