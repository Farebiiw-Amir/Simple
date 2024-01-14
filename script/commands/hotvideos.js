module.exports.config = {
    name: "Hotvideos",
    version: "1.0.0",
    hasPermision: 0,
    credit: "M Amir",
    description: "random hotvideos verse",
     commandCategory: "random-vid",
    cooldowns: 0,
};
module.exports.run = async function({api, event, args, utils, Users, Threads}) {
  api.sendMessage("Please wait 10 seconds...", event.threadID);
  const axios = require("axios")
  const request = require("request")
  const fs = require("fs-extra") 
  var link = ["https://i.imgur.com/Mt9xcNc.mp4", "https://i.imgur.com/I5yL8yX.mp4", "https://i.imgur.com/vayM1MD.mp4", "https://i.imgur.com/INzKUbj.mp4", "https://i.imgur.com/UkjgASK.mp4", "https://i.imgur.com/rdvdxy1.mp4", "https://i.imgur.com/SzR3uTB.mp4", "https://i.imgur.com/XvqZxdD.mp4", "https://i.imgur.com/oPa6BKa.mp4", "https://i.imgur.com/f0YpFHX.mp4", "https://i.imgur.com/yIPcien.mp4", "https://i.imgur.com/N56jJna.mp4", "https://i.imgur.com/iSNlwGw.mp4", "https://i.imgur.com/hprCoeX.mp4", "https://i.imgur.com/7zfQ8AF.mp4", "https://i.imgur.com/Na9Jk3w.mp4", "https://i.imgur.com/LM8L1k6.mp4", "https://i.imgur.com/tOzpFaz.mp4", "https://i.imgur.com/ypu8Z4S.mp4", "https://i.imgur.com/7krn3Tq.mp4", "https://i.imgur.com/50lG61c.mp4", "https://i.imgur.com/Jk85WWX.mp4"];
var amir = [`𝗖𝗿𝗲𝗱𝗶𝘁𝘀:  𓆩⃝𝐀𝐌𝐈𝐑𓆩๏𓆪`];
  var juswa1 = amir[Math.floor(Math.random() * amir.length)];
  var callback = () => api.sendMessage({body:`${juswa1}`,attachment: fs.createReadStream(__dirname + "/cache/zac.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/zac.mp4")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/zac.mp4")).on("close",() => callback());
   };