const axios = require("axios");

module.exports.config = {
	name: "sim",
	version: "1",
	hasPermission: 0,
	credits: "error",
	description: "Simsimi",
	usages: "Message",
	commandCategory: "...",
	cooldowns: 0
};

module.exports.run = async ({ api, event, args }) => {
	try {
		let message = args.join(" ");
		if (!message) {
			return api.sendMessage(`𝐉𝐢𝐢 𝐌𝐞𝐫𝐢 𝐉𝐚𝐚𝐧 𝐇𝐮𝐤𝐚𝐦 𝐊𝐫𝐫𝐨 ٩(◕‿◕｡)۶`, event.threadID, event.messageID);
		}

		const response = await axios.get(`https://amir-2.security-10.repl.co/api/sim?message=${message}`);
		const respond = response.data.message;
		api.sendMessage(respond, event.threadID, event.messageID);
	} catch (error) {
		console.error("An error occurred:", error);
		api.sendMessage("Oops! Something went wrong.", event.threadID, event.messageID);
	}
};