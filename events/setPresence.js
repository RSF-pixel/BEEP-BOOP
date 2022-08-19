module.exports = {
	name: 'setPresence',
	once: true,
	execute(data) {
		data = {
            activities:[{
                name: "The great collapse of the server",
                type: "Watching"
            }],
            status:"Online"
        }
	},
};
