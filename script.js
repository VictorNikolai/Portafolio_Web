// Función para abrir el modal al hacer clic en una imagen
function openModal(index) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const captionText = document.getElementById('caption');

    // Mostrar el modal
    modal.style.display = "flex";

    // Cambiar la imagen y descripción según el índice
    switch (index) {
        case 1:
            modalImage.src = "Img/Img1 (1).jpeg";
            captionText.innerHTML = "Yo soy de Chosica, hay un buen clima y un buen lugar para pasear.";
            break;
        case 2:
            modalImage.src = "Img/Img2.jpeg";
            captionText.innerHTML = "El puente colgante es un buen lugar para tomar fotos, si puedes...";
            break;
        case 3:
            modalImage.src = "Img/Img3.jpeg";
            captionText.innerHTML = "Chosica tiene un poco de todo si sabes buscar.";
            break;
        case 4:
            modalImage.src = "Img/Img4.jpeg";
            captionText.innerHTML = "¿Te animas a ir?";
            break;
        default:
            break;
    }
}

// Función para cerrar el modal
function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = "none";
}


function showImage(imageSrc, captionText, date, description) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const caption = document.getElementById('caption');
    const extraInfo = document.getElementById('extraInfo');

    // Configurar la imagen, título y texto adicional del modal
    modal.style.display = "flex"; // Mostrar el modal
    modalImage.src = imageSrc; // Ruta de la imagen
    caption.textContent = `${captionText} (${date})`; // Título y fecha
    extraInfo.textContent = description; // Descripción adicional
}

function closeImageModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = "none"; // Ocultar el modal
    const modalImage = document.getElementById('modalImage');
    modalImage.src = ""; // Limpiar la imagen del modal
    const extraInfo = document.getElementById('extraInfo');
    extraInfo.textContent = ""; // Limpiar el texto adicional
}


