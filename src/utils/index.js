/**
 * This function claculates total prices of a new order
 * @param {array} products  cartProducts: array of objects
 * @returns {number} Total price
 */

export const totalPrice = (products) => {
  let sum = 0;
  products.forEach((product) => (sum += product.price));
  return sum.toFixed(2);
};
