module.exports.config = {
  name: "tiktok",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Joshua Sy",
  description: "tiktok",
  usages: "[link]",
  commandCategory: "Other",
    cooldowns: 0,
};
module.exports.run = async function({ api, event, args }) {
    const axios = require("axios")
    const request = require("request")
    const fs = require("fs-extra")
    let anup = args.join(" ");
    const res = await axios.get(`https://anupapi-2.0xanupx0.repl.co/api/download/tiktok?url=${anup}&apikey=candy`);
    var data = res.data.result.video.no_watermark_hd;
    var nick = res.data.result.author.nickname;
    let a = `${res.data.result.video.no_watermark_hd}`;

    let imgs1 = (await axios.get(`${a}`, {
        responseType: 'arraybuffer'
    })).data;
    fs.writeFileSync(__dirname + "/cache/tik.mp4", Buffer.from(imgs1, "utf-8"));

    var aliya = [];
    aliya.push(fs.createReadStream(__dirname + "/cache/tik.mp4"));
    return api.sendMessage({body: `Successfully Download\n𝗖𝗿𝗲𝗱𝗶𝘁: 𒄬• 𝐅𝐚𝐫𝐞𝐁𝐢𝐢𝐰 ː͢» ⸙`,attachment: aliya
    }, event.threadID);
}