// Globals
const Hash = {max: 0, 0: 0, 1: 1}

// Functions
async function fiboFor(position) {
    const hash = Hash || {max: 1, 0: 0, 1: 1}
    const safePosition = Number(position)
    if (higherTruth(safePosition)) {
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
    if (higherTruth(safeValue)) {
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

async function fiboPosFind(toFind) {
    const hash = Hash || {max: 1, 0: 0, 1: 1}
    const safeToFind = Number(toFind)

    if (higherTruth(safeToFind) && fiboMath(5 * safeToFind * safeToFind)) {
        if (safeToFind === 1) {
            return 'Your number is 1, which is both position 1 and 2'
        } else if (safeToFind === hash[(hash.max)]) {
            return `Your number is position : ${hash.max}`
        } else {
            let i = 0
            let curr = 0
            while (curr !== safeToFind) {
                curr = await fiboFor(i)
                i++
            }
            return `Your number is position : ${i}`
        }
    } else if (higherTruth(safeToFind)) {
        return `${safeToFind} is not a Fibonacci number`
    } else {
        return `${toFind} is not a valid submission`
    }
}

function fiboMath(value) {
    return Math.sqrt(value - 4) % 1 === 0 || Math.sqrt(value + 4) % 1 === 0
}

function higherTruth(value) {
    return value === 0 || !!value
}
