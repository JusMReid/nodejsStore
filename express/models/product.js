const products = [];

module.exports = class Product{
    constructor(title){
        this.title = title;
    }

    
    save(){
        //'this' refers to the Object created based on the class, our Product
        products.push(this);
    }

    /*'static' makes sure that I can call this method directly on the class itself

    Saves me from having to create new Objects w/ new keywords just to fetch all existing products
    */
    static fetchAll(){
        return products;
    }
}