const rounds = 11
const seek = 30010
const debug = true

// Globals
const Hash = {max: 0, 0: 0, 1: 1}

// Testing
console.log(fiboWhile(1))
console.log(fiboWhile(2))
console.log(fiboWhile(3))
console.log(fiboWhile(6))

// Functions
function fiboWhile(position) {
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
                hash[i] = hash[i - 1] + hash[i - 2]
                Hash[i] = hash[i]
            }
            return hash[working]
        }
    } else {
        return "Input must be a number"
    }
}


function dead() {


function fiboIterate(count, hash = {}) {
    // Credit for inspiring this solution goes to https://medium.com/developers-writing/fibonacci-sequence-algorithm-in-javascript-b253dc7e320e
    
    // if (debug) console.debug(hash[count])
    if (count <= 1) {
        return 1
    } else if (hash[count]) {
        return hash[count]
    } else {
        return hash[count] = fiboIterate(count - 1, hash) + fiboIterate(count - 2, hash)
        // return hash[count] = fiboIterate(count - 1, hash) + fiboIterate(count - 2, hash)
    }
}


    if (memo[num]) return memo[num];
  if (num <= 1) return 1;

  return memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);

}