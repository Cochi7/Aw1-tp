const productos = [
    {nombre: "Smart TV", descripcion: "Televisor inteligente de alta definición", precio: 599.99, imagen: "https://www.lg.com/ar/images/televisores/md06198536/gallery/DES_1_N.jpg"},
    {nombre: "Lavarropa", descripcion: "Lavarropas Carga Frontal 6Kg 600 RPM", precio: 799.99, imagen: "https://static.hendel.com/media/catalog/product/cache/b866fd8d147dcce474dc8744e477ca66/5/0/50126_gr-min.jpg"},
    {nombre: "Licuadora", descripcion: "Licuadora potente con múltiples velocidades", precio: 79.99, imagen: "https://www.dualequipamientos.com.ar/wp-content/uploads/2022/05/Licuadora-y-Picadora-Embassy-EM-500.jpg"},
    {nombre: "Parlante", descripcion: "Parlante Portátil Bluetooth DJP11", precio: 49.99, imagen: "https://acdn.mitiendanube.com/stores/001/593/734/products/ng-bt650-frente-a99d782a40b40145b717090542749228-1024-1024.jpg"}
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