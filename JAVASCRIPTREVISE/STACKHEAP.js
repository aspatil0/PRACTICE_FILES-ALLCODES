let username="aditya"
let myname=username
myname = "patil"

console.log(myname);
console.log(username)


// the main username get a copy and even if we editi the copy in an premitive data type it not change the orignal varibale as in code
// but if we do it for non premitive like objects

let usern={
    names:"aditya",
    rollno:45
}

let myuser=usern


myuser.names="anuskha"
console.log(myuser)
console.log(usern)

//{ names: 'anuskha', rollno: 45 }
//{ names: 'anuskha', rollno: 45 }
//see the refrenec if done ny heap so both main and copy get changes