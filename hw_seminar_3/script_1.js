
const contentEl = document.querySelector(".content");

if (localStorage.length > 0) {
    let products = getProducts();

    console.log(products);
    /* let keys = Object.keys(products);
    console.log(keys);

    console.log(products.key(0)); */


    /*     for (index in products) {
            console.log(products[index]);
            console.log(products.getItem(products.key(index)));
        } */
    /*     for (key in products) {
            if (products.hasOwnProperty(key)) {
                //ключ = key
                //значение = person[key]
                console.log("Ключ = " + key);
                console.log("Значение = " + products[key]);
            } // если объект person имеет key (если у person есть свойство key)
        } // перерабрать все ключи (свойства) в объекте */

}


function getProducts() {
    let products = [];
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        console.log(key);
        products[key] = JSON.parse(localStorage.getItem(key));
    }
    return products;
}