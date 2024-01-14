module.exports.config = {
  name: "otherbot",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Deku",
  description: "ban otherbot",
  commandCategory: "...",
  cooldowns: 0
};
module.exports.handleEvent = async ({
	event: o,
	api: t,
	Users: n
}) => {
	var {
		threadID: e,
		messageID: a,
		body: b,
		senderID: s,
		reason: d
	} = o;
	const i = require("moment-timezone").tz("Asia/Kolkata").format("HH:MM:ss L");
	if (s == t.getCurrentUserID()) return;
	let anup = await n.getNameUser(o.senderID);
	var h = {
		body: `Name: ${anup}\nKo Add krna Tha Tu Mujhe Q add kiya 🤬😡 \nBot UID: ${s}`
	};
    //Add curse words without capital letters
	["Other Bot"].forEach((a => { 
		
        const s = o.senderID;
    let haha = o.body;
	if (haha.includes("Ara ara~") || haha.includes("Command not found") || haha.includes("The command you used") || haha.includes("Uy may lumipad") || haha.includes("Unsend this message") || haha.includes("You are unable to use bot") || haha.includes("»» NOTICE «« Update user nicknames") || haha.includes("just removed 1 Attachments") || haha.includes("message removedcontent") || haha.includes("The current preset is") || haha.includes("This is my prefix") || haha.includes("just removed 1 attachment.") || haha.includes("Unable to re-add members")) {
			modules = "[ BOT BAN ]", console.log(anup, modules, a);
			const o = n .getData(s).data || {};
			n.setData(s, {
				data: o
			}), o.banned = 1, o.reason = a || null, o.dateAdded = i, global.data.userBanned.set(s, {
				reason: o.reason,
				dateAdded: o.dateAdded
			}), t.sendMessage(h, e, (() => {
				const o = global.config.ADMINBOT;
				var n = o;
				for (var n of o) t.sendMessage(`Name: ${anup}\nDected as Banned 🚫 🤬😡 \nBot UID: ${s}`, n)
			}))
		} 
	})) 
}, module.exports.run = async ({
	event: o,
	api: t
}) => t.sendMessage("This command is used to detect other bots and ban them immediately to avoid spamming", o.threadID);