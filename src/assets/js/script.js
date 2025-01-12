// Função para mostrar apenas uma seção por vez
function showSection(sectionId) {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => section.classList.remove('active')); // Ocultar todas as seções

    setTimeout(() => {
        const sectionToShow = document.querySelector(sectionId);
        sectionToShow.classList.add('active'); // Exibir a seção correspondente
    }, 500); // Delay de 500ms
}

// Adicionar evento de clique no botão "Cadastrar entidade"
document.getElementById('entity-register-button').addEventListener('click', () => {
    // Esconder a seção atual e exibir a próxima seção
    showSection('#new-entity'); // Exemplo: ir para a seção "Nova Entidade"
});

// Adicionar evento de clique no link de "Registrar nova atuação"
document.getElementById('activity-register-link').addEventListener('click', () => {
    // Esconder a seção atual e exibir a próxima seção
    showSection('#entity-activity'); // Exemplo: ir para a seção "Nova Entidade"
});

// Adicionar evento de clique nas setinhas, para voltar a seção de registro inicial
document.querySelectorAll('.back-to-register').forEach(arrow => {
    arrow.addEventListener('click', () => {
        // Mostrar a seção de registro inicial ao clicar em qualquer seta
        showSection('#entity-register');
    });
});
