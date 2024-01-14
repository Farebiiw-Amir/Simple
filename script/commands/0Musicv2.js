const axios = require("axios");
const fs = require("fs");
const ytdl = require('@distube/ytdl-core');
const ytSearch = require('yt-search'); // Import yt-search

module.exports.config = {
    name: "musicv2",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "AMIR",
    description: "Play music from YouTube",
    commandCategory: "utility",
    usages: "[title]",
    cooldowns: 10,
    dependencies: {},
};

module.exports.run = async ({ api, event }) => {
    try {
        const input = event.body;
        const text = input.substring(7);
        const data = input.split(" ");

        if (data.length < 2) {
            return api.sendMessage("⚠️ Please put a title or name of the music.", event.threadID);
        }

        data.shift();
        const song = data.join(" ");

        api.sendMessage(`🔎 Searching for "${song}"...`, event.threadID, event.messageID);

        // Use yt-search to search for videos
        const searchResults = await ytSearch(song);

        if (!searchResults.videos.length) {
            return api.sendMessage("Error: No valid search results found.", event.threadID, event.messageID);
        }

        const video = searchResults.videos[0];
        const videoId = video.videoId;

        const stream = ytdl(videoId, {
            quality: 'highestaudio',
        });

        const fileName = `${video.title}.mp3`;
        const filePath = `./cache/${fileName}`;

        stream.pipe(fs.createWriteStream(filePath));

        stream.on('end', () => {
            console.info('[DOWNLOADER] Downloaded');

            const message = {
                body: `🎵 Here's your music, enjoy! 🥰\n\nTitle: ${video.title}`,
                attachment: fs.createReadStream(filePath),
            };

            api.sendMessage(message, event.threadID, () => {
                fs.unlinkSync(filePath); // Remove the downloaded file after sending
            });
        });

        stream.on('error', (err) => {
            console.error('[ERROR]', err);
            api.sendMessage('An error occurred while processing the command.', event.threadID);
        });
    } catch (error) {
        console.error('[ERROR]', error);
        api.sendMessage('An error occurred while processing the command.', event.threadID);
    }
};
