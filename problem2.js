
// amar name Monir, amar basa Jashore

// function showInfo(info) {

//     if (typeof info !== "object") {
//         return "please provide a valid object..!";
//     }

//     const result = "amar naam " + info.name + ", amar basa " + info.address;
//     return result;
// }

// const person = {
//     name: "monir",
//     address: "jashore"
// }
// const x = showInfo(person)
// console.log(x)

const person = {
    name: "hasan",
    address: "dhaka"
}


// output: monir@jashore.com

function createEmail(info) {
    if (typeof info !== "object") {
        return "invalid object"
    }
    const result = info.name + "@" + info.address + ".com";
    return result
}

console.log(createEmail(person))


