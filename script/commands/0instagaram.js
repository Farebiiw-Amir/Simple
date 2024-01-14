module.exports.config = {
  name: "instagram",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "𒄬• 𝐅𝐚𝐫𝐞𝐁𝐢𝐢𝐰 ː͢» ⸙",
  description: "instagram video downloader",
  usages: "[link]",
  commandCategory: "Other",
    cooldowns: 0,
};
module.exports.run = async function({ api, event, args }) {
    const axios = require("axios")
    const request = require("request")
    const fs = require("fs-extra")
    let amir = args.join(" ");
    const res = await axios.get(`https://nehaapi5.0xanupx0.repl.co/instagram/downloadpost?url=${amir}`);
    var data = res.data.video_url;
    var username = res.data.owner.username;
    var view = res.data.video_view_count;
    var duration = res.data.video_duration;
    let a = `${res.data.video_url}`;

    let imgs1 = (await axios.get(`${a}`, {
        responseType: 'arraybuffer'
    })).data;
    fs.writeFileSync(__dirname + "/amir/ins.mp4", Buffer.from(imgs1, "utf-8"));

    var farebi = [];
    farebi.push(fs.createReadStream(__dirname + "/amir/ins.mp4"));
    return api.sendMessage({body: `Successfully Download \n\n𝗨𝘀𝗲𝗿𝗻𝗮𝗺𝗲: ${username}\n𝗩𝗶𝗲𝘄𝘀: ${view}\n𝗗𝘂𝗿𝗮𝘁𝗶𝗼𝗻: ${duration}\n𝗖𝗿𝗲𝗱𝗶𝘁: 𒄬• 𝐅𝐚𝐫𝐞𝐁𝐢𝐢𝐰 ː͢» ⸙`,attachment: farebi
    }, event.threadID);
}


      