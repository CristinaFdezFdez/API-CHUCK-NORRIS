// URL de la API de Chuck Norris
const API_CATEGORIES = "https://api.chucknorris.io/jokes/categories";
const API_RANDOM_JOKE = "https://api.chucknorris.io/jokes/random";

// Elementos del DOM
const categoriaSelect = document.getElementById('categoria');
const obtenerChisteBtn = document.getElementById('obtenerChiste');
const contenedorChiste = document.getElementById('contenedor-chiste');

// Función para cargar las categorías de los chistes
function rellenarCategorias() {
    fetch(API_CATEGORIES)
        .then(response => response.json())
        .then(categories => {
            categoriaSelect.innerHTML = '<option value="">Selecciona una categoría</option>';
            categories.forEach(category => {
                const option = document.createElement('option');
                option.value = category;
                option.textContent = category;
                categoriaSelect.appendChild(option);
            });
        })
        .catch(error => {
            console.error('Error al cargar las categorías:', error);
            mostrarMensaje('Error al cargar las categorías', 'error');
        });
}

// Función para obtener un chiste aleatorio de la categoría seleccionada
function obtenerChiste() {
    const categoriaSeleccionada = categoriaSelect.value;

    if (!categoriaSeleccionada) {
        mostrarMensaje('Por favor, selecciona una categoría.', 'error');
        return;
    }

    obtenerChisteBtn.disabled = true;
    obtenerChisteBtn.textContent = 'Cargando...';
    contenedorChiste.className = "cargando"; // Añadir clase de carga

    const url = `${API_RANDOM_JOKE}?category=${categoriaSeleccionada}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            mostrarMensaje(data.value, 'correcto');
        })
        .catch(error => {
            console.error('Error al obtener el chiste:', error);
            mostrarMensaje('Error al obtener el chiste', 'error');
        })
        .finally(() => {
            obtenerChisteBtn.disabled = false;
            obtenerChisteBtn.textContent = 'Mostrar chiste';
            contenedorChiste.classList.remove("cargando");
        });
}

// Función para mostrar mensajes con clases CSS
function mostrarMensaje(mensaje, tipo) {
    contenedorChiste.textContent = mensaje;
    contenedorChiste.className = tipo; // Aplicar clase CSS correspondiente
}

// Evento para cargar las categorías al iniciar la página
document.addEventListener('DOMContentLoaded', rellenarCategorias);

// Evento para mostrar un chiste al hacer clic en el botón
obtenerChisteBtn.addEventListener('click', obtenerChiste);


