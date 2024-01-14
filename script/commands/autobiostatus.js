module.exports.config = {
  name: "autobiostatus",
  version: "1.0.0",
  hasPermission: 0,
  credits: "PSTeam",
  description: "Change auto bot's bio",
  commandCategory: "admin",
  usages: "bio",
  cooldowns: 5
};

module.exports.run = ({ api }) => {
  const cron = require("node-cron");
  const moment = require("moment-timezone");

  // Function to update the bot's bio
  const updateBotBio = async () => {
    try {
      var currentTimeBio = moment.tz("Asia/Karachi").format("MM/DD/YYYY hh:mm: A");
      await api.changeBio(`Prefix: ${global.config.PREFIX}\n${global.config.BioStatus}\n\nActive: ${currentTimeBio}`);
      console.log(`Bot's bio updated successfully`);
    } catch (error) {
      console.error(`An error occurred while updating the bio: ${error}`);
    }
  };

  // Schedule bio update every minute
  cron.schedule(`* * * * *`, updateBotBio, {
    timezone: "Asia/Karachi"
  });
};
        