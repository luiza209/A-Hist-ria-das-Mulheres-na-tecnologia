// Obtém todos os elementos de aba
const tabLinks = document.querySelectorAll('.tabs li a');

// Adiciona um ouvinte de evento de clique a cada aba
tabLinks.forEach(tab => {
  tab.addEventListener('click', (e) => {
    e.preventDefault();

    // Remove a classe 'active' de todas as abas
    tabLinks.forEach(link => link.classList.remove('active'));

    // Adiciona a classe 'active' à aba clicada
    tab.classList.add('active');

    // Obtém o ID da aba clicada
    const targetId = tab.getAttribute('href').substring(1);

    // Obtém todos os conteúdos de aba e remove a classe 'active'
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => content.classList.remove('active'));

    // Adiciona a classe 'active' ao conteúdo correspondente
    const targetContent = document.getElementById(targetId);
    targetContent.classList.add('active');
  });
});
