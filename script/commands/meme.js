module.exports.config = {
    name: "Meme",
    version: "1.0.0",
    hasPermision: 0,
    credit: "M Amir",
    description: "random meme verse",
    commandCategory: "random-img",
    cooldowns: 0,
};
module.exports.run = async function({api, event, args, utils, Users, Threads}) {
  const axios = require("axios")
  const request = require("request")
  const fs = require("fs-extra")
  var link = ["https://i.imgur.com/d7ETC2l.jpeg", "https://i.imgur.com/V2si9WZ.jpeg", "https://i.imgur.com/1wKKvoU.jpeg", "https://i.imgur.com/oAXIgS9.jpeg", "https://i.imgur.com/5Wh9Aiq.jpeg", "https://i.imgur.com/Iv30sjb.jpeg", "https://i.imgur.com/x4loEXU.jpeg", "https://i.imgur.com/yoFWRGo.jpeg", "https://i.imgur.com/IpwvI5N.jpeg", "https://i.imgur.com/6oIxpdn.jpeg", "https://i.imgur.com/D6XQ7pS.jpeg", "https://i.imgur.com/Xci0UxX.jpeg", "https://i.imgur.com/ZMtmITn.jpeg", "https://i.imgur.com/gXAFsLI.jpeg", "https://i.imgur.com/5xp2KAS.jpeg", "https://i.imgur.com/t6BpLdr.jpeg", "https://i.imgur.com/9AqLoVP.jpeg"];
var amir = [`✯𝗠𝗔𝗗𝗘 𝗕𝗬 𝗠𝗥 𝗔𝗠𝗜𝗥✯`];
  var juswa1 = amir[Math.floor(Math.random() * amir.length)];
  var callback = () => api.sendMessage({body:`${juswa1}`,attachment: fs.createReadStream(__dirname + "/cache/zac.jpeg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/zac.jpeg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/zac.jpeg")).on("close",() => callback());
   };