const axios = require('axios');

module.exports.config = {
  name: 'fbdownload',
  version: '1.1.3',
  hasPermssion: 0,
  credits: 'Amir',
  description: 'Facebook Downloader',
  commandCategory: 'Downloader',
  usages: '',
  cooldowns: 0,
};

module.exports.run = async function({ api, event, args }) {
    const amir = args.join(" ");
    if (!amir) {
        return api.sendMessage("Please Enter a Facebook Video Link.", event.threadID, event.messageID);
    }

    // Access the senderID and sender's name from the event object
    const senderID = event.senderID;
    const senderName = event.senderName;

    api.sendMessage(` Downloading.. ${amir}`, event.threadID, async (error, messageInfo) => {
        if (error) {
            console.error(error);
            return;
        }

        try {
            // Include senderID in the API request
            const res = await axios.get(`https://toxinum.xyz/api/v1/videofb?url=${amir}`);
            const data = res.data.result;
            const response = res.data.url2;

            if (response) {
                const attachmentStream = await axios.get(response, { responseType: 'stream' });
                const g = senderName || 'Download Successful \nCredits: 𒄬• 𝐅𝐚𝐫𝐞𝐁𝐢𝐢𝐰 ː͢» ⸙';
                api.sendMessage({
                    body: g,                          attachment: attachmentStream.data
                }, event.threadID, messageInfo.messageID);
            } else {
                const g = senderName || ' ';
                api.sendMessage(g, event.threadID, messageInfo.messageID);
            }
        } catch (error) {
            console.error(error);
            api.sendMessage(error.message, event.threadID, messageInfo.messageID);
        }
    });
};
