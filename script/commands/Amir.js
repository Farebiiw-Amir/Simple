module.exports.config = {
	name: "Mr Amir",
	version: "1.1.1",
	hasPermission: 0,
	credits: "John Lester",
	description: "Bot React",
	commandCategory: "No Prefix",
	cooldowns: 0,
};
const fs = require("fs");
const moment = require("moment-timezone");
  const time = moment.tz("Asia/Karachi").format("hh:mm:s");
  const hours = moment.tz("Asia/Karachi").format("hh");
module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
      if(react.includes("AmiR") || 
react.includes("AMIR") || react.includes("AMir") || react.includes("AMiR") || react.includes("Farebii") || react.includes("Farebi") || react.includes("𒄬• 𝐅𝐚𝐫𝐞𝐁𝐢𝐢'𝐰 ː͢» ⸙") || react.includes("@𒄬• 𝐅𝐚𝐫𝐞𝐁𝐢𝐢'𝐰 ː͢» ⸙")) {
      var heart = {
				body: `「 𝐂𝐀𝐋𝐋𝐈𝐍𝐆 𝐎𝐖𝐍𝐄𝐑 」\n           🅂🄾🅁🅁🅈\n𒄬• 𝐅𝐚𝐫𝐞𝐁𝐢𝐢'𝐰 ː͢» ⸙ 𝐢𝐬 𝐂𝐮𝐫𝐫𝐞𝐧𝐭𝐥𝐲 𝐁𝐮𝐬𝐲.!!!\n\n⌚𝐓𝐈𝐌𝐄: ${time}\n\n★᭄𝗖𝗿𝗲𝗱𝗶𝘁'𝘀 : 𓆩⃝𝐀𝐌𝐈𝐑𓆩๏𓆪`,attachment: fs.createReadStream(__dirname + `/noprefix/prefix.jpg`)
			}
			api.sendMessage(heart, threadID, messageID);
    api.setMessageReaction("😘", event.messageID, (err) => {}, true)
                }
        }
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
  