const Discord = require("discord.js");
const client = new Discord.Client({disableEveryone: true})


client.on('message', message => { 

if (!message.guild) return; 

if (message.content === 'bota ka wara') { 
 if (!message.member.hasPermission("ADMINISTRATOR"))  return;
if (message.member.voiceChannel) { 

message.member.voiceChannel.join() 

.then(connection => { 


}) 

.catch(console.log); 

} else { 

message.reply('**هەتا تۆ نەچیتە ڤۆیس من نایێم**'); 

} 

} 

});


client.on("message" , message => {

if(message.channel.type === 'dm') {

if (message.content.startsWith("https://discord.gg/")) {
    
  message.author.send(`ڕیکلامەکە کرا تۆش ڕیکام بۆ ئەم سیرڤەرە بکە https://discord.gg/mmen7TUqqB `) // لینکی سێرڤەری خۆت لیرە دابنی بە هەتا هەتای بێت
    
  client.channels.get("787402376570077261").send(
`> By  <@${message.author.id}> ✅ 
${message.content}`)
}
    }
        })




client.on('ready', () => {
console.log(`ON ${client.guilds.size} Servers`);
console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`mama 8bit`,"http://twitch.tv/PAYWANDcamper") 
});




client.login("NzkyNTI5MDEzNjc0NjA2NTky.X-fCKQ.Y-5gcFokFPnMvi9GmQo6Uri071s");//تۆکین لێرە دانێ
