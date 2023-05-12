function addTwo(num: number): number {
    return num + 2
    // return "hello"
}

function getUpper(val: string): string {
    return val.toUpperCase()
}

function signUpUser(name: string, email: string, password: string, isPaid: boolean) { }

let loginUser = (name: string, email: string, isPaid: boolean = false) => { }


let myValue = addTwo(5)
getUpper('4')
signUpUser("Suman", "sumchaulagain@gmail.com", "password", false)
loginUser("s", "h@h.com")

// function getValue(myValue: number): boolean | string {
//     if (myValue > 5) {
//         return true
//     }

//     return "200 OK"
// }

const getHello = (s: string): string => { return "" }

// const heros = ["thor", "spiderman", "ironman"]
const heros = [1, 2, 3]

heros.map((hero): string => {
    return `hero is ${hero}`
})

function consoleError(error: string): void {
    console.log(error)
}
function handleError(error: string): void {
    console.log(error)
}



export { }
