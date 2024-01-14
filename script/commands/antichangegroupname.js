const fs = require("fs"),
      path = __dirname + "/bot/antibox.json";

module.exports.config = {
	name: "antichangegroupname",
	version: "beta",
	hasPermssion: 2,
	credits: "Dc-Nam",
	description: "Ban renaming the group!",
	commandCategory: "System administrator",
	usages: "antinamebox on/off",
	cooldowns: 0
};
module.exports.languages = {
  "vi": {},
  "en": {}
};
module.exports.onLoad = () => {   
  if (!fs.existsSync(path)) fs.writeFileSync(path, JSON.stringify({}));
};

module.exports.handleEvent = async function ({ api, event, Threads, permssion }) {
const { threadID, messageID, senderID, isGroup, author } = event;
  
  if (isGroup == true) {
  let data = JSON.parse(fs.readFileSync(path))
  let dataThread = (await Threads.getData(threadID)).threadInfo||{};
  const threadName = dataThread.threadName;
   if (!data[threadID]) {
    data[threadID] = {
  namebox: threadName,
  status: true
}
fs.writeFileSync(path, JSON.stringify(data, null, 2));
    }
    if (data[threadID].namebox == null || threadName == undefined || threadName == null) return
     
    else if (threadName != data[threadID].namebox && data[threadID].status == false) {
    data[threadID].namebox = threadName
    fs.writeFileSync(path, JSON.stringify(data, null, 2));
  }
 
 if (threadName != data[threadID].namebox && data[threadID].status == true) {
   return api.setTitle(
     data[threadID].namebox,
       threadID, () => {
         api.sendMessage(
      ``,
       threadID)
       });
      }
    }
  };

module.exports.run = async function ({ api, event, permssion, Threads }) {
  const { threadID, messageID } = event;
 const permission = ["100000856538718"];
             if (!permission.includes(event.senderID)) return api.sendMessage("⚡ You are NoT Amir Cheee..!! Fuck You 🥵", threadID);
  let data = JSON.parse(fs.readFileSync(path))
  let dataThread = (await Threads.getData(threadID)).threadInfo
  const threadName = dataThread.threadName;

    if (data[threadID].status == false) {
       data[threadID] = {
         namebox: threadName,
         status: true
       }
    } else data[threadID].status = false
         fs.writeFileSync(path, JSON.stringify(data, null, 2));
          api.sendMessage(
        `✅ Already ${data[threadID].status == true ? `turn on` : `turn off`} group renaming forbidden mode!`,
     threadID)
    } 
function PREFIX(t) {
var dataThread = global.data.threadData.get(t) || {}
  return dataThread.PREFIX || global.config.PREFIX
                     }