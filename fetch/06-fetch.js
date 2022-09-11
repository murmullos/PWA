// Fetch error 404
// El error  400 <= error > 500 entra por el then. Se puede controlaro con el estatus ok de la response


fetch('https://reqres.in/api/users/1000')
.then(response => {

    if (response.ok) {
        response.json()
            .then((response) => console.log('Respuesta correcta', response));
    } else {
        throw new Error ('No existe este endpoint');
    }
})
.catch((error) => console.log('Error internal' , error));