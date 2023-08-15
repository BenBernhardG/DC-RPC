require('dotenv').config();
const { DISCORD_APPLICATION_ID } = process.env;

var currentdate = new Date();
var datetime = currentdate.getDate() + "/"
    + (currentdate.getMonth() + 1) + "/"
    + currentdate.getFullYear() + " @ "
    + currentdate.getHours() + ":"
    + currentdate.getMinutes() + ":"
    + currentdate.getSeconds();

const discordRPC = require('discord-rpc');
const RPC = new discordRPC.Client({ transport: 'ipc' });
discordRPC.register(DISCORD_APPLICATION_ID);

async function setRPCActivity() {
    if (!RPC) return;
    RPC.setActivity({
        details: `s`,
        state: `s`,
        startTimestamp: Date.now(),
        largeImageKey: `bmx_treppen_jump`,
        largeImageText: `Bob Bot`,
        smallImageKey: `bernhardbmx`,
        smallImageText: `BernhardBMX#4416`,
        joinSecret: ``,
        instance: false,
        buttons: [
            {
                "label": "Steam",
                "url": "https://steamcommunity.com/profiles/76561199219740798/"
            },
            {
                "label": "Twitch",
                "url": "https://twitch.tv/bernhardbmx/"
            },
            {
                "label": "More...",
                "url": "https://www.bernhardbmx.net/"
            }
        ]
    });
}


RPC.login({ clientId: DISCORD_APPLICATION_ID }).catch(console.error);
RPC.on('ready', async () => {
    setRPCActivity();
    console.log(`[RPC] [${datetime}] RPC loaded!`);

    setInterval(() => {
        setRPCActivity();
    }, 15 * 1000);
});