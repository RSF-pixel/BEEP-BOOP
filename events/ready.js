module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		console.log(`Ready! Logged in as ${client.user.tag}`);

        let data = {
            activities:[{
                name: "the great collapse of the server",
                type: "Watching"
            }],
        }
        client.user.setPresence(data)
	},
};