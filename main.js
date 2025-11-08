/* main.js — Controla la galería, el reproductor y filtros
   Comentarios en español para que entiendas cada parte.
*/

document.addEventListener('DOMContentLoaded', () => {
  // Año en footer
  document.getElementById('year').textContent = new Date().getFullYear();

  // ---------------------------
  // LISTA DE 40 CANCIONES
  // ---------------------------
  // He elegido 40 títulos distribuidos entre tus artistas.
  // Reemplaza las IDs marcadas como 'REPLACE_WITH_YT_ID_xx' por el ID real.
  // Ya incluí IDs reales cuando los tenía (p. ej. bjzYhXz0Qig).
  const videos = [
    // Bryant Myers (8)
    { id: 'bjzYhXz0Qig', title: 'Air Drop', artist: 'Bryant Myers', genre: 'bryant', year: '2023' },
    { id: 'REPLACE_WITH_YT_ID_02', title: 'Música Bryant 2', artist: 'Bryant Myers', genre: 'bryant', year: '2021' },
    { id: 'REPLACE_WITH_YT_ID_03', title: 'Música Bryant 3', artist: 'Bryant Myers', genre: 'bryant', year: '2020' },
    { id: 'REPLACE_WITH_YT_ID_04', title: 'Música Bryant 4', artist: 'Bryant Myers', genre: 'bryant', year: '2019' },
    { id: 'REPLACE_WITH_YT_ID_05', title: 'Música Bryant 5', artist: 'Bryant Myers', genre: 'bryant', year: '2018' },
    { id: 'REPLACE_WITH_YT_ID_06', title: 'Música Bryant 6', artist: 'Bryant Myers', genre: 'bryant', year: '2017' },
    { id: 'REPLACE_WITH_YT_ID_07', title: 'Música Bryant 7', artist: 'Bryant Myers', genre: 'bryant', year: '2016' },
    { id: 'REPLACE_WITH_YT_ID_08', title: 'Música Bryant 8', artist: 'Bryant Myers', genre: 'bryant', year: '2015' },

    // Anuel AA (8)
    { id: 'U7fN5yEpPoE', title: 'Sola y Vacía', artist: 'Anuel AA', genre: 'anuel', year: '2023' },
    { id: 'KrmpZfpQ7cA', title: 'Mercedes Tintia', artist: 'Anuel AA', genre: 'anuel', year: '2023' },
    { id: 'ACFJZBpj1ZQ', title: 'Ella Quiere Beber', artist: 'Anuel AA ft. Romeo Santos', genre: 'anuel', year: '2018' },
    { id: 'GxZvlW9M8oY', title: 'Más Rica Que Ayer', artist: 'Anuel AA', genre: 'anuel', year: '2023' },
    { id: 'REPLACE_WITH_YT_ID_13', title: 'Anuel Track 5', artist: 'Anuel AA', genre: 'anuel', year: '2022' },
    { id: 'REPLACE_WITH_YT_ID_14', title: 'Anuel Track 6', artist: 'Anuel AA', genre: 'anuel', year: '2021' },
    { id: 'REPLACE_WITH_YT_ID_15', title: 'Anuel Track 7', artist: 'Anuel AA', genre: 'anuel', year: '2020' },
    { id: 'REPLACE_WITH_YT_ID_16', title: 'Anuel Track 8', artist: 'Anuel AA', genre: 'anuel', year: '2019' },

    // Blessd (8)
    { id: 'MPJ2ZCwYbR0', title: 'Yogurtcito Remix', artist: 'Blessd ft. Bryant Myers', genre: 'blessd', year: '2024' },
    { id: 'REPLACE_WITH_YT_ID_18', title: 'Blessd Track 2', artist: 'Blessd', genre: 'blessd', year: '2023' },
    { id: 'REPLACE_WITH_YT_ID_19', title: 'Blessd Track 3', artist: 'Blessd', genre: 'blessd', year: '2022' },
    { id: 'REPLACE_WITH_YT_ID_20', title: 'Blessd Track 4', artist: 'Blessd', genre: 'blessd', year: '2021' },
    { id: 'REPLACE_WITH_YT_ID_21', title: 'Blessd Track 5', artist: 'Blessd', genre: 'blessd', year: '2020' },
    { id: 'REPLACE_WITH_YT_ID_22', title: 'Blessd Track 6', artist: 'Blessd', genre: 'blessd', year: '2019' },
    { id: 'REPLACE_WITH_YT_ID_23', title: 'Blessd Track 7', artist: 'Blessd', genre: 'blessd', year: '2018' },
    { id: 'REPLACE_WITH_YT_ID_24', title: 'Blessd Track 8', artist: 'Blessd', genre: 'blessd', year: '2017' },

    // Ryan Castro (8)
    { id: 'REPLACE_WITH_YT_ID_25', title: 'Ryan Castro Track 1', artist: 'Ryan Castro', genre: 'ryan', year: '2024' },
    { id: 'REPLACE_WITH_YT_ID_26', title: 'Ryan Castro Track 2', artist: 'Ryan Castro', genre: 'ryan', year: '2023' },
    { id: 'REPLACE_WITH_YT_ID_27', title: 'Ryan Castro Track 3', artist: 'Ryan Castro', genre: 'ryan', year: '2022' },
    { id: 'REPLACE_WITH_YT_ID_28', title: 'Ryan Castro Track 4', artist: 'Ryan Castro', genre: 'ryan', year: '2021' },
    { id: 'REPLACE_WITH_YT_ID_29', title: 'Ryan Castro Track 5', artist: 'Ryan Castro', genre: 'ryan', year: '2020' },
    { id: 'REPLACE_WITH_YT_ID_30', title: 'Ryan Castro Track 6', artist: 'Ryan Castro', genre: 'ryan', year: '2019' },
    { id: 'REPLACE_WITH_YT_ID_31', title: 'Ryan Castro Track 7', artist: 'Ryan Castro', genre: 'ryan', year: '2018' },
    { id: 'REPLACE_WITH_YT_ID_32', title: 'Ryan Castro Track 8', artist: 'Ryan Castro', genre: 'ryan', year: '2017' },

    // Kaleth Morales (8)
    { id: 'REPLACE_WITH_YT_ID_33', title: 'Kaleth Morales Track 1', artist: 'Kaleth Morales', genre: 'kaleth', year: '2004' },
    { id: 'REPLACE_WITH_YT_ID_34', title: 'Kaleth Morales Track 2', artist: 'Kaleth Morales', genre: 'kaleth', year: '2003' },
    { id: 'REPLACE_WITH_YT_ID_35', title: 'Kaleth Morales Track 3', artist: 'Kaleth Morales', genre: 'kaleth', year: '2005' },
    { id: 'REPLACE_WITH_YT_ID_36', title: 'Kaleth Morales Track 4', artist: 'Kaleth Morales', genre: 'kaleth', year: '2002' },
    { id: 'REPLACE_WITH_YT_ID_37', title: 'Kaleth Morales Track 5', artist: 'Kaleth Morales', genre: 'kaleth', year: '2001' },
    { id: 'REPLACE_WITH_YT_ID_38', title: 'Kaleth Morales Track 6', artist: 'Kaleth Morales', genre: 'kaleth', year: '2006' },
    { id: 'REPLACE_WITH_YT_ID_39', title: 'Kaleth Morales Track 7', artist: 'Kaleth Morales', genre: 'kaleth', year: '2000' },
    { id: 'REPLACE_WITH_YT_ID_40', title: 'Kaleth Morales Track 8', artist: 'Kaleth Morales', genre: 'kaleth', year: '1999' }
  ];

  // ---------------------------
  // Referencias DOM
  // ---------------------------
  const grid = document.getElementById('videoGrid');
  const quickList = document.getElementById('quickList');
  const mainPlayer = document.getElementById('mainPlayer');
  const playerTitle = document.getElementById('playerTitle');
  const playerSub = document.getElementById('playerSub');

  // ---------------------------
  // Renderiza galería y playlist
  // ---------------------------
  function renderGrid(list) {
    grid.innerHTML = '';
    list.forEach(video => {
      const card = document.createElement('article');
      card.className = 'video-card';
      card.dataset.genre = video.genre;
      card.dataset.id = video.id;

      // Miniatura de YouTube (depende del ID)
      const thumb = document.createElement('img');
      thumb.className = 'video-thumb';
      thumb.alt = `${video.title} — ${video.artist}`;
      thumb.loading = 'lazy';
      thumb.src = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;

      const tag = document.createElement('div');
      tag.className = 'tag';
      tag.textContent = video.artist;

      const meta = document.createElement('div');
      meta.className = 'video-meta';
      meta.innerHTML = `<div class="video-title">${video.title}</div>
                        <div class="video-sub">${video.artist} · ${video.year || ''}</div>`;

      card.addEventListener('click', () => {
        loadVideo(video);
        highlightActiveCard(video.id);
      });

      card.appendChild(thumb);
      card.appendChild(tag);
      card.appendChild(meta);
      grid.appendChild(card);
    });
  }

  function renderQuickList(list) {
    quickList.innerHTML = '';
    list.forEach(video => {
      const li = document.createElement('li');
      li.textContent = `${video.title} — ${video.artist}`;
      li.tabIndex = 0;
      li.addEventListener('click', () => {
        loadVideo(video);
        highlightActiveCard(video.id);
        document.getElementById('mainPlayer').scrollIntoView({ behavior: 'smooth' });
      });
      quickList.appendChild(li);
    });
  }

  // ---------------------------
  // Cargar video en el iframe principal
  // ---------------------------
  function loadVideo(video) {
    // autoplay=1 para iniciar reproducción
    mainPlayer.src = `https://www.youtube.com/embed/${video.id}?rel=0&autoplay=1`;
    playerTitle.textContent = `${video.artist} — ${video.title}`;
    playerSub.textContent = `${video.genre} · ${video.year || ''}`;
  }

  // Resalta visualmente la tarjeta activa
  function highlightActiveCard(id) {
    document.querySelectorAll('.video-card').forEach(c => {
      if (c.dataset.id === id) {
        c.style.boxShadow = '0 18px 50px rgba(124,58,237,0.16)';
        c.style.borderColor = 'rgba(124,58,237,0.45)';
      } else {
        c.style.boxShadow = '';
        c.style.borderColor = 'rgba(255,255,255,0.03)';
      }
    });
  }

  // ---------------------------
  // Filtros por artista/ género
  // ---------------------------
  function applyFilter(filter) {
    document.querySelectorAll('.video-card').forEach(card => {
      const g = card.dataset.genre;
      if (filter === 'all' || g === filter) card.style.display = '';
      else card.style.display = 'none';
    });
  }

  // ---------------------------
  // Inicialización
  // ---------------------------
  renderGrid(videos);
  renderQuickList(videos);

  // Activar primer video
  if (videos.length) highlightActiveCard(videos[0].id);

  // Configurar botones de filtro
  document.querySelectorAll('.filter').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      applyFilter(btn.dataset.filter);
    });
  });

  // Permitir Enter para reproducir desde lista (accesibilidad)
  grid.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && e.target.closest('.video-card')) {
      const id = e.target.closest('.video-card').dataset.id;
      const v = videos.find(x => x.id === id);
      if (v) loadVideo(v);
    }
  });

});
