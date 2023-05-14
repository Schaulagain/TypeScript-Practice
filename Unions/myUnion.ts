let score: number | string = 33

score = 44

score = '44'

type User = {
    name: string;
    id: number
}

type Admin = {
    username: string;
    id: number
}

let suman: User | Admin = {
    name: "Suman",
    id: 112,
}

suman = { username: "sc", id: 112 }

getDbId(3)
getDbId("3")

function getDbId(id: number | string) {
    if (typeof id === "string") {
        id.toLowerCase()
    }
    if (typeof id === "number") {
        id.toFixed()
    }

    // typeof id === "string" ?
    //     id.toLowerCase
    //     : typeof id === "number" ? id.toFixed()
    //         : id
    console.log(`DB id is: ${id}`);
}

//array

const data: (number | string)[] = [1, 2, 3, "4"]


let seatAllotment: "aisle" | "middle" | "window"

seatAllotment = "aisle"
// seatAllotment = "new"
