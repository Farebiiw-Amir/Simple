module.exports.config = {
  name: "console",
  version: "1.0.0",
  hasPermssion: 3,
  credits: "ATF-TEAM",
  description: "console",
  commandCategory: "No prefix",
  usages: "console ",
  cooldowns: 0
};
module.exports.handleEvent = async function ({
  api: a,
  args: b,
  Users: c,
  event: d,
  Threads: e,
  utils: f,
  client: g
}) {
  let {
    messageID: h,
    threadID: i,
    senderID: j,
    mentions: k
  } = d;
  const l = require("chalk");
  const m = require("moment-timezone");
  var n = moment.tz("Asia/Karachi").format("HH:mm:ss DD/MM/YYYY");
  const o = global.data.threadData.get(d.threadID) || {};
  if (typeof o.console !== "undefined" && o.console == true) {
    return;
  }
  ;
  if (d.senderID == global.data.botID) {
    return;
  }
  ;
  var p = global.data.threadInfo.get(d.threadID).threadName || "Name does not exist";
  var q = await c.getNameUser(d.senderID);
  var r = d.body || "Photos, videos or special characters";
  /*var t = "CC66FF";
  var u = "3366FF";
  var v = "0066FF";
  var x = "FF66FF";
  var w = "0033FF";
  var y = "9966FF";
  var z = "6666FF";
  var b = "0000FF";
  console.log(l.hex("#" + x)("┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓") + "\n" + l.hex("#" + t)("┣➤ Tên nhóm: " + p) + "\n" + l.hex("#" + y)("┣➤ ID nhóm: " + d.threadID) + "\n" + l.hex("#" + z)("┣➤ Tên người dùng: " + q) + "\n" + l.hex("#" + u)("┣➤ ID người dùng: " + d.senderID) + "\n" + l.hex("#" + v)("┣➤ Nội dung: " + r) + "\n" + l.hex("#" + w)("┣➤ Thời gian: " + n) + "\n" + l.hex("#" + b)("┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛"));*/
  console.log(`${l.hex("#FF66FF")("┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓")}
${l.hex("#CC66FF")(`┣➤ Group name: ${p}`)}
${l.hex("#9966FF")(`┣➤ Group ID: ${d.threadID}`)}
${l.hex("#6666FF")(`┣➤ User name: ${q}`)} 
${l.hex("#3366FF")(`┣➤ User ID: ${d.senderID}`)}
${l.hex("#0066FF")(`┣➤ Content: ${r}`)}
${l.hex("#0033FF")(`┣➤ Time: ${n}`)}
${l.hex("#0000FF")("┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛")}`);
};
module.exports.run = async function ({
  api: a,
  args: b,
  Users: c,
  event: d,
  Threads: e,
  utils: f,
  client: g
}) {};
