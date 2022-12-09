function pyramid(num) {
    const arr = []

    // other function
    let hash = '#'

    // loop to the number
    for(let i = 1; i <= num; i++) {
        arr.push(hash)
        hash = hash + '#'
    }
    return arr;

}

function buildPyrmaid(arr) {
    arr.forEach((elem) => {
        console.log(elem)
    })
}



buildPyrmaid(pyramid(10))