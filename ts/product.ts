class Product {
    protected name: string;
    protected price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    print(): void {
        console.log(this.name);
        console.log(this.price);
    }
}

let p1 = new Product("Dell Laptop",70000)
p1.print() 


