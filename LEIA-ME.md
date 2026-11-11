# Site da viagem · como publicar

Site estático, sem servidor e sem banco de dados. Sete páginas, 27 fotos, cerca de 5 MB.
Funciona em qualquer hospedagem gratuita.

---

## Publicar no GitHub Pages em cinco minutos

1. Em **github.com**, clique em **New repository**.
2. Nome sugerido: `viagem` ou `family-trip`. Marque **Public**, e crie.
3. Na tela do repositório, clique em **uploading an existing file**.
4. Arraste **tudo que está dentro desta pasta**: os sete arquivos `.html`,
   a pasta `assets` e a pasta `img`. Confirme com **Commit changes**.
5. Vá em **Settings → Pages**. Em **Source**, escolha **Deploy from a branch**,
   branch `main`, pasta `/ (root)`. Salve.
6. Espere um ou dois minutos. O endereço aparece no topo dessa mesma página:

```
https://SEU-USUARIO.github.io/viagem/
```

Esse é o link para mandar para a família.

### Pelo terminal, se preferir

```bash
cd ~/AOS_DRIVE/ARTE/viagem-anna-thereza/site
git init && git add -A && git commit -m "site da viagem"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/viagem.git
git push -u origin main
```

Depois ative o Pages em Settings → Pages, como no passo 5.

---

## Outras hospedagens gratuitas

**Netlify Drop.** Entre em `app.netlify.com/drop` e arraste a pasta inteira. Sai um link
na hora, sem conta e sem configuração. É o caminho mais rápido de todos.

**Cloudflare Pages** e **Vercel** funcionam do mesmo jeito, conectando ao repositório.

---

## O que cada arquivo faz

| Arquivo | Para que serve |
|---|---|
| `index.html` | Capa, contagem regressiva e o plano de hoje |
| `dias.html` | Os catorze dias, hora a hora |
| `cidades.html` | Clima, mala e o que ver em cada cidade |
| `rotas.html` | Voos, trens e os cinco hotéis |
| `reservas.html` | Restaurantes e ingressos |
| `pendencias.html` | O que ainda falta resolver, com marcação |
| `essencial.html` | Emergência, frases em espanhol e lista da mala |
| `assets/dados.js` | **Todo o conteúdo da viagem.** Para mudar qualquer coisa, mexa aqui |
| `assets/estilo.css` | A aparência |
| `assets/app.js` | O funcionamento |
| `img/` | As fotos |

**Para alterar horário, restaurante ou qualquer informação, só o `assets/dados.js` precisa ser
editado.** É um arquivo de texto comum, organizado por seções e com comentários.

---

## As fotos

Vieram do próprio documento que a Anna Thereza montou. Foram extraídas do `.docx`,
redimensionadas para 1500 pixels de largura e comprimidas, para o site abrir rápido
no celular.

**Lisboa ficou sem foto da cidade.** O documento original só tinha interiores de restaurante,
então a página de Lisboa usa o Solar dos Presuntos. Para melhorar, basta substituir o arquivo
`img/lisboa.jpg` por qualquer foto, mantendo o nome. O site troca sozinho.

Vale o mesmo para todas: cada foto é um arquivo com nome fixo em `img/`. Depois da viagem, dá
para trocar tudo pelas fotos da família e o site vira álbum.

---

## O que o site faz

- **Contagem regressiva** para a partida, que vira "boa viagem" no dia 19.
- **O plano de hoje** aparece sozinho na página inicial durante a viagem.
- **Botão de letra maior**, em três tamanhos, com a escolha salva no aparelho.
- **Exportar para o calendário**, com 60 compromissos e alarme automático: três horas antes de
  cada voo e trem, uma hora antes dos passeios. Cada pessoa instala no próprio celular.
- **Marcar pendência como resolvida**, salvo no aparelho de quem marcou.
- **Lista da mala** com marcação, idem.
- **Link direto para o mapa** em cada lugar do roteiro.
- **Telefone de emergência clicável**, que disca ao toque.
- Funciona offline depois de aberto uma vez, e pode ser adicionado à tela de início do celular
  como se fosse um aplicativo.
