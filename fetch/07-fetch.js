// fetch archivos html


fetch('../not-found.html')
.then(response => {
    if (response.ok) {
        response.text()
            .then((html) => {
                let body = document.querySelector('body');
                body.innerHTML = html;
            });
    } else {
        throw new Error ('No existe este endpoint');
    }
})
.catch((error) => console.log('Error internal' , error));