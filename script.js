const modalElement = document.getElementById('modal');
const modalBody = document.getElementById('modal-body');
const notification = document.getElementById('notification');
const modalContents = {
    projetos: {
        title: 'PROJETOS',
        content: `
            <div class="update-info">Informações atualizadas em 21/02/2026 às 23:00.</div>
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
                <div class="status-badge status-andamento">ANDAMENTO</div>
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
    membros: {
        title: 'MEMBROS',
        content: `
            <div class="update-info">Informações atualizadas em 21/02/2026 às 23:00.</div>
            <div class="profile-card">
                <img class="profile-img" src="https://images.ygoprodeck.com/images/cards_cropped/86066372.jpg" alt="YuujiPlay">
                <span class="profile-name">YuujiPlay</span>
                <a class="access-btn" href="https://www.youtube.com/@YuujiPlay" target="_blank" rel="noopener noreferrer">VISITAR</a>
            </div>
            <div class="member-info-card">
                <div class="member-info-title">IMPORTANTE</div>
                <p class="member-info-text">Membros tem um espaço vago para se divulgarem ou divulgar algo no botão "VISITAR" acima, mais precisa ser aceito pela administração para ser autorizado, afinal não pode qualquer coisa, ou acabaria virando bardena.</p>
            </div>
        `
    },
    apoia: {
        title: 'APOIA-ME',
        content: `
            <div class="update-info">Informações atualizadas em 21/02/2026 às 23:00.</div>
            <div class="apoia-card">
                <i class="fas fa-qrcode apoia-icon"></i>
                <div class="apoia-email">tatsuyayuuji9029@gmail.com</div>
                <button class="apoia-btn" onclick="copyToClipboard('tatsuyayuuji9029@gmail.com')">COPIAR CHAVE PIX</button>
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
                <a class="page-btn" href="https://www.youtube.com/@YuujiPlay" target="_blank" rel="noopener noreferrer">VISITAR</a>
                <div class="page-icon icon-inativo">X</div>
            </div>
        `
    },
    full_recomendacoes: {
        title: 'RECOMENDAÇÕES',
        content: `
            <div class="update-info">Informações atualizadas em 21/02/2026 às 23:00.</div>
            <div class="profile-card">
                <span class="profile-name">Scarlet Nexus</span>
                <a class="access-btn" href="https://store.steampowered.com/app/775500/SCARLET_NEXUS/" target="_blank" rel="noopener noreferrer">ACESSAR</a>
            </div>
            <div class="profile-card">
                <span class="profile-name">Dispatch</span>
                <a class="access-btn" href="https://store.steampowered.com/app/2592160/Dispatch/" target="_blank" rel="noopener noreferrer">ACESSAR</a>
            </div>
            <div class="profile-card">
                <span class="profile-name">Palworld</span>
                <a class="access-btn" href="https://store.steampowered.com/app/1623730/Palworld/" target="_blank" rel="noopener noreferrer">ACESSAR</a>
            </div>
            <div class="profile-card">
                <span class="profile-name">Stellar Blade</span>
                <a class="access-btn" href="https://store.steampowered.com/app/3489700/Stellar_Blade/" target="_blank" rel="noopener noreferrer">ACESSAR</a>
            </div>
            <div class="profile-card">
                <span class="profile-name">Yu-Gi-Oh! Master Duel</span>
                <a class="access-btn" href="https://store.steampowered.com/app/1449850/YuGiOh_Master_Duel/" target="_blank" rel="noopener noreferrer">ACESSAR</a>
            </div>
            <div class="profile-card">
                <span class="profile-name">MiSide</span>
                <a class="access-btn" href="https://store.steampowered.com/app/2527500/MiSide/" target="_blank" rel="noopener noreferrer">ACESSAR</a>
            </div>
            <div class="profile-card">
                <span class="profile-name">Dying Light</span>
                <a class="access-btn" href="https://store.steampowered.com/app/239140/Dying_Light/" target="_blank" rel="noopener noreferrer">ACESSAR</a>
            </div>
            <div class="profile-card">
                <span class="profile-name">Watch Dogs</span>
                <a class="access-btn" href="https://store.steampowered.com/app/243470/Watch_Dogs/" target="_blank" rel="noopener noreferrer">ACESSAR</a>
            </div>
            <div class="profile-card">
                <span class="profile-name">Em Breve..</span>
                <a class="access-btn" href="https://store.steampowered.com/" target="_blank" rel="noopener noreferrer">ACESSAR</a>
            </div>
        `
    },
    baixar_jogos: {
        title: 'JOGOS',
        content: `
            <div class="update-info">Informações atualizadas em 21/02/2026 às 23:00.</div>
            <div class="download-card">
                <img class="download-img" src="https://sm.ign.com/ign_br/screenshot/default/imagem-2023-10-24-101457381_2ct1.jpg">
                <div class="download-title"><span>TAG FORCE 1</span></div>
                <div class="download-tag-container">
                    <div class="download-tag">ISO</div>
                    <div class="download-tag">4.0.1</div>
                </div>
                <div class="download-desc">Esse é um clássico não tem jeito.</div>
                <div class="download-btns">
                    <a class="download-btn" href="https://www.mediafire.com/file/hqca921n898bezq/Yu-Gi-Oh%21_GX_Tag_Force_1_PT-BR_%28v4.0.1%29.iso/file" target="_blank" rel="noopener noreferrer">BAIXAR</a>
                    <button class="copy-btn" onclick="copyToClipboard('https://www.mediafire.com/file/hqca921n898bezq/Yu-Gi-Oh%21_GX_Tag_Force_1_PT-BR_%28v4.0.1%29.iso/file')">COPIAR</button>
                </div>
                <div class="download-obs">Clique para "baixar" para ser redirecionado para o site de Download ou clique em "copiar" para Copiar e colar o link para download em seu navegador manualmente se necessário.</div>
            </div>
            <div class="download-card">
                <img class="download-img" src="https://sm.ign.com/ign_br/screenshot/default/imagem-2023-10-24-101457381_2ct1.jpg">
                <div class="download-title"><span>TAG FORCE 2</span></div>
                <div class="download-tag-container">
                    <div class="download-tag">ISO</div>
                    <div class="download-tag">3.0.1</div>
                </div>
                <div class="download-desc">Esse é um clássico não tem jeito.</div>
                <div class="download-btns">
                    <a class="download-btn" href="https://drive.google.com/file/d/1BynOHG3UAVZKzYfcWBMWikkTeFF65xi8/view?pli=1" target="_blank" rel="noopener noreferrer">BAIXAR</a>
                    <button class="copy-btn" onclick="copyToClipboard('https://drive.google.com/file/d/1BynOHG3UAVZKzYfcWBMWikkTeFF65xi8/view?pli=1')">COPIAR</button>
                </div>
                <div class="download-obs">Clique para "baixar" para ser redirecionado para o site de Download ou clique em "copiar" para Copiar e colar o link para download em seu navegador manualmente se necessário.</div>
            </div>
            <div class="download-card">
                <img class="download-img" src="https://sm.ign.com/ign_br/screenshot/default/imagem-2023-10-24-101457381_2ct1.jpg">
                <div class="download-title"><span>TAG FORCE 3</span></div>
                <div class="download-tag-container">
                    <div class="download-tag">ISO</div>
                    <div class="download-tag">3.0.1</div>
                </div>
                <div class="download-desc">Esse é um clássico não tem jeito.</div>
                <div class="download-btns">
                    <a class="download-btn" href="https://drive.google.com/file/d/1BSC9975cekQoS9FP-IDDxwV22CHM9pOL/view" target="_blank" rel="noopener noreferrer">BAIXAR</a>
                    <button class="copy-btn" onclick="copyToClipboard('https://drive.google.com/file/d/1BSC9975cekQoS9FP-IDDxwV22CHM9pOL/view')">COPIAR</button>
                </div>
                <div class="download-obs">Clique para "baixar" para ser redirecionado para o site de Download ou clique em "copiar" para Copiar e colar o link para download em seu navegador manualmente se necessário.</div>
            </div>
            <div class="download-card">
                <img class="download-img" src="https://sm.ign.com/ign_br/screenshot/default/imagem-2023-10-24-101457381_2ct1.jpg">
                <div class="download-title"><span>TAG FORCE 4</span></div>
                <div class="download-tag-container">
                    <div class="download-tag">ISO</div>
                    <div class="download-tag">3.0.1</div>
                </div>
                <div class="download-desc">Esse é um clássico não tem jeito.</div>
                <div class="download-btns">
                    <a class="download-btn" href="https://drive.google.com/file/d/19VhBVKgwaQGEy_eR7fxMucM2_rUWCE_s/view" target="_blank" rel="noopener noreferrer">BAIXAR</a>
                    <button class="copy-btn" onclick="copyToClipboard('https://drive.google.com/file/d/19VhBVKgwaQGEy_eR7fxMucM2_rUWCE_s/view')">COPIAR</button>
                </div>
                <div class="download-obs">Clique para "baixar" para ser redirecionado para o site de Download ou clique em "copiar" para Copiar e colar o link para download em seu navegador manualmente se necessário.</div>
            </div>
            <div class="download-card">
                <img class="download-img" src="https://sm.ign.com/ign_br/screenshot/default/imagem-2023-10-24-101457381_2ct1.jpg">
                <div class="download-title"><span>TAG FORCE 5</span></div>
                <div class="download-tag-container">
                    <div class="download-tag">ISO</div>
                    <div class="download-tag">3.0.1</div>
                </div>
                <div class="download-desc">Esse é um clássico não tem jeito.</div>
                <div class="download-btns">
                    <a class="download-btn" href="https://drive.google.com/file/d/1s6d-mP9evM8fQr5MqxB1NaVINELggBpF/view" target="_blank" rel="noopener noreferrer">BAIXAR</a>
                    <button class="copy-btn" onclick="copyToClipboard('https://drive.google.com/file/d/1s6d-mP9evM8fQr5MqxB1NaVINELggBpF/view')">COPIAR</button>
                </div>
                <div class="download-obs">Clique para "baixar" para ser redirecionado para o site de Download ou clique em "copiar" para Copiar e colar o link para download em seu navegador manualmente se necessário.</div>
            </div>
            <div class="download-card">
                <img class="download-img" src="https://sm.ign.com/ign_br/screenshot/default/imagem-2023-10-24-101457381_2ct1.jpg">
                <div class="download-title"><span>TAG FORCE 6</span></div>
                <div class="download-tag-container">
                    <div class="download-tag">ISO</div>
                    <div class="download-tag">4.0.0</div>
                    <div class="download-tag">SOLO</div>
                </div>
                <div class="download-desc">Versão completa sem cortes, para quem joga somente OFFLINE (Com descrição de monstros normais+).</div>
                <div class="download-btns">
                    <a class="download-btn" href="https://drive.google.com/file/d/1EvvYciz6Rh_Tqj7_aBWHoBtpw_B8e3Nh/view" target="_blank" rel="noopener noreferrer">BAIXAR</a>
                    <button class="copy-btn" onclick="copyToClipboard('https://drive.google.com/file/d/1EvvYciz6Rh_Tqj7_aBWHoBtpw_B8e3Nh/view')">COPIAR</button>
                </div>
                <div class="download-obs">Clique para "baixar" para ser redirecionado para o site de Download ou clique em "copiar" para Copiar e colar o link para download em seu navegador manualmente se necessário.</div>
            </div>
            <div class="download-card">
                <img class="download-img" src="https://sm.ign.com/ign_br/screenshot/default/imagem-2023-10-24-101457381_2ct1.jpg">
                <div class="download-title"><span>TAG FORCE 6</span></div>
                <div class="download-tag-container">
                    <div class="download-tag">ISO</div>
                    <div class="download-tag">4.0.0</div>
                    <div class="download-tag">MULTI</div>
                </div>
                <div class="download-desc">Essa versão foi otimizada (Descrição de monstros normais removidas) para quem gosta de jogar ONLINE.</div>
                <div class="download-btns">
                    <a class="download-btn" href="https://drive.google.com/file/d/1ri-YwZHIfKBzQ9lEnnSivhP8wY9OGrv7/view" target="_blank" rel="noopener noreferrer">BAIXAR</a>
                    <button class="copy-btn" onclick="copyToClipboard('https://drive.google.com/file/d/1ri-YwZHIfKBzQ9lEnnSivhP8wY9OGrv7/view')">COPIAR</button>
                </div>
                <div class="download-obs">Clique para "baixar" para ser redirecionado para o site de Download ou clique em "copiar" para Copiar e colar o link para download em seu navegador manualmente se necessário.</div>
            </div>
            <div class="download-card">
                <img class="download-img" src="https://sm.ign.com/ign_br/screenshot/default/imagem-2023-10-24-101457381_2ct1.jpg">
                <div class="download-title"><span>TAG FORCE SPECIAL</span></div>
                <div class="download-tag-container">
                    <div class="download-tag">ISO</div>
                    <div class="download-tag">4.0.1</div>
                </div>
                <div class="download-desc">Tradução completa em PT-BR.</div>
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
            <div class="update-info">Informações atualizadas em 21/02/2026 às 23:00.</div>
            <div class="download-card">
                <img class="download-img" src="https://sm.ign.com/ign_br/screenshot/default/imagem-2023-10-24-101457381_2ct1.jpg">
                <div class="download-title"><span>TAG FORCE 1</span></div>
                <div class="download-tag-container"><div class="download-tag">TEXTURA</div></div>
                <div class="download-desc">Ainda em desenvolvimento, foi pausado temporariamente, mas não desisti de continuar melhorando esse jogo.</div>
                <div class="download-btns">
                    <a class="download-btn" href="https://www.mediafire.com/file/eu0kehtal2scvge/ULUS10136.zip/file" target="_blank" rel="noopener noreferrer">BAIXAR</a>
                    <button class="copy-btn" onclick="copyToClipboard('https://www.mediafire.com/file/eu0kehtal2scvge/ULUS10136.zip/file')">COPIAR</button>
                </div>
                <div class="download-obs">Clique para "baixar" para ser redirecionado para o site de Download ou clique em "copiar" para Copiar e colar o link para download em seu navegador manualmente se necessário.</div>
            </div>
            <div class="download-card">
                <img class="download-img" src="https://sm.ign.com/ign_br/screenshot/default/imagem-2023-10-24-101457381_2ct1.jpg">
                <div class="download-title"><span>TAG FORCE 2</span></div>
                <div class="download-tag-container"><div class="download-tag">TEXTURA</div></div>
                <div class="download-desc">Ainda em desenvolvimento, foi pausado temporariamente, mas não desisti de continuar melhorando esse jogo.</div>
                <div class="download-btns">
                    <a class="download-btn" href="https://www.mediafire.com/folder/u7w58oymmc9q2/Tag+Force+2" target="_blank" rel="noopener noreferrer">BAIXAR</a>
                    <button class="copy-btn" onclick="copyToClipboard('https://www.mediafire.com/folder/u7w58oymmc9q2/Tag+Force+2')">COPIAR</button>
                </div>
                <div class="download-obs">Clique para "baixar" para ser redirecionado para o site de Download ou clique em "copiar" para Copiar e colar o link para download em seu navegador manualmente se necessário.</div>
            </div>
            <div class="download-card">
                <img class="download-img" src="https://sm.ign.com/ign_br/screenshot/default/imagem-2023-10-24-101457381_2ct1.jpg">
                <div class="download-title"><span>TAG FORCE 3</span></div>
                <div class="download-tag-container"><div class="download-tag">TEXTURA</div></div>
                <div class="download-desc">Texturas otimizadas para a terceira versão, com foco em visuais aprimorados e correções de bugs gráficos.</div>
                <div class="download-desc">Lançado: 12/01/25</div>
                <div class="download-btns">
                    <a class="download-btn" href="https://www.mediafire.com/folder/rnsuyg2rw1i70/Tag+Force+3" target="_blank" rel="noopener noreferrer">BAIXAR</a>
                    <button class="copy-btn" onclick="copyToClipboard('https://www.mediafire.com/folder/rnsuyg2rw1i70/Tag+Force+3')">COPIAR</button>
                </div>
                <div class="download-obs">Clique para "baixar" para ser redirecionado para o site de Download ou clique em "copiar" para Copiar e colar o link para download em seu navegador manualmente se necessário.</div>
            </div>
            <div class="download-card">
                <img class="download-img" src="https://sm.ign.com/ign_br/screenshot/default/imagem-2023-10-24-101457381_2ct1.jpg">
                <div class="download-title"><span>TAG FORCE 4</span></div>
                <div class="download-tag-container"><div class="download-tag">TEXTURA</div></div>
                <div class="download-desc">Texturas futuristas para a série 5D's, com elementos dinâmicos e alta resolução para duelos intensos.</div>
                <div class="download-desc">Lançado: 12/01/25</div>
                <div class="download-btns">
                    <a class="download-btn" href="https://www.mediafire.com/folder/8e1xro126r2kb/Tag+Force+4" target="_blank" rel="noopener noreferrer">BAIXAR</a>
                    <button class="copy-btn" onclick="copyToClipboard('https://www.mediafire.com/folder/8e1xro126r2kb/Tag+Force+4')">COPIAR</button>
                </div>
                <div class="download-obs">Clique para "baixar" para ser redirecionado para o site de Download ou clique em "copiar" para Copiar e colar o link para download em seu navegador manualmente se necessário.</div>
            </div>
            <div class="download-card">
                <img class="download-img" src="https://sm.ign.com/ign_br/screenshot/default/imagem-2023-10-24-101457381_2ct1.jpg">
                <div class="download-title"><span>TAG FORCE 5</span></div>
                <div class="download-tag-container"><div class="download-tag">TEXTURA</div></div>
                <div class="download-desc">Texturas refinadas para a quinta edição da série 5D's, otimizadas para velocidade e clareza visual.</div>
                <div class="download-desc">Lançado: 12/01/25</div>
                <div class="download-btns">
                    <a class="download-btn" href="https://www.mediafire.com/folder/959blew9auzly/Tag+Force+5" target="_blank" rel="noopener noreferrer">BAIXAR</a>
                    <button class="copy-btn" onclick="copyToClipboard('https://www.mediafire.com/folder/959blew9auzly/Tag+Force+5')">COPIAR</button>
                </div>
                <div class="download-obs">Clique para "baixar" para ser redirecionado para o site de Download ou clique em "copiar" para Copiar e colar o link para download em seu navegador manualmente se necessário.</div>
            </div>
            <div class="download-card">
                <img class="download-img" src="https://sm.ign.com/ign_br/screenshot/default/imagem-2023-10-24-101457381_2ct1.jpg">
                <div class="download-title"><span>TAG FORCE 6</span></div>
                <div class="download-tag-container"><div class="download-tag">TEXTURA</div></div>
                <div class="download-desc">Texturas finais da saga 5D's, com efeitos aprimorados e suporte para resoluções altas.</div>
                <div class="download-desc">Lançado: 12/01/25</div>
                <div class="download-btns">
                    <a class="download-btn" href="https://www.mediafire.com/folder/n6ia1pyjoezs5/Tag+Force+6" target="_blank" rel="noopener noreferrer">BAIXAR</a>
                    <button class="copy-btn" onclick="copyToClipboard('https://www.mediafire.com/folder/n6ia1pyjoezs5/Tag+Force+6')">COPIAR</button>
                </div>
                <div class="download-obs">Clique para "baixar" para ser redirecionado para o site de Download ou clique em "copiar" para Copiar e colar o link para download em seu navegador manualmente se necessário.</div>
            </div>
            <div class="download-card">
                <img class="download-img" src="https://sm.ign.com/ign_br/screenshot/default/imagem-2023-10-24-101457381_2ct1.jpg">
                <div class="download-title"><span>TAG FORCE SPECIAL</span></div>
                <div class="download-tag-container"><div class="download-tag">TEXTURA</div></div>
                <div class="download-desc">Texturas exclusivas para o jogo especial da série Arc-V, com temas únicos e personalizações avançadas.</div>
                <div class="download-desc">Lançado: 04/02/25</div>
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
                <div class="download-desc">Lançado: 00/00/0000 <span class="download-tag">1.0.0</span></div>
                <div class="download-desc">Textura para o TAG FORCE 1.</div>
                <div class="download-desc">Ainda vou postar no site esse conteúdo.</div>
                <div class="download-btns">
                    <a class="download-btn" href="https://www.youtube.com/@YuujiPlay" target="_blank" rel="noopener noreferrer">BAIXAR</a>
                    <button class="copy-btn" onclick="copyToClipboard('https://www.youtube.com/@YuujiPlay')">COPIAR</button>
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
                <div class="download-desc">Lançado: 00/00/0000 <span class="download-tag">1.0.0</span></div>
                <div class="download-desc">Textura para o TAG FORCE 2.</div>
                <div class="download-desc">Ainda vou postar no site esse conteúdo.</div>
                <div class="download-btns">
                    <a class="download-btn" href="https://www.youtube.com/@YuujiPlay" target="_blank" rel="noopener noreferrer">BAIXAR</a>
                    <button class="copy-btn" onclick="copyToClipboard('https://www.youtube.com/@YuujiPlay')">COPIAR</button>
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
                <div class="download-desc">Lançado: 00/00/0000 <span class="download-tag">1.0.0</span></div>
                <div class="download-desc">Textura para o TAG FORCE 1.</div>
                <div class="download-desc">Ainda vou postar no site esse conteúdo.</div>
                <div class="download-btns">
                    <a class="download-btn" href="https://www.youtube.com/@YuujiPlay" target="_blank" rel="noopener noreferrer">BAIXAR</a>
                    <button class="copy-btn" onclick="copyToClipboard('https://www.youtube.com/@YuujiPlay')">COPIAR</button>
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
                <div class="download-desc">Lançado: 00/00/0000 <span class="download-tag">1.0.0</span></div>
                <div class="download-desc">Textura para o TAG FORCE 1.</div>
                <div class="download-desc">Ainda vou postar no site esse conteúdo.</div>
                <div class="download-btns">
                    <a class="download-btn" href="https://www.youtube.com/@YuujiPlay" target="_blank" rel="noopener noreferrer">BAIXAR</a>
                    <button class="copy-btn" onclick="copyToClipboard('https://www.youtube.com/@YuujiPlay')">COPIAR</button>
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
                <div class="download-desc">Lançado: 00/00/0000 <span class="download-tag">1.0.0</span></div>
                <div class="download-desc">Textura para o TAG FORCE 1.</div>
                <div class="download-desc">Ainda vou postar no site esse conteúdo.</div>
                <div class="download-btns">
                    <a class="download-btn" href="https://www.youtube.com/@YuujiPlay" target="_blank" rel="noopener noreferrer">BAIXAR</a>
                    <button class="copy-btn" onclick="copyToClipboard('https://www.youtube.com/@YuujiPlay')">COPIAR</button>
                </div>
                <div class="download-obs">Clique para "baixar" para ser redirecionado para o site de Download ou clique em "copiar" para Copiar e colar o link para download em seu navegador manualmente se necessário.</div>
            </div>
        `
    },
    notificacoes: {
        title: 'NOTIFICAÇÕES',
        content: `
            <div class="update-info">Informações atualizadas em 21/02/2026 às 23:00.</div>
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
                <p class="notif-desc">Erros técnicos de escritas podem aparecer, já que estamos refazendo tudo do zero novamente no site.</p>
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
                <p class="notif-desc">Como o site principal e site do projeto estão sendo fundidos novamente, posso levar um tempo até o site ficar 100% otimizado para mobile.</p>
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
            <div class="update-info">Informações atualizadas em 23/02/2026 às 23:00.</div>
            <div class="notif-card">
                <div class="notif-title">
                    <span class="notif-date">23/02/2026</span>
                    <div class="notif-badge badge-admin">Admin</div>
                </div>
                <div class="notif-divider"></div>
                <h3 class="problem-title">TAG FORCE 1</h3>
                <p class="problem-desc">Estou corrigindo o seguinte card reportado para próxima atualização das texturas.</p>
                <div class="problem-report-card">
                    <span class="problem-subcard">MiniCard:</span>
                    <span class="problem-card-name">Designador das Trevas</span>
                    <span class="problem-status status-reportado">REPORTADO</span>
                    <span class="problem-status status-confirmado">CONFIRMADO</span>
                </div>
            </div>
            <div class="notif-card">
                <div class="notif-title">
                    <span class="notif-date">20/02/2026</span>
                    <div class="notif-badge badge-admin">Admin</div>
                </div>
                <div class="notif-divider"></div>
                <h3 class="problem-title">TAG FORCE 4</h3>
                <p class="problem-desc">Estou corrigindo os seguintes cards reportados para próxima atualização das texturas.</p>
                <div class="problem-report-card">
                    <span class="problem-subcard">FixedCard:</span>
                    <span class="problem-card-name">"B" Negra Brilhante</span>
                    <span class="problem-status status-reportado">REPORTADO</span>
                    <span class="problem-status status-confirmado">CONFIRMADO</span>
                </div>
                <div class="problem-report-card">
                    <span class="problem-subcard">MiniCard:</span>
                    <span class="problem-card-name">Oferenda Derradeira</span>
                    <span class="problem-status status-reportado">REPORTADO</span>
                    <span class="problem-status status-confirmado">CONFIRMADO</span>
                </div>
                <div class="problem-report-card">
                    <span class="problem-subcard">GrandCard:</span>
                    <span class="problem-card-name">Regular</span>
                    <span class="problem-status status-reportado">REPORTADO</span>
                    <span class="problem-status status-confirmado">CONFIRMADO</span>
                </div>
            </div>
            <div class="notif-card">
                <div class="notif-title">
                    <span class="notif-date">20/02/2026</span>
                    <div class="notif-badge badge-admin">Admin</div>
                </div>
                <div class="notif-divider"></div>
                <h3 class="problem-title">TAG FORCE 1</h3>
                <p class="problem-desc">Estou corrigindo os seguintes cards reportados para próxima atualização das texturas.</p>
                <div class="problem-report-card">
                    <span class="problem-subcard">Censurado:</span>
                    <span class="problem-card-name">Reviver Monstro</span>
                    <span class="problem-status status-reportado">REPORTADO</span>
                    <span class="problem-status status-confirmado">CONFIRMADO</span>
                </div>
                <div class="problem-report-card">
                    <span class="problem-subcard">MiniCard:</span>
                    <span class="problem-card-name">Navio Yomi</span>
                    <span class="problem-status status-reportado">REPORTADO</span>
                    <span class="problem-status status-confirmado">CONFIRMADO</span>
                </div>
                <div class="problem-report-card">
                    <span class="problem-subcard">MiniCard:</span>
                    <span class="problem-card-name">Gagagigo</span>
                    <span class="problem-status status-reportado">REPORTADO</span>
                    <span class="problem-status status-confirmado">CONFIRMADO</span>
                </div>
                <div class="problem-report-card">
                    <span class="problem-subcard">MiniCard:</span>
                    <span class="problem-card-name">Ojama Verde</span>
                    <span class="problem-status status-reportado">REPORTADO</span>
                    <span class="problem-status status-confirmado">CONFIRMADO</span>
                </div>
            </div>
            <div class="notif-card">
                <div class="notif-title">
                    <span class="notif-date">20/02/2026</span>
                    <div class="notif-badge badge-admin">Admin</div>
                </div>
                <div class="notif-divider"></div>
                <h3 class="problem-title">TAG FORCE SPECIAL</h3>
                <p class="problem-desc">Já estou ciente das texturas dos CARD's (mini/small) que não estão carregando a imagem.</p>
                <div class="problem-report-card">
                    <span class="problem-status status-encontrado">ENCONTRADO</span>
                    <span class="problem-status status-confirmado">CONFIRMADO</span>
                </div>
            </div>
            <div class="notif-card">
                <div class="notif-title">
                    <span class="notif-date">20/02/2026</span>
                    <div class="notif-badge badge-admin">Admin</div>
                </div>
                <div class="notif-divider"></div>
                <h3 class="problem-title">TAG FORCE SPECIAL</h3>
                <p class="problem-desc">Ainda não terminei de fazer as texturas dos personagens.</p>
                <div class="problem-report-card">
                    <span class="problem-status status-encontrado">ENCONTRADO</span>
                    <span class="problem-status status-confirmado">CONFIRMADO</span>
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
            
            <div class="duelista-main-card">
                <h3 class="problem-title">SPECIAL</h3>
                <div class="inner-access-card">
                    <a class="duelista-access-btn" href="https://discord.gg/mKFWm897hQ" target="_blank" rel="noopener noreferrer">ACESSAR</a>
                    <div class="duelista-status-card status-liberado"><i class="fas fa-check"></i></div>
                </div>
            </div>
            
            <div class="duelista-main-card">
                <h3 class="problem-title">PERFIS</h3>
                <div class="inner-access-card">
                    <a class="duelista-access-btn" href="https://yuujiplay.github.io/YuujiPlay/" target="_blank" rel="noopener noreferrer">ACESSAR</a>
                    <div class="duelista-status-card status-fechado"><i class="fas fa-times"></i></div>
                </div>
            </div>
            
            <div class="duelista-main-card">
                <h3 class="problem-title">DECK</h3>
                <div class="inner-access-card">
                    <a class="duelista-access-btn" href="https://yuujiplay.github.io/YuujiPlay/" target="_blank" rel="noopener noreferrer">ACESSAR</a>
                    <div class="duelista-status-card status-fechado"><i class="fas fa-times"></i></div>
                </div>
            </div>
            
            <div class="duelista-main-card">
                <h3 class="problem-title">TORNEIO</h3>
                <div class="inner-access-card">
                    <a class="duelista-access-btn" href="https://yuujiplay.github.io/YuujiPlay/" target="_blank" rel="noopener noreferrer">ACESSAR</a>
                    <div class="duelista-status-card status-fechado"><i class="fas fa-times"></i></div>
                </div>
            </div>
            
            <div class="duelista-main-card">
                <h3 class="problem-title">EVENTO</h3>
                <div class="inner-access-card">
                    <a class="duelista-access-btn" href="https://yuujiplay.github.io/YuujiPlay/" target="_blank" rel="noopener noreferrer">ACESSAR</a>
                    <div class="duelista-status-card status-fechado"><i class="fas fa-times"></i></div>
                </div>
            </div>
            
            <div class="duelista-main-card">
                <h3 class="problem-title">EXTRA</h3>
                <div class="inner-access-card">
                    <a class="duelista-access-btn" href="https://yuujiplay.github.io/YuujiPlay/" target="_blank" rel="noopener noreferrer">ACESSAR</a>
                    <div class="duelista-status-card status-cancelado"><i class="fas fa-ban"></i></div>
                </div>
            </div>
        `
    }
};
document.querySelectorAll('[data-modal]').forEach(button => {
    button.addEventListener('click', () => {
        openModal(button.dataset.modal);
    });
});
function openModal(type) {
    const data = modalContents[type] || { title: 'Conteúdo em construção', content: '<p>Em breve mais conteúdo aqui.</p>' };
    modalBody.innerHTML = `
        <div class="modal-header-fixed">
            <h2 class="section-title">${data.title}</h2>
        </div>
        <div class="modal-content-scroll">
            ${data.content}
        </div>
    `;
    modalElement.classList.remove('hidden');
}
function closeModal() {
    modalElement.classList.add('hidden');
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
const carousel = document.getElementById('carousel');
const cards = carousel.querySelectorAll('.game-card');
let currentIndex = 0;
const totalCards = cards.length;
function showCard(index) {
    cards.forEach(card => card.classList.remove('active'));
    cards[index].classList.add('active');
}
function nextSlide() {
    currentIndex = (currentIndex + 1) % totalCards;
    showCard(currentIndex);
}
showCard(0);
let autoInterval = setInterval(nextSlide, 5000);
carousel.addEventListener('mouseenter', () => clearInterval(autoInterval));
carousel.addEventListener('mouseleave', () => {
    autoInterval = setInterval(nextSlide, 5000);
});
const menuToggle = document.querySelector('.menu-toggle');
const topbarMenu = document.getElementById('topbarMenu');
const menuOverlay = document.getElementById('menuOverlay');
function toggleMenu() {
    const isOpen = topbarMenu.classList.toggle('active');
    menuOverlay.classList.toggle('hidden', !isOpen);
    menuToggle.setAttribute('aria-expanded', isOpen);
    const icon = menuToggle.querySelector('i');
    if (isOpen) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
}
menuToggle.addEventListener('click', toggleMenu);
menuOverlay.addEventListener('click', toggleMenu);
document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && topbarMenu.classList.contains('active')) {
        toggleMenu();
    }
});
// Listener para o botão "Fechar Menu"
document.querySelector('.close-menu-btn')?.addEventListener('click', toggleMenu);
// Alternar tema ao clicar no "YuujiPlay" (brand)
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;
function setTheme(theme) {
    html.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}
const savedTheme = localStorage.getItem('theme') || 'dark';
setTheme(savedTheme);
themeToggle.addEventListener('click', () => {
    const current = html.getAttribute('data-theme') || 'dark';
    const newTheme = current === 'dark' ? 'classic' : 'dark';
    setTheme(newTheme);
});
// Nova funcionalidade: Esconder numerion ao clicar no botão/link correspondente
document.querySelectorAll('.menu-btn, .top-card').forEach(element => {
    const numerion = element.querySelector('.numerion');
    if (numerion) {
        element.addEventListener('click', function() {
            numerion.style.display = 'none';
        });
    }
});