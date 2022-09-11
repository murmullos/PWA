// Promises ALL()
// Promise.all() también puede concatenetar cualquier tipo de función y lo devolverá a la vez
function returnTrue() {
    return true;
}

function plusSlow(value) {
    let promise = new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve(value + 1);
        }, 3000)
    });
    return promise
}

let plusFast = (value) => {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(value + 1);
        }, 300)
    });
    return promise;
}

let promises = [plusSlow(3), plusFast(4), returnTrue(), 'Hello world'];

Promise.all(promises)
    .then(console.log);


