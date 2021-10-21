const rounds = 11
const seek = 30010
const debug = true


// console.log(fiboIterate(rounds))
console.log(fiboIterate(1))
console.log(fiboIterate(2))
console.log(fiboIterate(3))
console.log(fiboIterate(6))




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

function dead() {


    if (memo[num]) return memo[num];
  if (num <= 1) return 1;

  return memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);

}