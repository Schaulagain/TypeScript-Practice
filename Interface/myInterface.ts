interface User {
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: string
    // startTrail: () => string
    startTrail(): string
    getCoupon(couponname: string, discount: number): number
}

interface User {
    githubToken: string
}


interface Admin extends User {
    role: "admin" | "learner"
}
const suman: Admin = {
    dbId: 1,
    role: "admin",
    email: "s@s.com",
    "userId": 2,
    startTrail: () => {
        return "trail started"
    },
    getCoupon: (name: "NEWYEAR2020", discount: 10) => {
        return 10
    },
    githubToken: "Schaulagain"
}

suman.email = "test@test.com"
// suman.dbId = 33