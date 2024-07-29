import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk' 
import { fileURLToPath } from 'url' 

global.owner = [
  ['593979133620', '👑Creador👑', true],
  ['595972157130']
] //Numeros de owner 

global.mods = ['593979133620'] 
global.prems = ['', '593979133620']
global.APIs = { // API Prefix
  // name: 'https://website' 
  nrtm: 'https://fg-nrtm.ddns.net',
  fgmods: 'https://api.fgmods.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.fgmods.xyz': 'm2XBbNvz' //-- 100 de límite diario --- Regístrese en https://api.fgmods.xyz/
}

// Sticker WM
global.packname = 'Spider-Bot-MD' 
global.author = 'Ricardo' 

//--info FG
global.botName = 'Spider-Bot-MD'
global.fgig = '' 
global.fgsc = '' 
global.fgyt = ''
global.fgpyp = ''
global.fglog = 'https://telegra.ph/file/29d5f57fa33caf1b6a1f6.jpg' 

//--- Grupos WA
global.id_canal = '' //-ID de canal de WhatsApp
global.fgcanal = ''
global.bgp = ''
global.bgp2 = ''
global.bgp3 = ''

global.wait = '⌛ _Cargando..._\n*▬▬▬▭*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
