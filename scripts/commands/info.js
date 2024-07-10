module.exports.config = {
    name: "admin",
    version: "1.0.0",
    permission: 0,
    credits: "nayan",
    prefix: true,
    description: "",
    category: "prefix",
    usages: "",
    cooldowns: 5,
    dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【hh:mm:ss】");
  
var callback = () => api.sendMessage({body:`
--------------------------------------------
𝐍𝐚𝐦𝐞       : 𝗠𝗥.𝗫𝗔𝗜𝗞𝗢 𝗥𝗔𝗜𝗛𝗔𝗡
𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 : 𝗥𝗔𝗜𝗛𝗔𝗡 𝗜𝗦𝗟𝗔𝗠
𝐑𝐞𝐥𝐢𝐠𝐢𝐨𝐧   : 𝗜𝗦𝗟𝗔𝗠
𝐏𝐞𝐫𝐦𝐚𝐧𝐞𝐧𝐭 𝐀𝐝𝐝𝐫𝐞𝐬𝐬: 𝗚𝗔𝗭𝗜𝗣𝗨𝗥,𝗗𝗛𝗔𝗞𝗔
𝐂𝐮𝐫𝐫𝐞𝐧𝐭 𝐀𝐝𝐝𝐫𝐞𝐬𝐬: 𝗚𝗔𝗭𝗜𝗣𝗨𝗥,𝗖𝗛𝗔𝗡𝗗𝗥𝗔
𝐆𝐞𝐧𝐝𝐞𝐫.   : 𝗠𝗔𝗟𝗘
𝐀𝐠𝐞           : 𝗣𝗥𝗘𝗠 𝗞𝗢𝗥𝗔𝗥 𝗕𝗢𝗬𝗢𝗦 𝗛𝗢𝗜𝗖𝗛𝗘
𝐑𝐞𝐥𝐚𝐭𝐢𝐨𝐧𝐬𝐡𝐢𝐩 : 𝗦𝗜𝗡𝗚𝗟𝗘
𝐖𝐨𝐫𝐤        : 𝗦𝗧𝗨𝗗𝗘𝗡𝗧
𝐆𝐦𝐚𝐢𝐥       : magibazraihan@gmail.com
𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩: wa.me/+8801762014230
𝐓𝐞𝐥𝐞𝐠𝐫𝐚𝐦  : 𝗨𝗦𝗘 𝗞𝗢𝗥𝗜 𝗡𝗔𝗛
𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐋𝐢𝐧𝐤 : https://www.facebook.com/profile.php?id=61552312071816`,attachment: fs.createReadStream(__dirname + "/cache/r.png")}, event.threadID, () => 
    fs.unlinkSync(__dirname + "/cache/1.png"));  
      return request(encodeURI(`https://graph.facebook.com/100000959749712/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(
fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
   };
