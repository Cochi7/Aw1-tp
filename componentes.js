const productos = [
    {nombre: "RTX 4080 Super", descripcion: "Ofrece un rendimiento gráfico excepcional con arquitectura Ada Lovelace, soporte para ray tracing y DLSS, ideal para gamers y creadores de contenido", precio: 599.99, imagen: "https://s3-sa-east-1.amazonaws.com/saasargentina/WFid8ScKitR6gwMJg7Xh/imagen"},
    {nombre: "Procesador AMD ryzen 7", descripcion: "Ofrece un excelente rendimiento multihilo, ideal para gaming y tareas creativas, con arquitectura Zen y eficientes capacidades de overclocking", precio: 299.99, imagen: "https://mexx-img-2019.s3.amazonaws.com/procesador-cpu-ryzen_40369_1.jpeg?v252?v348?v928"},
    {nombre: "Memoria RAM XLR8 16gb", descripcion: "Proporciona un alto rendimiento y velocidad, perfecta para gamers y creadores de contenido que buscan mejorar la capacidad de su sistema", precio: 99.99, imagen: "https://spacegamer.com.ar/img/Public/1058-producto-memoria-pny-xlr8-gaming-8gb-ddr4-11-fff46b60f4f0a86fb41601042661781.jpg"},
    {nombre: "Refrigeracion liquida", descripcion: "Ofrece una gestión térmica eficiente y silenciosa, ideal para mantener temperaturas óptimas en PCs de alto rendimiento y entusiastas del overclocking", precio: 149.99, imagen: "https://acf.geeknetic.es/imgw/imagenes/Tutoriales/2019/1618-cooler-master-ml240p-mirage/1618-cooler-master-ml240p-mirage-1.jpg?f=webp"}
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