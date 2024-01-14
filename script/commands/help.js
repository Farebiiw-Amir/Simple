module.exports.config = {
	name: "help",
	version: "1.0.2",
	hasPermssion: 0,
	credits: "Leiam Nash",
	description: "commands list",
	commandCategory: "system",
	usages: "module name",
	cooldowns: 1,
	envConfig: {
		autoUnsend: false,
		delayUnsend: 300
	}
};

module.exports.languages = {
	"en": {
		"moduleInfo": "「  %1  」\n\n☆ ➜ 𝐔𝐬𝐚𝐠𝐞𝐬: %3\n\n☆ ➜ 𝐂𝐚𝐭𝐞𝐠𝐨𝐫𝐲: %4\n\n☆ ➜ 𝐖𝐚𝐢𝐓 𝐓𝐢𝐌𝐞: %5 𝐒𝐜𝐧𝐝𝐬(s)\n\n☆ ➜ 𝐏𝐞𝐫𝐌𝐢𝐒𝐬𝐢𝐨𝐧: %6\n\n☆ ➜ 𝐃𝐞𝐬𝐂𝐫𝐢𝐩𝐓𝐢𝐨𝐧: %2\n\n» Module code by 𒄬• 𝐅𝐚𝐫𝐞𝐁𝐢𝐢𝐰 ː͢» ⸙",
		"helpList": '[ There are %1 commands on this bot, Use: "%2help nameCommand" to know how to use! ]',
		"user": "User",
        "adminGroup": "Admin group",
        "adminBot": "Admin bot"
	}
};

module.exports.handleEvent = function ({ api, event, getText }) {
	const { commands } = global.client;
	const { threadID, messageID, body } = event;

	if (!body || typeof body == "undefined" || body.indexOf("help") != 0) return;
	const splitBody = body.slice(body.indexOf("help")).trim().split(/\s+/);
	if (splitBody.length == 1 || !commands.has(splitBody[1].toLowerCase())) return;
	const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
	const command = commands.get(splitBody[1].toLowerCase());
	const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
	return api.sendMessage(getText("moduleInfo", command.config.name, command.config.description, `${prefix}${command.config.name} ${(command.config.usages) ? command.config.usages : ""}`, command.config.commandCategory, command.config.cooldowns, ((command.config.hasPermssion == 0) ? getText("user") : (command.config.hasPermssion == 1) ? getText("adminGroup") : getText("adminBot")), command.config.credits), threadID, messageID);
}

module.exports. run = function({ api, event, args, getText }) {
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Karachi").format("DD/MM/YYYY || hh:mm:s");
  const hours = moment.tz("Asia/Karachi").format("hh");
  const axios = require("axios");
  const request = require('request');
  const fs = require("fs-extra");
	const { commands } = global.client;
	const { threadID, messageID } = event;
	const command = commands.get((args[0] || "").toLowerCase());
	const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
	const { autoUnsend, delayUnsend } = global.configModule[this.config.name];
	const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
if (args[0] == "all") {
    const command = commands.values();
    var group = [], msg = "";
    for (const commandConfig of command) {
      if (!group.some(item => item.group.toLowerCase() == commandConfig.config.commandCategory.toLowerCase())) group.push({ group: commandConfig.config.commandCategory.toLowerCase(), cmds: [commandConfig.config.name] });
      else group.find(item => item.group.toLowerCase() == commandConfig.config.commandCategory.toLowerCase()).cmds.push(commandConfig.config.name);
    }
    group.forEach(commandGroup => msg += `☂︎ ${commandGroup.group.charAt(0).toUpperCase() + commandGroup.group.slice(1)} \n${commandGroup.cmds.join(' • ')}\n\n`);
  
    return axios.get('https://apikanna.maduka9.repl.co').then(res => {
    let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
      let admID = "100000856538718";
      
      api.getUserInfo(parseInt(admID), (err, data) => {
      if(err){ return console.log(err)}
     var obj = Object.keys(data);
    var firstname = data[obj].name.replace("@", "");
    let callback = function () {
        api.sendMessage({ body:`𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗟𝗶𝘀𝘁\n\n` + msg + `\nSpamming the bot are strictly prohibited\n\nTotal Commands: ${commands.size}\n\nFor All Cmds Type help2\n\nDeveloper:\nF4R3BII AMIR`, mentions: [{
                           tag: firstname,
                           id: admID,
                           fromIndex: 0,
                 }],
            attachment: fs.createReadStream(__dirname + `/cache/472.${ext}`)
        }, event.threadID, (err, info) => {
        fs.unlinkSync(__dirname + `/cache/472.${ext}`);
        if (autoUnsend == false) {
            setTimeout(() => { 
                return api.unsendMessage(info.messageID);
            }, delayUnsend * 1000);
        }
        else return;
    }, event.messageID);
        }
         request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/472.${ext}`)).on("close", callback);
     })
      })
};
	if (!command) {
		const arrayInfo = [];
		const page = parseInt(args[0]) || 1;
    const numberOfOnePage = 9999;
    let i = 0;
    let msg = "";
    
    for (var [name, value] of (commands)) {
      name += ``;
      arrayInfo.push(name);
    }

    arrayInfo.sort((a, b) => a.data - b.data);
    
const first = numberOfOnePage * page - numberOfOnePage;
    i = first;
    const helpView = arrayInfo.slice(first, first + numberOfOnePage);

    
    for (let cmds of helpView) msg += `✶➱ ${++i} 💙 ${cmds}\n`;
    
    const siu = `「 𓆩⃝𝐒𝐇𝐎𝐍𝐀𓆩๏𓆪 𝐂𝐌𝐃𝐒 」`;
    
 const text = `\n╔═══❖•° °•❖═══╗\n◆ 𝐏𝐀𝐆𝐄 ╠${page}/${Math.ceil(arrayInfo.length/numberOfOnePage)}      ◆\n╚═══❖•° °•❖═══╝\n\n  ╔══❖•° °•❖══╗\n     ≛ 𝐌𝐑 𝐀𝐌𝐈𝐑 ≛ \n  ╚══❖•° °•❖══╝\n${time}`;
    var link = [
"https://i.imgur.com/Hmo3lIP.png", 
"https://i.imgur.com/eLBlLPX.png", "https://i.imgur.com/TxndOXv.png"
      ]
     var callback = () => api.sendMessage({ body: siu + "\n\n" + msg  + text, attachment: fs.createReadStream(__dirname + "/cache/leiamnashelp.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/leiamnashelp.jpg"), event.messageID);
    return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname + "/cache/leiamnashelp.jpg")).on("close", () => callback());
	} 
const leiamname = getText("moduleInfo", command.config.name, command.config.description, `${(command.config.usages) ? command.config.usages : ""}`, command.config.commandCategory, command.config.cooldowns, ((command.config.hasPermssion == 0) ? getText("user") : (command.config.hasPermssion == 1) ? getText("adminGroup") : getText("adminBot")), command.config.credits);

  var link = [ "https://i.imgur.com/Hmo3lIP.png"
  ]
    var callback = () => api.sendMessage({ body: leiamname, attachment: fs.createReadStream(__dirname + "/cache/leiamnashelp.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/leiamnashelp.png"), event.messageID);
    return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname + "/cache/leiamnashelp.png")).on("close", () => callback());
};
