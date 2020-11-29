export default interface IRound {
    roundNames: string[], // order: finale, demi-finale...
}

export class Round implements IRound {
    constructor(
        public roundNames: string[]
    ) { }
}