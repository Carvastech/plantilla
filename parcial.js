// Crear el Custom Element 'mi-boton'
class MiBoton extends HTMLElement {
    constructor() {
        super(); // Llamamos al constructor de HTMLElement
        this.attachShadow({ mode: 'open' }); // Shadow DOM

        // Crear el botón
        const boton = document.createElement('button');
        
        // Obtener los atributos del Custom Element
        const texto = this.getAttribute('texto');
        const enlace = this.getAttribute('enlace');
        
        // Establecer el texto del botón y añadir un evento de click
        boton.textContent = texto;
        boton.addEventListener('click', () => {
            window.open(enlace, '_blank'); // Abrir el enlace en una nueva pestaña
        });

        // Estilo del Custom Element
        const style = document.createElement('style');
        style.textContent = `
            /* Contenedor del botón - Usamos flexbox para centrar */
            div {
                display: flex;
                justify-content: center; /* Centrar horizontalmente */
                align-items: center; /* Centrar verticalmente */
                height: 100%; /* Asegura que el contenedor ocupe toda la altura */
                text-align: center;
            }

            /* Estilo del botón (color verde) */
            button {
                padding: 5px 10px;
                font-size: 16px;
                background-color: #28a745; /* Botón verde */
                color: white;
                border: none;
                border-radius: 5px;
                cursor: pointer;
            }

            /* Efecto hover en el botón */
            button:hover {
                background-color: #218838; /* Color verde más oscuro cuando se pasa el ratón */
            }
        `;
        
        // Crear un contenedor para el botón
        const wrapper = document.createElement('div');
        wrapper.appendChild(boton);

        // Añadir el estilo y el contenedor al Shadow DOM
        this.shadowRoot.append(style, wrapper);
    }
}

// Registrar el Custom Element
customElements.define('mi-boton', MiBoton);
