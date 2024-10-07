const productos = [
    {nombre: "Iphone 15", descripcion: "Combina un diseño elegante, cámaras mejoradas y conectividad USB-C", precio: 899.99, imagen: "https://i.blogs.es/ef28bf/iphone-15-iphone-15-plus-7/650_1200.jpeg"},
    {nombre: "Samsung Galaxy s24 ultra", descripcion: "Presenta un diseño premium, pantalla AMOLED de alta resolución, potente procesador, cámaras avanzadas y soporte para S Pen", precio: 699.99, imagen: "https://www.cordobadigital.net/wp-content/uploads/2024/01/S24-Ultra-Grey.jpg"},
    {nombre: "Motorola g84", descripcion: "Ofrece un diseño atractivo, pantalla AMOLED, buena duración de batería y cámaras versátiles, todo a un precio accesible", precio: 349.99, imagen: "https://saturnohogar.vtexassets.com/arquivos/ids/156943/5064.jpg?v=638296552226300000"},
    {nombre: "Redmi Note 13", descripcion: "Destaca por su gran pantalla, potente batería, rendimiento sólido y cámaras versátiles, todo a un precio competitivo", precio: 249.99, imagen: "https://acdn.mitiendanube.com/stores/001/160/892/products/mzb0dwyeu1-6cc19c3a493fba243e16896258452938-640-0.jpg"}
]

const tarjetaProducto = (producto) => `
    <div class="col-md-6 col-lg-6 mb-4">
        <div class="card h-100 shadow-sm">
            <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
            <div class="card-body d-flex flex-column">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text flex-grow-1">${producto.descripcion}</p>
                <p class="card-text text-primary"><strong>Precio: $${producto.precio.toFixed(2)}</strong></p>
                <div class="d-flex justify-content-between align-items-center mt-3">
                    <div class="btn-group">
                        <button class="btn btn-sm btn-outline-secondary restar">-</button>
                        <span class="px-2 cantidad">0</span>
                        <button class="btn btn-sm btn-outline-secondary sumar">+</button>
                    </div>
                    <button class="btn btn-primary">Agregar al carrito</button>
                </div>
            </div>
        </div>
    </div>
`

const tarjetasProductos = `
    <div class="container mt-4">
        <div class="row">
            ${productos.map(producto => tarjetaProducto(producto)).join('')}
        </div>
    </div>
`

let contenedorProductos = document.getElementById('contenedor-productos')

window.addEventListener('load', () => {
    contenedorProductos.innerHTML = tarjetasProductos

    document.querySelectorAll('.card').forEach(card => {
        const sumar = card.querySelector('.sumar')
        const restar = card.querySelector('.restar')
        const cantidad = card.querySelector('.cantidad')

        sumar.addEventListener('click', () => {
            cantidad.textContent = parseInt(cantidad.textContent) + 1
        })

        restar.addEventListener('click', () => {
            if (parseInt(cantidad.textContent) > 0) {
                cantidad.textContent = parseInt(cantidad.textContent) - 1
            }
        })
    })
})