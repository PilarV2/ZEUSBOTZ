const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let handler = async (m, { conn, command, usedPrefix, text }) => {
let fs = require('fs')
let name = conn.getName(m.sender)
let lmafo = `
Hi ${name}
`
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           hydratedContentText: lmafo,           
           hydratedFooterText: wm,
           hydratedButtons: [{
             urlButton: {
               displayText: 'MY GITHUB',
               url: 'github.com/PilarV2'
             }

           },
               {
             urlButton: {
               displayText: 'REST API',
               url: 'https://api-pilardev.herokuapp.com/docs',
             }
            
           },
           {
             quickReplyButton: {
               displayText: 'DASHBOARD',
               id: '.menu',
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
handler.command = /^(tes)$/i

module.exports = handler