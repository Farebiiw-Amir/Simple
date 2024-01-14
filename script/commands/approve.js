module.exports.config = {
  name: "approve",
  version: "1.0.2",
  hasPermssion: 2,
  credits: "DungUwU",
  description: "approve list/del/pending",
  commandCategory: "Box",
  cooldowns: 5
};


const dataPath = __dirname + "/cache/approvedThreads.json";
const pendingPath = __dirname + "/cache/pendingThreads.json";
const fs = require("fs");

module.exports.onLoad = () => {
  if (!fs.existsSync(dataPath)) fs.writeFileSync(dataPath, JSON.stringify([]));
  if (!fs.existsSync(pendingPath)) fs.writeFileSync(pendingPath, JSON.stringify([]));
}

module.exports.run = async ({ event, api, args }) => {
  const { threadID, messageID, senderID } = event;
  let data = JSON.parse(fs.readFileSync(dataPath));
  let pending = JSON.parse(fs.readFileSync(pendingPath));
  let msg = "";
  let idBox = (args[0]) ? args[0] : threadID;
  if (args[0] == "list") {
    msg = "LIST OF APPROVED BOXES! ";
    let count = 0;
    for (e of data) {
      msg += `\n${count += 1}. ID: ${e}`;
    }
    api.sendMessage(msg, threadID, messageID);
  }
  else if (args[0] == "del") {
    idBox = (args[1]) ? args[1] : event.threadID;
    if (isNaN(parseInt(idBox))) return api.sendMessage("Not a number.", threadID, messageID);
    if (!data.includes(idBox)) return api.sendMessage("The box was not approved before! use [Prefix]request", threadID, messageID);
    api.sendMessage(`⚠️Box ${idBox} has been removed from bot permission list and needs admin approval again⛔ `, threadID, () => {
      if (!pending.includes(idBox)) pending.push(idBox);
      data.splice(data.indexOf(idBox), 1);
      fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
      fs.writeFileSync(pendingPath, JSON.stringify(pending, null, 2));
    }, messageID)
  }
  else if (args[0] == "pending") {
    msg = "LIST OF BOXES WAITING FOR APPROVAL!";
    let count = 0;
    for (e of pending) {
      let name = (await api.getThreadInfo(e)).name || "Group Chat";
      msg += `\n${count += 1}. ${name}\nID: ${e}`;
    }
    api.sendMessage(msg, threadID, messageID);
  }
  else if (isNaN(parseInt(idBox))) api.sendMessage("Id you entered is invalid ", threadID, messageID);
  else if (data.includes(idBox)) api.sendMessage(`Thread Box ID ${idBox} has been approved in advance! `, threadID, messageID);
  else api.sendMessage(`    「  𝐀𝐏𝐏𝐑𝐎𝐕𝐄𝐃  」\n\n𝗬𝗼𝘂𝗿 𝗿𝗲𝗾𝘂𝗲𝘀𝘁 𝗵𝗮𝘀 𝗯𝗲𝗲𝗻 𝗮𝗰𝗰𝗲𝗽𝘁𝗲𝗱 𝗮𝗻𝗱 𝗻𝗼𝘄 𝘆𝗼𝘂𝗿 𝗴𝗿𝗼𝘂𝗽 𝗶𝘀 𝗮𝗽𝗽𝗿𝗼𝘃𝗲𝗱..!!!\n\n𝐓𝐡𝐚𝐧𝐤𝐬 𝐅𝐨𝐫 𝐂𝐡𝐨𝐨𝐬𝐢𝐧𝐠 𓆩⃝𝐒𝐇𝐎𝐍𝐀𓆩๏𓆪\n\n★᭄𝗖𝗿𝗲𝗱𝗶𝘁'𝘀 : 𓆩⃝𝐀𝐌𝐈𝐑𓆩๏𓆪
      `, idBox, (error, info) => {
    if (error) return api.sendMessage("An error has occurred, making sure that the ID you entered is valid and the bot is in the box! ", threadID, messageID);
    else {
      data.push(idBox);
      pending.splice(pending.indexOf(idBox), 1);
      fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
      fs.writeFileSync(pendingPath, JSON.stringify(pending, null, 2));
      api.sendMessage(`» ✅Successfully AppRoved\n${idBox}\n\nنصیب کی لکھی گئی اذیتیں سہے بغیر ہم مر نہیں سکتے ...🙂💔`, threadID, messageID);
    }
  });
  }