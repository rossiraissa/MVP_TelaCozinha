export class Dish{

    name: string;
    image: string;
    price: number;
    description: string;
    quantity: number;  // Nova propriedade para controlar a quantidade


    constructor(name: string, image: string, price: number, description: string,  quantity: number = 1){
        this.name=name;
        this.image=image;
        this.price=price;
        this.description=description;
        this.quantity = quantity;
    }
}