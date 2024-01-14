module.exports.config = {
    name: "Sadvideos",
    version: "1.0.0",
    hasPermision: 0,
    credit: "Mr Amir",
    description: "random Sadvideo verse",
    commandCategory: "random-videos",
    cooldowns: 0,
};
module.exports.run = async function({api, event, args, utils, Users, Threads}) {
  const axios = require("axios")
  const request = require("request")
  const fs = require("fs-extra")
  var link = ["https://i.imgur.com/iV29nRt.mp4", "https://i.imgur.com/CSTooc0.mp4", "https://i.imgur.com/x8RueYD.mp4", "https://i.imgur.com/gCk6CAi.mp4", "https://i.imgur.com/PJi29ed.mp4", "https://i.imgur.com/SgmdsYF.mp4", "https://i.imgur.com/InnYmjK.mp4", "https://i.imgur.com/m6fmTgh.mp4", "https://i.imgur.com/YZMOduu.mp4", "https://i.imgur.com/6Z3oOhp.mp4", "https://i.imgur.com/gdzT76d.mp4", "https://i.imgur.com/1MKzBe5.mp4", "https://i.imgur.com/gXpOIDh.mp4", "https://i.imgur.com/i9RmbkQ.mp4", "https://i.imgur.com/QuG6foV.mp4", "https://i.imgur.com/nYusRat.mp4", "https://i.imgur.com/lWqgRVN.mp4", "https://i.imgur.com/mqZhk1N.mp4", "https://i.imgur.com/jtGSrVe.mp4", "https://i.imgur.com/OIPdz6K.mp4", "https://i.imgur.com/fgn6Ioa.mp4"];
var amir = [`𝗖𝗿𝗲𝗱𝗶𝘁𝘀:  𓆩⃝𝐀𝐌𝐈𝐑𓆩๏𓆪`];
  var juswa1 = amir[Math.floor(Math.random() * amir.length)];
  var callback = () => api.sendMessage({body:`${juswa1}`,attachment: fs.createReadStream(__dirname + "/cache/zac.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/zac.mp4")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/zac.mp4")).on("close",() => callback());
   };