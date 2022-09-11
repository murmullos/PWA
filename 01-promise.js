
function plusNumbers (value) {
    let promise = new Promise( (resolve, reject) => {

        console.log(value);

        if (value >= 7) {
            reject('Number is too height');
        }

       setTimeout(() => {
           if (value) {
               resolve(value +  1);
           }
           reject('Error now');
       }, 800);
    });
    return promise;
}

plusNumbers( 5 )
    .then(plusNumbers)
    .then(plusNumbers)
    .then(plusNumbers)
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log('Promise Error');
        console.log(error)
    });

