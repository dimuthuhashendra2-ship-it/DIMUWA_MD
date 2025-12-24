const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    // 🔑 Essential Session & Owner Settings
    SESSION_ID: process.env.SESSION_ID || "MA82WbbI#yAA_FBSBDYe8gS1XH5Zwv2rSliKZhSJkpQW3ogOpIp4",
    OWNER_NUMBER: process.env.OWNER_NUMBER || "94742563284",

    // 🤖 Default Fallback Settings
    DEFAULT_BOT_NAME: process.env.DEFAULT_BOT_NAME || "DIMUWA-MD",
    DEFAULT_OWNER_NAME: process.env.DEFAULT_OWNER_NAME || "DIMUWA HASHENDRA",
    DEFAULT_PREFIX: process.env.DEFAULT_PREFIX || ".",

    // 🖼️ Media Settings (Alive image & Menu)
    ALIVE_IMG: process.env.ALIVE_IMG || "https://github.com/Akashkavindu/ZANTA_MD/blob/main/images/alive-new.jpg?raw=true",
    MENU_IMG: process.env.MENU_IMG || "https://github.com/Akashkavindu/ZANTA_MD/blob/main/images/menu-new.jpg?raw=true",

    // ⚙️ Dashboard / Database Defaults
    // මෙම අගයන් පළමු වතාවට Database එක සෑදීමේදී භාවිත වේ (Database & Dashboard Sync)
    AUTO_READ: process.env.AUTO_READ || "true",
    AUTO_TYPING: process.env.AUTO_TYPING || "true",
    AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
    ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
    READ_CMD: process.env.READ_CMD || "false",
    AUTO_VOICE: process.env.AUTO_VOICE || "false",
    ANTI_BADWORD: process.env.ANTI_BADWORD || "false",
};
