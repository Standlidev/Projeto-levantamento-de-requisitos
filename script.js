const loginBtn = document.querySelector('.loginLink'); // Botão do Header
const modal = document.getElementById('modalOverlay');
const closeBtn = document.getElementById('closeModal');

// Abrir modal
loginBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
});

// Fechar modal ao clicar no X
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Fechar ao clicar fora da caixa branca
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});