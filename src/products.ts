interface Producto {
    name: string;
    cost: number;
    units: number;
}

const productList: Producto[] = [
    { name: "Laptop", cost: 12000, units: 9 },
    { name: "Celular", cost: 600000, units: 14 },
    { name: "Audífonos", cost: 80000, units: 2 },
    { name: "Teclado Mecánico", cost: 45000, units: 7 }
]

productList.forEach(product => {
    console.log(`Product: ${product.name} | Cost: ${product.cost}`)
})

const mostExpensiveProduct: Producto = productList.reduce((max, product) => product.cost > max.cost ? product : max);

console.log(`El producto más caro es: ${mostExpensiveProduct.name} que cuesta ${mostExpensiveProduct.cost}`);

const inventoryTotalValue: number = productList.reduce((acc, product) => {
    return acc + (product.cost * product.units);
}, 0);

console.log(`El valor total del inventario es: $${inventoryTotalValue}`);