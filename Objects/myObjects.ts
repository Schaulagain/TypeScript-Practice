// const User = {
//     name: "Suman",
//     email: "suman.c@eco.dev",
//     isActive: true
// }

// function createUser({ name: string, isPaid: boolean }) { }

// let newUser = { name: "suman", isPaid: false, email: "s@s.com" }
// createUser(newUser)


// function createCourse(): { name: string, price: number } {
//     return { name: "reactjs", price: 399 }
// }

// type User = {
//     name: string;
//     email: string;
//     isActive: boolean;
// }

// function createUser(user: User): User {
//     return {
//         name: "",
//         email: "",
//         isActive: true
//     }
// }

// createUser({
//     name: "",
//     email: "",
//     isActive: true
// })

type User = {
    readonly _id: string;
    name: string;
    email: string;
    isActive: boolean;
    credDetails?: number;
}

let myUser: User = {
    _id: "12345",
    name: "s",
    email: "s@s.com",
    isActive: false,
}

type cardNumber = {
    cardnumber: string;
}
type cardDate = {
    carddate: string;
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}


myUser.email = "s@gmail.com"


export { }