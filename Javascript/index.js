const navElements = [
    {title:"Electrodomesticos", link: "./electrodomesticos.html"},
    {title:"Celulares", link: "./celulares.html"},
    {title:"Componentes", link: "./componentes.html"},
]

const navBar = `
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a href="#" class="navbar-brand">Tienda Pichichus</a>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollpase" aria-controls="navbarCollpase" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            
            <div class="collapse navbar-collapse" id="navbarCollpase">
                <ul class="navbar-nav">
                    ${
                        navElements.map(e =>{
                            return `    
                            <li class="nav-item">
                                <a href=${e.link} class="nav-link">${e.title}</a>
                            </li>
                            `
                        }).join('')
                    }
                </ul>
                <button class="logoutBtn btn btn-danger ms-auto"><i class="bi bi-box-arrow-in-left"></i></button>
            </div>
        </div>
    </nav>
`

let navContainer = document.querySelector('header')
let pageName = document.getElementById('pageName').value
let title = document.getElementById('title')

window.addEventListener('load', () => {
    navContainer.innerHTML = navBar
    title.textContent = `${pageName}`
    document.title = pageName

    const logoutBtn = document.querySelector('.logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {

            window.location.href = '../Paginas/login.html';
        });
    }
})

