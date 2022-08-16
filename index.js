//Config necessary for the bot run
const { Client } = require("discord.js");
const { config } = require("dotenv");
var cron = require("cron");

const client = new Client({
  disableEveryone: true,
});
//If the bot is ready to go online he sends a message to the console and sets his precence to the desired one
client.on("ready", () => {
  console.log("BOT initiated BEEP BOOP , my name is " + client.user.username);

  client.user.setPresence({
    game: {
      name: "Bot? hello?",
      // type: "WATCHING"
    },
  });
});

//Prefix of the bot
const prefix = "_";
let autor;
//Ban and kick options only avaibable for the admins and botcontrollers respectively

client.on("message", (message) => {
  //CHANGE LATER WHEN BOT IS READY
  //The ids from the certain roles
  let botcontroller = message.member.roles.has("417744133994708995");
  let admin = message.member.roles.has("<688827881127804999");
  let args = message.content.substring(prefix.length).split(" ");
  autor = message.author;
  switch (args[0]) {
    //Kick option only avaibable to the bot controllers
    case "kick":
      if (botcontroller) {
        if (!args[1]) message.channel.send("DIGA ME UM!");

        const user = message.mentions.users.first();
        if (user) {
          const member = message.guild.member(user);
          if (member) {
            member
              .kick("Kicked!")
              .then(() => {
                message.reply(
                  "The member" + " " + user.tag + " " + "was kicked"
                );
              })
              .catch((error) => {
                message.reply("I was unable to kick the member");
                console.log(error);
              });
          } else {
            message.reply("That member is not in the server");
          }
        }
      }
      //In case that you try to ban a user that is more powerfull than you
      else {
        message.channel.send("You don't have enough power to this command");
      }

      break;

    case "ban":
      //Ban option only avaibable to the Admins
      if (admin) {
        if (!args[1]) message.channel.send("DIGA ME UM!");
        const user = message.mentions.users.first();
        if (user) {
          const member = message.guild.member(user);
          if (member) {
            member
              .ban({
                reason: "Imagine being Banned by a bot ",
              })
              .then(() => {
                message.reply(
                  "The member" + " " + user.tag + " " + "was BANNED"
                );
              });
          } else {
            message.reply("That member is not in the server");
          }
        }
      }
      //Ban option only avaibable to the Admins
      else {
        message.channel.send("You don't have enough power to this command");
      }

      break;

    //Ping option for checking possible problems with the api or bot
    case "ping":
      let msg = message.channel.send("Ping");
      msg.edit(
        "Ping:\nLatency is" +
          Math.floor(msg.createdTimestamp - message.createdTimestamp) +
          "ms \n API Latency is " +
          Math.round(client.ping) +
          "ms"
      );

      break;

    //Commands command just gives every command existent on the bot
    case "commands":
      message.channel.send(
        "Commands\n _ping Checks the ping of the bot and the api lag\n _kick Kicks the person mentioned but you have to have the bot commander role\n _ban Bans the person mentioned but you have to be admin"
      );

      break;
  }
});

client.on("presenceUpdate", (oldPresence, newPresence) => {
  let member = newPresence.member;
  let memberList = [];
  if (memberList.includes(member.id)) {
      if (oldPresence.status !== newPresence.status && oldPresence.status != "idle" || oldPresence.status != "dnd" && newPresence.status != "idle" || newPresence.status != "dnd") {
        let date = new Date().toLocaleString();
      }
  }
  else
  {
    memberList.push(member.id)
    if (oldPresence.status !== newPresence.status && oldPresence.status != "idle" || oldPresence.status != "dnd" && newPresence.status != "idle" || newPresence.status != "dnd") {
      // Your specific channel to send a message in.
      let date = new Date().toLocaleString();
    }
  }
});

client.login(process.env.token);
