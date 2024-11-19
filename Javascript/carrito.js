document.addEventListener('DOMContentLoaded', () => {
    const carritoContenedor = document.getElementById('carrito-contenedor');
    const totalCompra = document.getElementById('total-compra');
    const btnComprar = document.getElementById('btn-comprar');

    function cargarCarrito() {
        const carrito = JSON.parse(localStorage.getItem('itemsCarrito') || '[]');
        let total = 0;

        carritoContenedor.innerHTML = '';

        carrito.forEach((producto, index) => {
            const precioTotal = producto.precio * producto.cantidad;
            total += precioTotal;

            const productoCard = document.createElement('div');
            productoCard.classList.add('col-md-6', 'mb-10');
            productoCard.innerHTML = `
                <div class="card">
                    <img src="${producto.imagen_url}" class="card-img-top" alt="${producto.nombre}">
                    <div class="card-body">
                        <h5 class="card-title">${producto.nombre}</h5>
                        <p>Cantidad: ${producto.cantidad}</p>
                        <p>Precio Unitario: $${producto.precio.toFixed(2)}</p>
                        <p>Subtotal: $${precioTotal.toFixed(2)}</p>
                        <button class="btn btn-danger eliminar-producto" data-index="${index}">Eliminar</button>
                    </div>
                </div>
            `;
            carritoContenedor.appendChild(productoCard);
        });

        totalCompra.textContent = `Total: $${total.toFixed(2)}`;
    }

    carritoContenedor.addEventListener('click', (e) => {
        if (e.target.classList.contains('eliminar-producto')) {
            const index = e.target.getAttribute('data-index');
            const carrito = JSON.parse(localStorage.getItem('itemsCarrito') || '[]');
            carrito.splice(index, 1);
            localStorage.setItem('itemsCarrito', JSON.stringify(carrito));
            cargarCarrito();
        }
    });

    btnComprar.addEventListener('click', () => {
        localStorage.removeItem('itemsCarrito');
        cargarCarrito();
        alert('¡Gracias por tu compra!');
    });

    cargarCarrito();
});