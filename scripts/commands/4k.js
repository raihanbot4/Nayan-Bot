module.exports.config = {
    name: "4k",
    version: "1.0.0",
    permission: 0,
    credits: "Nayan",
    description: "",
    prefix: 'awto',
    category: "prefix",
    usages: "[model]",
    cooldowns: 10,
    dependencies: {
       'nayan-server': ''
    }
};





module.exports.run = async function({ api, event, args }) {
  
    const axios = require("axios")
    const request = require("request")
    const fs = require("fs-extra")
    const {upscale} = require('nayan-server')
          if (event.type !== "message_reply") return api.sendMessage("[â—]âžœ You must reply to a photo", event.threadID, event.messageID);
        if (!event.messageReply.attachments || event.messageReply.attachments.length == 0) return api.sendMessage("[â—]âžœ You must reply to a photo", event.threadID, event.messageID);
        if (event.messageReply.attachments[0].type != "photo") return api.sendMessage("[â“]âžœ This is not an image", event.threadID, event.messageID);
  const content = (event.type == "message_reply") ? event.messageReply.attachments[0].url : args.join(" ");
  
  const mod = args[0] || "1";
  
const model = mod
  try {
const res = await upscale(content, model)
  console.log(res)
  api.setMessageReaction("âœ…", event.messageID, (err) => {
      }, true);
  const img1 = res.image_url
  const job = res.job_id
        var msg = [];

  const pic = (
    await axios.get(`https://images.prodia.xyz/${job}.png`,
      { responseType: 'stream' }
    )
  ).data;

        {
            msg += `âœ…HERE YOUR PHOTO`
        }

        return api.sendMessage({
            body: msg,
            attachment: pic

        }, event.threadID, event.messageID);
     } catch (err) {
     api.setMessageReaction("âŒ", event.messageID, (err) => {
    }, true);
      api.sendMessage(`ðŸ”°Use ${global.config.PREFIX}${this.config.name} [model]\nðŸ”°Example:${global.config.PREFIX}${this.config.name} 1\n\nðŸ”¥Total Model limit 2...`, event.threadID, event.messageID);  
     }
  }; 
