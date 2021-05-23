export const handleSumTotal = (cart) => {
    const reducer = (acumulator, currentValue) => acumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
}