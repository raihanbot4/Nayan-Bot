module.exports.config = {
  name: "goiadmin",
    version: "1.0.0",
    permission: 0,
    credits: "nayan",
    description: "mention",
    prefix: true,
    category: "user",
    usages: "tag",
    cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "61552312071816") {
    var aid = ["61552312071816"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["Mantion_দিস না _ রায়হান বস এর মন মন ভালো নেই আস্কে-!💔🥀", "আমার বস রায়হান কে এতো ডাকো কেন ভালো টালো বাসো নাকি.!!🤭", "বস রায়হান কই থুমি থুমারে এক বলদে ডাকে.!!😁🤣","বস RAIHAN এখন অনেক বিজি তাকে মেনশন দিয়ে ডিস্টার্ব কইরো না.!!🥰😍😏","আমার বস RAIHAN কে আর একবার মেনশন দিলে তোমার নাকের মধ্যে ঘুষি মারমু😡","RAIHAN বস এখন অনেক বিজি তাকে মেনশন দিবা না😡😡","রায়হান বস এখন  বিজি জা বলার আমাকে বলতে পারেন_!!😼🥰","এতো মিনশন নাহ দিয়া সিংগেল রায়হান রে একটা gf দে-😏","Mantion_না দিয়ে সিরিয়াস প্রেম করতে চাইলে ইনবক্স","মেনশন দিসনা পারলে একটা gf দে-🙊","Mantion_দিস না বাঁলপাঁক্না রায়হান প্রচুর বিজি 🥵🥀🤐","চুমু খাওয়ার বয়স টা  চকলেট🍫খেয়ে উড়িয়ে দিলাম🤗"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
}
