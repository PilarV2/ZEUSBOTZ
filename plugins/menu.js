const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let handler = async (m, { conn, command, usedPrefix, text }) => {
let fs = require('fs')
let name = conn.getName(m.sender)
let bilek =`Hai Kak ${name}`
let esce = `Saya Bot Whatsapp Yang Berbasis Nodejs, Bot Ini Memiliki Banyak Fitur Yang Menarik Dan Keren, Silahkan Tekan Tombol Di Bawah Ini Untuk Memulai Perintah`
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           hydratedContentText: bilek,           
           locationMessage: { 
           jpegThumbnail: await conn.resize('https://telegra.ph/file/7eb283b5bb2024663c406.jpg', 280, 150) },
           hydratedFooterText: esce,
           hydratedButtons: [{
             urlButton: {
               displayText: 'ᴍy ᴡᴇʙꜱɪᴛᴇ',
               url: 'pilarv2.github.io'
             }

           },
               {
             quickReplyButton: {
               displayText: 'ᴅᴀꜱʜʙᴏᴀʀᴅ',
               id: '.m',
             }

           }]
         }
       }
     }), { userJid: m.sender, quoted: m });
    //conn.reply(m.chat, text.trim(), m)
    return await conn.relayMessage(
         m.chat,
         template.message,
         { messageId: template.key.id }
     )
}
handler.command = /^(menu|help)$/i

module.exports = handler