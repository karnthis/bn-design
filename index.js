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
// test()

async function testFind() {
    await fiboWhile(10)
    console.log(fiboFind(8))
    console.log(fiboFind(55))
}
testFind()

// console.log(fiboFind(0))




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
        return `${position} is not a valid submission`
    }
}

function fiboIsIt(value) {
    const safeValue = Number(value)
    if (safeValue) {
        const coreValue = 5 * safeValue * safeValue
        if (fiboMath(coreValue)) {
            return `${safeValue} is a Fibonacci number`
        } else {
            return `${safeValue} is not a Fibonacci number`
        }
    } else {
        return `${value} is not a valid submission`
    }
}

function fiboPosFind(toFind) {
    const hash = Hash || {max: 1, 0: 0, 1: 1}
    const safeToFind = Number(toFind)

    if (safeToFind && fiboMath(5 * safeToFind * safeToFind)) {
        if (safeToFind === 1) {
            return 'Your number is 1, which is both position 1 and 2'
        } else if (safeToFind === hash[(hash.max)]) {
            return `Your number is position : ${hash.max}`
        } else {
            return 'find logic goes here'
        }
    } else if (safeToFind) {
        return `${safeToFind} is not a Fibonacci number`
    } else {
        return `${toFind} is not a valid submission`
    }
}

function fiboMath(value) {
    return Math.sqrt(value - 4) % 1 === 0 || Math.sqrt(value + 4) % 1 === 0
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