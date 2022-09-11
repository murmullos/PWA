// Fetch Get Example
// https://reqres.in/api/users

fetch('https://reqres.in/api/users')
    // No siempre será un json, por eso podemos tratar la response, en este caso con una promesa json()
    .then( response => response.json())
    .then( ({data}) => console.log(data));
