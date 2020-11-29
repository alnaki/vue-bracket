export default interface IBracketNode {
  item: Object,
  children: Array<IBracketNode>
}

export class BracketNode implements IBracketNode {
  constructor(
    public item: Object,
    public children: Array<IBracketNode>
  ) { }
}