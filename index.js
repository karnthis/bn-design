const rounds = 11
const seek = 30010
const debug = true

// Globals
const Hash = {max: 0, 0: 0, 1: 1}

// Testing
// console.log(fiboWhile(1))
// console.log(fiboWhile(2))
// console.log(fiboWhile(3))
// console.log(fiboWhile(6))

// fiboStopwatch(10)

async function test() {
    await fiboStopwatch(100)
    await fiboStopwatch(101)
}
test()


// Functions
async function fiboWhile(position) {
    const hash = Hash || {max: 1, 0: 0, 1: 1}
    const safePosition = Number(position)
    if (safePosition) {
        const working = Math.max(0, safePosition)
        if (working <= hash.max) {
            return hash[working]
        } else {
            for (let i = hash.max; i <= working; i++) {
                if (i <= 1) {
                    continue
                }
                if (debug) await new Promise(resolve => setTimeout(resolve, 10))
                hash[i] = hash[i - 1] + hash[i - 2]
                Hash[i] = hash[i]
            }
            hash.max = working
            Hash.max = working
            return hash[working]
        }
    } else {
        return "Input must be a number"
    }
}

async function fiboStopwatch(rounds) {
    console.log(`Difficulty : ${rounds}`)
    const start = Date.now()
    const result = await fiboWhile(rounds)
    const end = Date.now()
    console.log(`Result : ${result}`)
    console.log(`Duration : ${end - start}`)
}


function dead() {

}