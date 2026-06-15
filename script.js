const modalElement = document.getElementById('modal');
const modalBody = document.getElementById('modal-body');
const notification = document.getElementById('notification');

const modalContents = {
    projetos: {
        title: 'PROJETOS',
        content: `
            <div class="update-info">Você está acessando a aba de status das texturas, para baixar ISO's, vá em "JOGOS PT-BR", o mesmo para "TEXTURAS".</div>
            <div class="project-card">
                <h3 class="project-title">TAG FORCE 1</h3>
                <div class="status-badge status-pausado">PAUSADO</div>
            </div>
            <div class="project-card">
                <h3 class="project-title">TAG FORCE 2</h3>
                <div class="status-badge status-pausado">PAUSADO</div>
            </div>
            <div class="project-card">
                <h3 class="project-title">TAG FORCE 3</h3>
                <div class="status-badge status-pausado">PAUSADO</div>
            </div>
            <div class="project-card">
                <h3 class="project-title">TAG FORCE 4</h3>
                <div class="status-badge status-pausado">PAUSADO</div>
            </div>
            <div class="project-card">
                <h3 class="project-title">TAG FORCE 5</h3>
                <div class="status-badge status-pausado">PAUSADO</div>
            </div>
            <div class="project-card">
                <h3 class="project-title">TAG FORCE 6</h3>
                <div class="status-badge status-pausado">PAUSADO</div>
            </div>
            <div class="project-card">
                <h3 class="project-title">TAG FORCE 7</h3>
                <div class="status-badge status-pausado">PAUSADO</div>
            </div>
        `
    },
    equipe: {
        title: 'EQUIPE',
        content: `
            <div class="update-info">Informações atualizadas em 21/02/2026 às 23:00.</div>
            <div class="profile-card">
                <img class="profile-img" src="https://i.imgur.com/G0KhYbm.png" alt="YuujiPlay">
                <span class="profile-name">YuujiPlay</span>
                <a class="access-btn" href="https://www.youtube.com/@YuujiPlay" target="_blank" rel="noopener noreferrer">ACESSAR</a>
            </div>
            <div class="profile-card">
                <img class="profile-img" src="https://i1.sndcdn.com/avatars-zg3m6QRkftXC5Vsq-4TCefw-t1080x1080.jpg" alt="ChrisFand">
                <span class="profile-name">ChrisFand</span>
                <a class="access-btn" href="https://forums.ppsspp.org/member.php?action=profile&uid=1828162" target="_blank" rel="noopener noreferrer">ACESSAR</a>
            </div>
            <div class="profile-card">
                <img class="profile-img" src="https://images.ygoprodeck.com/images/cards_cropped/49370026.jpg" alt="JuninFs">
                <span class="profile-name">JuninFs</span>
                <a class="access-btn" href="https://www.youtube.com/@NotJuninfs" target="_blank" rel="noopener noreferrer">ACESSAR</a>
            </div>
        `
    },
    contrib: {
        title: 'CONTRIBUÍDORES',
        content: `
            <div class="update-info">Informações atualizadas em 21/02/2026 às 23:00.</div>
            <div class="profile-card">
                <img class="profile-img" src="https://i.imgur.com/Nk2bGF4.jpeg" alt="Filipe Ramos">
                <span class="profile-name">Filipe Ramos</span>
                <a class="access-btn" href="https://www.youtube.com/@FilipeRamos96" target="_blank" rel="noopener noreferrer">ACESSAR</a>
            </div>
            <div class="profile-card">
                <img class="profile-img" src="https://i.pinimg.com/474x/6b/7f/a0/6b7fa0dc9aeb7b952cb227089524df91.jpg" alt="Lar dos Jogos">
                <span class="profile-name">Lar dos Jogos</span>
                <a class="access-btn" href="https://www.youtube.com/@lardosjogos" target="_blank" rel="noopener noreferrer">ACESSAR</a>
            </div>
            <div class="profile-card">
                <img class="profile-img" src="https://images.ygoprodeck.com/images/cards_cropped/1045143.jpg" alt="Muquifo">
                <span class="profile-name">Muquifo</span>
                <a class="access-btn" href="https://www.youtube.com/@MuquifoPlaysOficial" target="_blank" rel="noopener noreferrer">ACESSAR</a>
            </div>
        `
    },
    divulg: {
        title: 'DIVULGAÇÕES',
        content: `
            <div class="update-info">Informações atualizadas em 21/02/2026 às 23:00.</div>
            <div class="profile-card">
                <img class="profile-img" src="https://i.pinimg.com/474x/50/93/3b/50933b3d277a46befc38b321b979a04f.jpg" alt="Zenaku">
                <span class="profile-name">Zenaku</span>
                <a class="access-btn" href="https://www.youtube.com/@zenaku.oficial" target="_blank" rel="noopener noreferrer">ACESSAR</a>
            </div>
            <div class="member-info-card">
                <div class="member-info-title">IMPORTANTE</div>
                <p class="member-info-text">A área de divulgação exclusiva são administradas pelo próprio "Admin" não sendo removido por mais ninguém ficando enquanto o YuujiPlay permitir.</p>
            </div>
        `
    },
apoia: {
    title: 'APOIA-ME',
    content: `
        <div class="update-info">Informações atualizadas em 12/06/2026 às 19:45.</div>
        <div class="apoia-card">
            <i class="fas fa-qrcode apoia-icon"></i>
            <div class="apoia-email">tatsuyayuuji9029@gmail.com</div>
            <button class="apoia-btn" onclick="copyToClipboard('tatsuyayuuji9029@gmail.com')">COPIAR CHAVE PIX</button>
        </div>

        <!-- === BARRA DE PROGRESSO === -->
        <div class="progress-container">
            <div class="progress-header">
                <span class="progress-title">Meta do Mês - Junho 2026</span>
                <span class="progress-percentage">10%</span>
            </div>
            <div class="progress-bar-bg">
                <div class="progress-bar-fill" style="width: 10%"></div>
            </div>
            <div class="progress-info">
                <span><strong>R$ 10,00</strong> de R$ 100,00</span>
                <span class="progress-dates">01/06/2026 — 30/06/2026</span>
            </div>
        </div>
    `
},
    paginas: {
        title: 'PÁGINAS',
        content: `
            <div class="update-info">Os Links disponibilizados são Oficiais.</div>
            <div class="page-card">
                <h3 class="page-title">PPSSPP</h3>
                <div class="page-tag">EMULADOR OFICIAL</div>
                <a class="page-btn" href="https://www.ppsspp.org/" target="_blank" rel="noopener noreferrer">VISITAR</a>
                <div class="page-icon icon-confirmado"><i class="fas fa-check"></i></div>
            </div>
            <div class="page-card">
                <h3 class="page-title">WINRAR</h3>
                <div class="page-tag">EXTRAIR/ZIPAR</div>
                <a class="page-btn" href="https://www.rarlab.com/rar/winrar-x64-720br.exe" target="_blank" rel="noopener noreferrer">VISITAR</a>
                <div class="page-icon icon-confirmado"><i class="fas fa-check"></i></div>
            </div>
            <div class="page-card">
                <h3 class="page-title">ZEROTIER</h3>
                <div class="page-tag">CRIAR SERVIDOR</div>
                <a class="page-btn" href="https://www.zerotier.com/" target="_blank" rel="noopener noreferrer">VISITAR</a>
                <div class="page-icon icon-confirmado"><i class="fas fa-check"></i></div>
            </div>
            <div class="page-card">
                <h3 class="page-title">VAZIO</h3>
                <div class="page-tag">EM BREVE..</div>
                <a class="page-btn" href="https://yuujiplay.github.io/YuujiPlay/" rel="noopener noreferrer">VISITAR</a>
                <div class="page-icon icon-inativo">X</div>
            </div>
        `
    },
    full_eventos: {
        title: 'EVENTOS DA COMUNIDADE',
        content: `
            <div class="update-info">Informações atualizadas em 14/06/2026 às 12:00.</div>
            <div class="profile-card">
                <span class="profile-name">Canal YuujiPlay</span>
                <a class="access-btn" href="https://www.youtube.com/@YuujiPlay" target="_blank" rel="noopener noreferrer">ACESSAR</a>
            </div>
        `
    },
    baixar_jogos: {
        title: 'JOGOS PT-BR',
        content: `
            <div class="update-info">Todas ISO em Português!</div>
            <div class="download-card download-card--cover">
                <div class="cover-wrap">
                    <img class="download-img" src="https://images.igdb.com/igdb/image/upload/t_cover_big_2x/coa3hr.jpg" alt="Yu-Gi-Oh! GX Tag Force 1">
                    <div class="cover-overlay">
                        <div class="cover-overlay__head">
                            <h3 class="cover-overlay__title">TAG FORCE 1</h3>
                            <span class="cover-overlay__badge">ISO</span>
                        </div>
                        <div class="cover-overlay__row"><span class="cover-overlay__label">Versão</span><span class="cover-overlay__value">4.0.1</span></div>
                        <div class="cover-overlay__row"><span class="cover-overlay__label">Tradução</span><span class="cover-overlay__tag">PT-BR</span></div>
                        <p class="cover-overlay__desc">ISO completa traduzida para Português (Brasil) pelo Projeto Infinity.</p>
                    </div>
                </div>
                <div class="download-btns">
                    <a class="download-btn" href="https://www.mediafire.com/file/hqca921n898bezq/Yu-Gi-Oh%21_GX_Tag_Force_1_PT-BR_%28v4.0.1%29.iso/file" target="_blank" rel="noopener noreferrer">BAIXAR</a>
                    <button class="copy-btn" onclick="copyToClipboard('https://www.mediafire.com/file/hqca921n898bezq/Yu-Gi-Oh%21_GX_Tag_Force_1_PT-BR_%28v4.0.1%29.iso/file')">COPIAR</button>
                </div>
                <div class="download-obs">Clique para "baixar" para ser redirecionado para o site de Download ou clique em "copiar" para Copiar e colar o link para download em seu navegador manualmente se necessário.</div>
            </div>
            <div class="download-card download-card--cover">
                <div class="cover-wrap">
                    <img class="download-img" src="https://images.igdb.com/igdb/image/upload/t_cover_big_2x/co2rxh.jpg" alt="Yu-Gi-Oh! GX Tag Force 2">
                    <div class="cover-overlay">
                        <div class="cover-overlay__head">
                            <h3 class="cover-overlay__title">TAG FORCE 2</h3>
                            <span class="cover-overlay__badge">ISO</span>
                        </div>
                        <div class="cover-overlay__row"><span class="cover-overlay__label">Versão</span><span class="cover-overlay__value">3.0.1</span></div>
                        <div class="cover-overlay__row"><span class="cover-overlay__label">Tradução</span><span class="cover-overlay__tag">PT-BR</span></div>
                        <p class="cover-overlay__desc">ISO completa traduzida para Português (Brasil) pelo Projeto Infinity.</p>
                    </div>
                </div>
                <div class="download-btns">
                    <a class="download-btn" href="https://drive.google.com/file/d/1BynOHG3UAVZKzYfcWBMWikkTeFF65xi8/view?pli=1" target="_blank" rel="noopener noreferrer">BAIXAR</a>
                    <button class="copy-btn" onclick="copyToClipboard('https://drive.google.com/file/d/1BynOHG3UAVZKzYfcWBMWikkTeFF65xi8/view?pli=1')">COPIAR</button>
                </div>
                <div class="download-obs">Clique para "baixar" para ser redirecionado para o site de Download ou clique em "copiar" para Copiar e colar o link para download em seu navegador manualmente se necessário.</div>
            </div>
            <div class="download-card download-card--cover">
                <div class="cover-wrap">
                    <img class="download-img" src="https://images.igdb.com/igdb/image/upload/t_cover_big_2x/co5xdy.jpg" alt="Yu-Gi-Oh! GX Tag Force 3">
                    <div class="cover-overlay">
                        <div class="cover-overlay__head">
                            <h3 class="cover-overlay__title">TAG FORCE 3</h3>
                            <span class="cover-overlay__badge">ISO</span>
                        </div>
                        <div class="cover-overlay__row"><span class="cover-overlay__label">Versão</span><span class="cover-overlay__value">3.0.1</span></div>
                        <div class="cover-overlay__row"><span class="cover-overlay__label">Tradução</span><span class="cover-overlay__tag">PT-BR</span></div>
                        <p class="cover-overlay__desc">ISO completa traduzida para Português (Brasil) pelo Projeto Infinity.</p>
                    </div>
                </div>
                <div class="download-btns">
                    <a class="download-btn" href="https://drive.google.com/file/d/1BSC9975cekQoS9FP-IDDxwV22CHM9pOL/view" target="_blank" rel="noopener noreferrer">BAIXAR</a>
                    <button class="copy-btn" onclick="copyToClipboard('https://drive.google.com/file/d/1BSC9975cekQoS9FP-IDDxwV22CHM9pOL/view')">COPIAR</button>
                </div>
                <div class="download-obs">Clique para "baixar" para ser redirecionado para o site de Download ou clique em "copiar" para Copiar e colar o link para download em seu navegador manualmente se necessário.</div>
            </div>
            <div class="download-card download-card--cover">
                <div class="cover-wrap">
                    <img class="download-img" src="https://images.igdb.com/igdb/image/upload/t_cover_big_2x/co2rxe.jpg" alt="Yu-Gi-Oh! 5D's Tag Force 4">
                    <div class="cover-overlay">
                        <div class="cover-overlay__head">
                            <h3 class="cover-overlay__title">TAG FORCE 4</h3>
                            <span class="cover-overlay__badge">ISO</span>
                        </div>
                        <div class="cover-overlay__row"><span class="cover-overlay__label">Versão</span><span class="cover-overlay__value">3.0.1</span></div>
                        <div class="cover-overlay__row"><span class="cover-overlay__label">Tradução</span><span class="cover-overlay__tag">PT-BR</span></div>
                        <p class="cover-overlay__desc">ISO completa traduzida para Português (Brasil) pelo Projeto Infinity.</p>
                    </div>
                </div>
                <div class="download-btns">
                    <a class="download-btn" href="https://drive.google.com/file/d/19VhBVKgwaQGEy_eR7fxMucM2_rUWCE_s/view" target="_blank" rel="noopener noreferrer">BAIXAR</a>
                    <button class="copy-btn" onclick="copyToClipboard('https://drive.google.com/file/d/19VhBVKgwaQGEy_eR7fxMucM2_rUWCE_s/view')">COPIAR</button>
                </div>
                <div class="download-obs">Clique para "baixar" para ser redirecionado para o site de Download ou clique em "copiar" para Copiar e colar o link para download em seu navegador manualmente se necessário.</div>
            </div>
            <div class="download-card download-card--cover">
                <div class="cover-wrap">
                    <img class="download-img" src="https://images.igdb.com/igdb/image/upload/t_cover_big_2x/co2rxf.jpg" alt="Yu-Gi-Oh! 5D's Tag Force 5">
                    <div class="cover-overlay">
                        <div class="cover-overlay__head">
                            <h3 class="cover-overlay__title">TAG FORCE 5</h3>
                            <span class="cover-overlay__badge">ISO</span>
                        </div>
                        <div class="cover-overlay__row"><span class="cover-overlay__label">Versão</span><span class="cover-overlay__value">3.0.1</span></div>
                        <div class="cover-overlay__row"><span class="cover-overlay__label">Tradução</span><span class="cover-overlay__tag">PT-BR</span></div>
                        <p class="cover-overlay__desc">ISO completa traduzida para Português (Brasil) pelo Projeto Infinity.</p>
                    </div>
                </div>
                <div class="download-btns">
                    <a class="download-btn" href="https://drive.google.com/file/d/1s6d-mP9evM8fQr5MqxB1NaVINELggBpF/view" target="_blank" rel="noopener noreferrer">BAIXAR</a>
                    <button class="copy-btn" onclick="copyToClipboard('https://drive.google.com/file/d/1s6d-mP9evM8fQr5MqxB1NaVINELggBpF/view')">COPIAR</button>
                </div>
                <div class="download-obs">Clique para "baixar" para ser redirecionado para o site de Download ou clique em "copiar" para Copiar e colar o link para download em seu navegador manualmente se necessário.</div>
            </div>
            <div class="download-card download-card--cover">
                <div class="cover-wrap">
                    <img class="download-img" src="https://images.igdb.com/igdb/image/upload/t_cover_big_2x/co2rxg.jpg" alt="Yu-Gi-Oh! 5D's Tag Force 6">
                    <div class="cover-overlay">
                        <div class="cover-overlay__head">
                            <h3 class="cover-overlay__title">TAG FORCE 6</h3>
                            <span class="cover-overlay__badge">ISO</span>
                        </div>
                        <div class="cover-overlay__row"><span class="cover-overlay__label">Versão</span><span class="cover-overlay__value">4.0.0 · SOLO</span></div>
                        <div class="cover-overlay__row"><span class="cover-overlay__label">Tradução</span><span class="cover-overlay__tag">PT-BR</span></div>
                        <p class="cover-overlay__desc">Versão completa sem cortes, ideal para jogar OFFLINE com todas as descrições.</p>
                    </div>
                </div>
                <div class="download-btns">
                    <a class="download-btn" href="https://drive.google.com/file/d/1EvvYciz6Rh_Tqj7_aBWHoBtpw_B8e3Nh/view" target="_blank" rel="noopener noreferrer">BAIXAR</a>
                    <button class="copy-btn" onclick="copyToClipboard('https://drive.google.com/file/d/1EvvYciz6Rh_Tqj7_aBWHoBtpw_B8e3Nh/view')">COPIAR</button>
                </div>
                <div class="download-obs">Clique para "baixar" para ser redirecionado para o site de Download ou clique em "copiar" para Copiar e colar o link para download em seu navegador manualmente se necessário.</div>
            </div>
            <div class="download-card download-card--cover">
                <div class="cover-wrap">
                    <img class="download-img" src="https://images.igdb.com/igdb/image/upload/t_cover_big_2x/co2rxg.jpg" alt="Yu-Gi-Oh! 5D's Tag Force 6">
                    <div class="cover-overlay">
                        <div class="cover-overlay__head">
                            <h3 class="cover-overlay__title">TAG FORCE 6</h3>
                            <span class="cover-overlay__badge">ISO</span>
                        </div>
                        <div class="cover-overlay__row"><span class="cover-overlay__label">Versão</span><span class="cover-overlay__value">4.0.0 · MULTI</span></div>
                        <div class="cover-overlay__row"><span class="cover-overlay__label">Tradução</span><span class="cover-overlay__tag">PT-BR</span></div>
                        <p class="cover-overlay__desc">Versão otimizada para duelos ONLINE no Projeto Infinity.</p>
                    </div>
                </div>
                <div class="download-btns">
                    <a class="download-btn" href="https://drive.google.com/file/d/1ri-YwZHIfKBzQ9lEnnSivhP8wY9OGrv7/view" target="_blank" rel="noopener noreferrer">BAIXAR</a>
                    <button class="copy-btn" onclick="copyToClipboard('https://drive.google.com/file/d/1ri-YwZHIfKBzQ9lEnnSivhP8wY9OGrv7/view')">COPIAR</button>
                </div>
                <div class="download-obs">Clique para "baixar" para ser redirecionado para o site de Download ou clique em "copiar" para Copiar e colar o link para download em seu navegador manualmente se necessário.</div>
            </div>
            <div class="download-card download-card--cover">
                <div class="cover-wrap">
                    <img class="download-img" src="https://images.igdb.com/igdb/image/upload/t_cover_big_2x/co4kot.jpg" alt="Yu-Gi-Oh! Arc-V Tag Force Special">
                    <div class="cover-overlay">
                        <div class="cover-overlay__head">
                            <h3 class="cover-overlay__title">TAG FORCE SPECIAL</h3>
                            <span class="cover-overlay__badge">ISO</span>
                        </div>
                        <div class="cover-overlay__row"><span class="cover-overlay__label">Versão</span><span class="cover-overlay__value">4.0.1</span></div>
                        <div class="cover-overlay__row"><span class="cover-overlay__label">Tradução</span><span class="cover-overlay__tag">PT-BR</span></div>
                        <p class="cover-overlay__desc">ISO completa traduzida para Português (Brasil) pelo Projeto Infinity.</p>
                    </div>
                </div>
                <div class="download-btns">
                    <a class="download-btn" href="https://drive.google.com/file/d/1MGEv1ThBxcL0EcYPZc_DEn4XIYL-Sn7z/view" target="_blank" rel="noopener noreferrer">BAIXAR</a>
                    <button class="copy-btn" onclick="copyToClipboard('https://drive.google.com/file/d/1MGEv1ThBxcL0EcYPZc_DEn4XIYL-Sn7z/view')">COPIAR</button>
                </div>
                <div class="download-obs">Clique para "baixar" para ser redirecionado para o site de Download ou clique em "copiar" para Copiar e colar o link para download em seu navegador manualmente se necessário.</div>
            </div>
        `
    },
    baixar_texturas: {
        title: 'TEXTURAS',
        content: `
            <div class="update-info">Temos texturas para todos os TAG FORCE's, não estão perfeitas, mas é feito com carinho.</div>
            <div class="download-card download-card--cover">
                <div class="cover-wrap">
                    <img class="download-img" src="https://images.igdb.com/igdb/image/upload/t_cover_big_2x/coa3hr.jpg" alt="Texturas TAG FORCE 1">
                    <div class="cover-overlay">
                        <div class="cover-overlay__head">
                            <h3 class="cover-overlay__title">TAG FORCE 1</h3>
                            <span class="cover-overlay__badge">TEXTURA</span>
                        </div>
                        <p class="cover-overlay__desc">Ainda em desenvolvimento, foi pausado temporariamente.</p>
                        <div class="cover-overlay__row"><span class="cover-overlay__label">Lançado</span><span class="cover-overlay__value">30/07/2025</span></div>
                    </div>
                </div>
                <div class="download-btns">
                    <a class="download-btn" href="https://www.mediafire.com/file/eu0kehtal2scvge/ULUS10136.zip/file" target="_blank" rel="noopener noreferrer">BAIXAR</a>
                    <button class="copy-btn" onclick="copyToClipboard('https://www.mediafire.com/file/eu0kehtal2scvge/ULUS10136.zip/file')">COPIAR</button>
                </div>
                <div class="download-obs">Clique para "baixar" para ser redirecionado para o site de Download ou clique em "copiar" para Copiar e colar o link para download em seu navegador manualmente se necessário.</div>
            </div>
            <div class="download-card download-card--cover">
                <div class="cover-wrap">
                    <img class="download-img" src="https://images.igdb.com/igdb/image/upload/t_cover_big_2x/co2rxh.jpg" alt="Texturas TAG FORCE 2">
                    <div class="cover-overlay">
                        <div class="cover-overlay__head">
                            <h3 class="cover-overlay__title">TAG FORCE 2</h3>
                            <span class="cover-overlay__badge">TEXTURA</span>
                        </div>
                        <p class="cover-overlay__desc">Ainda em desenvolvimento, foi pausado temporariamente.</p>
                        <div class="cover-overlay__row"><span class="cover-overlay__label">Lançado</span><span class="cover-overlay__value">12/01/2025</span></div>
                    </div>
                </div>
                <div class="download-btns">
                    <a class="download-btn" href="https://www.mediafire.com/folder/u7w58oymmc9q2/Tag+Force+2" target="_blank" rel="noopener noreferrer">BAIXAR</a>
                    <button class="copy-btn" onclick="copyToClipboard('https://www.mediafire.com/folder/u7w58oymmc9q2/Tag+Force+2')">COPIAR</button>
                </div>
                <div class="download-obs">Clique para "baixar" para ser redirecionado para o site de Download ou clique em "copiar" para Copiar e colar o link para download em seu navegador manualmente se necessário.</div>
            </div>
            <div class="download-card download-card--cover">
                <div class="cover-wrap">
                    <img class="download-img" src="https://images.igdb.com/igdb/image/upload/t_cover_big_2x/co5xdy.jpg" alt="Texturas TAG FORCE 3">
                    <div class="cover-overlay">
                        <div class="cover-overlay__head">
                            <h3 class="cover-overlay__title">TAG FORCE 3</h3>
                            <span class="cover-overlay__badge">TEXTURA</span>
                        </div>
                        <p class="cover-overlay__desc">Ainda em desenvolvimento, foi pausado temporariamente.</p>
                        <div class="cover-overlay__row"><span class="cover-overlay__label">Lançado</span><span class="cover-overlay__value">12/01/2025</span></div>
                    </div>
                </div>
                <div class="download-btns">
                    <a class="download-btn" href="https://www.mediafire.com/folder/rnsuyg2rw1i70/Tag+Force+3" target="_blank" rel="noopener noreferrer">BAIXAR</a>
                    <button class="copy-btn" onclick="copyToClipboard('https://www.mediafire.com/folder/rnsuyg2rw1i70/Tag+Force+3')">COPIAR</button>
                </div>
                <div class="download-obs">Clique para "baixar" para ser redirecionado para o site de Download ou clique em "copiar" para Copiar e colar o link para download em seu navegador manualmente se necessário.</div>
            </div>
            <div class="download-card download-card--cover">
                <div class="cover-wrap">
                    <img class="download-img" src="https://images.igdb.com/igdb/image/upload/t_cover_big_2x/co2rxe.jpg" alt="Texturas TAG FORCE 4">
                    <div class="cover-overlay">
                        <div class="cover-overlay__head">
                            <h3 class="cover-overlay__title">TAG FORCE 4</h3>
                            <span class="cover-overlay__badge">TEXTURA</span>
                        </div>
                        <p class="cover-overlay__desc">Ainda em desenvolvimento, foi pausado temporariamente.</p>
                        <div class="cover-overlay__row"><span class="cover-overlay__label">Lançado</span><span class="cover-overlay__value">12/01/2025</span></div>
                    </div>
                </div>
                <div class="download-btns">
                    <a class="download-btn" href="https://www.mediafire.com/folder/8e1xro126r2kb/Tag+Force+4" target="_blank" rel="noopener noreferrer">BAIXAR</a>
                    <button class="copy-btn" onclick="copyToClipboard('https://www.mediafire.com/folder/8e1xro126r2kb/Tag+Force+4')">COPIAR</button>
                </div>
                <div class="download-obs">Clique para "baixar" para ser redirecionado para o site de Download ou clique em "copiar" para Copiar e colar o link para download em seu navegador manualmente se necessário.</div>
            </div>
            <div class="download-card download-card--cover">
                <div class="cover-wrap">
                    <img class="download-img" src="https://images.igdb.com/igdb/image/upload/t_cover_big_2x/co2rxf.jpg" alt="Texturas TAG FORCE 5">
                    <div class="cover-overlay">
                        <div class="cover-overlay__head">
                            <h3 class="cover-overlay__title">TAG FORCE 5</h3>
                            <span class="cover-overlay__badge">TEXTURA</span>
                        </div>
                        <p class="cover-overlay__desc">Ainda em desenvolvimento, foi pausado temporariamente.</p>
                        <div class="cover-overlay__row"><span class="cover-overlay__label">Lançado</span><span class="cover-overlay__value">12/01/2025</span></div>
                    </div>
                </div>
                <div class="download-btns">
                    <a class="download-btn" href="https://www.mediafire.com/folder/959blew9auzly/Tag+Force+5" target="_blank" rel="noopener noreferrer">BAIXAR</a>
                    <button class="copy-btn" onclick="copyToClipboard('https://www.mediafire.com/folder/959blew9auzly/Tag+Force+5')">COPIAR</button>
                </div>
                <div class="download-obs">Clique para "baixar" para ser redirecionado para o site de Download ou clique em "copiar" para Copiar e colar o link para download em seu navegador manualmente se necessário.</div>
            </div>
            <div class="download-card download-card--cover">
                <div class="cover-wrap">
                    <img class="download-img" src="https://images.igdb.com/igdb/image/upload/t_cover_big_2x/co2rxg.jpg" alt="Texturas TAG FORCE 6">
                    <div class="cover-overlay">
                        <div class="cover-overlay__head">
                            <h3 class="cover-overlay__title">TAG FORCE 6</h3>
                            <span class="cover-overlay__badge">TEXTURA</span>
                        </div>
                        <p class="cover-overlay__desc">Ainda em desenvolvimento, foi pausado temporariamente.</p>
                        <div class="cover-overlay__row"><span class="cover-overlay__label">Lançado</span><span class="cover-overlay__value">12/01/2025</span></div>
                    </div>
                </div>
                <div class="download-btns">
                    <a class="download-btn" href="https://www.mediafire.com/folder/n6ia1pyjoezs5/Tag+Force+6" target="_blank" rel="noopener noreferrer">BAIXAR</a>
                    <button class="copy-btn" onclick="copyToClipboard('https://www.mediafire.com/folder/n6ia1pyjoezs5/Tag+Force+6')">COPIAR</button>
                </div>
                <div class="download-obs">Clique para "baixar" para ser redirecionado para o site de Download ou clique em "copiar" para Copiar e colar o link para download em seu navegador manualmente se necessário.</div>
            </div>
            <div class="download-card download-card--cover">
                <div class="cover-wrap">
                    <img class="download-img" src="https://images.igdb.com/igdb/image/upload/t_cover_big_2x/co4kot.jpg" alt="Texturas TAG FORCE SPECIAL">
                    <div class="cover-overlay">
                        <div class="cover-overlay__head">
                            <h3 class="cover-overlay__title">TAG FORCE SPECIAL</h3>
                            <span class="cover-overlay__badge">TEXTURA</span>
                        </div>
                        <p class="cover-overlay__desc">Em desenvolvimento: refazendo todas as texturas novamente.</p>
                        <div class="cover-overlay__row"><span class="cover-overlay__label">Lançado</span><span class="cover-overlay__value">04/02/2025</span></div>
                    </div>
                </div>
                <div class="download-btns">
                    <a class="download-btn" href="https://www.mediafire.com/folder/d8h7602entcwy/Tag+Force+S" target="_blank" rel="noopener noreferrer">BAIXAR</a>
                    <button class="copy-btn" onclick="copyToClipboard('https://www.mediafire.com/folder/d8h7602entcwy/Tag+Force+S')">COPIAR</button>
                </div>
                <div class="download-obs">Clique para "baixar" para ser redirecionado para o site de Download ou clique em "copiar" para Copiar e colar o link para download em seu navegador manualmente se necessário.</div>
            </div>
        `
    },
    baixar_adicionais: {
        title: 'ADICIONAIS',
        content: `
            <div class="update-info">Informações atualizadas em 21/02/2026 às 23:00.</div>
            <div class="download-card">
                <img class="download-img" src="https://static0.srcdn.com/wordpress/wp-content/uploads/2024/11/yugi-using-his-duel-disk.jpg">
                <div class="download-title"><span>TODOS OS CHEATS</span></div>
                <div class="download-tag-container"><div class="download-tag">MEDIAFIRE</div></div>
                <div class="download-desc">Estou ciente que muitos cheats pararam e não funcionam mais, quando eu tiver tempo eu atualizo tudo.</div>
                <div class="download-btns">
                    <a class="download-btn" href="https://www.mediafire.com/folder/z6ea1bdh8ymgs/Cheats" target="_blank" rel="noopener noreferrer">BAIXAR</a>
                    <button class="copy-btn" onclick="copyToClipboard('https://www.mediafire.com/folder/z6ea1bdh8ymgs/Cheats')">COPIAR</button>
                </div>
                <div class="download-desc">Quando estiver na área das pastas, só clicar no nome da pasta para entrar e baixar o arquivo.</div>
                <div class="download-obs">Clique para "baixar" para ser redirecionado para o site de Download ou clique em "copiar" para Copiar e colar o link para download em seu navegador manualmente se necessário.</div>
            </div>
            <div class="download-card">
                <img class="download-img" src="https://img.konami.com/crossmedia/assets/images/post/yugioh/jewelry-and-apparel-deals/thumbnail.jpg">
                <div class="download-title"><span>FONT ORIGINAL DO PSP</span></div>
                <div class="download-tag-container"><div class="download-tag">MEDIAFIRE</div></div>
                <div class="download-desc">Para deixar a fonte de texto do emulador igual ao do PSP original.</div>
                <div class="download-btns">
                    <a class="download-btn" href="https://www.mediafire.com/file/j5bw4xyttdvgk45/font.rar/file" target="_blank" rel="noopener noreferrer">BAIXAR</a>
                    <button class="copy-btn" onclick="copyToClipboard('https://www.mediafire.com/file/j5bw4xyttdvgk45/font.rar/file')">COPIAR</button>
                </div>
                <div class="download-obs">Clique para "baixar" para ser redirecionado para o site de Download ou clique em "copiar" para Copiar e colar o link para download em seu navegador manualmente se necessário.</div>
            </div>
        `
    },
    baixar_templates: {
        title: 'TEMPLATES',
        content: `
            <div class="update-info">Informações atualizadas em 21/02/2026 às 23:00.</div>
            <div class="download-card">
                <img class="download-img" src="https://cdn2.steamgriddb.com/hero_thumb/4456aec9905b5a9b14744d67d8e0e3ce.png">
                <div class="download-title"><span>PROTAGONISTA</span></div>
                <div class="download-tag-container">
                    <div class="download-tag tag-psd">PSD</div>
                    <div class="download-tag">YuujiPlay</div>
                </div>
                <div class="download-desc">LANÇADO <span class="download-tag">00/00/0000</span></div>
                <div class="download-desc">Textura para o TAG FORCE 1.</div>
                <div class="download-desc">Ainda vou postar no site esse conteúdo.</div>
                <div class="download-btns">
                    <a class="download-btn" href="https://yuujiplay.github.io/YuujiPlay/" target="_blank" rel="noopener noreferrer">BAIXAR</a>
                    <button class="copy-btn" onclick="copyToClipboard('Desculpe, não há link para copiar')">COPIAR</button>
                </div>
                <div class="download-obs">Clique para "baixar" para ser redirecionado para o site de Download ou clique em "copiar" para Copiar e colar o link para download em seu navegador manualmente se necessário.</div>
            </div>
            <div class="download-card">
                <img class="download-img" src="https://cdn2.steamgriddb.com/hero_thumb/4456aec9905b5a9b14744d67d8e0e3ce.png">
                <div class="download-title"><span>PROTAGONISTA</span></div>
                <div class="download-tag-container">
                    <div class="download-tag tag-psd">PSD</div>
                    <div class="download-tag">YuujiPlay</div>
                </div>
                <div class="download-desc">LANÇADO <span class="download-tag">00/00/0000</span></div>
                <div class="download-desc">Textura para o TAG FORCE 2.</div>
                <div class="download-desc">Ainda vou postar no site esse conteúdo.</div>
                <div class="download-btns">
                    <a class="download-btn" href="https://yuujiplay.github.io/YuujiPlay/" target="_blank" rel="noopener noreferrer">BAIXAR</a>
                    <button class="copy-btn" onclick="copyToClipboard('Desculpe, não há link para copiar')">COPIAR</button>
                </div>
                <div class="download-obs">Clique para "baixar" para ser redirecionado para o site de Download ou clique em "copiar" para Copiar e colar o link para download em seu navegador manualmente se necessário.</div>
            </div>
        `
    },
    baixar_temas: {
        title: 'TEMAS',
        content: `
            <div class="update-info">Informações atualizadas em 21/02/2026 às 23:00.</div>
            <div class="download-card">
                <img class="download-img" src="https://cdn2.steamgriddb.com/hero_thumb/4456aec9905b5a9b14744d67d8e0e3ce.png">
                <div class="download-title"><span>SHADOWBREAK</span></div>
                <div class="download-tag-container">
                    <div class="download-tag tag-zipado">ZIPADO</div>
                    <div class="download-tag">YuujiPlay</div>
                </div>
                <div class="download-desc">LANÇADO <span class="download-tag">00/00/0000</span></div>
                <div class="download-desc">Textura para o TAG FORCE 1.</div>
                <div class="download-desc">Ainda vou postar no site esse conteúdo.</div>
                <div class="download-btns">
                    <a class="download-btn" href="https://yuujiplay.github.io/YuujiPlay/" target="_blank" rel="noopener noreferrer">BAIXAR</a>
                    <button class="copy-btn" onclick="copyToClipboard('Desculpe, não há link para copiar')">COPIAR</button>
                </div>
                <div class="download-obs">Clique para "baixar" para ser redirecionado para o site de Download ou clique em "copiar" para Copiar e colar o link para download em seu navegador manualmente se necessário.</div>
            </div>
        `
    },
    baixar_skins: {
        title: 'SKINS',
        content: `
            <div class="update-info">Informações atualizadas em 21/02/2026 às 23:00.</div>
            <div class="download-card">
                <img class="download-img" src="https://cdn2.steamgriddb.com/hero_thumb/4456aec9905b5a9b14744d67d8e0e3ce.png">
                <div class="download-title"><span>PROTAGONISTA</span></div>
                <div class="download-tag-container">
                    <div class="download-tag tag-feminina">VERSÃO FEMININA</div>
                    <div class="download-tag">YuujiPlay</div>
                </div>
                <div class="download-desc">LANÇADO <span class="download-tag">00/00/0000</span></div>
                <div class="download-desc">Textura para o TAG FORCE 1.</div>
                <div class="download-desc">Ainda vou postar no site esse conteúdo.</div>
                <div class="download-btns">
                    <a class="download-btn" href="https://yuujiplay.github.io/YuujiPlay/" target="_blank" rel="noopener noreferrer">BAIXAR</a>
                    <button class="copy-btn" onclick="copyToClipboard('Desculpe, não há link para copiar')">COPIAR</button>
                </div>
                <div class="download-obs">Clique para "baixar" para ser redirecionado para o site de Download ou clique em "copiar" para Copiar e colar o link para download em seu navegador manualmente se necessário.</div>
            </div>
            <div class="download-card">
                <img class="download-img" src="https://cdn2.steamgriddb.com/hero_thumb/4456aec9905b5a9b14744d67d8e0e3ce.png">
                <div class="download-title"><span>NOVO PERSONAGEM</span></div>
                <div class="download-tag-container">
                    <div class="download-tag tag-mapa">MAPA</div>
                    <div class="download-tag">YuujiPlay</div>
                </div>
                <div class="download-desc">LANÇADO <span class="download-tag">00/00/0000</span></div>
                <div class="download-desc">Textura para o TAG FORCE 1.</div>
                <div class="download-desc">Ainda vou postar no site esse conteúdo.</div>
                <div class="download-btns">
                    <a class="download-btn" href="https://yuujiplay.github.io/YuujiPlay/" target="_blank" rel="noopener noreferrer">BAIXAR</a>
                    <button class="copy-btn" onclick="copyToClipboard('Desculpe, não há link para copiar')">COPIAR</button>
                </div>
                <div class="download-obs">Clique para "baixar" para ser redirecionado para o site de Download ou clique em "copiar" para Copiar e colar o link para download em seu navegador manualmente se necessário.</div>
            </div>
        `
    },
    notificacoes: {
        title: 'NOTIFICAÇÕES',
        content: `
            <div class="update-info">Informações atualizadas em 12/04/2026 às 08:00.</div>
            <div class="notif-card">
                <div class="notif-title">
                    <span class="notif-date">12/04/2026</span>
                    <div class="notif-badge badge-admin">Admin</div>
                </div>
                <div class="notif-divider"></div>
                <p class="notif-desc">Devido alguns problemas pessoais, parei temporariamente os projetos, não desistir, só pausei por enquanto, pois não ando muito bem.</p>
            </div>
            <div class="notif-card">
                <div class="notif-title">
                    <span class="notif-date">23/02/2026</span>
                    <div class="notif-badge badge-admin">Admin</div>
                </div>
                <div class="notif-divider"></div>
                <p class="notif-desc">O site foi atualizado e essa será a estrutura oficial de agora em diante, espero que gostem.</p>
            </div>
            <div class="notif-card">
                <div class="notif-title">
                    <span class="notif-date">20/02/2026</span>
                    <div class="notif-badge badge-admin">Admin</div>
                </div>
                <div class="notif-divider"></div>
                <p class="notif-desc">Sobre os Perfis de MEMBROS, eu ainda pretendo repassar como vai funcionar os perfis e como ter um, aguardem.</p>
            </div>
            <div class="notif-card">
                <div class="notif-title">
                    <span class="notif-date">20/02/2026</span>
                    <div class="notif-badge badge-sophya">Sophya</div>
                </div>
                <div class="notif-divider"></div>
                <p class="notif-desc">Durante a migração dos dados do site antigo para o novo, pode ser que acabe aparecendo algum bug, peço que nos avise em nosso DISCORD em REPORT.</p>
            </div>
            <div class="notif-card">
                <div class="notif-title">
                    <span class="notif-date">20/02/2026</span>
                    <div class="notif-badge badge-sophya">Sophya</div>
                </div>
                <div class="notif-divider"></div>
                <p class="notif-desc">Erros nas escritas podem aparecer, já que estamos refazendo tudo no site do zero novamente.</p>
            </div>
        `
    },
    comunicados: {
        title: 'COMUNICADOS',
        content: `
            <div class="update-info">Informações atualizadas em 21/02/2026 às 23:00.</div>
            <div class="notif-card">
                <div class="notif-title">
                    <span class="notif-date">21/02/2026</span>
                    <div class="notif-badge badge-sophya">Sophya</div>
                </div>
                <div class="notif-divider"></div>
                <p class="notif-desc">Como o site principal e do projeto estão sendo fundidos novamente em um só, pode levar um tempo até o site ficar 100% otimizado para mobile.</p>
            </div>
            <div class="notif-card">
                <div class="notif-title">
                    <span class="notif-date">20/02/2026</span>
                    <div class="notif-badge badge-admin">Admin</div>
                </div>
                <div class="notif-divider"></div>
                <p class="notif-desc">Devido ao meu dia corrido no trabalho, estou atrasado com projeto, mas ainda estou fazendo sempre que posso.</p>
            </div>
        `
    },

problemas: {
    title: 'PROBLEMAS',
    content: `
        <div class="update-info">Informações atualizadas em 29/03/2026 às 15:40.</div>
        <!-- Card Principal Fixado -->
        <div class="problem-main-card">
            <div class="project-card">
              <h3 class="project-title">REPORTADO: </h3>
              <div class="notif-badge badge-sophya">29/03/26</div>
            </div>
            <div class="problem-title-highlight">Jogo:</div>
            <div class="jogo-badge problema-name">Tag Force 3</div>
            <div class="problem-title-highlight">Problema:</div>
            <div class="problem-subcard">Textura das cartas em small/smallANIME</div>
            <div class="problem-title-highlight">Nome:</div>
            <div class="problem-card-name">Jinzo</div>
            <div class="problem-title-highlight">Status:</div>
            <div class="problem-status status-corrigido">CORRIGIDO</div>
            <div class="problem-status status-confirmado">CONFIRMADO</div>
            <div class="profile-card">
                <img class="profile-img" src="https://images.ygoprodeck.com/images/cards_cropped/77585513.jpg" alt="Corretiva">
                <span class="profile-name">Para quem já tem as texturas instaladas, correção rapida:</span>
                <a class="access-btn" href="https://mega.nz/file/vCpgwR5a#BGAmHhAV53VoY84QtVAIZVxtd6ZM7QuSZPNpjpB00ow" target="_blank" rel="noopener noreferrer">BAIXAR</a>
                <div class="download-desc">Baixe o arquivo, extraia a pasta, pegue o arquivo "textures.ini" da sua preferencia e substiua o "textures.ini" localizado em suas texturas dentro da pasta "ULES01183".</div>
            </div>
        </div>
        <!-- Card Principal 1 -->
        <div class="problem-main-card">
            <div class="project-card">
              <h3 class="project-title">REPORTADO: </h3>
              <div class="notif-badge badge-sophya">23/02/26</div>
            </div>
            <div class="problem-title-highlight">Jogo:</div>
            <div class="jogo-badge problema-name">Tag Force 1</div>
            <div class="problem-title-highlight">Problema:</div>
            <div class="problem-subcard">Textura da mini Carta</div>
            <div class="problem-title-highlight">Nome:</div>
            <div class="problem-card-name">Designador das Trevas</div>
            <div class="problem-title-highlight">Status:</div>
            <div class="problem-status status-reportado">REPORTADO</div>
            <div class="problem-status status-confirmado">CONFIRMADO</div>
        </div>
        <!-- Card Principal 2 -->
        <div class="problem-main-card">
            <div class="project-card">
              <h3 class="project-title">REPORTADO: </h3>
              <div class="notif-badge badge-sophya">20/02/26</div>
            </div>
            <div class="problem-title-highlight">Jogo:</div>
            <div class="jogo-badge problema-name">Tag Force 4</div>
            <div class="problem-title-highlight">Problema:</div>
            <div class="problem-subcard">Textura de carta Fixa</div>
            <div class="problem-title-highlight">Nome:</div>
            <div class="problem-card-name">"B" Negra Brilhante</div>
            <div class="problem-title-highlight">Status:</div>
            <div class="problem-status status-reportado">REPORTADO</div>
            <div class="problem-status status-confirmado">CONFIRMADO</div>
        </div>
        <!-- Card Principal 3 -->
        <div class="problem-main-card">
            <div class="project-card">
              <h3 class="project-title">REPORTADO: </h3>
              <div class="notif-badge badge-sophya">20/02/26</div>
            </div>
            <div class="problem-title-highlight">Jogo:</div>
            <div class="jogo-badge problema-name">Tag Force 4</div>
            <div class="problem-title-highlight">Problema:</div>
            <div class="problem-subcard">Textura da mini Carta</div>
            <div class="problem-title-highlight">Nome:</div>
            <div class="problem-card-name">Oferenda Derradeira</div>
            <div class="problem-title-highlight">Status:</div>
            <div class="problem-status status-reportado">REPORTADO</div>
            <div class="problem-status status-confirmado">CONFIRMADO</div>
        </div>
        <!-- Card Principal 4 -->
        <div class="problem-main-card">
            <div class="project-card">
              <h3 class="project-title">REPORTADO: </h3>
              <div class="notif-badge badge-sophya">20/02/26</div>
            </div>
            <div class="problem-title-highlight">Jogo:</div>
            <div class="jogo-badge problema-name">Tag Force 4</div>
            <div class="problem-title-highlight">Problema:</div>
            <div class="problem-subcard">Textura da carta Grande</div>
            <div class="problem-title-highlight">Nome:</div>
            <div class="problem-card-name">Regular</div>
            <div class="problem-title-highlight">Status:</div>
            <div class="problem-status status-reportado">REPORTADO</div>
            <div class="problem-status status-confirmado">CONFIRMADO</div>
        </div>
        <!-- Card Principal 5 -->
        <div class="problem-main-card">
            <div class="project-card">
              <h3 class="project-title">REPORTADO: </h3>
              <div class="notif-badge badge-sophya">20/02/26</div>
            </div>
            <div class="problem-title-highlight">Jogo:</div>
            <div class="jogo-badge problema-name">Tag Force 1</div>
            <div class="problem-title-highlight">Problema:</div>
            <div class="problem-subcard">Textura com versão Censurada</div>
            <div class="problem-title-highlight">Nome:</div>
            <div class="problem-card-name">Reviver Monstro</div>
            <div class="problem-title-highlight">Status:</div>
            <div class="problem-status status-reportado">REPORTADO</div>
            <div class="problem-status status-confirmado">CONFIRMADO</div>
        </div>
        <!-- Card Principal 6 -->
        <div class="problem-main-card">
            <div class="project-card">
              <h3 class="project-title">REPORTADO: </h3>
              <div class="notif-badge badge-sophya">20/02/26</div>
            </div>
            <div class="problem-title-highlight">Jogo:</div>
            <div class="jogo-badge problema-name">Tag Force 1</div>
            <div class="problem-title-highlight">Problema:</div>
            <div class="problem-subcard">Textura da mini Carta</div>
            <div class="problem-title-highlight">Nome:</div>
            <div class="problem-card-name">Navio Yomi</div>
            <div class="problem-title-highlight">Status:</div>
            <div class="problem-status status-reportado">REPORTADO</div>
            <div class="problem-status status-confirmado">CONFIRMADO</div>
        </div>
        <!-- Card Principal 7 -->
        <div class="problem-main-card">
            <div class="project-card">
              <h3 class="project-title">REPORTADO: </h3>
              <div class="notif-badge badge-sophya">20/02/26</div>
            </div>
            <div class="problem-title-highlight">Jogo:</div>
            <div class="jogo-badge problema-name">Tag Force 1</div>
            <div class="problem-title-highlight">Problema:</div>
            <div class="problem-subcard">Textura da mini Carta</div>
            <div class="problem-title-highlight">Nome:</div>
            <div class="problem-card-name">Gagagigo</div>
            <div class="problem-title-highlight">Status:</div>
            <div class="problem-status status-reportado">REPORTADO</div>
            <div class="problem-status status-confirmado">CONFIRMADO</div>
        </div>
        <!-- Card Principal 8 -->
        <div class="problem-main-card">
            <div class="project-card">
              <h3 class="project-title">REPORTADO: </h3>
              <div class="notif-badge badge-sophya">20/02/26</div>
            </div>
            <div class="problem-title-highlight">Jogo:</div>
            <div class="jogo-badge problema-name">Tag Force 1</div>
            <div class="problem-title-highlight">Problema:</div>
            <div class="problem-subcard">Textura da mini Carta</div>
            <div class="problem-title-highlight">Nome:</div>
            <div class="problem-card-name">Ojama Verde</div>
            <div class="problem-title-highlight">Status:</div>
            <div class="problem-status status-reportado">REPORTADO</div>
            <div class="problem-status status-confirmado">CONFIRMADO</div>
        </div>
        <!-- Card Principal 9 -->
        <div class="problem-main-card">
            <div class="project-card">
              <h3 class="project-title">REPORTADO: </h3>
              <div class="notif-badge badge-sophya">20/02/26</div>
            </div>
            <div class="problem-title-highlight">Jogo:</div>
            <div class="jogo-badge problema-name">Tag Force Special</div>
            <div class="problem-title-highlight">Problema:</div>
            <div class="problem-subcard">Textura Geral</div>
            <div class="problem-title-highlight">Nome:</div>
            <div class="problem-card-name">As texturas dos (mini/small) as vezes não carrega.</div>
            <div class="problem-title-highlight">Status:</div>
            <div class="problem-status status-ignorado">IGNORADO</div>
            <div class="member-info-card">
            <div class="member-info-title">MOTIVO</div>
            <p class="member-info-text">É um problema de emulação, as vezes algumas texturas não carregam, ainda não encontrei uma forma de resolver isso.</p>
        </div>
        </div>
        <!-- Card Principal 10 -->
        <div class="problem-main-card">
            <div class="project-card">
              <h3 class="project-title">REPORTADO: </h3>
              <div class="notif-badge badge-sophya">20/02/26</div>
            </div>
            <div class="problem-title-highlight">Jogo:</div>
            <div class="jogo-badge problema-name">Tag Force Special</div>
            <div class="problem-title-highlight">Problema:</div>
            <div class="problem-subcard">Textura Geral</div>
            <div class="problem-title-highlight">Nome:</div>
            <div class="problem-card-name">Alguns personagens estão sem textura.</div>
            <div class="problem-title-highlight">Status:</div>
            <div class="problem-status status-ignorado">IGNORADO</div>
            <div class="member-info-card">
            <div class="member-info-title">MOTIVO</div>
            <p class="member-info-text">Ainda não fiz todas as texturas, então é normal que muitos personagem ainda estejam sem, não é um problema na textura.</p>
        </div>
        </div>
    `
},

    recusados: {
        title: 'RECUSADOS',
        content: `
            <div class="update-info">Informações atualizadas em 21/02/2026 às 23:00.</div>
            <div class="notif-card">
                <div class="notif-title">
                    <span class="notif-date">20/02/2026</span>
                    <div class="notif-badge badge-admin">Admin</div>
                </div>
                <div class="notif-divider"></div>
                <h3 class="problem-title">Falar sobre Política?</h3>
                <p class="notif-desc">Não pretendo falar de Política em meu canal, muito menos em meu site, desista.</p>
            </div>
        `
    },
    servidores: {
        title: 'SERVIDORES',
        content: `
            <div class="update-info">Informações atualizadas em 21/02/2026 às 23:00.</div>
            <div class="notif-card">
                <div class="info-header-card">
                    <h3 class="problem-title">SERVIDOR</h3>
                    <div class="serve-status-card status-inativo">INATIVO</div>
                </div>
                <div class="serve-main-card">
                    <h3 class="problem-title">INFINITY</h3>
                    <div class="serve-status-card status-inativo">0/40</div>
                </div>
                <div class="server-info-row">
                    <div class="server-label">Servidor IP:</div>
                    <div class="server-value-card" id="Card_ID1_Infinity">00.000.00.0</div>
                    <button class="copy-server-btn" onclick="copyToClipboard(document.getElementById('Card_ID1_Infinity').textContent)">COPIAR</button>
                </div>
                <div class="server-info-row">
                    <div class="server-label">Servidor DNS:</div>
                    <div class="server-value-card" id="Card_ID2_Infinity">00.000.000.000</div>
                    <button class="copy-server-btn" onclick="copyToClipboard(document.getElementById('Card_ID2_Infinity').textContent)">COPIAR</button>
                </div>
                <div class="notif-divider"></div>
                <p class="notif-desc">Servidor Principal da comunidade.</p>
            </div>
        `
    },
    menu_duelista: {
        title: 'OPÇÕES',
        content: `
            <div class="update-info">Informações atualizadas em 23/02/2026 às 21:00.</div>
            <div class="options-menu">
                <button class="option-item" data-status="liberado">
                    <span class="option-icon"><i class="fas fa-star"></i></span>
                    <span class="option-text">SPECIAL</span>
                    <a href="https://discord.gg/mKFWm897hQ" target="_blank" rel="noopener noreferrer" class="option-link">ACESSAR</a>
                    <span class="option-status"><i class="fas fa-check"></i></span>
                </button>
                <button class="option-item" data-status="liberado">
                    <span class="option-icon"><i class="fas fa-user"></i></span>
                    <span class="option-text">PERFIS</span>
                    <a href="https://yuujiplay.github.io/Duelist-Perfis/" rel="noopener noreferrer" class="option-link">ACESSAR</a>
                    <span class="option-status"><i class="fas fa-check"></i></span>
                </button>
                <button class="option-item" data-status="fechado">
                    <span class="option-icon"><i class="fas fa-layer-group"></i></span>
                    <span class="option-text">DECK</span>
                    <a href="https://yuujiplay.github.io/YuujiPlay/" rel="noopener noreferrer" class="option-link">ACESSAR</a>
                    <span class="option-status"><i class="fas fa-times"></i></span>
                </button>
                <button class="option-item" data-status="fechado">
                    <span class="option-icon"><i class="fas fa-trophy"></i></span>
                    <span class="option-text">TORNEIO</span>
                    <a href="https://yuujiplay.github.io/YuujiPlay/" rel="noopener noreferrer" class="option-link">ACESSAR</a>
                    <span class="option-status"><i class="fas fa-times"></i></span>
                </button>
                <button class="option-item" data-status="fechado">
                    <span class="option-icon"><i class="fas fa-calendar-alt"></i></span>
                    <span class="option-text">EVENTO</span>
                    <a href="https://yuujiplay.github.io/YuujiPlay/" rel="noopener noreferrer" class="option-link">ACESSAR</a>
                    <span class="option-status"><i class="fas fa-times"></i></span>
                </button>
                <button class="option-item" data-status="cancelado">
                    <span class="option-icon"><i class="fas fa-ban"></i></span>
                    <span class="option-text">EXTRA</span>
                    <a href="https://yuujiplay.github.io/YuujiPlay/" rel="noopener noreferrer" class="option-link">ACESSAR</a>
                    <span class="option-status"><i class="fas fa-ban"></i></span>
                </button>
            </div>
        `
    },
    novidades: {
        title: 'NOVIDADES',
        content: `
            <div class="update-info">Informações atualizadas em 25/02/2026 às 01:00.</div>
            <div class="download-card modal-card-wrapper">
                <img class="download-img" src="https://cdn2.steamgriddb.com/hero_thumb/4456aec9905b5a9b14744d67d8e0e3ce.png" alt="Yu-Gi-Oh! Arc-V Tag Force Special">
                <div class="download-title"><span>ATUALIZAÇÃO</span></div>
                <div class="download-tag-container">
                    <div class="download-tag" style="background: #fbbf24; color: black;">ISO</div>
                    <div class="download-tag" style="background: #10b981; color: white;">TEXTURA</div>
                </div>
                <div class="download-desc"><span>TAG FORCE SPECIAL</span></div>
                <div class="download-desc">ISO COMPATÍVEL <span class="download-tag">4.0.1</span></div>
                <div class="download-btns" style="align-items: center; gap: 1.2rem;">
                    <a class="download-btn" href="https://drive.google.com/file/d/1MGEv1ThBxcL0EcYPZc_DEn4XIYL-Sn7z/view" target="_blank" rel="noopener noreferrer">BAIXAR AGORA</a>
                    <div id="disponivel">✓</div>
                </div>
                <div class="download-desc">TEXTURA <span class="download-tag">EM BREVE..</span></div>
                <div class="download-btns" style="align-items: center; gap: 1.2rem;">
                    <a class="download-btn" href="https://yuujiplay.github.io/YuujiPlay/" target="_blank" rel="noopener noreferrer">BAIXAR AGORA</a>
                    <div id="indisponivel">X</div>
                </div>
                <div class="download-desc" style="margin-top: 1.2rem;">
                    <div class="credit-title">CRÉDITOS</div>
                    <div class="credit-container">
                        <span class="credit-pill">YuujiPlay</span>
                        <span class="credit-pill">JuninFs</span>
                        <span class="credit-pill">ChrisFand</span>
                    </div>
                </div>
                <div class="download-desc">Fala galera, Yuuji na Área! Estou preparando o terreno para nossa nova atualização referente as texturas para o TAG FORCE SPECIAL, ainda não lancei e não pretendo dar data ainda.</div>
            </div>
        `
    },
    tutoriais: {
        title: 'TUTORIAIS',
        content: `
            <div class="update-info">Tutoriais atualizados em 03/03/2026 às 11:51.</div>
            <div class="tutorial-card">
                <div class="tutorial-header">
                    <i class="fab fa-youtube youtube-icon"></i>
                    <h3 class="project-title">Projeto Infinity - Passo a Passo</h3>
                    <a href="https://youtu.be/jUbhlur7WX8" target="_blank" rel="noopener noreferrer" class="assistir-btn">ASSISTIR</a>
                </div>
                <div style="background: rgba(139, 92, 246, 0.08); border: 1px solid rgba(59, 130, 246, 0.35); border-radius: 12px; padding: 15px 20px; margin-top: 25px; display: flex; flex-wrap: wrap; justify-content: center; gap: 8px; max-width: 100%;">
                    <div class="download-tag">ISO</div>
                    <div class="download-tag">TEXTURA</div>
                    <div class="download-tag">FONT</div>
                    <div class="download-tag">CHEATS</div>
                    <div class="download-tag">2026</div>
                </div>
            </div>
            <div class="tutorial-card">
                <div class="tutorial-header">
                    <i class="fab fa-youtube youtube-icon"></i>
                    <h3 class="project-title">Projeto Infinity - Passo a Passo</h3>
                    <a href="https://youtu.be/Y2s06fFWHmg" target="_blank" rel="noopener noreferrer" class="assistir-btn">ASSISTIR</a>
                </div>
                <div style="background: rgba(139, 92, 246, 0.08); border: 1px solid rgba(59, 130, 246, 0.35); border-radius: 12px; padding: 15px 20px; margin-top: 25px; display: flex; flex-wrap: wrap; justify-content: center; gap: 8px; max-width: 100%;">
                    <div class="download-tag">ISO</div>
                    <div class="download-tag">TEXTURA</div>
                    <div class="download-tag">FONT</div>
                    <div class="download-tag">CHEATS</div>
                    <div class="download-tag">2025</div>
                </div>
            </div>
            <div class="tutorial-card">
                <div class="tutorial-header">
                    <i class="fab fa-youtube youtube-icon"></i>
                    <h3 class="project-title">Colocando Cheat's no PSP</h3>
                    <a href="https://youtu.be/0yTz7_VJvjo" target="_blank" rel="noopener noreferrer" class="assistir-btn">ASSISTIR</a>
                </div>
                <div style="background: rgba(139, 92, 246, 0.08); border: 1px solid rgba(59, 130, 246, 0.35); border-radius: 12px; padding: 15px 20px; margin-top: 25px; display: flex; flex-wrap: wrap; justify-content: center; gap: 8px; max-width: 100%;">
                    <div class="download-tag">CHEATS</div>
                    <div class="download-tag">2025</div>
                </div>
            </div>
            <div class="tutorial-card">
                <div class="tutorial-header">
                    <i class="fab fa-youtube youtube-icon"></i>
                    <h3 class="project-title">Tag Force 1 Definitivo</h3>
                    <a href="https://youtu.be/5ep5gfNPSok" target="_blank" rel="noopener noreferrer" class="assistir-btn">ASSISTIR</a>
                </div>
                <div style="background: rgba(139, 92, 246, 0.08); border: 1px solid rgba(59, 130, 246, 0.35); border-radius: 12px; padding: 15px 20px; margin-top: 25px; display: flex; flex-wrap: wrap; justify-content: center; gap: 8px; max-width: 100%;">
                    <div class="download-tag">ISO</div>
                    <div class="download-tag">TEXTURA</div>
                    <div class="download-tag">2025</div>
                </div>
            </div>
        `
    }
};

// ==================== PESQUISA NOS MODAIS ====================
const SEARCHABLE_MODALS = new Set([
    'tutoriais', 'paginas', 'full_eventos',
    'baixar_jogos', 'baixar_texturas', 'baixar_adicionais', 'baixar_templates', 'baixar_temas', 'baixar_skins',
    'menu_duelista', 'notificacoes', 'comunicados', 'problemas', 'recusados', 'novidades', 'servidores'
]);

const MODAL_SEARCH_CARD_SELECTOR = '.tutorial-card, .profile-card, .page-card, .download-card, .option-item, .notif-card, .problem-main-card, .member-info-card';

function normalizeSearchText(text) {
    return text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim();
}

function getTopLevelSearchables(container) {
    const all = Array.from(container.querySelectorAll(MODAL_SEARCH_CARD_SELECTOR));
    return all.filter(el => !all.some(other => other !== el && other.contains(el)));
}

function filterModalSearch(contentEl, query) {
    const items = getTopLevelSearchables(contentEl);
    let visible = 0;

    items.forEach(item => {
        const match = !query || normalizeSearchText(item.textContent).includes(query);
        item.classList.toggle('search-hidden', !match);
        if (match) visible++;
    });

    let emptyMsg = contentEl.querySelector('.search-empty-msg');
    if (query && visible === 0) {
        if (!emptyMsg) {
            emptyMsg = document.createElement('p');
            emptyMsg.className = 'search-empty-msg';
            emptyMsg.textContent = 'Nenhum resultado encontrado para esta busca.';
            contentEl.appendChild(emptyMsg);
        }
        emptyMsg.classList.remove('hidden');
    } else if (emptyMsg) {
        emptyMsg.classList.add('hidden');
    }
}

function buildModalSearchBar() {
    return `
        <div class="modal-search" role="search">
            <i class="fas fa-search modal-search__icon" aria-hidden="true"></i>
            <input type="search" class="modal-search__input" placeholder="Pesquisar dentro deste modal..." autocomplete="off" aria-label="Pesquisar dentro deste modal">
            <button type="button" class="modal-search__clear hidden" aria-label="Limpar busca">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
}

function equalizeDownloadCardHeights(container) {
    const cards = Array.from(container.querySelectorAll(':scope > .download-card:not(.search-hidden)'));
    if (!cards.length) return;

    cards.forEach(card => { card.style.minHeight = ''; });
    if (window.innerWidth < 768) return;

    for (let i = 0; i < cards.length; i += 2) {
        const row = cards.slice(i, i + 2);
        const maxH = Math.max(...row.map(c => c.offsetHeight));
        row.forEach(card => { card.style.minHeight = `${maxH}px`; });
    }
}

function initModalSearch() {
    const input = modalBody.querySelector('.modal-search__input');
    const clearBtn = modalBody.querySelector('.modal-search__clear');
    const content = modalBody.querySelector('.modal-searchable-content');
    if (!input || !clearBtn || !content) return;

    const apply = () => {
        const query = normalizeSearchText(input.value);
        clearBtn.classList.toggle('hidden', !query);
        filterModalSearch(content, query);
        equalizeDownloadCardHeights(content);
    };

    input.addEventListener('input', apply);
    clearBtn.addEventListener('click', () => {
        input.value = '';
        input.focus();
        apply();
    });

    const equalize = () => equalizeDownloadCardHeights(content);
    requestAnimationFrame(equalize);
    content.querySelectorAll('img').forEach(img => {
        if (!img.complete) img.addEventListener('load', equalize, { once: true });
    });

    setTimeout(() => input.focus(), 100);
}

let modalResizeHandler = null;

// ==================== EVENTOS DOS BOTÕES ====================
document.querySelectorAll('[data-modal]').forEach(button => {
    button.addEventListener('click', () => {
        openModal(button.dataset.modal);
    });
});

function openModal(type) {
    const data = modalContents[type] || { title: 'Conteúdo em construção', content: '<p>Em breve mais conteúdo aqui.</p>' };
    const hasSearch = SEARCHABLE_MODALS.has(type);

    modalBody.innerHTML = `
        <div class="modal-inner">
            <div class="modal-header-fixed">
                <h2 class="section-title">${data.title}</h2>
                ${hasSearch ? buildModalSearchBar() : ''}
            </div>
            <div class="modal-content-scroll">
                ${hasSearch ? `<div class="modal-searchable-content">${data.content}</div>` : data.content}
            </div>
        </div>
    `;

    modalElement.classList.remove('hidden');
    document.body.classList.add('modal-open');

    if (hasSearch) {
        initModalSearch();
        const searchable = modalBody.querySelector('.modal-searchable-content');
        if (searchable) {
            if (modalResizeHandler) window.removeEventListener('resize', modalResizeHandler);
            modalResizeHandler = () => equalizeDownloadCardHeights(searchable);
            window.addEventListener('resize', modalResizeHandler);
        }
    }
}

function closeModal() {
    modalElement.classList.add('hidden');
    document.body.classList.remove('modal-open');
    if (modalResizeHandler) {
        window.removeEventListener('resize', modalResizeHandler);
        modalResizeHandler = null;
    }
}

document.querySelector('.close-btn').addEventListener('click', closeModal);
modalElement.addEventListener('click', e => {
    if (e.target === modalElement) closeModal();
});

document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && !modalElement.classList.contains('hidden')) {
        closeModal();
    }
});

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        notification.textContent = 'Chave PIX copiada com sucesso!';
        notification.classList.add('show');
        setTimeout(() => notification.classList.remove('show'), 2500);
    }).catch(err => {
        notification.textContent = 'Erro ao copiar a chave PIX';
        notification.classList.add('show');
        setTimeout(() => notification.classList.remove('show'), 2500);
        console.error('Falha ao copiar:', err);
    });
}

// ==================== CAROUSEL ====================
const carousel = document.getElementById('carousel');
const cards = carousel.querySelectorAll('.game-card');
let currentIndex = 0;
const totalCards = cards.length;

function showCard(index) {
    cards.forEach(card => card.classList.remove('active'));
    cards[index].classList.add('active');
}

function nextSlide() {
    if (totalCards <= 1) return;
    currentIndex = (currentIndex + 1) % totalCards;
    showCard(currentIndex);
}

showCard(0);
let autoInterval = totalCards > 1 ? setInterval(nextSlide, 5000) : null;

carousel.addEventListener('mouseenter', () => {
    if (autoInterval) clearInterval(autoInterval);
});
carousel.addEventListener('mouseleave', () => {
    if (totalCards > 1) {
        autoInterval = setInterval(nextSlide, 5000);
    }
});

// ==================== MENU MOBILE ====================
const menuToggle = document.querySelector('.menu-toggle');
const topbarMenu = document.getElementById('topbarMenu');
const topbarEl = document.querySelector('.topbar');
const MOBILE_MENU_BREAKPOINT = 768;

function isMobileMenuView() {
    return window.innerWidth <= MOBILE_MENU_BREAKPOINT;
}

function syncTopbarHeight() {
    if (!topbarEl) return;
    const height = Math.ceil(topbarEl.getBoundingClientRect().height);
    document.documentElement.style.setProperty('--topbar-mobile-height', `${height}px`);
}

function setMenuOpen(isOpen) {
    if (!topbarMenu || !menuToggle) return;

    topbarMenu.classList.toggle('active', isOpen);
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    document.body.classList.toggle('menu-open', isOpen);

    const icon = menuToggle.querySelector('i');
    if (!icon) return;

    if (isOpen) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
        menuToggle.setAttribute('aria-label', 'Fechar menu');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
        menuToggle.setAttribute('aria-label', 'Abrir menu');
    }
}

function openMenu() {
    if (!isMobileMenuView()) return;
    syncTopbarHeight();
    setMenuOpen(true);
}

function closeMenu() {
    setMenuOpen(false);
}

function toggleMenu() {
    if (!isMobileMenuView()) return;
    syncTopbarHeight();
    setMenuOpen(!topbarMenu.classList.contains('active'));
}

if (menuToggle && topbarMenu) {
    menuToggle.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleMenu();
    });

    topbarMenu.addEventListener('click', (e) => {
        e.stopPropagation();
    });

    document.querySelector('.close-menu-btn')?.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        closeMenu();
    });

    topbarMenu.querySelectorAll('[data-modal]').forEach(button => {
        button.addEventListener('click', () => {
            closeMenu();
        });
    });

    document.addEventListener('click', (e) => {
        if (!topbarMenu.classList.contains('active')) return;
        if (topbarMenu.contains(e.target) || menuToggle.contains(e.target)) return;
        closeMenu();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && topbarMenu.classList.contains('active')) {
            closeMenu();
        }
    });

    window.addEventListener('resize', () => {
        syncTopbarHeight();
        if (!isMobileMenuView() && topbarMenu.classList.contains('active')) {
            closeMenu();
        }
    });

    syncTopbarHeight();
}

// ==================== ESCONDER NUMERION AO CLICAR ====================
document.querySelectorAll('.menu-btn, .top-card').forEach(element => {
    const numerion = element.querySelector('.numerion');
    if (numerion) {
        element.addEventListener('click', function() {
            numerion.style.display = 'none';
        });
    }
});

// ====================== NOTIFICAÇÃO TEMPORÁRIA ======================
function showImportantNotice() {
    const notice = document.getElementById('important-notice');
    const timerElement = document.getElementById('timer');
    let timeLeft = 15;

    notice.classList.add('show');
    document.body.classList.add('notice-open');

    // Timer regressivo
    const countdown = setInterval(() => {
        timeLeft--;
        timerElement.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(countdown);
            hideNotice();
        }
    }, 1000);

    // Função para esconder
    function hideNotice() {
        notice.classList.remove('show');
        document.body.classList.remove('notice-open');
        clearInterval(countdown);
    }

    // Botão Fechar (X)
    document.querySelector('.notice-close').addEventListener('click', hideNotice);

    // Fechar ao clicar fora do card (opcional)
    notice.addEventListener('click', (e) => {
        if (e.target === notice) {
            hideNotice();
        }
    });
}

// ==================== BRAND YUUJIPLAY ====================
document.getElementById('brandLink')?.addEventListener('click', (e) => {
    e.preventDefault();
    if (confirm('O site será atualizado de INFINITY para YUUJIPLAY, deseja prosseguir?')) {
        window.location.href = 'https://yuujiplay.com.br/';
    }
});

// ==================== PARTÍCULAS DIGITAIS ====================
function initParticles() {
    const canvas = document.getElementById('particles-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let particles = [];
    const colors = ['#ef4444', '#3b82f6', '#f97316', '#8b5cf6', '#ec4899', '#ffffff'];

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    function createParticles() {
        const count = Math.min(80, Math.floor((canvas.width * canvas.height) / 18000));
        particles = Array.from({ length: count }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.4,
            vy: (Math.random() - 0.5) * 0.4,
            r: Math.random() * 1.8 + 0.5,
            color: colors[Math.floor(Math.random() * colors.length)],
            alpha: Math.random() * 0.5 + 0.15
        }));
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach((p, i) => {
            p.x += p.vx;
            p.y += p.vy;
            if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
            if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.globalAlpha = p.alpha;
            ctx.fill();

            for (let j = i + 1; j < particles.length; j++) {
                const q = particles[j];
                const dx = p.x - q.x;
                const dy = p.y - q.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 120) {
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(q.x, q.y);
                    ctx.strokeStyle = p.color;
                    ctx.globalAlpha = (1 - dist / 120) * 0.12;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }
        });
        ctx.globalAlpha = 1;
        requestAnimationFrame(draw);
    }

    resize();
    createParticles();
    draw();
    window.addEventListener('resize', () => { resize(); createParticles(); });
}

// ==================== PROXIMIDADE DO MOUSE ====================
function initProximityTilt() {
    document.querySelectorAll('.panel, .top-card, .menu-btn').forEach(el => {
        el.classList.add('proximity-tilt');
        el.addEventListener('mousemove', (e) => {
            const rect = el.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width - 0.5) * 4;
            const y = ((e.clientY - rect.top) / rect.height - 0.5) * -4;
            el.style.transform = `perspective(600px) rotateY(${x}deg) rotateX(${y}deg)`;
        });
        el.addEventListener('mouseleave', () => { el.style.transform = ''; });
    });
}

window.addEventListener('load', () => {
    initParticles();
    initProximityTilt();
    setTimeout(showImportantNotice, 800);
});