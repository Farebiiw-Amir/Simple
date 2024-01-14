module.exports.config = {
    name: "sexvideos",
    version: "1.0.0",
    hasPermssion: 0,
    credit: "M Amir",
    description: "Sexvideos - Not for KiDs ",
     commandCategory: "random-vids",
    cooldowns: 10,
};
module.exports.run = async function({api, event, args, utils, Users, Threads}) {
  api.sendMessage("Please wait 10 to 15 seconds...", event.threadID);
  const axios = require("axios")
  const request = require("request")
  const fs = require("fs-extra")
  var link = ["https://i.imgur.com/D4qMMjt.mp4", "https://i.imgur.com/TQ39RmU.mp4", "https://i.imgur.com/wUJMBrT.mp4", "https://i.imgur.com/UeMPTDu.mp4", "https://i.imgur.com/R3C8Dyh.mp4", "https://i.imgur.com/pXoFXij.mp4", "https://i.imgur.com/HgYMwCY.mp4", "https://i.imgur.com/tdbIG4T.mp4", "https://i.imgur.com/SnmEiZE.mp4", "https://i.imgur.com/vTR0xMN.mp4", "https://i.imgur.com/ua1oGS6.mp4", "https://i.imgur.com/EHqB7dm.mp4", "https://i.imgur.com/oBKMQhp.mp4", "https://i.imgur.com/G7OYSuS.mp4", "https://i.imgur.com/zd0NUBR.mp4", "https://i.imgur.com/1Ktvs0L.mp4", "https://i.imgur.com/LqydZT9.mp4", "https://i.imgur.com/S4FygVV.mp4", "https://i.imgur.com/2UgtFpV.mp4", "https://i.imgur.com/9BuTo2M.mp4", "https://i.imgur.com/giH7cEQ.mp4", "https://i.imgur.com/uUs8vqO.mp4", "https://i.imgur.com/bShhlnK.mp4", "https://i.imgur.com/aTWDueg.mp4", "https://i.imgur.com/9IPwhSo.mp4", "https://i.imgur.com/WwlVPi2.mp4", "https://i.imgur.com/T8J65ZC.mp4", "https://i.imgur.com/aaS148I.mp4", "https://i.imgur.com/sEVicF5.mp4", "https://i.imgur.com/HVnMbgN.mp4", "https://i.imgur.com/DFTZf9B.mp4", "https://i.imgur.com/aTWDueg.mp4", "https://i.imgur.com/asuLLVm.mp4", "https://i.imgur.com/YGHvwLz.mp4", "https://i.imgur.com/9EWJvYE.mp4", "https://i.imgur.com/9IPwhSo.mp4"];
var amir = [`☆✦𝐊𝐢𝐃𝐬 𝐒𝐭𝐚𝐲 𝐀𝐰𝐚𝐲✦☆\n𝗖𝗿𝗲𝗱𝗶𝘁𝘀:  𓆩⃝𝐀𝐌𝐈𝐑𓆩๏𓆪`];
  var juswa1 = amir[Math.floor(Math.random() * amir.length)];
  var callback = () => api.sendMessage({body:`${juswa1}`,attachment: fs.createReadStream(__dirname + "/cache/amir.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/amir.mp4")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/amir.mp4")).on("close",() => callback());
   };