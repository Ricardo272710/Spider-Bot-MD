//import db from '../lib/database.js'
import { promises } from 'fs'
import { join } from 'path'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
//import { plugins } from '../lib/plugins.js'
let tags = {
  'main': 'ACERCA DE',
  'bebot': 'SUB BOTS',
  'game': 'JUEGOS',
  'econ': 'NIVEL & ECONOMIA',
  'rg': 'REGISTRO',
  'sticker': 'STICKER',
  'img': 'IMAGEN',
  'maker': 'MAKER',
  'prem': 'PREMIUM',
  'group': 'GRUPO',
  'nable': 'EN/DISABLE OPCIONES', 
  'nime': 'ANIME',
  'rnime': 'ANIME REACCION',
  'dl': 'DESCARGAS',
  'tools': 'TOOLS',
  'fun': 'FUN',
  'cmd': 'DATABASE',
  'nsfw': 'NSFW +18',
  'ansfw': 'NSFW ANIME', 
  'owner': 'OWNER', 
  'advanced': 'AVANZADO',
}
const defaultMenu = {
  before: `*¡Hola!* %name

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
╰━━━━━━━━━━⬣*`.trimStart(),
  header: '',
  body: '',
  footer: '',
  after: `
`,
}
let handler = async (m, { conn, usedPrefix: _p, __dirname }) => {
  try {
    let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
    let { exp, diamond, level, role } = global.db.data.users[m.sender]
    let { min, xp, max } = xpRange(level, global.multiplier)
    let name = await conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'es'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        diamond: plugin.diamond,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    for (let plugin of help)
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!(tag in tags) && tag) tags[tag] = tag
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == conn.user.jid ? '' : `⭐ Powered by FG98 https://wa.me/${conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%isdiamond/g, menu.diamond ? '(ⓓ)' : '')
                .replace(/%isPremium/g, menu.premium ? '(Ⓟ)' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    let text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      me: conn.getName(conn.user.jid),
      sbot: (conn.user.jid == global.conn.user.jid ? '' : `\n▢ ✨ *Sub-Bot de:*\nwa.me/${global.conn.user.jid.split`@`[0]}`), 
      npmname: _package.name,
      npmdesc: _package.description,
      version: _package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
      level, diamond, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    
    let pp = './src/fg_logo.jpg'

    /*conn.sendButton(m.chat, text.trim(), `▢ DyLux  ┃ ᴮᴼᵀ\n${mssg.ig}`, pp, [
      ['ꨄ︎ Apoyar', `${_p}donate`],
      ['⏍ Info', `${_p}botinfo`],
      ['⌬ Grupos', `${_p}gpdylux`]
    ], m, rpl)*/
    conn.sendFile(m.chat, pp, 'menu.jpg', text.trim(), m, null, rcanal)
  
    m.react('🕷️') 
    
  } catch (e) {
    conn.reply(m.chat, '❎ Lo sentimos, el menú tiene un error', m)
    throw e
  }
}
//handler.help = ['help']
//handler.tags = ['main']
handler.command = ['menu', 'help', 'menú'] 
handler.register = false

export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [d, 'd ', h, 'h ', m, 'm '].map(v => v.toString().padStart(2, 0)).join('')
}
