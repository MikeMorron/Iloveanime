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

document.querySelectorAll('.anime-item h3').forEach(h3 => {
    const length = h3.textContent.length;

    if (length > 40) {
        h3.style.fontSize = '0.8rem';
        h3.style.whiteSpace = 'normal';
        h3.style.display = '-webkit-box';
        h3.style.webkitLineClamp = '2';
        h3.style.webkitBoxOrient = 'vertical';
        h3.style.overflow = 'hidden';
        h3.style.textOverflow = 'ellipsis';
    } else if (length > 30) {
        h3.style.fontSize = '0.8rem';
        h3.style.whiteSpace = 'normal';
        h3.style.display = '-webkit-box';
        h3.style.webkitLineClamp = '2';
        h3.style.webkitBoxOrient = 'vertical';
        h3.style.overflow = 'hidden';
        h3.style.textOverflow = 'ellipsis';
    } else if (length > 20) {
        h3.style.fontSize = '1rem';
        h3.style.whiteSpace = 'normal';
        h3.style.display = '-webkit-box';
        h3.style.webkitLineClamp = '2';
        h3.style.webkitBoxOrient = 'vertical';
        h3.style.overflow = 'hidden';
        h3.style.textOverflow = 'ellipsis';
    } else if (length > 10) {
        h3.style.fontSize = '1.4rem';
        h3.style.whiteSpace = 'normal';
        h3.style.display = '-webkit-box';
        h3.style.webkitLineClamp = '2';
        h3.style.webkitBoxOrient = 'vertical';
        h3.style.overflow = 'hidden';
        h3.style.textOverflow = 'ellipsis';
    } else {
        h3.style.fontSize = '1rem';
        h3.style.whiteSpace = 'normal';
        h3.style.display = '-webkit-box';
        h3.style.webkitLineClamp = '2';
        h3.style.webkitBoxOrient = 'vertical';
        h3.style.overflow = 'hidden';
        h3.style.textOverflow = 'ellipsis';
    }
});
