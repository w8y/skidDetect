const Discord = require('discord.js');
require('dotenv').config();

const client = new Discord.Client({intents: 32767})

client.login(process.env.TOKEN);

function readyDiscord () {
    console.log('Ready');

    client.user.setActivity(`Protecting ${client.guilds.cache.size} servers`, {
        type: "STREAMING",
        url: "https://www.twitch.tv/LetMeWoosh"
      });

client.on('message', gotMessage);

const bot = new Discord.Client({intents: 32767});
function gotMessage(msg) {};   

client.on('presenceUpdate', (oldMember, newMember) => {
    const guild = newMember.guild;
    member = newMember;
    if (newMember.user.bot) return;
    
    activityLength = newMember.member.presence.activities.length;

    //check to see if the user has an activities, and if so, how many
    if (activityLength >0 ){
        console.log("member has " + activityLength + " activities");

        for (let i = 0; i < activityLength; i++) {         
          
        //Debugging messages to the log
        console.log("Activity in position " + i + " is " + newMember.member.presence.activities[i].name.toLowerCase());
        //console.log("now in lower case " + newMember.member.presence.activities[0].name.toLowerCase());
        if (newMember.member.presence.activities[i].name.toLowerCase() == "fdpclient") { // Started playing.
            console.log(`${newMember.user.tag} has been banned for using FDPClient`);
            try{
                guild.members.ban(`${newMember.user.id}`, {reason: 'FDP User [Autoban]'}).catch((err) => {
                console.error(err);
                var x = err.message;});
                break;
            }
            catch(err){    
            }
        }
    }
    } else {
        console.log("member has no activities");
    }
});
} 
client.login(process.env.TOKEN);
