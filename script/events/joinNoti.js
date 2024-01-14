module.exports.config = {
	name: "join",
	eventType: ["log:subscribe"],
	version: "1.0.1",
	credits: "Grey",
	description: "Notify bots or people entering the group",
	dependencies: {
		"fs-extra": ""
	}
};

module.exports.run = async function({ api, event }) {
	var backround = ["https://imgur.com/HxBMAqf", "https://i.imgur.com/1EZ2851.jpeg", "https://i.imgur.com/NIdTqE5.jpeg", "https://i.imgur.com/r6SrVHx.jpeg", "https://i.imgur.com/EqyzQ4b.jpeg"];
	const request = require("request");
	const turl = require("turl");
	const fs = global.nodemodule["fs-extra"];
	const { threadID } = event;
	
	if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
		api.changeNickname(`》 ${global.config.PREFIX} 《 ❃ ➠${(!global.config.BOTNAME) ? " " : global.config.BOTNAME}`, threadID, api.getCurrentUserID());
		return api.sendMessage(`Connected successfully!\nThank you for using this bot, have fun using it\n\nUsage: ${global.config.PREFIX}help\nUse ${global.config.PREFIX}callad if there is an error to the Bot the bot admin will try to fix this as soon as possible.`, threadID);
  api.sendMessage({sticker: 958510944241784}, threadID);
	}
	else {
		try {
			let { threadName, participantIDs, imageSrc } = await api.getThreadInfo(threadID);
			const threadData = global.data.threadData.get(parseInt(threadID)) || {};		
			var mentions = [], nameArray = [], memLength = [], i = 0;
			let addedParticipants1 = event.logMessageData.addedParticipants;
            var bq = backround[Math.floor(Math.random() * backround.length)];
			const threadPicPath = __dirname + "/cache/threadpic.png";
request(imageSrc).pipe(fs.createWriteStream(threadPicPath)).on('close', async () => {
				console.log('WELCOME!');			
				let shortenedImageUrl = await turl.shorten(imageSrc);
				for (let newParticipant of addedParticipants1) {
					let userID = newParticipant.userFbId
					api.getUserInfo(parseInt(userID), (err, data) => {
						if(err){ return console.log(err)}
						var obj = Object.keys(data);
						var userName = data[obj].name.replace("@", "");
						if (userID !== api.getCurrentUserID()) {  
							nameArray.push(userName);
							mentions.push({ tag: userName, id: userID, fromIndex: 0 });
							memLength.push(participantIDs.length - i++);
							memLength.sort((a, b) => a - b);
							(typeof threadData.customJoin == "undefined") ? msg = `「 𝐖𝐄𝐋𝐂𝐎𝐌𝐄 ♥︎‿♥︎  」\n\n𝗛𝗲𝗹𝗹𝗼 {uName} 𝗬𝗼𝘂 𝗮𝗿𝗲 𝘁𝗵𝗲 {soThanhVien} 𝗠𝗲𝗺𝗯𝗲𝗿 𝗼𝗳 {threadName} 𝗽𝗹𝗲𝗮𝘀𝗲 𝗲𝗻𝗷𝗼𝘆 💚\n\n★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀 : 𓆩⃝𝐀𝐌𝐈𝐑𓆩๏𓆪` : msg = threadData.customJoin;
							msg = msg
								.replace(/\{uName}/g, nameArray.join(', '))
								.replace(/\{type}/g, (memLength.length > 1) ?  'you' : 'Friend')
								.replace(/\{soThanhVien}/g, memLength.join(', '))
								.replace(/\{threadName}/g, threadName);
							
							var random1 = [`https://free-api.ainz-sama101.repl.co/canvas/welcome?uid=${userID}&name=${userName}&bg=https://i.imgur.com/1EZ2851.jpeg&namegc=${threadName}&member=${participantIDs.length}`];  
							let callback = function () {
								return api.sendMessage({body: msg, attachment: fs.createReadStream(__dirname + `/cache/come.jpg`), mentions
										}, event.threadID, () => {
											fs.unlinkSync(__dirname + `/cache/come.jpg`);
										});
							};

							request(encodeURI(random1)).pipe(fs.createWriteStream(__dirname + `/cache/come.jpg`)).on("close", callback);
						}
					});
				}
			});
		} catch (err) {
			return console.log("ERROR: "+err);
		}
	}
}
