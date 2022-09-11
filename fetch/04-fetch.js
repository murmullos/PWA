// Fetch Blob Example
// Se puede hacer fetch a recursos y guardarlos en al cache del navegador
// Cargamos una imagen interna

fetch('superman.png')
.then(response => response.blob())
.then((img) => {
    // Convertimos un objeto en una url usable (cache del navegador)
    let urlImg = URL.createObjectURL(img);
    let tagImg = document.querySelector('img');
    tagImg.src = urlImg;
})
.catch((error) => console.log('Error internal' , error));