//Config necessary for the bot run
const {
    Client
} = require("discord.js");
const {
    config
} = require("dotenv");
var cron = require("cron");

const client = new Client({
    disableEveryone: true
});
//If the bot is ready to go online he sends a message to the console and sets his precence to the desired one
client.on("ready", () => {
    console.log("BOT initiated BEEP BOOP , my name is " + client.user.username);

    client.user.setPresence({
        game: {
            name: "A robot in the streets, an android in the sheets!",
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
let autor;
//Ban and kick options only avaibable for the admins and botcontrollers respectively
client.on('message', message => {
    //CHANGE LATER WHEN BOT IS READY
    //The ids from the certain roles
    let botcontroller = message.member.roles.has('417744133994708995');
    let admin = message.member.roles.has('<688827881127804999')
    let args = message.content.substring(prefix.length).split(" ");
    autor = message.author
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

            //Ping option for checking possible problems with the api or bot 
        case 'ping':
            let msg = message.channel.send('Ping');
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
            message.channel.send(rnd1);

            break;
            //Bored command
        case 'bored':

            let rndbored = getRnd(1, 7)
            switch (rndbored) {
                case 1:
                    message.channel.send("CS")
                    break;
                case 2:
                    message.channel.send("League of Legends")
                    break;
                case 3:
                    message.channel.send("Destiny 2")
                    break;
                case 4:
                    message.channel.send("Europa universalis IV")
                    break;
                case 5:
                    message.channel.send("Videos")
                    break;
                case 6:
                    message.channel.send("Minecraft")
                    break;
                case 7:
                    message.channel.send("Sleep")
                    break;

                default:
                    message.channel.send("Error")
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

        case 'commands':

            message.channel.send("Commands\n _ping Checks the ping of the bot and the api lag\n _kick Kicks the person mentioned but you have to have the bot commander role\n _ban Bans the person mentioned but you have to be admin" +
                "\n _crab Summons the crab meme\n _champion Gives a random champion from League of Legends\n _porn Gives a random link of porn\n _cs Calls everyone who plays cs \n _random Gives a random number between 1 and 10" +
                "\n _bored Gives the players something to think about\ _infected Gives the infected players on deceit\n _deceit Calls the deceit players\n _roast Asserts bot dominance")

            break;
        case 'roast':
            //BEEP BOOP STONK POWER
            //Beep boop btw 

            if (message.content.includes("@")) {
                let roastrnd = getRnd(1, 7)
                switch (roastrnd) {
                    case 1:
                        message.channel.send(autor + "Are you really trying to use a bot to roast your friends..", {
                            tts: true
                        });
                        break;
                    case 2:
                        message.channel.send("Checking the brain of.." + autor, {
                            tts: true
                        });
                        message.channel.send("Brain dead ✅", {
                            tts: true
                        });
                        break;
                    case 3:
                        message.channel.send("Yikes..")
                        break;
                    case 4:
                        for (let i = 0; i <= 5; i++) {
                            message.channel.send("No", {
                                tts: true
                            });

                        }
                        break;
                    case 5:
                        message.channel.send("You need to chill out", {
                            tts: true
                        });
                        message.channel.send("A bot isn't really gonna resolve your lack of brain", {
                            tts: true
                        });
                        break;
                    case 6:
                        message.channel.send("Nobody wants to be your friend if you continue to do this", {
                            tts: true
                        });
                        message.channel.send("Even me", {
                            tts: true
                        });
                        break;
                    case 7:
                        message.channel.send("Sometimes i wonder if my dog is smarter than you", {
                            tts: true
                        });
                        message.channel.send("But always i reach the conclusion that you are dog shit", {
                            tts: true
                        });
                        break;
                }

            } else {

                if (message.author == "<@198930470061211648>") {
                    //Xtr room for the roast command
                    let roastrnd = getRnd(1, 4)
                    switch (roastrnd) {
                        case 1:
                            message.channel.send("Small dick detected must be <@198930470061211648>", {
                                tts: true
                            });
                            break;
                        case 2:
                            message.channel.send("Analyzing..", {
                                tts: true
                            });

                            message.channel.send("Yep boosted by Paco", {
                                tts: true
                            });
                            break;
                        case 3:
                            message.channel.send("Do you need something to eat? looking kinda stick", {
                                tts: true
                            });

                            break;
                        case 4:
                            message.channel.send("Need a stick to make a pickaxe,Good thing i found you", {
                                tts: true
                            });
                            break;

                        default:
                            break;
                    }


                } else if (message.author == "<@236622987506352128>") {
                    //Paco room for the roast command
                    let roastrnd = getRnd(1, 4)
                    switch (roastrnd) {
                        case 1:
                            message.channel.send("Hello Massatoy good to see ya mate", {
                                tts: true
                            });
                            break;
                        case 2:
                            message.channel.send("Analyzing..", {
                                tts: true
                            });

                            message.channel.send("Yep boosted by Xeater", {
                                tts: true
                            });
                            break;
                        case 3:
                            message.channel.send("Outlander", {
                                tts: true
                            });

                            message.channel.send("Do i really need to roast any further", {
                                tts: true
                            });

                            break;
                        case 4:
                            message.channel.send("I feel like i'm trying to roast a little child", {
                                tts: true
                            });
                            message.channel.send("Oh wait i'am", {
                                tts: true
                            });
                            break;

                        default:
                            break;
                    }

                } else if (message.author == "<@198887105143767040>") {
                    //Zekrom room for the roast command
                    let roastrnd = getRnd(1, 4)
                    switch (roastrnd) {
                        case 1:
                            message.channel.send("Let me just copy the exact roasts from Paco..", {
                                tts: true
                            });
                            break;
                        case 2:
                            message.channel.send("My man trying to start a revolution for Outlander", {
                                tts: true
                            });
                            message.channel.send("Pardon more like a cult", {
                                tts: true
                            });

                            break;
                        case 3:
                            message.channel.send("There nothing really to roast about if you think hard enough", {
                                tts: true
                            });

                            message.channel.send("Wait the beard needs to go", {
                                tts: true
                            });

                            break;
                        case 4:
                            message.channel.send("Cs go player okay..", {
                                tts: true
                            });
                            message.channel.send("Still can't reach Ak", {
                                tts: true
                            });

                            break;

                        default:
                            break;
                    }

                }
                else
                {
                    //Normal Roast stuff
                    message.channel.send("Test")

                }





            }






            break;



    }

})

//Test detection used for detecting certain words from normal text 
client.on("message", async message => {
    //Checklist necessary for the bot to run
    if (message.channel.type != 'text' || message.author.bot) return;
    if (!message.guild) return; /* ANTI ERROR NAS DMS*/
    let scheduledMessage = new cron.CronJob('00 00 00 * * *', () => {
        // This runs every day at 10:30:00, you can do anything you want
        message.channel.send('SLEEP :rage:');
      });
      
    // When you want to start it, use:
      scheduledMessage.start()
    /*The bot divides the message that the user who made the request  and search for the trigger words and then he tells the user to stfu*/
    let messageraw = message.content.toLowerCase();
    autor = message.author;
    let messagetext = messageraw.trim();
    let messagesplit = messagetext.split(' ');
    var resposta = 0;
    if ((Boolean(messagesplit.includes("outlander")) || (Boolean(messagesplit.includes("jojo"))))) {
        resposta = 1;
    }
    if ((Boolean(messagesplit.includes("oof")))) {
        resposta = 2;
    }
    if ((Boolean(messagesplit.includes("f")))) {
        resposta = 3
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
        case 3:
            message.channel.send("F's in the chat bois")
            break;


        default:


            break;
    }

})

client.login(process.env.token);