// Fetch Clone example
// Una response de fetch es legible una vez, por lo que usamos clone para hacerlo múltiples veces


fetch('https://reqres.in/api/users/12')
.then(response => {
    response.clone().json()
        .then( (response)  => console.log('Primera vez' , response));

    response.json()
        .then((response) => console.log('Segunda vez', response));
})
.catch((error) => console.log('Error internal' , error));