export class Item{
    public name: string;
    public price: number;
    public imagePath: string;
    public amountLeft: number;

    constructor(name: string, price: number, imagePath: string, amountLeft: number){
        this.name = name;
        this.price = price;
        this.imagePath = imagePath;
        this.amountLeft = amountLeft;
    }
}