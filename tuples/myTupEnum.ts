//Strict Sequence in arrays
// const User: (string | number | boolean)[] = [
//     'suman', 1, true
// ]

let user: [string, number, boolean]

user = ['s', 1, true]

let rgb: [number, number, number] = [255, 255, 255]

type User = [number, string]

const newUser: User = [112, "example@google.com"]

newUser[1] = "changed@google.com"

// TypeScript allows array methods
// newUser.push(2)

export { }

