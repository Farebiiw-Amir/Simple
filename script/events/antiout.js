module.exports.config = {
 name: "antiout",
 eventType: ["log:unsubscribe"],
 version: "0.0.1",
 credits: "DungUwU",
 description: "Listen events"
};

module.exports.run = async({ event, api, Threads, Users }) => {
 let data = (await Threads.getData(event.threadID)).data || {};
 if (data.antiout == false) return;
 if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
 const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
 const type = (event.author == event.logMessageData.leftParticipantFbId) ? "self-separation" : "being kicked by the administrator";
 if (type == "self-separation") {
  api.addUserToGroup(event.logMessageData.leftParticipantFbId, event.threadID, (error, info) => {
   if (error) {
    api.sendMessage(` ✬✬ 𝗝𝗮𝗢𝗼 ${name}  𝗔𝗽 𝗸𝗼 𝗡𝗶 𝗸𝗿𝘂 𝗚𝗮 𝗔𝗱𝗱 𝗮𝗯 ☹️ ✬✬`, event.threadID)
   } else api.sendMessage(`♥︎ 𝗠𝗲𝗿𝗶 𝗝𝗮𝗮𝗻 ${name} 𝗔𝗽 𝗞𝗼 𝗡𝗶 𝗝𝗮𝗻𝗲 𝗗𝘂 𝗚𝗮𝗮 𝗔𝗯 ♥︎!`, event.threadID);
  })
 }
}
