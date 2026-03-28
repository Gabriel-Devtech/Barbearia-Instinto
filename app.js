let currentIdx = 0;

function moveSlide(direction) {
    
    const track = document.querySelector('.slider-track');
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    currentIdx += direction;
    
    if (currentIdx >= totalSlides) {
        currentIdx = 0;
    } 
 
    else if (currentIdx < 0) {
        currentIdx = totalSlides - 1;
    }

    const percentage = -(currentIdx * 100);
    
    track.style.transform = `translateX(${percentage}%)`;

}

let perfilIdx = 0; // Índice separado do outro slider

function movePerfil(direction) {
    // Seleciona o trilho e os slides do QUEM SOMOS
    const track = document.querySelector('.perfil-track');
    const perfis = document.querySelectorAll('.slide-perfil');
    const totalPerfis = perfis.length;

    // Atualiza o índice
    perfilIdx += direction;

    // Lógica de Loop Infinito (igual ao outro)
    if (perfilIdx >= totalPerfis) {
        perfilIdx = 0;
    } else if (perfilIdx < 0) {
        perfilIdx = totalPerfis - 1;
    }

    // Calcula e aplica o movimento
    const percentage = -(perfilIdx * 100);
    track.style.transform = `translateX(${percentage}%)`;
}
