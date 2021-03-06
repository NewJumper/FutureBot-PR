const Commando = require('discord.js-commando')

require('dotenv').config()
const path = require('path')
const mongo = require('./mongo')
const levels = require('./commands/ranking/levels')

const client = new Commando.CommandoClient({
	owner: '627933033596583957',
	commandPrefix: '-'
})

client.once('ready', async () => {
	console.log('[+] Online')
	client.user.setActivity(`in version 1.0.0`)

	await mongo().then(console.log('[+] Mongo Link'))

	levels(client)

	client.registry
	.registerDefaultTypes()
	.registerGroups([
		['calculation', 'Calculation Commands'],
		['economy', 'Economy Commands'],
		['moderation', 'Moderation Commands'],
		['ranking', 'Ranking Commands'],
		['utility', 'Utility Commands']
	])
	.registerDefaultGroups()
	.registerDefaultCommands({
		help: false,
		ping: false,
		eval: false,
		unknownCommand: false
	})
	.registerCommandsIn(path.join(__dirname, 'commands'))
})

client.login(process.env.TOKEN)
// https://discord.com/oauth2/authorize?client_id=870385015370944563&scope=bot&permissions=805497974