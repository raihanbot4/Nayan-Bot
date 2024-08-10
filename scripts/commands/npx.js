const fs = require("fs");
module.exports = {
  config:{
	name: "raihan",
        version: "1.0.1",
        prefix: false,
	permssion: 0,
	credits: "nayan", 
	description: "Fun",
	category: "no prefix",
	usages: "raihan",
        cooldowns: 5, 
},

handleEvent: function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
  const content = event.body ? event.body : '';
  const body = content.toLowerCase();
	if (body.indexOf(" ")==0 || body.indexOf("রায়হান")==0 || body.indexOf("raihan")==0 || body.indexOf("Raihan")==0) {
		var msg = {
				body: " __রায়হান জানু তাহ এখন বিজি আছে..!!🐰🍒",
				attachment: fs.createReadStream(__dirname + `/cache/janu.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("💋", event.messageID, (err) => {}, true)
		}
	},
	start: function({ nayan }) {

  }
}
