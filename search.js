// const products = [
//     { name: 'iphone', price: 70000 },
//     { name: 'samsung galaxy 14', price: 60000 },
//     { name: 'dell laptop', price: 50000 },
//     { name: 'lenovo yoga laptop', price: 55000 },
//     { name: 'Asus afsus 14 laptop', price: 35000 },
//     { name: 'smart watch samsung', price: 7000 },
//     { name: 'apple watch', price: 20000 },
//     { name: 'plus one phone 4', price: 27000 }
// ];
// function serachProducts(products, searchText) {
//     const result = [];
//     for (const product of products) {
//         if (product.name.includes(searchText)) {
//             result.push(product);
//         }
//     }
//     return result;
// }
// console.log((serachProducts(products, 'laptop')));

const products = [
    { name: 'iphone', price: 70000 },
    { name: 'samsung galaxy 14', price: 60000 },
    { name: 'dell laptop', price: 50000 },
    { name: 'lenovo yoga laptop', price: 55000 },
    { name: 'Asus afsus 14 laptop', price: 35000 },
    { name: 'smart watch samsung', price: 7000 },
    { name: 'apple watch', price: 20000 },
    { name: 'plus one phone 4', price: 27000 }
];

function serachProducts(products, searchText) {
    let result = [];
    for (const product of products) {
        if (product.name.includes(searchText)) {
            result.push(product);
        }
    }
    return result;
}
console.log((serachProducts(products, 'watch')));

