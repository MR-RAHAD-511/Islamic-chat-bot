module.exports.config = {
    name: "control list",
    version: '1.0.0',
    hasPermssion: 0,
    credits: "𝗜𝘀𝗹𝗮𝗺𝗶𝗰𝗸 𝗖𝗵𝗮𝘁 𝗕𝗼𝘁",
    description: "List of group administrators",
    commandCategory: "Box Chat",
    usages: "Admin List",
    cooldowns: 5,
    dependencies: []
};

module.exports.run = async function({ api, event, args, Users }) {
    /*try {
        var threadInfo = await api.getThreadInfo(args[0]);
    } catch (e) {
        var threadInfo = await api.getThreadInfo(event.threadID);
    }*/
    var threadInfo = await api.getThreadInfo(event.threadID);
    let qtv = threadInfo.adminIDs.length;
    var listad = '';
    var qtv2 = threadInfo.adminIDs;
    var fs = global.nodemodule["fs-extra"];
    dem = 1;
    for (let i = 0; i < qtv2.length; i++) {
        const info = (await api.getUserInfo(qtv2[i].id));
        const name = info[qtv2[i].id].name;
        listad += '' + `${dem++}` + '. ' + name + '\n';
    }

    api.sendMessage(
        `╭•┄┅════❁🌺❁════┅┄•╮\n 𝐓𝐇𝐈𝐒 𝐆𝐑𝐎𝐔𝐏 𝐀𝐃𝐌𝐈𝐍 𝐋𝐈𝐒𝐓 𝐎𝐅 ${qtv} 𝐀𝐃𝐌𝐈𝐍 \n ╰•┄┅════❁🌺❁════┅┄•╯
\n${listad}`,
        event.threadID,
        event.messageID
    );
};
