// === Inicialização do áudio ===
const audioPlayer = document.getElementById('customAudioPlayer');
const playPauseBtn = document.getElementById('playPauseBtn');
const playIcon = document.getElementById('playIcon');
const dropdownToggle = document.getElementById('dropdownToggle');
const volumeBar = document.querySelector('.volume-bar');
const volumeFill = document.querySelector('.volume-fill');
const progressBar = document.querySelector('.progress-bar');
const progressFill = document.querySelector('.progress-fill');
const prevTrackBtn = document.getElementById('prevTrackBtn');
const nextTrackBtn = document.getElementById('nextTrackBtn');
// Lista de faixas disponíveis
const tracks = [
  { src: "https://archive.org/download/tvtunes_29392/Yu-Gi-Oh%21GX%20-%20Japanese%20Opening%201.mp3", name: "Música 001", desc: "Yu-Gi-Oh!GX Japanese." },
  { src: "https://archive.org/download/tvtunes_12935/Yu-Gi-Oh%20GX%20-%20Japanese%20-%20Opening%204%20-%20Precious%20Time%20Glory%20Days.mp3", name: "Música 002", desc: "Precious Time Glory Days." },
  { src: "https://ia601001.us.archive.org/32/items/bgm-duel-normal-05/BGM%20Duel%20Normal%2005.mp3", name: "Música 003", desc: "Trilha de duelo normal 05." },
  { src: "https://archive.org/download/03.-shuffle/01.%20voice.mp3", name: "Música 004", desc: "Voice do shuffle." },
  { src: "https://archive.org/download/03.-shuffle/02.%20Energy%20Shower.mp3", name: "Música 005", desc: "Energy Shower do shuffle." },
  { src: "https://archive.org/download/yu-yu-hakusho-collection/DISC%201/01.%20%E5%BE%AE%E7%AC%91%E3%81%BF%E3%81%AE%E7%88%86%E5%BC%BE.mp3", name: "Música 006", desc: "Bomba de Sorriso." },
  { src: "https://archive.org/download/angel-beats-oped-album/1.%20My%20Soul%2C%20Your%20Beats%21.mp3", name: "Música 007", desc: "My Soul, Your Beats!" },
  { src: "https://archive.org/download/angel-beats-oped-album/2.%20Brave%20Song.mp3", name: "Música 008", desc: "Brave Song." },
  { src: "https://archive.org/download/sincerely-album/01.%20Sincerely.mp3", name: "Música 009", desc: "Sincerely." },
];
// Estado do player
let isPlaying = false;
let currentTrackIndex = 0;
// Carrega a faixa inicial
function loadTrack(index) {
  if (index >= 0 && index < tracks.length) {
    audioPlayer.src = tracks[index].src;
    dropdownToggle.textContent = tracks[index].name;
    currentTrackIndex = index;
    audioPlayer.currentTime = 0; // Reseta o progresso
    updateProgress(); // Atualiza a barra de progresso
    if (isPlaying) {
      audioPlayer.play().catch(err => console.error('Erro ao reproduzir:', err));
    }
  }
}
// Alterna entre play e pause
function togglePlayPause() {
  if (isPlaying) {
    audioPlayer.pause();
    playIcon.textContent = '▶';
    playIcon.classList.add('play');
    isPlaying = false;
  } else {
    audioPlayer.play().catch(err => console.error('Erro ao reproduzir:', err));
    playIcon.textContent = '⏸';
    playIcon.classList.remove('play');
    isPlaying = true;
  }
}
// Avança para a próxima faixa
function nextTrack() {
  currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
  loadTrack(currentTrackIndex);
}
// Retrocede para a faixa anterior
function prevTrack() {
  currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
  loadTrack(currentTrackIndex);
}
// Atualiza a barra de progresso
function updateProgress() {
  if (audioPlayer.duration) {
    const progressPercent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    progressFill.style.width = `${progressPercent}%`;
  }
}
// Atualiza a barra de volume
function updateVolume() {
  const volumePercent = audioPlayer.volume * 100;
  volumeFill.style.width = `${volumePercent}%`;
}
// Inicializa o player com a primeira faixa
loadTrack(currentTrackIndex);
audioPlayer.volume = 0.5; // Volume inicial em 50%
updateVolume(); // Inicializa a barra de volume
// Evento de clique no botão play/pause
playPauseBtn.addEventListener('click', togglePlayPause);
// Eventos para os botões de retroceder e avançar
prevTrackBtn.addEventListener('click', prevTrack);
nextTrackBtn.addEventListener('click', nextTrack);
// Atualiza a barra de progresso em tempo real
audioPlayer.addEventListener('timeupdate', updateProgress);
// Controle de volume com a barra personalizada
volumeBar.addEventListener('click', (e) => {
  const rect = volumeBar.getBoundingClientRect();
  const clickX = e.clientX - rect.left;
  const volumePercent = Math.min(Math.max(clickX / rect.width, 0), 1);
  audioPlayer.volume = volumePercent;
  updateVolume();
});
// Controle de progresso com a barra personalizada
progressBar.addEventListener('click', (e) => {
  const rect = progressBar.getBoundingClientRect();
  const clickX = e.clientX - rect.left;
  const progressPercent = Math.min(Math.max(clickX / rect.width, 0), 1);
  audioPlayer.currentTime = progressPercent * audioPlayer.duration;
  updateProgress();
});
// === Abre modal com lista de músicas ===
dropdownToggle.addEventListener('click', () => {
  const modalBody = document.getElementById('modalBody');
  modalBody.innerHTML = '';
  // Cria header fixo com título e busca
  const header = document.createElement('div');
  header.className = 'modal-header';
  const title = document.createElement('h2');
  title.textContent = 'Lista de Músicas';
  header.appendChild(title);
  // Adiciona barra de pesquisa
  const searchWrap = document.createElement('div');
  searchWrap.className = 'modal-search-wrap';
  const searchInputModal = document.createElement('input');
  searchInputModal.type = 'text';
  searchInputModal.placeholder = 'Pesquisar músicas...';
  searchInputModal.id = 'modalSearchMusic';
  searchWrap.appendChild(searchInputModal);
  const clearBtn = document.createElement('button');
  clearBtn.textContent = '✖';
  clearBtn.title = 'Limpar busca';
  searchWrap.appendChild(clearBtn);
  header.appendChild(searchWrap);
  modalBody.appendChild(header);
  // Adiciona lista de cards
  const musicList = document.createElement('div');
  musicList.className = 'music-list';
  tracks.forEach((track, index) => {
    const card = document.createElement('div');
    card.className = 'music-card';
    card.dataset.title = track.name; // Para filtro
    const info = document.createElement('div');
    info.className = 'music-info';
    const h3 = document.createElement('h3');
    h3.textContent = track.name;
    const p = document.createElement('p');
    p.textContent = track.desc;
    info.appendChild(h3);
    info.appendChild(p);
    const btn = document.createElement('button');
    btn.className = 'play-btn';
    btn.textContent = 'Ouvir';
    btn.addEventListener('click', () => {
      loadTrack(index);
      if (!isPlaying) togglePlayPause();
      closeModal();
    });
    card.appendChild(info);
    card.appendChild(btn);
    musicList.appendChild(card);
  });
  // Adiciona a faixa "Em Breve" como desabilitada
  const emBreveCard = document.createElement('div');
  emBreveCard.className = 'music-card disabled';
  emBreveCard.dataset.title = 'Em Breve';
  const emBreveInfo = document.createElement('div');
  emBreveInfo.className = 'music-info';
  const emBreveH3 = document.createElement('h3');
  emBreveH3.textContent = 'Em Breve';
  const emBreveP = document.createElement('p');
  emBreveP.textContent = 'Mais músicas em breve.';
  emBreveInfo.appendChild(emBreveH3);
  emBreveInfo.appendChild(emBreveP);
  const emBreveBtn = document.createElement('button');
  emBreveBtn.className = 'play-btn';
  emBreveBtn.textContent = 'Ouvir';
  emBreveBtn.disabled = true;
  emBreveCard.appendChild(emBreveInfo);
  emBreveCard.appendChild(emBreveBtn);
  musicList.appendChild(emBreveCard);
  modalBody.appendChild(musicList);
  // Mostra o modal
  const overlay = document.getElementById('modalOverlay');
  overlay.classList.remove('hidden');
  setTimeout(() => overlay.classList.add('open'), 10);
  // Evento para filtro na busca do modal de músicas
  searchInputModal.addEventListener('input', () => {
    const query = normalizeText(searchInputModal.value.trim());
    const items = musicList.querySelectorAll('.music-card');
    items.forEach(item => {
      const title = normalizeText(item.dataset.title);
      item.style.display = title.includes(query) ? 'flex' : 'none';
    });
  });
  // Limpar busca
  clearBtn.addEventListener('click', () => {
    searchInputModal.value = '';
    const items = musicList.querySelectorAll('.music-card');
    items.forEach(item => item.style.display = 'flex');
  });
});
// === Botão de copiar PIX ===
const copyPixBtn = document.getElementById('copyPixBtn');
const pixEmail = document.querySelector('.pix-email').textContent;
copyPixBtn.addEventListener('click', () => {
  navigator.clipboard.writeText(pixEmail).then(() => {
    const msg = document.createElement('div');
    msg.className = 'pix-copied-msg';
    msg.textContent = 'Chave PIX copiada!';
    document.body.appendChild(msg);
    setTimeout(() => msg.remove(), 3000);
  });
});
// === Funções de busca ===
const searchInput = document.getElementById('search');
const clearSearchBtn = document.getElementById('clearSearch');
const noResults = document.getElementById('noResults');
const searchResults = document.getElementById('searchResults');
// Função para normalizar texto
function normalizeText(text) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}
// Função para realizar a busca principal com lista de resultados
function performSearch(query) {
  const normalizedQuery = normalizeText(query).trim();
  let hasResults = false;
  searchResults.innerHTML = ''; // Limpa resultados anteriores
  searchResults.style.display = 'none'; // Esconde por padrão
  // Fecha todas as seções e remove destaques
  const sectionTitles = Array.from(document.querySelectorAll('[data-search="sidebar-title"]')).map(h2 => h2.closest('.section'));
  sectionTitles.forEach(section => {
    section.style.display = 'block';
    section.classList.remove('highlight');
    const sectionContent = section.querySelector('.section-content');
    if (sectionContent) sectionContent.classList.remove('open');
    const button = section.querySelector('.toggle-btn');
    if (button) button.textContent = 'ABRIR';
  });
  noResults.classList.add('hidden');
  if (normalizedQuery.length === 0) {
    return;
  }
  let items = [];
  let buttonText = 'BAIXAR';
  let categoryKeywords = [];
  let categoryFound = false;
  let displayTitlePrefix = '';
  let tagExtractor = null;
  // Definições de categorias
  const isoKeywords = ['iso', 'jogos', 'jogos traduzidos', 'tag force', 'games'];
  const textureKeywords = ['textura', 'texturas', 'textures'];
  const cheatKeywords = ['adicional', 'cheats', 'codigos', 'códigos', 'hack', 'malacas'];
  const fontKeywords = ['adicional', 'font', 'font original'];
  const templateKeywords = ['templates'];
  const themeKeywords = ['temas', 'campo de duelo', 'duel battle', 'themes'];
  const tutorialKeywords = ['tutorial', 'tutoriais', 'suporte', 'ajuda', 'help'];
  if (isoKeywords.some(k => normalizedQuery.includes(k))) {
    items = Array.from(document.querySelectorAll('#jogosContent .game-item'));
    categoryKeywords = isoKeywords;
    displayTitlePrefix = 'ISO DO ';
    tagExtractor = item => {
      const badge = item.querySelector('.new-badge');
      return badge ? badge.textContent.split('|').pop().trim() : '';
    };
    categoryFound = true;
  } else if (textureKeywords.some(k => normalizedQuery.includes(k))) {
    items = Array.from(document.querySelectorAll('#texturasContent .texture-item'));
    categoryKeywords = textureKeywords;
    displayTitlePrefix = 'TEXTURA DO ';
    categoryFound = true;
  } else if (cheatKeywords.some(k => normalizedQuery.includes(k))) {
    items = Array.from(document.querySelectorAll('#adicionalContent .texture-item[data-title="CHEATS"]'));
    categoryKeywords = cheatKeywords;
    displayTitlePrefix = '';
    categoryFound = true;
  } else if (fontKeywords.some(k => normalizedQuery.includes(k))) {
    items = Array.from(document.querySelectorAll('#adicionalContent .texture-item[data-title="FONT ORIGINAL"]'));
    categoryKeywords = fontKeywords;
    displayTitlePrefix = '';
    categoryFound = true;
  } else if (templateKeywords.some(k => normalizedQuery.includes(k))) {
    items = Array.from(document.querySelectorAll('#templateContent .texture-item'));
    categoryKeywords = templateKeywords;
    displayTitlePrefix = '';
    categoryFound = true;
  } else if (themeKeywords.some(k => normalizedQuery.includes(k))) {
    items = Array.from(document.querySelectorAll('#temasContent .texture-item'));
    categoryKeywords = themeKeywords;
    displayTitlePrefix = '';
    categoryFound = true;
  } else if (tutorialKeywords.some(k => normalizedQuery.includes(k))) {
    items = Array.from(document.querySelectorAll('#tutoriaisContent .game-item'));
    categoryKeywords = tutorialKeywords;
    buttonText = 'ASSISTIR';
    displayTitlePrefix = '';
    categoryFound = true;
  }
  if (categoryFound && items.length > 0) {
    // Extrai o filtro removendo as keywords de categoria
    let filterQuery = normalizedQuery;
    categoryKeywords.forEach(k => {
      filterQuery = filterQuery.replace(new RegExp(k, 'gi'), '').trim();
    });
    // Filtra itens se houver filtro adicional
    if (filterQuery) {
      items = items.filter(item => {
        const title = item.querySelector('.card-title, h3')?.textContent.trim() || item.dataset.title || '';
        return normalizeText(title).includes(filterQuery);
      });
    }
    // Cria a lista de resultados
    const ul = document.createElement('ul');
    ul.className = 'search-results-list';
    items.forEach(item => {
      let title = item.querySelector('.card-title, h3')?.textContent.trim() || item.dataset.title || '';
      const link = item.querySelector('a')?.href;
      if (title && link) {
        let displayTitle = `${displayTitlePrefix}${title.toUpperCase()} `;
        let tag = '';
        if (tagExtractor) {
          tag = tagExtractor(item);
        }
        const li = document.createElement('li');
        li.className = 'search-result-item';
        const span = document.createElement('span');
        span.textContent = displayTitle;
        const btn = document.createElement('button');
        btn.className = 'search-result-btn';
        btn.textContent = buttonText;
        btn.addEventListener('click', () => {
          window.open(link, '_blank', 'noopener,noreferrer');
        });
        li.appendChild(span);
        // Adiciona botão extra para TAG FORCE 6 SOLO/MULTI
        if (title === 'TAG FORCE 6' && tag) {
          const extraBtn = document.createElement('button');
          extraBtn.className = 'tag-btn';
          extraBtn.textContent = tag.toUpperCase();
          li.appendChild(extraBtn);
        }
        li.appendChild(btn);
        ul.appendChild(li);
        hasResults = true;
      }
    });
    searchResults.appendChild(ul);
    searchResults.style.display = 'block';
  }
  // Caso não haja resultados, mostra mensagem
  if (!hasResults && query.length > 0) {
    noResults.classList.remove('hidden');
  }
}
// Evento de input na busca
searchInput.addEventListener('input', () => {
  const query = searchInput.value.trim();
  performSearch(query);
});
// Evento para limpar busca
clearSearchBtn.addEventListener('click', () => {
  searchInput.value = '';
  const sectionTitles = Array.from(document.querySelectorAll('[data-search="sidebar-title"]')).map(h2 => h2.closest('.section'));
  sectionTitles.forEach(section => {
    section.style.display = 'block';
    section.classList.remove('highlight');
  });
  noResults.classList.add('hidden');
  searchResults.innerHTML = '';
  searchResults.style.display = 'none';
  // Fecha todas as seções
  document.querySelectorAll('.section-content').forEach(content => {
    content.classList.remove('open');
    const button = content.previousElementSibling.querySelector('.toggle-btn');
    if (button) {
      button.textContent = 'ABRIR';
    }
  });
});
// Fecha searchResults ao clicar fora
document.addEventListener('click', (e) => {
  // Fecha searchResults ao clicar fora
  if (searchResults.style.display === 'block' && !searchResults.contains(e.target) && !searchInput.contains(e.target)) {
    searchResults.innerHTML = '';
    searchResults.style.display = 'none';
  }
});
// === Função para abrir modal com conteúdo da seção central ===
function openModalForSection(button, contentId) {
  const content = document.getElementById(contentId);
  if (!content) return;
  // Clona o conteúdo da seção
  const clone = content.cloneNode(true);
  clone.classList.add('open');
  clone.style.padding = '5px'; // Organiza com padding consistente
  clone.style.display = 'flex'; // Garante flex para grids internas
  clone.style.flexDirection = 'column';
  clone.style.gap = '15px';
  // Limpa e popula o body do modal
  const modalBody = document.getElementById('modalBody');
  modalBody.innerHTML = '';
  // Cria header fixo com título e busca
  const header = document.createElement('div');
  header.className = 'modal-header';
  const title = document.createElement('h2');
  title.textContent = button.closest('.section-header').querySelector('h2').textContent;
  header.appendChild(title);
  // Adiciona barra de pesquisa
  const searchWrap = document.createElement('div');
  searchWrap.className = 'modal-search-wrap';
  const searchInputModal = document.createElement('input');
  searchInputModal.type = 'text';
  searchInputModal.placeholder = 'Pesquisar nesta seção...';
  searchInputModal.id = 'modalSearchSection';
  searchWrap.appendChild(searchInputModal);
  const clearBtn = document.createElement('button');
  clearBtn.textContent = '✖';
  clearBtn.title = 'Limpar busca';
  searchWrap.appendChild(clearBtn);
  header.appendChild(searchWrap);
  modalBody.appendChild(header);
  // Adiciona o clone do conteúdo
  modalBody.appendChild(clone);
  // Mostra o overlay/modal
  const overlay = document.getElementById('modalOverlay');
  overlay.classList.remove('hidden');
  setTimeout(() => overlay.classList.add('open'), 10);
  document.body.classList.add('modal-open');
  // Atualiza ARIA
  button.setAttribute('aria-expanded', 'true');
  // Evento para filtro na busca do modal da seção
  searchInputModal.addEventListener('input', () => {
    const query = normalizeText(searchInputModal.value.trim());
    const items = clone.querySelectorAll('.game-item, .texture-item, .project-item');
    items.forEach(item => {
      const title = normalizeText(item.dataset.title || item.textContent);
      item.style.display = title.includes(query) ? '' : 'none';
    });
  });
  // Limpar busca
  clearBtn.addEventListener('click', () => {
    searchInputModal.value = '';
    const items = clone.querySelectorAll('.game-item, .texture-item, .project-item');
    items.forEach(item => item.style.display = '');
  });
  // Adiciona event listeners aos botões de lançamento no clone
  clone.querySelectorAll('.game-item .launch-btn').forEach(button => {
    button.addEventListener('click', () => {
      const gameCard = button.previousElementSibling;
      if (gameCard && gameCard.tagName === 'A') {
        window.open(gameCard.href, '_blank', 'noopener,noreferrer');
      }
    });
  });
  // Equaliza larguras para modals específicos
  const sectionId = button.closest('.section').id;
  if (['texturas', 'adicional', 'template', 'temas', 'projetos'].includes(sectionId)) {
    equalizeCardWidths(clone, sectionId);
  }
}
// Função para igualar larguras dos cards
function equalizeCardWidths(clone, sectionId) {
  let cardSelector;
  switch(sectionId) {
    case 'texturas':
    case 'adicional':
    case 'template':
    case 'temas':
      cardSelector = '.texture-item';
      break;
    case 'projetos':
      cardSelector = '.project-item';
      break;
    default:
      return;
  }
  const cards = clone.querySelectorAll(cardSelector);
  if (cards.length === 0) return;
  let maxWidth = 0;
  // Resetar larguras para calcular natural
  cards.forEach(card => {
    card.style.width = 'auto';
    const width = card.offsetWidth;
    if (width > maxWidth) maxWidth = width;
  });
  // Aplicar max width
  cards.forEach(card => {
    card.style.width = `${maxWidth}px`;
  });
}
// === Função para abrir modal com conteúdo da lista ===
function openModalForList(button, listId) {
  const list = document.getElementById(listId);
  if (!list) return;
  // Clona o conteúdo da lista
  const clone = list.cloneNode(true);
  clone.classList.add('open');
  clone.style.display = 'grid';
  clone.style.gap = '15px';
  clone.style.padding = '15px';
  // Limpa e popula o body do modal
  const modalBody = document.getElementById('modalBody');
  modalBody.innerHTML = '';
  // Cria header fixo com título e busca
  const header = document.createElement('div');
  header.className = 'modal-header';
  const title = document.createElement('h2');
  title.textContent = button.textContent;
  header.appendChild(title);
  // Adiciona barra de pesquisa
  const searchWrap = document.createElement('div');
  searchWrap.className = 'modal-search-wrap';
  const searchInputModal = document.createElement('input');
  searchInputModal.type = 'text';
  searchInputModal.placeholder = 'Pesquisar nesta seção...';
  searchInputModal.id = 'modalSearchList';
  searchWrap.appendChild(searchInputModal);
  const clearBtn = document.createElement('button');
  clearBtn.textContent = '✖';
  clearBtn.title = 'Limpar busca';
  searchWrap.appendChild(clearBtn);
  header.appendChild(searchWrap);
  modalBody.appendChild(header);
  // Adiciona o clone da lista
  modalBody.appendChild(clone);
  // Adiciona a classe .members-modal ao .modal-content apenas para o modal de membros
  const modalContent = document.querySelector('.modal-content');
  if (listId === 'membersList') {
    modalContent.classList.add('members-modal');
  }
  // Mostra o overlay/modal
  const overlay = document.getElementById('modalOverlay');
  overlay.classList.remove('hidden');
  setTimeout(() => overlay.classList.add('open'), 10);
  document.body.classList.add('modal-open');
  // Atualiza ARIA
  button.setAttribute('aria-expanded', 'true');
  // Evento para filtro na busca do modal da lista
  searchInputModal.addEventListener('input', () => {
    const query = normalizeText(searchInputModal.value.trim());
    const items = clone.querySelectorAll('.member-item');
    items.forEach(item => {
      const textContent = normalizeText(item.textContent);
      item.style.display = textContent.includes(query) ? 'flex' : 'none';
    });
  });
  // Filtro específico para modal MEMBROS
  if (listId === 'membersList') {
    searchInputModal.addEventListener('input', () => {
      const query = normalizeText(searchInputModal.value.trim());
      const cards = clone.querySelectorAll('.profile-card');
      cards.forEach(card => {
        const nome = normalizeText(card.querySelector('.player-name')?.textContent || '');
        const guilda = normalizeText(card.querySelector('.info-cards .info-card:nth-child(1) .info-value')?.textContent || '');
        const comunidade = normalizeText(card.querySelector('.info-cards .info-card:nth-child(2) .info-value')?.textContent || '');
        card.style.display = (nome.includes(query) || guilda.includes(query) || comunidade.includes(query)) ? 'block' : 'none';
      });
    });
  }
  // Limpar busca
  clearBtn.addEventListener('click', () => {
    searchInputModal.value = '';
    const items = clone.querySelectorAll('.member-item');
    items.forEach(item => item.style.display = 'flex');
  });
  if (listId === 'membersList') {
    const clonedContainer = clone.querySelector('#profileContainer');
    if (clonedContainer) {
      clonedContainer.id = 'clonedProfileContainer'; // rename to avoid duplicate
      sortProfilesByScore(clonedContainer);
      observeScoreChanges(clonedContainer);
    }
  }
}
// === Função para fechar o modal ===
function closeModal() {
  const overlay = document.getElementById('modalOverlay');
  overlay.classList.remove('open');
  setTimeout(() => {
    overlay.classList.add('hidden');
    document.getElementById('modalBody').innerHTML = '';
    // Remove a classe .members-modal do .modal-content
    const modalContent = document.querySelector('.modal-content');
    modalContent.classList.remove('members-modal');
  }, 300);
  document.body.classList.remove('modal-open');
  // Reseta ARIA para todos os botões da sidebar direita e central
  document.querySelectorAll('.sidebar.sidebar-direita .launch-btn, .main-sections .toggle-btn').forEach(btn => {
    btn.setAttribute('aria-expanded', 'false');
  });
}
// === Inicialização dos eventos de clique para seções centrais (agora abrindo modals) ===
document.querySelectorAll('.toggle-btn').forEach(button => {
  button.addEventListener('click', () => {
    const targetId = button.getAttribute('data-target');
    openModalForSection(button, targetId);
  });
});
// === Event listeners para botões da sidebar ESQUERDA (expansão local) ===
document.querySelectorAll('.sidebar:not(.sidebar-direita) .launch-btn').forEach(button => {
  button.addEventListener('click', () => {
    const list = button.nextElementSibling;
    if (list && (list.classList.contains('members-list') || list.classList.contains('paginas-list'))) {
      list.classList.toggle('open');
      button.classList.toggle('active');
      button.setAttribute('aria-expanded', list.classList.contains('open'));
    }
  });
});
// === Event listeners para botões da sidebar DIREITA (modals) ===
document.querySelectorAll('.sidebar.sidebar-direita .launch-btn').forEach(button => {
  button.addEventListener('click', () => {
    const list = button.nextElementSibling;
    if (list && (list.classList.contains('members-list') || list.classList.contains('paginas-list'))) {
      openModalForList(button, list.id);
    }
  });
});
// === Event listeners para botões dos cards ===
document.querySelectorAll('.game-item .launch-btn').forEach(button => {
  button.addEventListener('click', () => {
    const gameCard = button.previousElementSibling;
    if (gameCard && gameCard.tagName === 'A') {
      window.open(gameCard.href, '_blank', 'noopener,noreferrer');
    }
  });
});
// === Event listeners para fechar o modal ===
document.getElementById('closeModal').addEventListener('click', closeModal);
document.getElementById('modalOverlay').addEventListener('click', (e) => {
  if (e.target.id === 'modalOverlay') {
    closeModal();
  }
});
// Fecha com ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !document.getElementById('modalOverlay').classList.contains('hidden')) {
    closeModal();
  }
});
// === Inicialização de seções e listas ===
document.addEventListener('DOMContentLoaded', () => {
  // Email obfuscado (invertido)
  const obfuscatedEmail = 'moc.liamg@9209ijuuyayustat'.split('').reverse().join('');
  // Insere o email no elemento
  const pixEmailElement = document.getElementById('pixEmail');
  if (pixEmailElement) {
    pixEmailElement.textContent = obfuscatedEmail;
  }
  // Botão de copiar PIX (copia da variável, não do DOM)
  const copyPixBtn = document.getElementById('copyPixBtn');
  if (copyPixBtn) {
    copyPixBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(obfuscatedEmail).then(() => {
        const msg = document.createElement('div');
        msg.className = 'pix-copied-msg';
        msg.textContent = 'Chave PIX copiada!';
        document.body.appendChild(msg);
        setTimeout(() => msg.remove(), 3000);
      }).catch(err => console.error('Erro ao copiar:', err));
    });
  }
});
document.addEventListener('DOMContentLoaded', () => {
  // Inicialização de seções principais fechadas
  document.querySelectorAll('.section-content').forEach(content => {
    content.classList.remove('open');
    const button = content.previousElementSibling.querySelector('.toggle-btn');
    if (button) {
      button.textContent = 'ABRIR';
    }
  });
  // Inicialização de listas da sidebar esquerda
  document.querySelectorAll('.sidebar:not(.sidebar-direita) .members-list, .sidebar:not(.sidebar-direita) .paginas-list').forEach(list => {
    list.classList.remove('open');
    const button = list.previousElementSibling;
    if (button) {
      button.classList.remove('active');
      button.setAttribute('aria-expanded', 'false');
    }
  });
  // Inicialização de listas da sidebar direita
  document.querySelectorAll('.sidebar.sidebar-direita .members-list, .sidebar.sidebar-direita .paginas-list').forEach(list => {
    list.classList.remove('open');
    const button = list.previousElementSibling;
    if (button) {
      button.classList.remove('active');
      button.setAttribute('aria-expanded', 'false');
    }
  });
  // Inicialização de listas da sidebar direita 2
  document.querySelectorAll('.sidebar.right-sidebar2 .members-list, .sidebar.right-sidebar2 .paginas-list').forEach(list => {
    list.classList.remove('open');
    const button = list.previousElementSibling;
    if (button) {
      button.classList.remove('active');
      button.setAttribute('aria-expanded', 'false');
    }
  });
});
// Scripts para os novos cards de membros
function syncScoreButtons(container) {
  container.querySelectorAll('.profile-card').forEach(card => {
      const score = card.dataset.score;
      const button = card.querySelector('.cta-button[data-auto-sync="true"]');
      if (button && score) {
          button.textContent = parseInt(score).toLocaleString();
      }
  });
}
function sortProfilesByScore(container) {
  const cards = Array.from(container.querySelectorAll('.profile-card'));
  cards.sort((a, b) => {
      const scoreA = parseInt(a.dataset.score) || 0;
      const scoreB = parseInt(b.dataset.score) || 0;
      return scoreB - scoreA;
  });
  container.innerHTML = '';
  cards.forEach((card, index) => {
      card.style.animationDelay = `${index * 0.2}s`;
      container.appendChild(card);
      setTimeout(() => {
          card.classList.add('sorted');
      }, 100);
  });
  syncScoreButtons(container);
}
function observeScoreChanges(container) {
  const observer = new MutationObserver((mutations) => {
      let needsUpdate = false;
      mutations.forEach(mutation => {
          if (mutation.type === 'attributes' &&
              mutation.attributeName === 'data-score') {
              needsUpdate = true;
          }
      });
      if (needsUpdate) {
          syncScoreButtons(container);
          setTimeout(() => sortProfilesByScore(container), 100);
      }
  });
  container.querySelectorAll('.profile-card').forEach(card => {
      observer.observe(card, {
          attributes: true,
          attributeFilter: ['data-score']
      });
  });
}
function updateScore(playerName, newScore) {
  const cards = document.querySelectorAll(`[data-name="${playerName}"]`);
  cards.forEach(card => {
      card.dataset.score = newScore;
      console.log(`✅ ${playerName}: Pontuação atualizada para ${newScore.toLocaleString()}`);
  });
}
// Inicialização
document.addEventListener('DOMContentLoaded', () => {
  const mainContainer = document.getElementById('profileContainer');
  if (mainContainer) {
      sortProfilesByScore(mainContainer);
      observeScoreChanges(mainContainer);
  }
  console.log('🎮 Sistema de sincronização ativado!');
  console.log('🔧 Use: updateScore("Akira", 15000) no console');
});
// Expõe funções globalmente
window.updateScore = updateScore;
window.sortProfilesByScore = sortProfilesByScore;
// === Inicialização do menu hambúrguer ===
const hamburgerBtn = document.getElementById('hamburgerBtn');
const mobileMenu = document.getElementById('mobileMenu');
const closeMenuBtn = document.querySelector('.close-menu-btn');
hamburgerBtn.addEventListener('click', () => {
  mobileMenu.classList.add('open');
});
closeMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('open');
});
// === Inicialização do botão back to top ===
const backToTopBtn = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopBtn.classList.add('visible');
  } else {
    backToTopBtn.classList.remove('visible');
  }
  if (mobileMenu.classList.contains('open')) {
    backToTopBtn.classList.remove('visible');
  }
});
backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});