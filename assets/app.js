/* ============================================================
   Family Trip · comportamento do site
   ============================================================ */

const MES = ['jan','fev','mar','abr','mai','jun','jul','ago','set','out','nov','dez'];
const esc = s => String(s==null?'':s).replace(/[<>&]/g, c => ({'<':'&lt;','>':'&gt;','&':'&amp;'}[c]));
const el  = id => document.getElementById(id);

/* ---------- tamanho da letra ---------- */
(function letra(){
  const salvo = localStorage.getItem('ft.letra') || 'n';
  document.documentElement.dataset.letra = salvo;
  document.addEventListener('click', e => {
    const b = e.target.closest('[data-letra-btn]');
    if (!b) return;
    const v = b.dataset.letraBtn;
    document.documentElement.dataset.letra = v;
    localStorage.setItem('ft.letra', v);
    document.querySelectorAll('[data-letra-btn]').forEach(x =>
      x.setAttribute('aria-pressed', x.dataset.letraBtn === v));
  });
  window.addEventListener('DOMContentLoaded', () =>
    document.querySelectorAll('[data-letra-btn]').forEach(x =>
      x.setAttribute('aria-pressed', x.dataset.letraBtn === (localStorage.getItem('ft.letra')||'n'))));
})();

/* ---------- cabeçalho e menu ---------- */
const PAGINAS = [
  ['index.html','Início'],
  ['dias.html','Dia a dia'],
  ['cidades.html','As cidades'],
  ['rotas.html','Voos e trens'],
  ['reservas.html','Reservas'],
  ['pendencias.html','Pendências'],
  ['essencial.html','Essencial']
];

function montarTopo(){
  const atual = (location.pathname.split('/').pop() || 'index.html');
  const topo = document.createElement('div');
  topo.className = 'topo';
  topo.innerHTML = `<div class="env">
    <a class="marca" href="index.html">Family Trip<span>Portugal &amp; Espanha · 2026</span></a>
    <div class="letras" role="group" aria-label="Tamanho da letra">
      <button data-letra-btn="n" aria-pressed="true" title="Letra normal">A</button>
      <button data-letra-btn="g" aria-pressed="false" title="Letra grande">A</button>
      <button data-letra-btn="gg" aria-pressed="false" title="Letra muito grande">A</button>
    </div></div>`;
  const menu = document.createElement('nav');
  menu.className = 'menu';
  menu.innerHTML = `<div class="env">${
    PAGINAS.map(([h,t]) => `<a href="${h}"${h===atual?' class="on"':''}>${t}</a>`).join('')
  }</div>`;
  document.body.prepend(menu);
  document.body.prepend(topo);
}

function montarPe(){
  const pe = document.createElement('footer');
  pe.className = 'pe';
  pe.innerHTML = `<div class="env">
    <p>Feito com carinho para <b>Anna Thereza</b> e família 💙</p>
  </div>`;
  document.body.appendChild(pe);
}

/* ---------- contagem ---------- */
function contagem(){
  const alvo = el('contagem'); if (!alvo) return;
  const ms = new Date(VIAGEM.partida) - new Date();
  const d  = Math.ceil(ms / 86400000);
  if (ms < 0){
    const volta = new Date(VIAGEM.retorno) - new Date();
    alvo.innerHTML = volta > 0
      ? `<b>Boa viagem</b><span>aproveitem cada dia 💙</span>`
      : `<b>💙</b><span>que saudade já</span>`;
    return;
  }
  alvo.innerHTML = d <= 1
    ? `<b>Amanhã</b><span>o voo sai às 18h30</span>`
    : `<b>${d}</b><span>dias para a partida</span>`;
}

/* ---------- hoje ---------- */
function diaDeHoje(){
  const h = new Date();
  return DIAS.find(D => D.d === h.getDate() && D.m === h.getMonth()+1);
}

function cartaoHoje(){
  const alvo = el('hoje'); if (!alvo) return;
  const D = diaDeHoje();
  if (!D){
    const ms = new Date(VIAGEM.partida) - new Date();
    alvo.innerHTML = ms > 0
      ? `<div class="bloco"><div class="dentro">
           <h3>A viagem ainda não começou</h3>
           <p>Enquanto isso, vale conferir a página de <a href="pendencias.html">pendências</a>,
              que é onde estão as coisas que ainda precisam ser resolvidas antes de embarcar.</p>
         </div></div>`
      : `<div class="bloco"><div class="dentro"><h3>Viagem encerrada</h3>
           <p>O roteiro inteiro continua aqui, para a lembrança.</p></div></div>`;
    return;
  }
  alvo.innerHTML = `<div class="bloco">
    <div class="dentro">
      <span class="selo o">Hoje</span>
      <h3>${esc(D.titulo)}</h3>
      <p>${esc(D.sem)}, ${D.d} de ${MES[D.m-1]} · <strong>${esc(D.cidade)}</strong></p>
      ${D.itens.map(i => `<div class="linha">
          <div class="quando">${esc(i.h)}</div>
          <div class="oque"><b>${esc(i.n)}</b><small>${esc(i.o)}</small>${etiqueta(i.tipo)}</div>
        </div>`).join('')}
    </div></div>`;
}

/* ---------- etiquetas ---------- */
function etiqueta(t){
  const m = {
    voo:['e-voo','✈️ voo'], trem:['e-trem','🚆 trem'],
    reserva:['e-reserva','🍽️ reserva confirmada'], ingresso:['e-ingresso','🎟️ precisa de ingresso'],
    pendente:['e-pendente','⚠️ ainda sem reserva'], descanso:['e-descanso','☕ descanso']
  };
  return m[t] ? `<span class="etiq ${m[t][0]}">${m[t][1]}</span>` : '';
}

/* ---------- dia a dia ---------- */
function listarDias(){
  const alvo = el('dias'); if (!alvo) return;
  const h = new Date(), hd = h.getDate(), hm = h.getMonth()+1;
  alvo.innerHTML = DIAS.map((D, ix) => {
    const eh = (D.d === hd && D.m === hm);
    return `<details class="dia${eh ? ' hoje' : ''}" id="d${D.d}-${D.m}"${eh || ix === 0 ? ' open' : ''}>
      <summary>
        <div class="selo-data"><b>${D.d}</b><span>${MES[D.m-1]}</span></div>
        <div class="dia-nome"><b>${esc(D.titulo)}</b>
          <span>${esc(D.sem)} · ${esc(D.cidade)} · ${esc(D.resumo)}</span></div>
        <div class="chev">▸</div>
      </summary>
      <div class="dia-lista">${D.itens.map(i => `
        <div class="linha">
          <div class="quando">${esc(i.h)}</div>
          <div class="oque"><b>${esc(i.n)}</b><small>${esc(i.o)}</small>
            ${etiqueta(i.tipo)}
            ${i.mapa ? `<br><a class="link-mapa" target="_blank" rel="noopener"
                 href="https://www.google.com/maps/search/${encodeURIComponent(i.mapa)}">Ver no mapa</a>` : ''}
          </div></div>`).join('')}
      </div></details>`;
  }).join('');
}

/* ---------- cidades ---------- */
const FOTOS = {
  lisboa:['lisboa','lisboa-2'],
  sevilha:['sevilha','sevilha-2','sevilha-3','sevilha-4','flamenco','tapas'],
  malaga:['malaga','malaga-2','malaga-3','malaga-4','malaga-5','muelle'],
  granada:['granada','granada-4','granada-2','granada-3'],
  madri:['madri','madri-2','madri-3','madri-4','madri-5','madri-6','madri-7','churros']
};

function listarCidades(){
  const alvo = el('cidades'); if (!alvo) return;
  alvo.innerHTML = CIDADES.map(c => {
    const fs = FOTOS[c.id] || [];
    const extras = fs.slice(1, 7);
    return `<div class="bloco">
      <div class="cidade-capa">
        <img src="img/${fs[0]}.jpg" alt="${esc(c.nome)}" loading="lazy">
        <div class="faixa"><h3>${esc(c.nome)}</h3><div class="q">${esc(c.periodo)}</div></div>
      </div>
      <div class="dentro">
        <div class="graus">
          <div><b>${esc(c.max)}°</b><span>máxima</span></div>
          <div><b>${esc(c.min)}°</b><span>mínima</span></div>
        </div>
        <p>${esc(c.clima)}</p>
        <h2 class="secao" style="margin:22px 0 10px">O que levar</h2>
        <ul class="pilulas">${c.levar.map(x => `<li>${esc(x)}</li>`).join('')}</ul>
        <h2 class="secao" style="margin:22px 0 6px">O que vocês vão ver</h2>
        <ul class="pontos">${c.destaques.map(x => `<li>${esc(x)}</li>`).join('')}</ul>
        <div class="nota" style="margin:18px 0 0"><strong>Bom saber.</strong> ${esc(c.saber)}</div>
      </div>
      ${extras.length ? `<div class="galeria">${extras.map(f =>
        `<img src="img/${f}.jpg" alt="${esc(c.nome)}" loading="lazy">`).join('')}</div>` : ''}
    </div>`;
  }).join('');
}

/* ---------- rotas e hotéis ---------- */
function listarRotas(){
  const alvo = el('rotas'); if (!alvo) return;
  alvo.innerHTML = ROTAS.map(r => `
    <div class="bloco"><div class="dentro">
      <span class="etiq ${r.tipo === 'voo' ? 'e-voo' : 'e-trem'}" style="margin-top:0">
        ${r.tipo === 'voo' ? '✈️ voo' : '🚆 trem'}</span>
      <span class="etiq e-descanso" style="margin-top:0">${esc(r.data)}</span>
      <h3 style="margin-top:10px">${esc(r.de)} → ${esc(r.para)}</h3>
      <div class="par"><div class="k">Sai</div><div class="v"><b>${esc(r.sai)}</b></div></div>
      <div class="par"><div class="k">Chega</div><div class="v"><b>${esc(r.chega)}</b></div></div>
      ${r.obs ? `<p style="margin-top:12px">${r.alerta ? '⚠️ ' : ''}${esc(r.obs)}</p>` : ''}
    </div></div>`).join('');
}

function listarHoteis(){
  const alvo = el('hoteis'); if (!alvo) return;
  alvo.innerHTML = HOTEIS.map(h => `
    <div class="bloco"><div class="dentro">
      <h3>${esc(h.nome)}</h3>
      <div class="par"><div class="k">Cidade</div><div class="v"><b>${esc(h.cidade)}</b></div></div>
      <div class="par"><div class="k">Datas</div><div class="v">${esc(h.entrada)} a ${esc(h.saida)}</div></div>
      <div class="par"><div class="k">Endereço</div><div class="v">${esc(h.end)}</div></div>
      <p style="margin-top:12px">${esc(h.obs)}</p>
      <a class="link-mapa" target="_blank" rel="noopener"
         href="https://www.google.com/maps/search/${encodeURIComponent(h.nome + ' ' + h.cidade)}">Ver no mapa</a>
    </div></div>`).join('');
}

/* ---------- reservas e ingressos ---------- */
function listarReservas(){
  const alvo = el('reservas'); if (!alvo) return;
  const cor = { ok:['e-reserva','confirmada'], erro:['e-pendente','precisa corrigir'], falta:['e-ingresso','sem reserva'] };
  alvo.innerHTML = RESERVAS.map(r => {
    const [cl, tx] = cor[r.status];
    return `<div class="bloco"><div class="dentro">
      <span class="etiq ${cl}" style="margin-top:0">${tx}</span>
      <span class="etiq e-descanso" style="margin-top:0">${esc(r.dia)} · ${esc(r.cidade)}</span>
      <h3 style="margin-top:10px">${esc(r.nome)}</h3>
      <div class="par"><div class="k">Horário</div><div class="v"><b>${esc(r.hora)}</b></div></div>
      <p style="margin-top:10px">${esc(r.obs)}</p>
    </div></div>`;
  }).join('');
}

function listarIngressos(){
  const alvo = el('ingressos'); if (!alvo) return;
  alvo.innerHTML = INGRESSOS.map(i => `
    <div class="bloco"><div class="dentro">
      ${i.urgente ? '<span class="selo u">Comprar agora</span>' : '<span class="selo o">Sem urgência</span>'}
      <h3>${esc(i.nome)}</h3>
      <div class="par"><div class="k">Quando</div><div class="v"><b>${esc(i.dia)}</b>, ${esc(i.hora)}</div></div>
      <p style="margin-top:10px">${esc(i.obs)}</p>
      ${i.link ? `<a class="botao" target="_blank" rel="noopener" href="${i.link}">Abrir o site oficial</a>` : ''}
    </div></div>`).join('');
}

/* ---------- pendências ---------- */
function listarPendencias(){
  const alvo = el('pendencias'); if (!alvo) return;
  const salvo = JSON.parse(localStorage.getItem('ft.feito') || '{}');
  const rot = { u:'Resolver hoje', a:'Esta semana', o:'Sugestão' };
  alvo.innerHTML = ALERTAS.map(a => `
    <div class="aviso ${a.nivel}${salvo[a.id] ? ' pronto' : ''}" data-id="${a.id}">
      <span class="selo ${a.nivel}">${rot[a.nivel]}</span>
      <h3>${esc(a.titulo)}</h3>
      <p>${a.texto}</p>
      <div class="porque">${a.detalhe}</div>
      ${a.link ? `<a class="botao" target="_blank" rel="noopener" href="${a.link}">${esc(a.linkTexto)}</a>` : ''}
      <label class="marcar"><input type="checkbox" ${salvo[a.id] ? 'checked' : ''}> ${esc(a.acao)}</label>
    </div>`).join('');

  alvo.addEventListener('change', e => {
    if (e.target.type !== 'checkbox') return;
    const cx = e.target.closest('.aviso');
    const s = JSON.parse(localStorage.getItem('ft.feito') || '{}');
    if (e.target.checked){ cx.classList.add('pronto'); s[cx.dataset.id] = 1; }
    else { cx.classList.remove('pronto'); delete s[cx.dataset.id]; }
    localStorage.setItem('ft.feito', JSON.stringify(s));
    resumoPendencias();
  });
  resumoPendencias();
}

function resumoPendencias(){
  const alvo = el('resumoPend'); if (!alvo) return;
  const s = JSON.parse(localStorage.getItem('ft.feito') || '{}');
  const faltam = ALERTAS.filter(a => !s[a.id]);
  const urg = faltam.filter(a => a.nivel === 'u').length;
  alvo.innerHTML = faltam.length === 0
    ? `<div class="aviso o"><h3>Tudo resolvido 💙</h3><p>Não há nada pendente. Boa viagem.</p></div>`
    : `<div class="aviso ${urg ? 'u' : 'a'}">
         <h3>${faltam.length} ${faltam.length === 1 ? 'item pendente' : 'itens pendentes'}</h3>
         <p>${urg ? `<strong>${urg} ${urg === 1 ? 'precisa' : 'precisam'} ser ${urg === 1 ? 'resolvido' : 'resolvidos'} hoje.</strong> ` : ''}
            O que você marcar fica salvo neste aparelho.</p></div>`;
}

/* ---------- essencial ---------- */
function listarEssencial(){
  const e1 = el('emergencia');
  if (e1) e1.innerHTML = EMERGENCIA.map(x => `
    <div class="par"><div class="k">${esc(x.t)}</div>
      <div class="v"><a class="tel" href="tel:${x.v.replace(/[^+\d]/g,'')}">${esc(x.v)}</a>
      ${x.obs ? `<br><small>${esc(x.obs)}</small>` : ''}</div></div>`).join('');

  const e2 = el('frases');
  if (e2) e2.innerHTML = FRASES.map(f => `
    <div class="frase"><div class="p">${esc(f.pt)}</div>
      <div class="e">${esc(f.es)}</div><div class="f">${esc(f.f)}</div></div>`).join('');

  const e3 = el('lembretes');
  if (e3){
    const s = JSON.parse(localStorage.getItem('ft.mala') || '{}');
    e3.innerHTML = LEMBRETES.map((t, i) => `
      <label class="check${s[i] ? ' feito' : ''}"><input type="checkbox" data-i="${i}" ${s[i] ? 'checked' : ''}>
        <span>${esc(t)}</span></label>`).join('');
    e3.addEventListener('change', ev => {
      const s2 = JSON.parse(localStorage.getItem('ft.mala') || '{}');
      const i = ev.target.dataset.i;
      if (ev.target.checked){ s2[i] = 1; ev.target.closest('.check').classList.add('feito'); }
      else { delete s2[i]; ev.target.closest('.check').classList.remove('feito'); }
      localStorage.setItem('ft.mala', JSON.stringify(s2));
    });
  }
}

/* ---------- calendário com alarme ---------- */
function pad(n){ return String(n).padStart(2,'0'); }
function hora(h){ const m = /^(\d{1,2})h(\d{2})?$/.exec(String(h).trim()); return m ? [pad(m[1]), m[2] || '00'] : null; }

function baixarCalendario(){
  const L = ['BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//Family Trip//PT-ES 2026//PT',
             'CALSCALE:GREGORIAN','METHOD:PUBLISH','X-WR-CALNAME:Family Trip Portugal e Espanha'];
  let k = 0;
  DIAS.forEach(D => D.itens.forEach(it => {
    const t = hora(it.h); if (!t) return;
    const ini = `2026${pad(D.m)}${pad(D.d)}T${t[0]}${t[1]}00`;
    const fim = `2026${pad(D.m)}${pad(D.d)}T${pad((+t[0]+1)%24)}${t[1]}00`;
    const alarme = (it.tipo === 'voo' || it.tipo === 'trem') ? '-PT180M' : '-PT60M';
    const limpa = s => String(s).replace(/[,;\\]/g,' ').replace(/\n/g,' ');
    L.push('BEGIN:VEVENT', `UID:ft-${k++}@familytrip`, 'DTSTAMP:20261111T120000Z',
      `DTSTART:${ini}`, `DTEND:${fim}`,
      `SUMMARY:${limpa(it.n)}`,
      `DESCRIPTION:${limpa(D.cidade + ' - ' + it.o)}`,
      `LOCATION:${limpa(it.mapa || D.cidade)}`,
      'BEGIN:VALARM', `TRIGGER:${alarme}`, 'ACTION:DISPLAY',
      `DESCRIPTION:${limpa(it.n)}`, 'END:VALARM', 'END:VEVENT');
  }));
  L.push('END:VCALENDAR');
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([L.join('\r\n')], {type:'text/calendar;charset=utf-8'}));
  a.download = 'family-trip-portugal-espanha.ics';
  document.body.appendChild(a); a.click(); a.remove();
}

/* ---------- partida ---------- */
window.addEventListener('DOMContentLoaded', () => {
  montarTopo();
  contagem(); setInterval(contagem, 60000);
  cartaoHoje();
  listarDias(); listarCidades(); listarRotas(); listarHoteis();
  listarReservas(); listarIngressos(); listarPendencias(); listarEssencial();
  const b = el('btnCal'); if (b) b.addEventListener('click', baixarCalendario);
  montarPe();
});
