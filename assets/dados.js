/* ============================================================
   Family Trip · Portugal e Espanha · novembro e dezembro 2026
   Todos os dados da viagem ficam neste arquivo.
   Para mudar qualquer coisa no site, mude aqui.
   ============================================================ */

const VIAGEM = {
  titulo: "Portugal & Espanha",
  subtitulo: "Lisboa · Sevilha · Málaga · Granada · Madri",
  periodo: "19 de novembro a 3 de dezembro de 2026",
  pessoas: 15,
  partida: "2026-11-19T18:30:00",
  retorno: "2026-12-03T16:45:00"
};

/* ---------- HOTÉIS ---------- */
const HOTEIS = [
  { cidade:"Lisboa",  nome:"Bessa Hotel Liberdade",   entrada:"20/11", saida:"22/11",
    end:"Avenida da Liberdade, Lisboa", obs:"Tentar early check-in. Chegada às 6h40." },
  { cidade:"Sevilha", nome:"Hotel Doña María",         entrada:"22/11", saida:"25/11",
    end:"Calle Don Remondo, centro histórico",
    obs:"A 100 m da Catedral e da Giralda, a 230 m do Real Alcázar. Quase tudo a pé." },
  { cidade:"Málaga",  nome:"Hotel Ilunion Málaga",     entrada:"25/11", saida:"28/11",
    end:"Região portuária, junto à estação María Zambrano",
    obs:"Facilita a chegada, a saída para Granada e o passeio pelo porto. Para o centro histórico, táxi poupa os mais velhos." },
  { cidade:"Granada", nome:"Hotel Barceló Carmen",     entrada:"28/11", saida:"30/11",
    end:"Região central de Granada",
    obs:"Confirmar early check-in. A chegada do trem é às 10h43." },
  { cidade:"Madri",   nome:"Hotel Liabeny",            entrada:"30/11", saida:"03/12",
    end:"Perto da Puerta del Sol",
    obs:"Boa base para o centro e para voltar e descansar." }
];

/* ---------- PENDÊNCIAS ---------- */
const ALERTAS = [
{ id:"jnc", nivel:"u", titulo:"A reserva do JNcQUOI está no dia errado",
  texto:"Os dois comprovantes estão marcados para <b>quinta-feira, 19 de novembro, às 19h</b>. Nessa hora o grupo ainda está no Brasil. O voo só chega em Lisboa no dia 20, às 6h40.",
  detalhe:"As duas reservas somam <b>12 lugares</b>, em duas mesas de seis. O grupo é de 15 pessoas, então faltam três. Ao remarcar, pedir 15.<br><br>Sábado à noite em Lisboa é o horário mais disputado da semana. Vale ligar, e não só usar o aplicativo.",
  acao:"Remarcar para 20 ou 21 de novembro, com 15 lugares" },

{ id:"alh", nivel:"u", titulo:"Ingressos da Alhambra, domingo 29",
  texto:"É o único item da viagem em que o atraso não tem conserto. Restaurante se troca, trem se remarca, a Alhambra não.",
  detalhe:"Os Palácios Nasridas recebem <b>300 pessoas a cada meia hora</b>. O horário do ingresso <b>não pode ser alterado</b> depois da compra, e quem não está na entrada na hora marcada não entra. Com 15 pessoas, chegar 30 minutos antes.<br><br>Se o dia 29 estiver esgotado, há três saídas reais: a <b>visita noturna</b> aos Nasridas, que tem cota própria; operadores de turismo que guardam cota; e a modalidade oficial de <b>grupo de 11 a 30 pessoas</b>, que é exatamente o tamanho da família.",
  acao:"Comprar hoje, no site oficial",
  link:"https://tickets.alhambra-patronato.es/en/", linkTexto:"Site oficial da Alhambra" },

{ id:"alc", nivel:"u", titulo:"Ingressos do Alcázar de Sevilha, segunda 23",
  texto:"O roteiro original diz que não precisa comprar antes. <b>Essa informação está errada.</b>",
  detalhe:"Ingresso online com horário marcado é praticamente obrigatório. A bilheteria só vende se o horário não tiver esgotado online, e a fila de quem compra no dia contorna a Plaza del Triunfo.<br><br>A manhã é o período mais cheio, por causa dos grupos de excursão, e o roteiro prevê 9h30. Com ingresso em mãos, entrar pela fila da <b>Puerta del León</b>, quinze minutos antes do horário.",
  acao:"Comprar online com horário marcado",
  link:"https://www.alcazarsevilla.org/", linkTexto:"Site oficial do Real Alcázar" },

{ id:"van", nivel:"a", titulo:"Transporte do grupo nos cinco trechos",
  texto:"O roteiro não diz como quinze pessoas com mala vão do aeroporto ou da estação até o hotel. São cinco chegadas: Lisboa, Sevilha, Málaga, Granada e Madri.",
  detalhe:"Táxi comum leva quatro pessoas, então são quatro carros por vez. Em Granada e em Sevilha eles não aparecem sozinhos na porta do hotel.",
  acao:"Contratar van para os cinco trechos" },

{ id:"volta", nivel:"a", titulo:"A conexão da volta tem 1h50",
  texto:"Dia 3 de dezembro: Madri 7h40 para Lisboa 8h05, e Lisboa 9h55 para Brasília. Saída do hotel em Madri por volta das <b>5h da manhã</b>.",
  detalhe:"Duas perguntas mudam tudo em caso de atraso:<br><br><b>1.</b> Os dois trechos estão no mesmo bilhete? Se estiverem, atraso no primeiro obriga a companhia a reacomodar. Se forem bilhetes separados, o prejuízo é de quem viaja.<br><br><b>2.</b> As malas vão despachadas direto até Brasília, ou precisam ser retiradas em Lisboa?",
  acao:"Confirmar com a companhia aérea" },

{ id:"trem", nivel:"a", titulo:"O trem Granada para Madri não fecha a conta",
  texto:"O roteiro traz, para o mesmo trecho: saída 11h04, duração 3h56 e chegada às <b>2h38</b>. E num ponto diz direto, em outro diz uma conexão.",
  detalhe:"11h04 mais 3h56 dá 15h00, e não 14h38. Importa porque o roteiro de Madri começa às 16h30 do mesmo dia.",
  acao:"Conferir o bilhete real da Renfe" },

{ id:"rest", nivel:"a", titulo:"Restaurantes de 15 lugares ainda sem reserva",
  texto:"Granada está com 'checar reserva' em todas as refeições. Málaga está sem reserva nos jantares. E em Madri ficaram dois nomes em aberto.",
  detalhe:"<b>Sobrino de Botín</b>, numa terça de dezembro, é um dos restaurantes mais procurados da Europa. Ou já está reservado, ou provavelmente não vai dar.<br><br><b>Mercado de San Miguel não funciona para quinze pessoas.</b> É em pé, lotado, e o grupo se perde.",
  acao:"Reservar Granada, Málaga e Madri" },

{ id:"lis1", nivel:"o", titulo:"O primeiro dia em Lisboa pede menos",
  texto:"Chegam às 6h40 depois de voo noturno, e o quarto provavelmente só sai às 14h. O plano é caminhar Restauradores, Rossio, Rua Augusta, Praça do Comércio e Chiado.",
  detalhe:"Quinze pessoas sem banho e sem ter dormido direito. Deixar as malas, café da manhã sem pressa, e fazer <b>só o Rossio e a Rua Augusta</b>. O Chiado fica para a tarde, depois do check-in, e aí vira prazer em vez de prova.",
  acao:"Encurtar a manhã do dia 20" },

{ id:"walk", nivel:"o", titulo:"Seis horas de caminhada e mais um passeio",
  texto:"No dia 21 o walk tour dura cerca de seis horas, e o roteiro ainda sugere Oceanário ou Zoológico depois.",
  detalhe:"O Oceanário fica no Parque das Nações, a uns vinte minutos dali. Na prática, uma das duas coisas vai cair. Melhor decidir antes do que às cinco da tarde, com o grupo exausto e as crianças frustradas.",
  acao:"Escolher entre o walk tour inteiro e o Oceanário" },

{ id:"mir", nivel:"o", titulo:"A Alhambra já é o dia inteiro",
  texto:"O Mirador de San Nicolás às 16h, depois de uma manhã inteira na Alhambra, com subida pelas ladeiras do Albaicín.",
  detalhe:"Se for fazer, ir de táxi até perto do mirante e dividir em vários carros. Quem estiver cansado fica no hotel e encontra o grupo no jantar.",
  acao:"Deixar como opcional, decidido no dia" }
];

/* ---------- DIA A DIA ---------- */
const DIAS = [
{ d:19, m:11, sem:"Quinta", cidade:"Brasília", titulo:"Partida", resumo:"Voo noturno para Lisboa",
  itens:[
   { h:"15h30", n:"Chegar no aeroporto", o:"Três horas antes, com 15 pessoas e bagagem despachada" },
   { h:"18h30", n:"Voo Brasília → Lisboa", o:"Chegada no dia seguinte às 6h40", tipo:"voo" }
  ]},
{ d:20, m:11, sem:"Sexta", cidade:"Lisboa", titulo:"Chegada e Baixa", resumo:"Dia leve, o corpo ainda no fuso",
  itens:[
   { h:"06h40", n:"Chegada em Lisboa", o:"Bessa Hotel Liberdade · tentar early check-in", tipo:"voo" },
   { h:"Manhã", n:"Rossio e Rua Augusta", o:"Sugestão: encurtar o percurso e deixar o Chiado para a tarde", mapa:"Rossio, Lisboa" },
   { h:"Almoço", n:"Cantinho do Avillez", o:"Chiado · sugestão, sem reserva", mapa:"Cantinho do Avillez Chiado" },
   { h:"Tarde", n:"Chiado e Largo do Chiado", o:"Depois do check-in, com banho tomado", mapa:"Largo do Chiado Lisboa" },
   { h:"19h00", n:"Solar dos Presuntos", o:"Reserva confirmada", tipo:"reserva", mapa:"Solar dos Presuntos Lisboa" }
  ]},
{ d:21, m:11, sem:"Sábado", cidade:"Lisboa", titulo:"Centro histórico", resumo:"Walk tour de cerca de seis horas",
  itens:[
   { h:"10h00", n:"Walk tour do Centro Histórico", o:"Cobre grande parte da cidade. Guardar energia para a noite" },
   { h:"Tarde", n:"Oceanário ou Zoológico", o:"Opcional. Depois de seis horas a pé, dificilmente acontece", mapa:"Oceanário de Lisboa" },
   { h:"19h00", n:"JNcQUOI Avenida", o:"Data a remarcar, e pedir 15 lugares", tipo:"pendente", mapa:"JNcQUOI Avenida Lisboa" }
  ]},
{ d:22, m:11, sem:"Domingo", cidade:"Lisboa → Sevilha", titulo:"Voo para a Andaluzia", resumo:"Tarde de chegada e descanso",
  itens:[
   { h:"Manhã", n:"Café e compras perto do hotel", o:"Comprar algo para comer antes do voo" },
   { h:"13h20", n:"Voo Lisboa → Sevilha", o:"Chegada às 15h20", tipo:"voo" },
   { h:"15h30", n:"Check-in Hotel Doña María", o:"A 100 metros da Catedral e da Giralda" },
   { h:"17h00", n:"Catedral, Giralda e Plaza del Triunfo", o:"Passeio a pé, sem entrar em monumento. Boas fotos de família", mapa:"Plaza del Triunfo Sevilla" },
   { h:"19h30", n:"Casa Robles", o:"Reserva confirmada", tipo:"reserva", mapa:"Restaurante Casa Robles Sevilla" }
  ]},
{ d:23, m:11, sem:"Segunda", cidade:"Sevilha", titulo:"Alcázar e Santa Cruz", resumo:"O dia mais marcante de Sevilha",
  itens:[
   { h:"09h15", n:"Fila da Puerta del León", o:"Quinze minutos antes do horário do ingresso", tipo:"ingresso" },
   { h:"09h30", n:"Real Alcázar", o:"Palácios, pátios e jardins. Combinar ponto de encontro, porque os ritmos são diferentes", tipo:"ingresso", mapa:"Real Alcázar de Sevilla" },
   { h:"12h30", n:"Bairro de Santa Cruz", o:"Caminhada curta, sem circuito longo antes do almoço", mapa:"Barrio Santa Cruz Sevilla" },
   { h:"14h00", n:"Seis Tapas Bar", o:"Reserva confirmada", tipo:"reserva" },
   { h:"15h30", n:"Descanso no hotel", o:"Com três gerações, esse intervalo não é luxo", tipo:"descanso" },
   { h:"20h00", n:"Jantar perto do hotel", o:"Sem atravessar a cidade. O hotel tem restaurante" }
  ]},
{ d:24, m:11, sem:"Terça", cidade:"Sevilha", titulo:"Plaza de España e Catedral", resumo:"Arquitetura, jardins e a Giralda",
  itens:[
   { h:"09h30", n:"Plaza de España", o:"Arcadas, azulejos e pontes. Há rampas em parte da praça", mapa:"Plaza de España Sevilla" },
   { h:"11h00", n:"Parque de María Luisa", o:"Caminhar só uma parte, com parada em banco", mapa:"Parque de María Luisa" },
   { h:"13h20", n:"La Casa de María", o:"Reserva confirmada", tipo:"reserva" },
   { h:"15h30", n:"Catedral de Sevilha e Giralda", o:"Cerca de 75 minutos. A subida à Giralda é esforço, e dá para ficar só na Catedral", mapa:"Catedral de Sevilla" },
   { h:"Noite", n:"Jantar de celebração", o:"Triana ou Pizza Alimentari. A definir", tipo:"pendente" }
  ]},
{ d:25, m:11, sem:"Quarta", cidade:"Sevilha → Málaga", titulo:"Trem e o porto", resumo:"Chegada e calçadão ao entardecer",
  itens:[
   { h:"Manhã", n:"Caminhada curta e lembranças", o:"Comprar comida para o trem. O serviço de bordo é limitado" },
   { h:"12h30", n:"Chegar na estação Santa Justa", o:"Com 15 pessoas, meia hora antes" },
   { h:"13h08", n:"Trem Sevilha → Málaga", o:"Renfe direto · 2h08 · chega 15h16", tipo:"trem" },
   { h:"15h16", n:"Check-in Hotel Ilunion Málaga", o:"Junto ao porto e à estação" },
   { h:"17h30", n:"Muelle Uno", o:"Calçadão plano, com cafés para pausa. Se o grupo estiver cansado, fazer só um trecho", mapa:"Muelle Uno Málaga" },
   { h:"Noite", n:"Jantar à vontade", o:"Sem reserva, de propósito. Dia de chegada", tipo:"descanso" }
  ]},
{ d:26, m:11, sem:"Quinta", cidade:"Málaga", titulo:"Alcazaba e centro", resumo:"O dia mais histórico de Málaga",
  itens:[
   { h:"09h30", n:"Teatro Romano", o:"Parada curta, ao lado da Alcazaba", mapa:"Teatro Romano Málaga" },
   { h:"10h00", n:"Alcazaba", o:"Cerca de 1h30. Trechos inclinados e escadas. Não combinar com a subida a Gibralfaro", mapa:"Alcazaba de Málaga" },
   { h:"12h00", n:"Catedral de Málaga", o:"A fachada e a praça já valem. Entrar é opcional", mapa:"Catedral de Málaga" },
   { h:"15h15", n:"Tatanegro", o:"Reserva confirmada", tipo:"reserva" },
   { h:"17h00", n:"Descanso no hotel", o:"Piscina, café ou nada", tipo:"descanso" },
   { h:"Noite", n:"Muelle Uno de novo, ou o hotel", o:"Prático, e com várias opções" }
  ]},
{ d:27, m:11, sem:"Sexta", cidade:"Málaga", titulo:"Picasso e o mar", resumo:"Arte de manhã, orla no fim da tarde",
  itens:[
   { h:"10h00", n:"Museo Picasso Málaga", o:"De 1h30 a 2h. Tem acesso para mobilidade reduzida, e menores de 17 anos não pagam", mapa:"Museo Picasso Málaga" },
   { h:"12h00", n:"Calle Larios e centro", o:"Caminhada leve, café e lembranças", mapa:"Calle Larios Málaga" },
   { h:"14h00", n:"Atrezzo", o:"Reserva confirmada", tipo:"reserva" },
   { h:"16h00", n:"Praia de La Malagueta", o:"Caminhar e olhar o mar. Em novembro a água já está fria", mapa:"Playa de la Malagueta" },
   { h:"Noite", n:"Soho de Málaga", o:"Cafés e alternativa à orla" }
  ]},
{ d:28, m:11, sem:"Sábado", cidade:"Málaga → Granada", titulo:"Trem e centro histórico", resumo:"Chegada cedo, dia leve",
  itens:[
   { h:"08h15", n:"Saída do hotel", o:"Check-out e conferência de malas com antecedência. O hotel é colado na estação" },
   { h:"09h20", n:"Trem Málaga → Granada", o:"Renfe direto · 1h23 · chega 10h43", tipo:"trem" },
   { h:"10h43", n:"Hotel Barceló Carmen", o:"Confirmar early check-in. Se não houver, deixar as malas na recepção", tipo:"pendente" },
   { h:"12h30", n:"Almoço no centro", o:"Los Manueles ou Verde Rama Catedral. Reservar antes", tipo:"pendente" },
   { h:"15h00", n:"Catedral e Capela Real", o:"Entrada opcional, conforme a disposição do grupo", mapa:"Catedral de Granada" },
   { h:"18h00", n:"Plaza Nueva", o:"Movimento do centro histórico, e volta ao hotel antes do jantar", mapa:"Plaza Nueva Granada" },
   { h:"Jantar", n:"La Cueva de 1900", o:"Jantar cedo, sem roteiro longo depois", tipo:"pendente" }
  ]},
{ d:29, m:11, sem:"Domingo", cidade:"Granada", titulo:"Alhambra", resumo:"O dia mais importante da viagem",
  itens:[
   { h:"08h00", n:"Chegar à Alhambra", o:"Com 15 pessoas, trinta minutos antes do horário do ingresso. Quem chega atrasado não entra", tipo:"ingresso" },
   { h:"08h30", n:"Palácios Nasridas, Alcazaba e Generalife", o:"Pisos irregulares e escadas. Planejar paradas. Carrinho de bebê não entra em algumas áreas", tipo:"ingresso", mapa:"Alhambra Granada" },
   { h:"13h00", n:"Almoço perto do hotel", o:"Não atravessar a cidade com o grupo cansado. La Cuchara de Carmela é uma opção", tipo:"pendente" },
   { h:"16h00", n:"Mirador de San Nicolás", o:"Opcional. Ir de táxi, e não subir a pé pelo Albaicín. Dividir em vários carros", mapa:"Mirador de San Nicolás" },
   { h:"19h30", n:"Jantar de despedida", o:"Chikito ou Palacio Andaluz Almona. Reservar antes", tipo:"pendente" }
  ]},
{ d:30, m:11, sem:"Segunda", cidade:"Granada → Madri", titulo:"Trem longo", resumo:"Chegada e primeiro passeio",
  itens:[
   { h:"Manhã", n:"Check-out e malas", o:"Comprar comida para o trem" },
   { h:"11h04", n:"Trem Granada → Madri", o:"Cerca de quatro horas. Conferir o horário real e se há conexão", tipo:"trem" },
   { h:"Tarde", n:"Hotel Liabeny", o:"Perto da Puerta del Sol. Deixar as malas e fazer uma pausa" },
   { h:"16h30", n:"Puerta del Sol e Plaza Mayor", o:"Luzes de Natal. Muito movimento, então combinar ponto de encontro antes de entrar na multidão", mapa:"Plaza Mayor Madrid" },
   { h:"18h00", n:"Chocolatería San Ginés", o:"Chocolate quente com churros. Programa para as crianças e pausa para os adultos", mapa:"Chocolatería San Ginés" },
   { h:"Jantar", n:"La Bola ou Casa Labra", o:"Perto do hotel. Reservar para 15 pessoas", tipo:"pendente" }
  ]},
{ d:1, m:12, sem:"Terça", cidade:"Madri", titulo:"Palácio Real e Gran Vía", resumo:"O grande destaque da cidade",
  itens:[
   { h:"09h45", n:"Palácio Real", o:"Ingresso antecipado. Pode fechar por compromisso oficial, então conferir o calendário antes", tipo:"ingresso", mapa:"Palacio Real de Madrid" },
   { h:"12h00", n:"Plaza de Oriente", o:"Fotos e caminhada curta. Se estiver frio, seguir direto para o almoço", mapa:"Plaza de Oriente Madrid" },
   { h:"13h00", n:"Almoço madrilenho", o:"La Bola, com cocido servido em etapas. Confirmar grupo e opções para crianças", tipo:"pendente" },
   { h:"15h30", n:"Descanso no hotel", o:"Antes do fim de tarde na Gran Vía", tipo:"descanso" },
   { h:"17h00", n:"Gran Vía", o:"Vitrines, café e luzes de Natal. Táxi para encurtar percurso", mapa:"Gran Vía Madrid" },
   { h:"Jantar", n:"Sobrino de Botín", o:"Muito procurado. Reservar com antecedência, ou escolher outro perto da Sol", tipo:"pendente" }
  ]},
{ d:2, m:12, sem:"Quarta", cidade:"Madri", titulo:"Prado e Retiro", resumo:"Último dia inteiro",
  itens:[
   { h:"10h00", n:"Museu do Prado", o:"Opcional. Duas horas, com obras escolhidas antes. Ingresso com horário marcado", tipo:"ingresso", mapa:"Museo del Prado" },
   { h:"12h00", n:"Parque do Retiro", o:"Até o lago e o monumento a Alfonso XII, com paradas nos bancos. Não atravessar o parque inteiro", mapa:"Parque del Retiro Madrid" },
   { h:"13h30", n:"Almoço na região", o:"Reserva antecipada é mais segura que decidir na hora", tipo:"pendente" },
   { h:"15h30", n:"Puerta de Alcalá e Cibeles", o:"Parada para fotos", mapa:"Puerta de Alcalá" },
   { h:"Noite", n:"Luzes de Natal e jantar de despedida", o:"Perto do hotel, para fechar as malas sem correria" }
  ]},
{ d:3, m:12, sem:"Quinta", cidade:"Madri → Brasília", titulo:"Volta para casa", resumo:"Dia de viagem, sem passeio",
  itens:[
   { h:"05h00", n:"Saída do hotel", o:"Com 15 pessoas em Barajas, esse é o horário realista" },
   { h:"07h40", n:"Voo Madri → Lisboa", o:"Chega às 8h05", tipo:"voo" },
   { h:"09h55", n:"Voo Lisboa → Brasília", o:"Conexão de 1h50. Confirmar bilhete único e bagagem até o destino", tipo:"voo" },
   { h:"16h45", n:"Chegada em Brasília", o:"Fim da viagem 💙" }
  ]}
];

/* ---------- DESLOCAMENTOS ---------- */
const ROTAS = [
 { data:"19 de novembro", de:"Brasília", para:"Lisboa", sai:"18h30", chega:"06h40 do dia 20", tipo:"voo",
   obs:"Voo noturno. Chegar no aeroporto às 15h30." },
 { data:"22 de novembro", de:"Lisboa", para:"Sevilha", sai:"13h20", chega:"15h20", tipo:"voo",
   obs:"Comprar algo para comer antes de embarcar." },
 { data:"25 de novembro", de:"Sevilha Santa Justa", para:"Málaga-María Zambrano", sai:"13h08", chega:"15h16", tipo:"trem",
   obs:"Renfe direto, 2h08. Levar comida: chegam depois das 15h sem ter almoçado direito." },
 { data:"28 de novembro", de:"Málaga-María Zambrano", para:"Granada", sai:"09h20", chega:"10h43", tipo:"trem",
   obs:"Renfe direto, 1h23. O hotel de Málaga é colado na estação." },
 { data:"30 de novembro", de:"Granada", para:"Madrid-Puerta de Atocha", sai:"11h04", chega:"a conferir", tipo:"trem",
   obs:"Duração informada de 3h56, e a chegada registrada no roteiro não fecha com a conta. Conferir o bilhete.", alerta:true },
 { data:"3 de dezembro", de:"Madri", para:"Lisboa", sai:"07h40", chega:"08h05", tipo:"voo",
   obs:"Saída do hotel por volta das 5h da manhã." },
 { data:"3 de dezembro", de:"Lisboa", para:"Brasília", sai:"09h55", chega:"16h45", tipo:"voo",
   obs:"Conexão de 1h50 em Lisboa. Confirmar se é bilhete único e se a bagagem vai direto.", alerta:true }
];

/* ---------- CIDADES ---------- */
const CIDADES = [
 { id:"lisboa", nome:"Lisboa", periodo:"20 a 22 de novembro", max:"17–18", min:"11–13",
   cor:"#2C6E8F",
   clima:"Sol e nuvens alternando, com chance razoável de chuva. O vento perto do Tejo derruba a sensação térmica.",
   levar:["Trench coat ou jaqueta leve","Suéter fino","Cachecol leve","Guarda-chuva compacto","Calçado para calçada de pedra"],
   destaques:["Rossio e Rua Augusta","Praça do Comércio","Chiado","Walk tour do centro histórico","Oceanário, para as crianças"],
   saber:"A calçada portuguesa é linda e escorrega quando chove. Para os mais velhos, sola de borracha faz diferença." },
 { id:"sevilha", nome:"Sevilha", periodo:"22 a 25 de novembro", max:"19–21", min:"10–12",
   cor:"#C65D3B",
   clima:"Dias agradáveis para caminhar, com bastante sol. A noite pede casaco.",
   levar:["Casaco para a noite","Calçado confortável","Óculos de sol"],
   destaques:["Real Alcázar","Catedral e Giralda","Plaza de España","Bairro de Santa Cruz","Parque de María Luisa"],
   saber:"O hotel fica a 100 metros da Catedral, então quase tudo é a pé. A Giralda tem rampas em vez de escadas, mas ainda é subida longa." },
 { id:"malaga", nome:"Málaga", periodo:"25 a 28 de novembro", max:"20–22", min:"13–15",
   cor:"#D4A017",
   clima:"A parte mais primaveril do roteiro. Dá para almoçar ao ar livre. O mar está bonito, e a água já está fria.",
   levar:["Camiseta para o dia","Jaqueta jeans ou cardigan","Protetor solar"],
   destaques:["Alcazaba","Teatro Romano","Museo Picasso","Muelle Uno","Praia de La Malagueta"],
   saber:"A Alcazaba tem trechos inclinados e escadas. Quem não quiser subir pode ficar no Teatro Romano e encontrar o grupo depois." },
 { id:"granada", nome:"Granada", periodo:"28 a 30 de novembro", max:"14–17", min:"3–7",
   cor:"#4A7C59",
   clima:"A maior mudança da viagem. Dias agradáveis e noites frias, com a Sierra Nevada nevada ao fundo.",
   levar:["Casaco quente","Cachecol","Luva fina","Calçado muito confortável"],
   destaques:["Alhambra e Generalife","Catedral e Capela Real","Plaza Nueva","Mirador de San Nicolás","Albaicín"],
   saber:"O casaco quente e o cachecol ficam por cima na mala, e não no fundo. Granada é o único lugar da viagem com mínima de um dígito." },
 { id:"madri", nome:"Madri", periodo:"30 de novembro a 3 de dezembro", max:"10–14", min:"2–6",
   cor:"#8E4585",
   clima:"Frio seco, com manhãs e noites bem geladas e possibilidade pequena de geada. A cidade já estará em clima natalino.",
   levar:["Casaco pesado","Gorro","Cachecol","Luva","Meia grossa"],
   destaques:["Palácio Real","Museu do Prado","Plaza Mayor e mercado de Natal","Parque do Retiro","Luzes da Gran Vía"],
   saber:"Em dezembro a região da Sol e da Plaza Mayor fica muito cheia. Combinar ponto de encontro antes de entrar na multidão." }
];

/* ---------- RESERVAS ---------- */
const RESERVAS = [
 { dia:"20/11", cidade:"Lisboa", nome:"Solar dos Presuntos", hora:"19h00", status:"ok", obs:"Confirmada" },
 { dia:"21/11", cidade:"Lisboa", nome:"JNcQUOI Avenida", hora:"19h00", status:"erro",
   obs:"Comprovantes marcados para 19/11, quando o grupo ainda está no Brasil. E somam 12 lugares para 15 pessoas" },
 { dia:"22/11", cidade:"Sevilha", nome:"Casa Robles", hora:"19h30", status:"ok", obs:"Confirmada" },
 { dia:"23/11", cidade:"Sevilha", nome:"Seis Tapas Bar", hora:"14h00", status:"ok", obs:"Confirmada" },
 { dia:"24/11", cidade:"Sevilha", nome:"La Casa de María", hora:"13h20", status:"ok", obs:"Confirmada" },
 { dia:"24/11", cidade:"Sevilha", nome:"Jantar de celebração", hora:"Noite", status:"falta", obs:"Triana ou Pizza Alimentari. Sem reserva" },
 { dia:"26/11", cidade:"Málaga", nome:"Tatanegro", hora:"15h15", status:"ok", obs:"Confirmada" },
 { dia:"27/11", cidade:"Málaga", nome:"Atrezzo", hora:"14h00", status:"ok", obs:"Confirmada" },
 { dia:"28/11", cidade:"Granada", nome:"Almoço no centro", hora:"12h30", status:"falta", obs:"Los Manueles ou Verde Rama" },
 { dia:"28/11", cidade:"Granada", nome:"La Cueva de 1900", hora:"Jantar", status:"falta", obs:"Sem reserva" },
 { dia:"29/11", cidade:"Granada", nome:"Almoço pós-Alhambra", hora:"13h00", status:"falta", obs:"La Cuchara de Carmela" },
 { dia:"29/11", cidade:"Granada", nome:"Jantar de despedida", hora:"19h30", status:"falta", obs:"Chikito ou Palacio Andaluz Almona" },
 { dia:"30/11", cidade:"Madri", nome:"La Bola ou Casa Labra", hora:"Jantar", status:"falta", obs:"Perto do hotel" },
 { dia:"01/12", cidade:"Madri", nome:"La Bola", hora:"13h00", status:"falta", obs:"Cocido madrileño, servido em etapas" },
 { dia:"01/12", cidade:"Madri", nome:"Sobrino de Botín", hora:"Jantar", status:"falta", obs:"Muito procurado. Pode já não haver vaga" },
 { dia:"02/12", cidade:"Madri", nome:"Almoço perto do Retiro", hora:"13h30", status:"falta", obs:"Reservar é mais seguro" },
 { dia:"02/12", cidade:"Madri", nome:"Jantar de despedida", hora:"Noite", status:"falta", obs:"Perto do Liabeny" }
];

/* ---------- INGRESSOS ---------- */
const INGRESSOS = [
 { nome:"Alhambra e Generalife", dia:"29/11, domingo", hora:"manhã", urgente:true,
   obs:"Palácios Nasridas com horário marcado, que não pode ser alterado. 300 pessoas a cada meia hora. Comprar com urgência.",
   link:"https://tickets.alhambra-patronato.es/en/" },
 { nome:"Real Alcázar de Sevilha", dia:"23/11, segunda", hora:"09h30", urgente:true,
   obs:"Ingresso online com horário marcado. Entrar pela Puerta del León, 15 minutos antes.",
   link:"https://www.alcazarsevilla.org/" },
 { nome:"Palácio Real de Madri", dia:"01/12, terça", hora:"09h45", urgente:false,
   obs:"Ingresso antecipado. Pode fechar por compromisso oficial, então conferir o calendário." },
 { nome:"Museu do Prado", dia:"02/12, quarta", hora:"10h00", urgente:false,
   obs:"Opcional. Ingresso com horário marcado recomendado pelo museu." },
 { nome:"Museo Picasso Málaga", dia:"27/11, sexta", hora:"10h00", urgente:false,
   obs:"Menores de 17 anos não pagam. Acesso para mobilidade reduzida." },
 { nome:"Alcazaba de Málaga", dia:"26/11, quinta", hora:"10h00", urgente:false,
   obs:"Ingresso na hora, sem dificuldade. Última entrada às 17h no inverno." },
 { nome:"Catedral de Sevilha e Giralda", dia:"24/11, terça", hora:"15h30", urgente:false,
   obs:"Ingresso no local." }
];

/* ---------- ESSENCIAL ---------- */
const EMERGENCIA = [
 { t:"Emergência em Portugal e Espanha", v:"112", obs:"Polícia, bombeiros e ambulância. Funciona nos dois países, de qualquer telefone, mesmo sem crédito." },
 { t:"Emergência médica, Espanha", v:"061", obs:"Ambulância" },
 { t:"Polícia nacional, Espanha", v:"091", obs:"" },
 { t:"Embaixada do Brasil em Lisboa", v:"+351 21 724 8510", obs:"Estrada das Laranjeiras, 144, Lisboa" },
 { t:"Embaixada do Brasil em Madri", v:"+34 91 700 4650", obs:"Calle Fernando el Santo, 6, Madri" },
 { t:"Consulado-Geral do Brasil em Lisboa", v:"+351 21 392 9400", obs:"Para perda de passaporte" }
];

const FRASES = [
 { pt:"Com licença", es:"Perdone", f:"per-dô-ne" },
 { pt:"Obrigado, obrigada", es:"Gracias", f:"grá-ssi-as" },
 { pt:"Somos quinze pessoas", es:"Somos quince personas", f:"sô-mos quín-ce per-sô-nas" },
 { pt:"Tem mesa para quinze?", es:"¿Tienen mesa para quince?", f:"ti-ê-nen mê-ssa pa-ra quín-ce" },
 { pt:"A conta, por favor", es:"La cuenta, por favor", f:"la cuên-ta por fa-vôr" },
 { pt:"Onde fica o banheiro?", es:"¿Dónde está el baño?", f:"dôn-de es-tá el bâ-nho" },
 { pt:"Preciso de um médico", es:"Necesito un médico", f:"ne-ce-ssí-to un mê-di-co" },
 { pt:"Pode chamar um táxi?", es:"¿Puede llamar un taxi?", f:"puê-de lha-mâr un tác-si" },
 { pt:"Sem glúten, sem lactose", es:"Sin gluten, sin lactosa", f:"sin glú-ten, sin lac-tô-ssa" },
 { pt:"Estou perdido, perdida", es:"Estoy perdido, perdida", f:"es-tôi per-dí-do" },
 { pt:"Pode falar mais devagar?", es:"¿Puede hablar más despacio?", f:"puê-de a-blâr mas des-pá-ssio" },
 { pt:"Quanto custa?", es:"¿Cuánto cuesta?", f:"cuân-to cuês-ta" }
];

const LEMBRETES = [
 "Passaporte com validade de pelo menos seis meses",
 "Cartão de vacina, se alguém precisar",
 "Seguro viagem contratado e com o número do apólice no celular de todos",
 "Remédios de uso contínuo na bagagem de mão, e não na despachada",
 "Receita médica dos remédios, em caso de fiscalização",
 "Adaptador de tomada padrão europeu",
 "Cópia do passaporte no celular e no e-mail",
 "Avisar o banco da viagem, para o cartão não bloquear",
 "Levar dinheiro em euro para o primeiro dia",
 "Carregador portátil, que o dia é longo e o celular é o mapa"
];
