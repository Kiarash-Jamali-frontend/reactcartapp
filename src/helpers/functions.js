// Short product name
const shorten = (name) => {
    const productName = name.split(" ");
    return `${productName[0]} ${productName[1]}`.toLowerCase();
}

// Product is in cart?
const isInCart = (products, product) => {
    const searchInProducts = products.findIndex(item => {
        return item.id === product.id
    });

    return searchInProducts;
}

// Quantity count
const quantityCount = (products, productId) => {
    const index = products.findIndex(product => product.id === productId);
    if (index === -1) {
        return false;
    } else {
        return products[index].quantity
    }
}

export { shorten, isInCart, quantityCount };