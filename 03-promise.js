// Promises Race()
// La respuesta es solo una, la primera en llegar. Si llegaran a la vez, sería la primera de la izquierda.

function plusSlow(value) {
    let promise = new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve(value + 1);
        }, 300);
    });
    return promise
}

let plusFast = (value) => {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(value + 1);
        }, 300);
    });
    return promise;
}

let promises = [plusSlow(9), plusFast(4)];

Promise.race(promises)
    .then(console.log);


