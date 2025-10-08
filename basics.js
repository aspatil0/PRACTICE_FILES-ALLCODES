let score = "30"
console.log(typeof score);

let valueinnumber = Number(score)
console.log(typeof valueinnumber);
 // number easily convert to 

let a = "55adi"
let b = Number(a)
console.log(b);
console.log(typeof b);

//if satring is gibven as num+alphabet it give nan and 



let c = null
let d = Number(c)
console.log(d);
console.log(typeof d);
//null is consider as 0 in number



let p = undefined
let q = Number(p)
console.log(q);
console.log(typeof q);

//undefined is consider as NaN in number


let bool = false
let bool1 = Number(bool)
console.log(bool1);
console.log(typeof bool1);

//false is consider as 0 in number
//true is consider as 1 in number

let str = "hello"       
let str1 = Number(str)
console.log(str1);
console.log(typeof str1);
    //not possible to convert string to number it give NaN

let isActive = 1
let bool2 = Boolean(isActive)
console.log(bool2);
console.log(typeof bool2);