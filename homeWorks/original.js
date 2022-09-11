// Tarea sobre promesas y fetch
// Realice resolución de cada ejercicio,

// compruebe el resultado en la consola y posteriormente
// siga con el siguiente.

// Comente TODO el código del ejercicio anterior
// antes de continuar con el siguiente.

// ==============================================
// Ejercicio #1
// ==============================================
/*
 Realizar un llamado FETCH a la siguiente API
 https://swapi.dev/api/people/1/
 Imprima en consola el nombre y género de la persona.
*/

// Resolución de la tarea #1


function callSWApi() {
        return fetch('https://swapi.dev/api/people/1/');
}

callSWApi()
    .then((response) => {
        if (response.ok) {
            return response.json();
        }
    })
    .then(console.log);



// ==============================================
// Ejercicio #2
// ==============================================
/*
 Similar al ejercicio anterior... haga un llamado a la misma api
 (puede reutilizar el código )
 https://swapi.dev/api/people/1/
 
 Pero con el nombre y el género, haga un posteo
 POST a: https://reqres.in/api/users

 Imprima en consola el objeto y asegúrese que tenga
 el ID y la fecha de creación del objeto
*/

// Resolución de la tarea #2

function callSWApiPost({gender, name}) {
    config = {
        method : 'POST',
        body: JSON.stringify({gender, name}),
        header: {
            'Content-Type': 'application/json'
        }
    }
    fetch('https://reqres.in/api/users',config )
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
        }).then((data) => {
            console.log('Final Data', data)
    })
}

callSWApi()
    .then( (response) => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Error en la llamada')
        }
    })
    .then(data => {
        callSWApiPost({gender : data.gender, name: data.name});
    })




