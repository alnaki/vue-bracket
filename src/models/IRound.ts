import IBracketNode from './IBracketNode';

export interface IRound {
    node: IBracketNode,
    roundNames: string[], // order: finale, demi-finale...
}