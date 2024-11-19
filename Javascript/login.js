
document.addEventListener('DOMContentLoaded', () => {
    const formularioLogin = document.querySelector('.form-register');
    
    formularioLogin.addEventListener('submit', (e) => {
        e.preventDefault();
        
        window.location.href = '../Paginas/electrodomesticos.html';
    });
});