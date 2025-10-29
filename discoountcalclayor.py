function calculateDiscount(amount, discountPercent) {
  let discount = (amount * discountPercent) / 100;
  let finalAmount = amount - discount;

  console.log("Original Amount:", amount);
  console.log("Discount (" + discountPercent + "%):", discount);
  console.log("Amount After Discount:", finalAmount);
}

// Example use
calculateDiscount(1000, 20);
