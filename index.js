document.querySelector('.botoes_materias').addEventListener('wheel', function(e) {
    e.preventDefault(); // impede scroll vertical
    this.scrollLeft += e.deltaY; // move horizontal com a rodinha
});
const container = document.querySelector('.botoes_materias');
const items = document.querySelectorAll('.botoes_materias .botao');

let isScrolling = false;

container.addEventListener('wheel', function(e) {
    e.preventDefault();
    if (isScrolling) return; // evita múltiplos disparos rápidos
    isScrolling = true;

    // pega a largura de um item (incluindo margem/gap)
    const itemWidth = items[0].offsetWidth + parseInt(getComputedStyle(container).gap || 0);

    // decide direção
    if (e.deltaY > 0) {
        container.scrollBy({ left: itemWidth, behavior: 'smooth' });
    } else {
        container.scrollBy({ left: -itemWidth, behavior: 'smooth' });
    }

    setTimeout(() => { isScrolling = false; }, 500); // tempo da animação
});