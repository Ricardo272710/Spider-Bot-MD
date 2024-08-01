import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  try {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;

  const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
  const {money, joincount} = global.db.data.users[m.sender];
  const {exp, limit, level, role} = global.db.data.users[m.sender];
  const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png');
  const fkon = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': wm, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': imagen1, thumbnail: imagen1 ,sendEphemeral: true}}};
    await conn.reply(m.chat, '_𝙀𝙣 𝙗𝙧𝙚𝙫𝙚 𝙨𝙚 𝙚𝙣𝙫𝙞𝙖𝙧𝙖 𝙚𝙡 𝙢𝙚𝙣𝙪 𝙥𝙖𝙧𝙖 𝙤𝙬𝙣𝙚𝙧𝙨 . . ._', m, { contextInfo:{ forwardingScore: 2022, isForwarded: true, externalAdReply: {title: '👋 ᕼOᒪᗩ!!', body: 'sɪɢᴜᴇᴍᴇ ᴇɴ ɪɴsᴛᴀɢʀᴀᴍ', sourceUrl: global.md, thumbnail: await (await fetch(pp)).buffer() }}})
//m.react('🐶');
    await conn.sendMessage(m.chat, { react: { text: '👑', key: m.key } })
  let txt = `*¡Hola!* %name

*〔🕷️SPIDER MAN BOT 🕸️〕

╭━〔SPIDER MAN 〕━⬣
┃ACTIVO: 03.06.2024
┃   CREADORES:
┃RICARDO—ANTHONY
╰━━━━━━━━━━━⬣
╭━〔COMANDOS〕━⬣
┃.menu | .comandos
🕷️🕸️🕷️🕸️🕷️🕸️🕷️🕸️🕷️
┃PERMANENTE | MENSUAL
╰━━━━━━━━━━━⬣

╭━ VS / REGLAS / FICHA━⬣
┃🫅🌺 ➺ .Fem4
┃🫅🌺 ➺ .Fem6
┃🫅🌺 ➺ .FemInterna4
┃🫅🌺 ➺ .FemInterna6
┃🫅🌺 ➺ .vs8fem
┃🫅🌺 ➺ .vs12fem
┃🫅🌺 ➺ .scrimfem
┃🤴 ➺ .Masc4
┃🤴 ➺ .Masc6
┃🤴 ➺ .MascInterna4
┃🤴 ➺ .MascInterna6
┃👫 ➺ .Mixto4
┃👫 ➺ .Mixto6
┃👫 ➺ .MixtoInterna4
┃👫 ➺ .MixtoInterna6
┃📏 ➺ .reglasclk
┃🇬🇬 ➺ .guerra
┃📐 ➺ .apos
┃📝 ➺ .Ficha / jugador
┃👑 ➺ .Vs4
┃👑 ➺ .Vs6
┃👑 ➺ .Vs8
┃👑 ➺ .Vs12
┃👑 ➺ .Vs16
┃👑 ➺ .Vs20
╰━━━━━━━━━━━━⬣

╭━〔 TREND TIK TOK 〕⬣
┃💃🕺➺ .Trendtiktok
╰━━━━━━━━━━━⬣

╭━〔 SPAM Y EDITS 〕⬣
┃🗂️➺ .SpamComu
╰━━━━━━━━━━━⬣

╭━ MULTI JUEGOS ━⬣
┃🕷️ ➺ .Abrazo
┃🕷️ ➺ .Cumple
┃🕷️ ➺ .Follar
┃🕷️ ➺ .Huevo
┃🕷️ ➺ .Formartrio
┃🕷️ ➺ .Sorteo
┃🕷️ ➺ .Nalga
┃🕷️ ➺ .Sega
┃🕷️ ➺ .math |matemáticas
┃🕷️ ➺ .lanzar cara | cruz
┃🕷️ ➺ .ppt piedra : papel : tijera
┃🕷️ ➺ .tictactoe | ttt sala
┃🕷️ ➺ .deltictactoe | delttt
┃🕷️ ➺ .topgays
┃🕷️ ➺ .topotakus
┃🕷️ ➺ .toppajer@s
┃🕷️ ➺ .topput@s
┃🕷️ ➺ .topintegrantes
┃🕷️ ➺ .toplagrasa | topgrasa
┃🕷️ ➺ .toppanafrescos
┃🕷️ ➺ .topshiposters
┃🕷️ ➺ .toplindos | toplind@s
┃🕷️ ➺ .topfamosos/@s
┃🕷️ ➺ .topparejas
┃🕷️ ➺ .gay | gay @tag
┃🕷️ ➺ .gay2 nombre : @tag
┃🕷️ ➺ .lesbiana nombre : @tag
┃🕷️ ➺ .manca nombre : @tag
┃🕷️ ➺ .manco nombre : @tag
┃🕷️ ➺ .pajero nombre : @tag
┃🕷️ ➺ .pajera nombre : @tag
┃🕷️ ➺ .puto nombre : @tag
┃🕷️ ➺ .puta nombre : @tag
┃🕷️ ➺ .rata nombre : @tag
┃🕷️ ➺ .love nombre : @tag
┃🕷️ ➺ .doxear nombre : @tag
┃🕷️ ➺ .doxxeame
┃🕷️ ➺ .pregunta texto
┃🕷️ ➺ .apostar | slot cantidad
┃🕷️ ➺ .formarpareja
┃🕷️ ➺ .dado
┃🕷️ ➺ .verdad
┃🕷️ ➺ .reto
┃🫧➺ .anuel
┃🫧➺ .ferxxo
╰━━━━━━━━━━━⬣

╭━━━[ AJUSTES - CHATS ]━━━⬣
┃⚙️ .on : off bienvenida
┃⚙️ .on : off avisos
┃⚙️ .on : off restringir
┃⚙️ .on : off antillamar
┃⚙️ .on : off publico
┃⚙️ .on : off autovisto
┃⚙️ .on : off temporal
┃⚙️ .on : off stickers
┃⚙️ .on : off autosticker
┃⚙️ .on : off reacciones
┃⚙️ .on : off audios
┃⚙️ .on : off modocaliente
┃⚙️ .on : off antitoxicos
┃⚙️ .on : off antiver
┃⚙️ .on : off antieliminar
┃⚙️ .on : off antinternacional
┃⚙️ .on : off antienlace
┃⚙️ .on : off antienlace2
┃⚙️ .on : off antitiktok
┃⚙️ .on : off antiyoutube
┃⚙️ .on : off antitelegram
┃⚙️ .on : off antifacebook
┃⚙️ .on : off antinstagram
┃⚙️ .on : off antitwitter
┃⚙️ .on : off soloprivados
┃⚙️ .on : off sologrupos
╰━━━━━━━━━━━━⬣

╭━〔 GRUPO - RESUMEN 〕━⬣
┃🔖 ➺ .configuracion
┃🔖 ➺ .settings
┃🔖 ➺ .vergrupo
╰━━━━━━━━━━━⬣

╭━[ DESCARGAS | DOWNLOADS ]━⬣
┃🕸️ ➺ .imagen | image texto
┃🕸️ ➺ .pinterest | dlpinterest texto
┃🕸️ ➺ .wallpaper|wp texto
┃🕸️ ➺ .play | play2 texto link
┃🕸️ ➺ .tw |twdl | twitter link
┃🕸️ ➺ .facebook | fb link
┃🕸️ ➺ .verig | igstalk usuario(a)
┃🕸️ ➺ .ighistoria | igstory usuario(a)
┃🕸️ ➺ .tiktok link
┃🕸️ ➺ .tiktokimagen | ttimagen link
┃🕸️ ➺ .tiktokfoto | tiktokphoto usuario(a)
┃🕸️ ➺ .vertiktok | tiktokstalk usuario(a)
┃🕸️ ➺ .mediafire | dlmediafire link
┃🕸️ ➺ .clonarepo | gitclone link
┃🕸️ ➺ .consejo
┃🕸️ ➺ .morse codificar texto
┃🕸️ ➺ .morse decodificar morse
┃🕸️ ➺ .fraseromantica
┃🕸️ ➺ .historia
╰━━━━━━━━━━━⬣

╭━[ CHAT ANONIMO ]━⬣
┃🧵 ➺ .chatanonimo | anonimochat
┃🧵 ➺ .anonimoch
┃🧵 ➺ .start
┃🧵 ➺ .next
┃🧵 ➺ .leave
╰━━━━━━━━━━━⬣

╭━[ CONFIGURACIÓN - GRUPOS ]━⬣
┃⚪️ ➺ .add numero
┃⚫️ ➺ .sacar | ban | kick  @tag
┃🟣 ➺ .grupo abrir : cerrar
┃🔵 ➺ .group open : close
┃🟢 ➺ .daradmin | promote @tag
┃🟡 ➺ .quitar | demote @tag
┃🟠 ➺ .banchat
┃🔴 ➺ .unbanchat
┃🟤 ➺ .banuser @tag
┃⚪️ ➺ .unbanuser @tag
┃⚫️ ➺ .admins texto
┃🟣 ➺ .invocar texto
┃🔵 ➺ .tagall texto
┃🟢 ➺ .hidetag texto
┃🟡 ➺ .infogrupo | infogroup
┃🟠 ➺ .grupotiempo | grouptime Cantidad
┃🔴 ➺ .advertencia @tag
┃🟤 ➺ .deladvertencia @tag
┃⚪️ ➺ .delwarn @tag
┃⚫️ ➺ .enlace | link
┃🟣 ➺ .newnombre | nuevonombre texto
┃🔵 ➺ .newdesc | descripcion texto
┃🟢 ➺ .setwelcome | bienvenida texto
┃🟡 ➺ .setbye | despedida texto
┃🟠 ➺ .nuevoenlace | resetlink
┃🔴 ➺ .on
┃🔘 ➺ .off
╰━━━━━━━━━━━⬣

╭━━[ CONTENIDO ]━━⬣
┃🔞➺ .hornymenu
╰━━━━━━━━━━━⬣

╭━[ CONVERTIDORES ]━⬣
┃🧸 ➺ .toimg | img | jpg sticker
┃🧸 ➺ .toanime | jadianime foto
┃🧸 ➺ .tomp3 |video|nota
┃🧸 ➺ .tovn |vn|vid|audio
┃🧸 ➺ .tovideo audio
┃🧸 ➺ .tourl video, imagen
┃🧸 ➺ .toenlace  vid|img|au
┃🧸 ➺ .tts es texto
╰━━━━━━━━━━━⬣


╭━━━[ EFECTOS ]━━⬣
┃🦠 .simpcard @tag
┃🦠 .hornycard @tag
┃🦠 .lolice @tag
┃🦠 .ytcomment texto
┃🦠 .itssostupid
┃🦠 .pixelar
┃🦠 .blur
╰━━━━━━━━━━━⬣

╭━[ RANDOM | ANIME ]━⬣
┃🛣️ .chico
┃🌁 .cristianoronaldo
┃🌉 .meme
┃🌌 .meme2
┃🌃 .itzy
┃🏙️ .blackpink
┃🌇 .kpop blackpink : exo : bts
┃🎆 .lolivid
┃🎇 .loli
┃🌠 .navidad
┃🌄 .ppcouple
┃🌅 .neko
┃🏞️ .waifu
┃🎑 .akira
┃🗾 .akiyama
┃🛣️ .anna
┃🌁 .asuna
┃🌉 .ayuzawa
┃🌃 .boruto
┃🌌 .chiho
┃🏙️ .chitoge
┃🌆 .deidara
┃🌇 .erza
┃🎆 .elaina
┃🌠 .eba
┃🌄 .emilia
┃🌅 .hestia
┃🏞️ .hinata
┃🎑 .inori
┃🛣️ .isuzu
┃🕋 .itachi
┃🛤️ .itori
┃🏦 .kaga
┃🛕 .kagura
┃⛩️ .kaori
┃🏤 .keneki
┃🏣 .kotori
┃🏪 .kurumi
┃🏩 .madara
┃🏥 .mikasa
┃🏢 .miku
┃⛰️ .minato
┃⛺️ .naruto
┃🌋 .nezuko
┃🏜️ .sagiri
┃🏔️ .sasuke
┃🏝️ .sakura
┃🏖️ .cosplay
╰━━━━━━━━━━━⬣

╭━[ MODIFICAR AUDIO]⬣
┃🚁 .bass
┃🚆 .blown
┃🚑 .deep
┃🚘 .earrape
┃🚍 .fast
┃🚜 .fat
┃🚛 .nightcore
┃🚒 .reverse
┃🚌 .robot
┃🚙 .slow
┃🚕 .smooth
┃🚗 .tupai
╰━━━━━━━━━━━⬣

╭━━[ BÚSQUEDAS🔍]━⬣
┃🌎 ➺ .animeinfo texto
┃🌎 ➺ .mangainfo texto
┃🌎 ➺ .google texto
┃🌎 ➺ .googlelyrics texto
┃🌎 ➺ .letra | lirik texto
┃🌎 ➺ .ytsearch | yts texto
┃🌎 ➺ .wiki | wikipedia texto
╰━━━━━━━━━━━⬣

╭━[ HERRAMIENTAS ]━⬣
┃🛠️ .afk motivo
┃🛠️ .acortar url
┃🛠️ .calc operacion math
┃🛠️ .del 
┃🛠️ .qrcode texto
┃🛠️ .readmore texto1|texto2
┃🛠️ .spamwa #/texto/10
┃🛠️ .styletext texto
┃🛠️ .traducir texto
┃🛠️ .morse codificar texto
┃🛠️ .morse decodificar
┃🛠️ .encuesta | poll Motivo
┃🛠️ .horario
╰━━━━━━━━━━━⬣

╭━[ FUNCIÓN RPG ]━⬣
┃🥧 ➺ .pase premium
┃🍿 ➺ .pass premium
┃🥛 ➺ .listapremium
┃🥫➺ .transfer tipo cantidad 
┃🍛 ➺ .dar tipo cantidad 
┃🦪 ➺ .enviar tipo cantidad 
┃🍦 ➺ .balance
┃🍘 ➺ .cartera | wallet
┃🌰 ➺ .experiencia | exp
┃☕️ ➺ .top | lb | leaderboard
┃🍼 ➺ .rol | rango
┃🥮 ➺ .inventario | inventory
┃🍤 ➺ .aventura | adventure
┃🍚 ➺ .caza | cazar | hunt
┃🍩 ➺ .pescar | fishing
┃🍫 ➺ .animales
┃🍭 ➺ .alimentos
┃🥟 ➺ .curar | heal
┃🥓 ➺ .sell
┃🍝 ➺ .verificar | registrar
┃🥩 ➺ .perfil | profile
┃🥗 ➺ .myns
┃🍔 ➺ .unreg # de serie
┃🌭 ➺ .minardiamantes 
┃🧇 ➺ .minarcoins
┃🥖 ➺ .minarexp
┃🧀 ➺ .minar : minar2
┃🥚 ➺ .minar3
┃🧁 ➺ .reclamar | regalo 
┃🍧 ➺ .cadahora | hourly
┃🍰 ➺ .cadasemana  
┃🥪 ➺ .cadames | mes 
┃🍱 ➺ .cofre | abrircofre 
┃🍖 ➺ .trabajar | work
╰━━━━━━━━━━━⬣

╭━[ TOP EN OPTIMUS ]━⬣
┃🏆➺ .top
╰━━━━━━━━━━━⬣

╭━[ STICKERS ]━⬣
┃🌮 .sticker | s img/video
┃🍟 .sticker | s url tipo jpg
┃🥨 .emojimix 😺+😆
┃🧊 .dado
╰━━━━━━━━━━━⬣

╭━[ MODIFICAR STICKERS ]━⬣
┃🧃 .wm packname|author
┃🧃 .wm texto1|texto2
╰━━━━━━━━━━━⬣

╭━[ STICKERS DINÁMICOS ]━⬣
┃🍥 .palmaditas | pat @tag
┃🍥 .bofetada | slap @tag
┃🍥 .golpear @tag
┃🍥 .besar | kiss @tag
┃🍥 .alimentar | food @tag
╰━━━━━━━━━━━⬣

╭━[ MENU PARA PROPIETARIO/A ]━⬣
┃💎➺ .join enlace
┃💎➺ .unete enlace
┃💎➺ .dardiamantes cantidad
┃💎➺ .darxp cantidad
┃💎➺ .darcoins cantidad
┃💎➺ .addprem | userpremium @tag cantidad
┃💎➺ .addprem2 | userpremium2 @tag cantidad
┃💎➺ .addprem3 | userpremium3 @tag cantidad
┃💎➺ .addprem4 | userpremium4 @tag cantidad
┃💎➺ .idioma | language
┃💎➺ .cajafuerte
┃💎➺ .comunicar | broadcastall | bc texto
┃💎➺ .broadcastchats | bcc texto
┃💎➺ .comunicarpv texto
┃💎➺ .broadcastgc texto
┃💎➺ .comunicargrupos texto
┃💎➺ .borrartmp | cleartmp
┃💎➺ .delexp @tag
┃💎➺ .delcoins @tag
┃💎➺ .deldiamantes @tag
┃💎➺ .reiniciar | restart
┃💎➺ .ctualizar | update
┃💎➺ .addprem | +prem @tag
┃💎➺ .delprem | -prem @tag
┃💎➺ .listapremium | listprem
┃💎➺ .añadirdiamantes @tag cantidad
┃💎➺ .añadirxp @tag cantidad
┃💎➺ .añadircoins @tag cantidad
╰━━━━━━━━━━⬣*`;
   await conn.sendMessage(m.chat, {text: txt.trim(), mentions: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": '乂 𝙷 𝙰 𝙲 𝙷 𝙸 𝙺 𝙾 - 𝙱 𝙾 𝚃 - 𝙼 𝙳 乂', "containsAutoReply": true, "mediaType": 1, "thumbnail": [imagen6,imagen1,imagen4].getRandom(), "mediaUrl": global.gp1, "sourceUrl": global.gp1}}}, {quoted: fkon});
 // m.react('🎮');
  } catch {
    conn.reply(m.chat, '*¡Hola!* %name

*〔🕷️SPIDER MAN BOT 🕸️〕

╭━〔SPIDER MAN 〕━⬣
┃ACTIVO: 03.06.2024
┃   CREADORES:
┃RICARDO—ANTHONY
╰━━━━━━━━━━━⬣
╭━〔COMANDOS〕━⬣
┃.menu | .comandos
🕷️🕸️🕷️🕸️🕷️🕸️🕷️🕸️🕷️
┃PERMANENTE | MENSUAL
╰━━━━━━━━━━━⬣

╭━ VS / REGLAS / FICHA━⬣
┃🫅🌺 ➺ .Fem4
┃🫅🌺 ➺ .Fem6
┃🫅🌺 ➺ .FemInterna4
┃🫅🌺 ➺ .FemInterna6
┃🫅🌺 ➺ .vs8fem
┃🫅🌺 ➺ .vs12fem
┃🫅🌺 ➺ .scrimfem
┃🤴 ➺ .Masc4
┃🤴 ➺ .Masc6
┃🤴 ➺ .MascInterna4
┃🤴 ➺ .MascInterna6
┃👫 ➺ .Mixto4
┃👫 ➺ .Mixto6
┃👫 ➺ .MixtoInterna4
┃👫 ➺ .MixtoInterna6
┃📏 ➺ .reglasclk
┃🇬🇬 ➺ .guerra
┃📐 ➺ .apos
┃📝 ➺ .Ficha / jugador
┃👑 ➺ .Vs4
┃👑 ➺ .Vs6
┃👑 ➺ .Vs8
┃👑 ➺ .Vs12
┃👑 ➺ .Vs16
┃👑 ➺ .Vs20
╰━━━━━━━━━━━━⬣

╭━〔 TREND TIK TOK 〕⬣
┃💃🕺➺ .Trendtiktok
╰━━━━━━━━━━━⬣

╭━〔 SPAM Y EDITS 〕⬣
┃🗂️➺ .SpamComu
╰━━━━━━━━━━━⬣

╭━ MULTI JUEGOS ━⬣
┃🕷️ ➺ .Abrazo
┃🕷️ ➺ .Cumple
┃🕷️ ➺ .Follar
┃🕷️ ➺ .Huevo
┃🕷️ ➺ .Formartrio
┃🕷️ ➺ .Sorteo
┃🕷️ ➺ .Nalga
┃🕷️ ➺ .Sega
┃🕷️ ➺ .math |matemáticas
┃🕷️ ➺ .lanzar cara | cruz
┃🕷️ ➺ .ppt piedra : papel : tijera
┃🕷️ ➺ .tictactoe | ttt sala
┃🕷️ ➺ .deltictactoe | delttt
┃🕷️ ➺ .topgays
┃🕷️ ➺ .topotakus
┃🕷️ ➺ .toppajer@s
┃🕷️ ➺ .topput@s
┃🕷️ ➺ .topintegrantes
┃🕷️ ➺ .toplagrasa | topgrasa
┃🕷️ ➺ .toppanafrescos
┃🕷️ ➺ .topshiposters
┃🕷️ ➺ .toplindos | toplind@s
┃🕷️ ➺ .topfamosos/@s
┃🕷️ ➺ .topparejas
┃🕷️ ➺ .gay | gay @tag
┃🕷️ ➺ .gay2 nombre : @tag
┃🕷️ ➺ .lesbiana nombre : @tag
┃🕷️ ➺ .manca nombre : @tag
┃🕷️ ➺ .manco nombre : @tag
┃🕷️ ➺ .pajero nombre : @tag
┃🕷️ ➺ .pajera nombre : @tag
┃🕷️ ➺ .puto nombre : @tag
┃🕷️ ➺ .puta nombre : @tag
┃🕷️ ➺ .rata nombre : @tag
┃🕷️ ➺ .love nombre : @tag
┃🕷️ ➺ .doxear nombre : @tag
┃🕷️ ➺ .doxxeame
┃🕷️ ➺ .pregunta texto
┃🕷️ ➺ .apostar | slot cantidad
┃🕷️ ➺ .formarpareja
┃🕷️ ➺ .dado
┃🕷️ ➺ .verdad
┃🕷️ ➺ .reto
┃🫧➺ .anuel
┃🫧➺ .ferxxo
╰━━━━━━━━━━━⬣

╭━━━[ AJUSTES - CHATS ]━━━⬣
┃⚙️ .on : off bienvenida
┃⚙️ .on : off avisos
┃⚙️ .on : off restringir
┃⚙️ .on : off antillamar
┃⚙️ .on : off publico
┃⚙️ .on : off autovisto
┃⚙️ .on : off temporal
┃⚙️ .on : off stickers
┃⚙️ .on : off autosticker
┃⚙️ .on : off reacciones
┃⚙️ .on : off audios
┃⚙️ .on : off modocaliente
┃⚙️ .on : off antitoxicos
┃⚙️ .on : off antiver
┃⚙️ .on : off antieliminar
┃⚙️ .on : off antinternacional
┃⚙️ .on : off antienlace
┃⚙️ .on : off antienlace2
┃⚙️ .on : off antitiktok
┃⚙️ .on : off antiyoutube
┃⚙️ .on : off antitelegram
┃⚙️ .on : off antifacebook
┃⚙️ .on : off antinstagram
┃⚙️ .on : off antitwitter
┃⚙️ .on : off soloprivados
┃⚙️ .on : off sologrupos
╰━━━━━━━━━━━━⬣

╭━〔 GRUPO - RESUMEN 〕━⬣
┃🔖 ➺ .configuracion
┃🔖 ➺ .settings
┃🔖 ➺ .vergrupo
╰━━━━━━━━━━━⬣

╭━[ DESCARGAS | DOWNLOADS ]━⬣
┃🕸️ ➺ .imagen | image texto
┃🕸️ ➺ .pinterest | dlpinterest texto
┃🕸️ ➺ .wallpaper|wp texto
┃🕸️ ➺ .play | play2 texto link
┃🕸️ ➺ .tw |twdl | twitter link
┃🕸️ ➺ .facebook | fb link
┃🕸️ ➺ .verig | igstalk usuario(a)
┃🕸️ ➺ .ighistoria | igstory usuario(a)
┃🕸️ ➺ .tiktok link
┃🕸️ ➺ .tiktokimagen | ttimagen link
┃🕸️ ➺ .tiktokfoto | tiktokphoto usuario(a)
┃🕸️ ➺ .vertiktok | tiktokstalk usuario(a)
┃🕸️ ➺ .mediafire | dlmediafire link
┃🕸️ ➺ .clonarepo | gitclone link
┃🕸️ ➺ .consejo
┃🕸️ ➺ .morse codificar texto
┃🕸️ ➺ .morse decodificar morse
┃🕸️ ➺ .fraseromantica
┃🕸️ ➺ .historia
╰━━━━━━━━━━━⬣

╭━[ CHAT ANONIMO ]━⬣
┃🧵 ➺ .chatanonimo | anonimochat
┃🧵 ➺ .anonimoch
┃🧵 ➺ .start
┃🧵 ➺ .next
┃🧵 ➺ .leave
╰━━━━━━━━━━━⬣

╭━[ CONFIGURACIÓN - GRUPOS ]━⬣
┃⚪️ ➺ .add numero
┃⚫️ ➺ .sacar | ban | kick  @tag
┃🟣 ➺ .grupo abrir : cerrar
┃🔵 ➺ .group open : close
┃🟢 ➺ .daradmin | promote @tag
┃🟡 ➺ .quitar | demote @tag
┃🟠 ➺ .banchat
┃🔴 ➺ .unbanchat
┃🟤 ➺ .banuser @tag
┃⚪️ ➺ .unbanuser @tag
┃⚫️ ➺ .admins texto
┃🟣 ➺ .invocar texto
┃🔵 ➺ .tagall texto
┃🟢 ➺ .hidetag texto
┃🟡 ➺ .infogrupo | infogroup
┃🟠 ➺ .grupotiempo | grouptime Cantidad
┃🔴 ➺ .advertencia @tag
┃🟤 ➺ .deladvertencia @tag
┃⚪️ ➺ .delwarn @tag
┃⚫️ ➺ .enlace | link
┃🟣 ➺ .newnombre | nuevonombre texto
┃🔵 ➺ .newdesc | descripcion texto
┃🟢 ➺ .setwelcome | bienvenida texto
┃🟡 ➺ .setbye | despedida texto
┃🟠 ➺ .nuevoenlace | resetlink
┃🔴 ➺ .on
┃🔘 ➺ .off
╰━━━━━━━━━━━⬣

╭━━[ CONTENIDO ]━━⬣
┃🔞➺ .hornymenu
╰━━━━━━━━━━━⬣

╭━[ CONVERTIDORES ]━⬣
┃🧸 ➺ .toimg | img | jpg sticker
┃🧸 ➺ .toanime | jadianime foto
┃🧸 ➺ .tomp3 |video|nota
┃🧸 ➺ .tovn |vn|vid|audio
┃🧸 ➺ .tovideo audio
┃🧸 ➺ .tourl video, imagen
┃🧸 ➺ .toenlace  vid|img|au
┃🧸 ➺ .tts es texto
╰━━━━━━━━━━━⬣


╭━━━[ EFECTOS ]━━⬣
┃🦠 .simpcard @tag
┃🦠 .hornycard @tag
┃🦠 .lolice @tag
┃🦠 .ytcomment texto
┃🦠 .itssostupid
┃🦠 .pixelar
┃🦠 .blur
╰━━━━━━━━━━━⬣

╭━[ RANDOM | ANIME ]━⬣
┃🛣️ .chico
┃🌁 .cristianoronaldo
┃🌉 .meme
┃🌌 .meme2
┃🌃 .itzy
┃🏙️ .blackpink
┃🌇 .kpop blackpink : exo : bts
┃🎆 .lolivid
┃🎇 .loli
┃🌠 .navidad
┃🌄 .ppcouple
┃🌅 .neko
┃🏞️ .waifu
┃🎑 .akira
┃🗾 .akiyama
┃🛣️ .anna
┃🌁 .asuna
┃🌉 .ayuzawa
┃🌃 .boruto
┃🌌 .chiho
┃🏙️ .chitoge
┃🌆 .deidara
┃🌇 .erza
┃🎆 .elaina
┃🌠 .eba
┃🌄 .emilia
┃🌅 .hestia
┃🏞️ .hinata
┃🎑 .inori
┃🛣️ .isuzu
┃🕋 .itachi
┃🛤️ .itori
┃🏦 .kaga
┃🛕 .kagura
┃⛩️ .kaori
┃🏤 .keneki
┃🏣 .kotori
┃🏪 .kurumi
┃🏩 .madara
┃🏥 .mikasa
┃🏢 .miku
┃⛰️ .minato
┃⛺️ .naruto
┃🌋 .nezuko
┃🏜️ .sagiri
┃🏔️ .sasuke
┃🏝️ .sakura
┃🏖️ .cosplay
╰━━━━━━━━━━━⬣

╭━[ MODIFICAR AUDIO]⬣
┃🚁 .bass
┃🚆 .blown
┃🚑 .deep
┃🚘 .earrape
┃🚍 .fast
┃🚜 .fat
┃🚛 .nightcore
┃🚒 .reverse
┃🚌 .robot
┃🚙 .slow
┃🚕 .smooth
┃🚗 .tupai
╰━━━━━━━━━━━⬣

╭━━[ BÚSQUEDAS🔍]━⬣
┃🌎 ➺ .animeinfo texto
┃🌎 ➺ .mangainfo texto
┃🌎 ➺ .google texto
┃🌎 ➺ .googlelyrics texto
┃🌎 ➺ .letra | lirik texto
┃🌎 ➺ .ytsearch | yts texto
┃🌎 ➺ .wiki | wikipedia texto
╰━━━━━━━━━━━⬣

╭━[ HERRAMIENTAS ]━⬣
┃🛠️ .afk motivo
┃🛠️ .acortar url
┃🛠️ .calc operacion math
┃🛠️ .del 
┃🛠️ .qrcode texto
┃🛠️ .readmore texto1|texto2
┃🛠️ .spamwa #/texto/10
┃🛠️ .styletext texto
┃🛠️ .traducir texto
┃🛠️ .morse codificar texto
┃🛠️ .morse decodificar
┃🛠️ .encuesta | poll Motivo
┃🛠️ .horario
╰━━━━━━━━━━━⬣

╭━[ FUNCIÓN RPG ]━⬣
┃🥧 ➺ .pase premium
┃🍿 ➺ .pass premium
┃🥛 ➺ .listapremium
┃🥫➺ .transfer tipo cantidad 
┃🍛 ➺ .dar tipo cantidad 
┃🦪 ➺ .enviar tipo cantidad 
┃🍦 ➺ .balance
┃🍘 ➺ .cartera | wallet
┃🌰 ➺ .experiencia | exp
┃☕️ ➺ .top | lb | leaderboard
┃🍼 ➺ .rol | rango
┃🥮 ➺ .inventario | inventory
┃🍤 ➺ .aventura | adventure
┃🍚 ➺ .caza | cazar | hunt
┃🍩 ➺ .pescar | fishing
┃🍫 ➺ .animales
┃🍭 ➺ .alimentos
┃🥟 ➺ .curar | heal
┃🥓 ➺ .sell
┃🍝 ➺ .verificar | registrar
┃🥩 ➺ .perfil | profile
┃🥗 ➺ .myns
┃🍔 ➺ .unreg # de serie
┃🌭 ➺ .minardiamantes 
┃🧇 ➺ .minarcoins
┃🥖 ➺ .minarexp
┃🧀 ➺ .minar : minar2
┃🥚 ➺ .minar3
┃🧁 ➺ .reclamar | regalo 
┃🍧 ➺ .cadahora | hourly
┃🍰 ➺ .cadasemana  
┃🥪 ➺ .cadames | mes 
┃🍱 ➺ .cofre | abrircofre 
┃🍖 ➺ .trabajar | work
╰━━━━━━━━━━━⬣

╭━[ TOP EN OPTIMUS ]━⬣
┃🏆➺ .top
╰━━━━━━━━━━━⬣

╭━[ STICKERS ]━⬣
┃🌮 .sticker | s img/video
┃🍟 .sticker | s url tipo jpg
┃🥨 .emojimix 😺+😆
┃🧊 .dado
╰━━━━━━━━━━━⬣

╭━[ MODIFICAR STICKERS ]━⬣
┃🧃 .wm packname|author
┃🧃 .wm texto1|texto2
╰━━━━━━━━━━━⬣

╭━[ STICKERS DINÁMICOS ]━⬣
┃🍥 .palmaditas | pat @tag
┃🍥 .bofetada | slap @tag
┃🍥 .golpear @tag
┃🍥 .besar | kiss @tag
┃🍥 .alimentar | food @tag
╰━━━━━━━━━━━⬣

╭━[ MENU PARA PROPIETARIO/A ]━⬣
┃💎➺ .join enlace
┃💎➺ .unete enlace
┃💎➺ .dardiamantes cantidad
┃💎➺ .darxp cantidad
┃💎➺ .darcoins cantidad
┃💎➺ .addprem | userpremium @tag cantidad
┃💎➺ .addprem2 | userpremium2 @tag cantidad
┃💎➺ .addprem3 | userpremium3 @tag cantidad
┃💎➺ .addprem4 | userpremium4 @tag cantidad
┃💎➺ .idioma | language
┃💎➺ .cajafuerte
┃💎➺ .comunicar | broadcastall | bc texto
┃💎➺ .broadcastchats | bcc texto
┃💎➺ .comunicarpv texto
┃💎➺ .broadcastgc texto
┃💎➺ .comunicargrupos texto
┃💎➺ .borrartmp | cleartmp
┃💎➺ .delexp @tag
┃💎➺ .delcoins @tag
┃💎➺ .deldiamantes @tag
┃💎➺ .reiniciar | restart
┃💎➺ .ctualizar | update
┃💎➺ .addprem | +prem @tag
┃💎➺ .delprem | -prem @tag
┃💎➺ .listapremium | listprem
┃💎➺ .añadirdiamantes @tag cantidad
┃💎➺ .añadirxp @tag cantidad
┃💎➺ .añadircoins @tag cantidad
╰━━━━━━━━━━⬣*', m);
  }
};
handler.help = ['menu'];
handler.tags = ['menu'];
handler.command = /^(menu|allmenu)$/i;
export default handler;