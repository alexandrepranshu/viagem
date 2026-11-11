/* Guarda o site inteiro no celular na primeira abertura.
   Trocou alguma coisa no site? Mude o número da versão abaixo. */
const VERSAO = 'family-trip-v1';

const ARQUIVOS = [
  './','./index.html','./dias.html','./cidades.html','./rotas.html',
  './reservas.html','./pendencias.html','./essencial.html',
  './assets/estilo.css','./assets/dados.js','./assets/app.js',
  './manifest.json',
  './img/capa.jpg','./img/lisboa.jpg','./img/lisboa-2.jpg',
  './img/sevilha.jpg','./img/sevilha-2.jpg','./img/sevilha-3.jpg','./img/sevilha-4.jpg',
  './img/malaga.jpg','./img/malaga-2.jpg','./img/malaga-3.jpg','./img/malaga-4.jpg','./img/malaga-5.jpg',
  './img/muelle.jpg','./img/granada.jpg','./img/granada-2.jpg','./img/granada-3.jpg','./img/granada-4.jpg',
  './img/madri.jpg','./img/madri-2.jpg','./img/madri-3.jpg','./img/madri-4.jpg',
  './img/madri-5.jpg','./img/madri-6.jpg','./img/madri-7.jpg',
  './img/churros.jpg','./img/flamenco.jpg','./img/tapas.jpg',
  './img/icone-180.png','./img/icone-192.png','./img/icone-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(VERSAO)
      .then(c => c.addAll(ARQUIVOS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(ks => Promise.all(ks.filter(k => k !== VERSAO).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

/* Duas estratégias, de propósito.

   PÁGINAS (html, css, js): rede primeiro, cache como rede de segurança.
   Com internet, ela sempre vê a versão mais nova, então correção de horário
   chega na hora. Sem internet, abre do cache e funciona igual.

   FOTOS: cache primeiro, porque foto não muda e baixar de novo gasta dados
   caros no exterior. */
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);
  if (url.origin !== location.origin) return;

  const ehFoto = /\.(jpg|jpeg|png|webp|svg|ico)$/i.test(url.pathname);

  if (ehFoto) {
    e.respondWith(
      caches.match(e.request).then(guardado => guardado || fetch(e.request).then(resp => {
        if (resp && resp.status === 200) {
          const copia = resp.clone();
          caches.open(VERSAO).then(c => c.put(e.request, copia));
        }
        return resp;
      }))
    );
    return;
  }

  e.respondWith(
    fetch(e.request).then(resp => {
      if (resp && resp.status === 200) {
        const copia = resp.clone();
        caches.open(VERSAO).then(c => c.put(e.request, copia));
      }
      return resp;
    }).catch(() => caches.match(e.request).then(g => g || caches.match('./index.html')))
  );
});
