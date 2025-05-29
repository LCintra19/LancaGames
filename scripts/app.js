const container = document.getElementById('jogos-container');
const apiKey = '05f6fa6c6cff44359655eddea87799d5';

const today = new Date().toISOString().split('T')[0];
const endOfYear = '2025-12-31';

function formatarDataBrasileira(dataISO) {  
  if (!dataISO) return 'Não definido';
  const [ano, mes, dia] = dataISO.split('-');
  return `${dia}/${mes}/${ano}`;
}

fetch(`https://api.rawg.io/api/games?dates=${today},${endOfYear}&ordering=released&key=${apiKey}`)
  .then(response => response.json())
  .then(data => {
    container.innerHTML = '';
        
    data.results.forEach(jogo => {
            if (!jogo.background_image) return; // Ignora jogos sem imagem
          
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
              <img src="${jogo.background_image}" alt="${jogo.name}" />
              <h2>${jogo.name}</h2>
              <p><strong>Lançamento:</strong> ${formatarDataBrasileira(jogo.released)}</p>
              <p><strong>Metacritic:</strong> ${jogo.metacritic || 'Sem nota'}</p>
              <a href="https://www.google.com/search?q=${encodeURIComponent(jogo.name + ' comprar')}" target="_blank">Ver opções de compra</a>
            `;
            container.appendChild(card);
          });
 
  })
  .catch(err => {
    container.innerHTML = '<p>Erro ao carregar os jogos. Tente novamente mais tarde.</p>';
    console.error(err);
  });
