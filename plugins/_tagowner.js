let fs = require('fs')
let fetch = require('node-fetch')
let handler = async (m) => {
let lmafo = {
  key : {
  remoteJid: 'status@broadcast',
  participant : '0@s.whatsapp.net'
  },
  message: {
  documentMessage: {
  title: 'Napa Tag Owner?',
  jpegThumbnail: await (await fetch('https://telegra.ph/file/3e5e8cf41e1e7f41716af.jpg')).buffer(),}}}
await conn.sendMessage(m.chat, { sticker: fs.readFileSync('./src/tag.webp') }, {
      quoted: lmafo,
      mimetype: 'image/webp',
      ephemeralExpiration: 86400
    })
                        
}
handler.customPrefix = /^(@6289625556161)$/i
handler.command = new RegExp

module.exports = handler