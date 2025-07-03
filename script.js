document.addEventListener('DOMContentLoaded', () => {
    // Obtener todos los elementos de anime
    const animeItems = document.querySelectorAll('.anime-item');

    // Añadir evento de clic a cada elemento
    animeItems.forEach(item => {
        item.addEventListener('click', () => {
            const url = item.getAttribute('data-url');
            if (url) {
                window.location.href = url; // Redirigir a la URL del anime
            }
        });
    });

    // Información del último anime subido
    const ultimoAnime = {
        img: 'https://cdn.animenewsnetwork.com/thumbnails/max700x700/cms/feature/197795/oshi-no-ko-vol-1.jpg', // Cambia por la ruta real de la imagen
        titulo: 'Título del Último Anime', // Cambia por el título real
        url: 'https://enlace-al-ultimo-anime.com' // Cambia por el enlace real
    };

    // Actualiza el contenido del último anime
    const animeUltimo = document.getElementById('anime-ultimo');
    const imgUltimo = animeUltimo.querySelector('img');
    const tituloUltimo = document.getElementById('titulo-anime');

    imgUltimo.src = ultimoAnime.img; // Asigna la ruta de la imagen
    tituloUltimo.textContent = ultimoAnime.titulo; // Asigna el título

    // Asegúrate de que el evento de clic redirija al enlace correcto
    animeUltimo.addEventListener('click', () => {
        window.location.href = ultimoAnime.url;
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const dynamicTextItems = document.querySelectorAll('.dynamic-text li');
    let currentIndex = 0;

    function showNextText() {
        // Oculta todos los elementos
        dynamicTextItems.forEach(item => item.style.display = 'none');

        // Muestra el texto actual
        dynamicTextItems[currentIndex].style.display = 'block';

        // Cambia al siguiente texto
        currentIndex = (currentIndex + 1) % dynamicTextItems.length; // Regresa al primer elemento si llega al final

        // Cambia el texto cada 3 segundos (3000 ms)
        setTimeout(showNextText, 2000);
    }

    showNextText(); // Inicia el proceso
});


// ver desbordamientos, quitar solo los //
//(function () {
    //const docWidth = document.documentElement.offsetWidth;
    //const elements = [...document.querySelectorAll('*')];

    //elements.forEach(el => {
        //if (el.offsetWidth > docWidth) {
            //console.warn('Elemento desbordado:', el);
            //el.style.border = '2px dashed red'; // Visual para que lo veas en la página
        //}
    //});
//})();