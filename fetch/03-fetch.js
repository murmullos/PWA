// Fetch POST/PUT Example
// https://reqres.in/api/users

let user = {
    'name': 'Flos',
    'job': 'Marie'
};

let init = {
    method: 'POST',
    body: JSON.stringify(user),
    headers:  {
        'Content-Type' : 'application/json'
    }
}

fetch('https://reqres.in/api/users', init)
.then(response => response.json())
.then(console.log)
.catch((error) => console.log('Error internal' , error));