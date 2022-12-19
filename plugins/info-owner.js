let handler = async (m, { conn, usedPrefix }) => {
let name = '👑 Cris Creador 👑'    
let numero = '5215591478197'
let numeroformato = '+52 55 91478197'
let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;${name};;;\nFN:${name}\nORG:${name}\nTITLE:\nitem1.TEL;waid=${numero}:${numeroformato}\nitem1.X-ABLabel:${name}\nX-WA-BIZ-DESCRIPTION:\nX-WA-BIZ-NAME:${name}\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: name, contacts: [{ vcard }] }}, {quoted: m})}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(owner|creator|creador|propietario)$/i
export default handler
