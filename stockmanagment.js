let products = [
  { name: "Laptop", bought: 20, sold: 5 },
  { name: "Phone", bought: 15, sold: 10 },
  { name: "Headphones", bought: 30, sold: 25 }
];

function trackProducts(items) {
  items.forEach(item => {
    let remaining = item.bought - item.sold;
    console.log("Product:", item.name);
    console.log("Bought:", item.bought);
    console.log("Sold:", item.sold);
    console.log("Remaining:", remaining);
    console.log("-----------------------");
  });
}

trackProducts(products);
