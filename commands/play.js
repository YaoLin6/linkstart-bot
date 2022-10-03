const { SlashCommandBuilder } = require('@discordjs/builders');
//const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('play')
		.setDescription('Joue une musique')
		.addStringOption(option => option.setName('musique')
			.setDescription('Nom ou url de la musique')
			.setRequired(true)),

	async execute(interaction, client) {
		const channel = interaction.member.voice.channel;
		if (!channel) return await interaction.reply('Tu dois être dans un salon vocal pour exécuter cette commande !');
		
		const queue = await client.player.createQueue(interaction.guild);
		if (!queue.connection) await queue.connect(channel);

		const toSearch = interaction.options.getString('musique');
		const result = await client.player.search(toSearch, { requestedBy: interaction.user });

		if (result.tracks.length === 0) return interaction.reply('No results');

		const song = result.tracks[0];
		await queue.addTrack(song);

		if (!queue.playing) await queue.play();

		await interaction.reply('**' + song.title + '** à été ajouté à la queue !');
	},
};