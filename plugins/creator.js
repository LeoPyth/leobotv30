import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)


if (command == 'owner') {
 let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:WhatsApp;Saya Owner ðŽð§ ð ðŪððð;Bot;;Md\nFN:Saya Owner ðŽð§ ð ðŪððð Bot WhatsApp, Md\nNICKNAME:ð Owner ðŽð§ ð ðŪððð Bot\nORG:Wudy\nTITLE:soft\nitem1.TEL;waid=6287824899711:+62 878-2489-9711\nitem1.X-ABLabel:ð Nomor Owner\nitem2.URL:https://s.id/Cerdasin62\nitem2.X-ABLabel:ðŽ More\nitem3.EMAIL;type=INTERNET:LeoPyth@gmail.com\nitem3.X-ABLabel:ð Mail Owner  ð ðŪððð ððžtð\nitem4.ADR:;;ðŪðĐ Indonesia;;;;\nitem4.X-ABADR:ðŽ More\nitem4.X-ABLabel:ð Lokasi Saya\nBDAY;value=date:ð 13 January 2001\nEND:VCARD`
const tag_own = await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: fakes })
let caption = `ð Hai *${name} @${who.split("@")[0]}*, Nih Owner *${conn.user.name}* kak`
    await conn.sendButton(m.chat, caption, author, null, [['ð Sapa Owner', 'Huuu']], m, { quoted: tag_own, mentions: conn.parseMention(caption) })
}
if (command == 'pengembang') {
  let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;${author};;;\nFN:${author}\nORG:${author}\nTITLE:\nitem1.TEL;waid=6287824899711:+62 878-2489-9711\nitem1.X-ABLabel:${author}\nX-WA-BIZ-DESCRIPTION:${htjava} Nih pengembang ku kack yg mengaktifkan aq.\nX-WA-BIZ-NAME:${author}\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: fakes })
}
if (command == 'creator') {
  try {
  const sentMsg = await conn.sendContactArray(m.chat, [
    [`${nomorown}`, `${await conn.getName(nomorown+'@s.whatsapp.net')}`, `ð Developer Bot `, `ðŦ Don't call me ðĨš`, `maxxybotz@gmail.com`, `ðŪðĐ Indonesia`, `ð https://MaxxyBotz.github.io/`, `ðĪ Gada pawang nih senggol dong ð`],
    [`${conn.user.jid.split('@')[0]}`, `${await conn.getName(conn.user.jid)}`, `ðĨ Bot WhatsApp ðĢ`, `ðĩ Don't spam/call me ðĒ`, `Nothing`, `ðŪðĐ Indonesia`, `ð https://s.id/Cerdasin62/`, `ðĪ Hanya bot biasa yang kadang suka eror âš`]
  ], fakes)
  await conn.reply(m.chat, `Halo kak @${m.sender.split(`@`)[0]} itu nomor ownerku , jangan di spam ya kað`, sentMsg, {mentions: [m.sender]})
  } catch {
  const sentMsg = await conn.sendContact(m.chat, `${nomorown}`, `${await conn.getName(nomorown+'@s.whatsapp.net')}`, m)
  await conn.reply(m.chat, `Halo kak @${m.sender.split(`@`)[0]} itu nomor team developerku, jangan di apa-apain ya kakð`, sentMsg, {mentions: [m.sender]})
  }
  }
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|pengembang|creator)$/i

export default handler
