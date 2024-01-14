module.exports.config = {
  name: "prefix",	
  version: "2.0.0", 
  hasPermssion: 0,
  credits: "jordanofficial",
  description: "prefix", 
  commandCategory: "noprefix",
  usages: "prefix",
  cooldowns: 0
};
module.exports.languages = {
  "vi": {},
  "en": {}
};

function random(arr) {
var rd = arr[Math.floor(Math.random() * arr.length)];
    return rd;
        };
module.exports.handleEvent = async function ({ api, event, Threads }) {
  const axios = require("axios")
  const picture = (await axios.get(`https://imgur.com/m4ruygS.jpg`, { responseType: "stream"})).data
      const moment = require("moment-timezone");
var gio = moment.tz("Asia/karachi").format("HH:mm:ss || D/MM/YYYY");
  var thu =
moment.tz('Asia/karachi').format('dddd');
  if (thu == 'Sunday') thu = 'Sunday'
  if (thu == 'Monday') thu = 'Monday'
  if (thu == 'Tuesday') thu = 'Tuesday'
  if (thu == 'Wednesday') thu = 'Wednesday'
  if (thu == "Thursday") thu = 'Thursday'
  if (thu == 'Friday') thu = 'Friday'
  if (thu == 'Saturday') thu = 'Saturday'
  var { threadID, messageID, body } = event,{ PREFIX } = global.config;
  let threadSetting = global.data.threadData.get(threadID) || {};
  let prefix = threadSetting.PREFIX || PREFIX;
  const icon = [""];
  if (body.toLowerCase() == "prefix" || (body.toLowerCase() == "Prefix") ||  (body.toLowerCase() == "quên prefix r") || (body.toLowerCase() == "qlam")) {
       api.sendMessage({body: `     ====『 𝗣𝗥𝗘𝗙𝗜𝗫 』====\n━━━━━━━━━━━━━━━━\n☆ 𝗣𝗿𝗲𝗳𝗶𝘅 𝗕𝗼𝘅: ${prefix}\n☆ 𝗣𝗿𝗲𝗳𝗶𝘅 𝗦𝘆𝘀𝗧𝗲𝗺: ${global.config.PREFIX}\n☆𝗧𝗼𝗧𝗮𝗹 𝗖𝗺𝗱𝘀 ${client.commands.size}\n☆ 𝗧𝗼𝗧𝗮𝗹 𝗨𝘀𝗲𝗿𝘀: ${global.data.allUserID.length}\n☆ 𝗧𝗼𝗧𝗮𝗹 𝗚𝗿𝗼𝘂𝗽𝘀: ${global.data.allThreadID.length}\n☆ 𝗧𝗶𝗠𝗲: ${gio} (${thu})\n☆ 𝗥𝗲𝗮𝗰𝗧  "❤" 𝗧𝗵𝗶𝘀 𝗠𝗲𝘀𝘀𝗮𝗴𝗲 𝗧𝗼 𝗦𝗲𝗲 𝗠𝗼𝗿𝗲 𝗗𝗲𝗧𝗮𝗶𝗹. `, attachment: (await axios.get((await axios.get(`https://qlam-api.trieutaitan3.repl.co/images/phongcanhanime`)).data.data, {
                    responseType: 'stream'
                })).data}, event.threadID, (err, info) => {
    global.client.handleReaction.push({
      name: this.config.name, 
      messageID: info.messageID,
      author: event.senderID,
    })
      },event.messageID);
  }
 }
//ko api thì attachment: (picture)}, event.threadID, event.messageID);
module.exports.run = async ({ api, event, args, Threads }) => {
                          }
module.exports.handleReaction = async ({ event, api, handleReaction, Currencies, Users}) => {
  const time = process.uptime(),
    h = Math.floor(time / (60 * 60)),
    p = Math.floor((time % (60 * 60)) / 60),
    s = Math.floor(time % 60);
  const axios = global.nodemodule["axios"];
const fs = global.nodemodule["fs-extra"];
const { threadID, messageID, userID } = event;
if (event.userID != handleReaction.author) return;
if (event.reaction != "❤") return;
 api.unsendMessage(handleReaction.messageID);
        //var msg = `===== [ Information BoT ] =====\n\n💜 Present ${global.config.BOTNAME} Was online ${h} Hour ${p} Minute ${s} second\n⚙️ The current version of the bot: ${global.config.version}\n🔗 Commands: ${client.commands.size}\n🖨️ Current: ${client.events.size} Show Event\n👥 Total Users: ${global.data.allUserID.length}\n🏘️ Total Group: ${global.data.allThreadID.length}\n💓 𝗣𝗿𝗲𝗳𝗶𝘅 𝗯𝗼𝘁: ${global.config.PREFIX}`
    var msg =` ✦=== [  𝐄𝐗𝐀𝐌𝐏𝐋𝐄 ] ===✦
      ━━━━━━━━━━━━━━━━━━
『🌸』 *𝘏𝘦𝘭𝘱: ➳ 𝗦𝗲𝗲 𝗔𝗹𝗹 𝗖𝗺𝗱𝘀\n
『💞』 *𝘔𝘶𝘴𝘪𝘤: ➳ 𝗘𝗻𝗷𝗼𝘆 𝗠𝘂𝘀𝗶𝗰 (𝗔𝘂𝗱𝗶𝗼)\n
『👤』 *𝘪𝘯𝘧𝘰: ➳ 𝗦𝗲𝗲 𝗢𝘄𝗻𝗲𝗿 & 𝗕𝗼𝗧 𝗗𝗲𝗧𝗮𝗶𝗹𝘀\n
『🌷』 *𝘝𝘪𝘥𝘦𝘰: ➳𝗘𝗻𝗷𝗼𝘆 𝗠𝘂𝘀𝗶𝗰 (𝗩𝗶𝗱𝗲𝗼)\n
『💕』 *𝘗𝘢𝘪𝘳: ➳ 𝗣𝗮𝗶𝗿𝗶𝗻𝗴 𝗪𝗶𝗧𝗵 𝗮 𝗖𝗼𝘂𝗽𝗹𝗲\n
『💝』 *𝘌𝘱𝘩𝘰𝘵𝘰: 𝗠𝗮𝗸𝗲 𝗟𝗼𝗴𝗼𝘀 \n
『💍』 *𝘔𝘺𝘓𝘰𝘷𝘦: ➳ 𝗦𝗲𝗲 𝗬𝗼𝘂𝗿 𝗖𝗼𝘂𝗽𝗹𝗲 (𝗙𝘂𝗻)\n
『🕊️ 』* 𝘚𝘩𝘰𝘯𝘢: ➳ 𝗔𝘀𝗸 𝗔𝗻𝘆 𝗤𝘂𝗲𝘀𝗧𝗶𝗼𝗻 (𝗔𝗶)`
        return api.sendMessage({body: msg, attachment: (await axios.get((await axios.get(`https://qlam-api.trieutaitan3.repl.co/images/phongcanhanime`)).data.data,  {
                    responseType: 'stream'
                })).data},event.threadID); 
    }