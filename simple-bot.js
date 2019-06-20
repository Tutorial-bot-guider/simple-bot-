// calling the package
var Discord = require('discord.js');
var token = require('./token.json');
var botName = require('./package.json');
var bot = new Discord.Client();

bot.on('ready', () => {
    console.log("Connected");
    console.log("Bot: " + botName.name + " is running.");
});

// Listernet event: message received(This will run everytime a message is received)
bot.on('message', message =>{

    // Variables
    var sender = message.author; //The person who sent the message
    var msg = message.content;
    var prefix = "<" //The text before commands, you can put anything that you prefer

    if(message.author.id != "591140576733429760" && message.channel.id === "589620018963021828"){
        if(msg.startsWith('<', 0)){
            if(msg === prefix + "ping" && message.channel.id === "589620018963021828"){
                message.channel.send('Pong!') // Sends a message to the channel, with the content
            }
            else{
                message.channel.send("Hey, I only understand .ping right now. More will be added when my creator is free. :) ")
            }
        }
        else{
            message.delete();
            message.channel.send(sender + " this bot only accepts commands which starts with '.' dot.");
        }
    }
});

bot.on('guildMemberAdd', member => {
    member.send("Welcome, " + member.user.username + " to This server. I am a bot in this server and warmly welcomes you. I hope you learn a lot about me in this group. :)");

    var role = member.guild.roles.find('name', 'User');

    member.addRole(role);

    member.guild.channels.get('589620018963021828').send('**' + member.user.username + '**, has joined the server!')
});

bot.on('guildMemberRemove', member => {
    member.guild.channels.get('589620018963021828').send('**' + member.user.username + '**, has left the server!')
});
// login
client.run(os.getenv('Token')//don't let people know this code as they can then control your bot with it
