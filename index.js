//Config necessary for the bot run
const {
    Client
} = require("discord.js");
const {
    config
} = require("dotenv");

const client = new Client({
    disableEveryone: true
});
//If the bot is ready to go online he sends a message to the console and sets his precence to the desired one
client.on("ready", () => {
    console.log("BOT initiated BEEP BOOP , my name is " + client.user.username);

    client.user.setPresence({
        game: {
            name: "Imagine losing your mind for me yikes",
            // type: "WATCHING"
        }
    });
});
//Fuction for generating a random value between two numbers
function getRnd(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


//Prefix of the bot 
const prefix = "_";
//The prefix one
client.on("message", async message => {

    //Checklist for the code to run
    //What is sent for the bot needs to be text,and needs to have the prefix for the bot 
    if (message.channel.type != 'text' || message.author.bot) return;
    if (!message.guild) return; /* ANTI ERROR NAS DMS*/
    if (!message.content.startsWith(prefix)) return;
    //Getting the text for the message sent
    let args = message.content.slice(prefix.length).trim().split(/ +/g);
    let cmd = args.shift().toLowerCase();

    //All the options that are available with the prefix 
    switch (cmd) {

        //Ping option for checking possible problems with the api or bot 
        case 'ping':
            let msg = await message.channel.send('Ping');
            msg.edit('Ping:\nLatency is' + Math.floor(msg.createdTimestamp - message.createdTimestamp) + 'ms \n API Latency is ' + Math.round(client.ping) + 'ms');


            break;

            //Crab option that send the gif of the crab when the user requests
        case 'crab':
            message.channel.send("https://tenor.com/view/crab-safe-dance-gif-13211112");

            break;

            //Champion option that gets the fuction getRnd that randomizes a number and choses a champion from the array champions
        case 'champion':
            let rnd = getRnd(1, 148)
            let champions = ['Aatrox', 'Ahri', 'Akali', 'Alistar', 'Amumu', 'Anivia', 'Annie', 'Aphelios', 'Ashe', 'Aurelion Sol', 'Azir', 'Bard', 'Blitzcrank', 'Brand', 'Braum', 'Caitlyn', 'Camille', 'Cassiopeia', 'Cho gath', 'Corki', 'Darius', 'Diana', 'Draven', 'Dr.Mundo', 'Ekko', 'Elise', 'Evelynn', 'Ezreal', 'Fiddlesticks', 'Fiora', 'Fizz', 'Galio', 'Gangplank', 'Garen', 'Gnar', 'Gragas', 'Graves', 'Hecarim', 'Heimerdinger', 'Illaoi', 'Irelia', 'Ivern', 'Jhin', 'Jinx', 'Kaisa', 'Kalista', 'Karma', 'Karthus', 'Kassadin', 'Katarina', 'Kayle', 'Kayn', 'Kennen', 'Khazix', 'Kindred', 'Kled', 'Kog maw', 'Leblanc', 'Lee Sin', 'Leona', 'Lissandra', 'Lucian', 'Lulu', 'Lux', 'Malphite', 'Malzahar', 'Maokai', 'Master yi', 'Miss Fortune', 'Mordekaiser', 'Morgana', 'Nami', 'Nasus', 'Nautilus', 'Neeko', 'Nidalee', 'Nocturne', 'Nunu', 'Olaf', 'Orianna', 'Ornn', 'Pantheon', 'Poppy', 'Pyke', 'Qiyana', 'Quinn', 'Rakan', 'Rammus', 'Reksai', 'Renekton', 'Rengar', 'Riven', 'Rumble', 'Ryze', 'Sejuani', 'Senna', 'Sett', 'Shaco', 'Shen', 'Shyvanna', 'Singed', 'Sion', 'Sivir', 'Skarner', 'Sona', 'Soraka', 'Swain', 'Sylas', 'Syndra', 'Tahm Kench', 'Taliyah', 'Talon', 'Taric', 'Teemo', 'Thresh', 'Tristana', 'Trundle', 'Tryndamere', 'Twisted Fate', 'Twitch', 'Udry', 'Urgot', 'Varus', 'Vayne', 'Veigar', 'Vel koz', 'Vi', 'Viktor', 'Vladimir', 'Volibear', 'Warwick', 'Wukong', 'Xayah', 'Xerath', 'Xin Zhao', 'Yasuo', 'Yorick', 'Yummi', 'Zac', 'Zed', 'Ziggs', 'Zilean', 'Zoe', 'Zyra']
            message.channel.send('Random Champion is ' + champions[rnd])

            break;

            //Porn option that gets a random porn video from pornhub
        case 'porn':

            message.channel.send("https://www.pornhub.com/random")

            break;
            //Cs option to call everyone who plays cs
        case 'cs':
            message.channel.send("Can you guys play cs", {
                tts: true
            });
            message.channel.send("<@198930470061211648> <@198869765039718400> <@177175891078676482> <@160788066678734849> <@198887105143767040> <@195638742864625664>")
            break;
            // Random number generator 
        case 'random':

            let rnd1 = getRnd(1, 100);
            message.channel.send(rnd);

            break;
            //Bored command
        case 'bored':

            let rndbored = getRnd(1, 8)
            switch (rndbored) {
                case 1:
                    message.send.channel("CS")
                    break;
                case 2:
                    message.send.channel("LOL")
                    break;
                case 3:
                    message.send.channel("Destiny 2")
                    break;
                case 4:
                    message.send.channel("Europa universalis IV")
                    break;
                case 5:
                    message.send.channel("Porn?")
                    break;
                case 6:
                    message.send.channel("Videos")
                    break;
                case 7:
                    message.send.channel("Mine")
                    break;
                case 8:
                    message.send.channel("Sleep")
                    break;
            }

            break;
            //Deceit infected
        case 'infected':

            message.channel.send("<@236622987506352128> is the infected", {
                tts: true
            });
            break;

            //Option to call the players of deceit
        case 'deceit':

            message.channel.send("<@198930470061211648> <@198887105143767040> <@195638742864625664> <@236622987506352128> <@160788066678734849> <@306459672267718668> <@299321163841142786>")

        break;

        case 'roast':
             //Beep boop btw 

             if(message.content.includes("@"))
             {
                let roastrnd = getRnd(1,)
                switch(roastrnd)
                {
                    case 1:                   
                    message.channel.send(autor + "Are you really trying to use a bot to roast your friends?", {
                        tts: true
                    });
                    break;
                    case 2:
                        message.channel.send("Brain check..", {
                            tts: true
                        });
                        message.channel.send("Brain dead ✅", {
                            tts: true
                        });
                    break;
                }
                

             }






         break;





    }
});
//Ban and kick options only avaibable for the admins and botcontrollers respectively
client.on('message', message => {
    //CHANGE LATER WHEN BOT IS READY
    //The ids from the certain roles
    let botcontroller = message.member.roles.has('217716503729012736');
    let admin = message.member.roles.has('217716522808901632')
    let args = message.content.substring(prefix.length).split(" ");

    switch (args[0]) {
        //Kick option only avaibable to the bot controllers
        case 'kick':
            if (botcontroller) {

                if (!args[1]) message.channel.send('DIGA ME UM!')

                const user = message.mentions.users.first();
                if (user) {
                    const member = message.guild.member(user);
                    if (member) {
                        member.kick('Kicked!').then(() => {
                            message.reply('The member' + ' ' + user.tag + ' ' + 'was kicked');
                        }).catch(error => {
                            message.reply('I was unable to kick the member');
                            console.log(error)
                        });

                    } else {
                        message.reply('That member is not in the server')

                    }

                }
            }
            //In case that you try to ban a user that is more powerfull than you
            else {
                message.channel.send("You don't have enough power to this command")

            }

            break;

        case 'ban':
            //Ban option only avaibable to the Admins
            if (admin) {

                if (!args[1]) message.channel.send('DIGA ME UM!')
                const user = message.mentions.users.first();
                if (user) {
                    const member = message.guild.member(user);
                    if (member) {
                        member.ban({
                            reason: 'Imagine being Banned by a bot '
                        }).then(() => {
                            message.reply('The member' + ' ' + user.tag + ' ' + 'was BANNED');
                        })

                    } else {
                        message.reply('That member is not in the server')

                    }

                }
            }
            //Ban option only avaibable to the Admins
            else {
                message.channel.send("You don't have enough power to this command")
            }


            break;


        case 'remind':
            //Only 1 rewind per time
            //Rewind option 
            let rewind;
            if (rewind == 0) {


                var hours = args[1];
                let interval = hours * 3600000;
                let messageRewind = ""
                for (let i = 2; i < args.length; i++) {

                    messageRewind += "" + args[i];
                }
                sendTimedMessage();
                message.channel.send("Remind set successfully")
                rewind = 1;
                setInterval(function sendTimedMessage() {

                    message.channel.send(messageRewind)
                    rewind = 0;

                }, interval)
                
            }
            else if (rewind == 1)
            {
               message.channel.send("Rewind already occupied")
            }

            break;

    }

})

//Test detection used for detecting certain words from normal text 
client.on("message", async message => {
    //Checklist necessary for the bot to run
    if (message.channel.type != 'text' || message.author.bot) return;
    if (!message.guild) return; /* ANTI ERROR NAS DMS*/
    /*The bot divides the message that the user who made the request  and search for the trigger words and then he tells the user to stfu*/
    let messageraw = message.content.toLowerCase();
    let autor = message.author;
    let messagetext = messageraw.trim();
    let messagesplit = messagetext.split(' ');
    var resposta = 0;
    if ((Boolean(messagesplit.includes("outlander")) || (Boolean(messagesplit.includes("jojo"))))) {
        resposta = 1;
    }
    if ((Boolean(messagesplit.includes("oof")))) {
        resposta = 2;
    }
    switch (resposta) {
        case 1:
            message.channel.send(autor + " " + "shut the fuck up", {
                tts: true
            });
            break;
        case 2:
            message.channel.send("OOF!")
            break;


        default:


            break;
    }

})

client.login(process.env.token);