import { Item } from './item.model';

export class cartItem{

    public details: Item;
    public amount: number;

    constructor(details: Item, amount: number){
        this.details=details;
        this.amount=amount;
    }

}