const { SlashCommandBuilder } = require('discord.js');
const checkPlayerUsable = require('../../functions/checkPlayerUsable');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('stop')
		.setDescription('Stop la musique'),

	async execute(interaction, client) {
		const queue = await checkPlayerUsable(interaction, client);
		if (!queue) return;
		
		queue.destroy();
		queue.playing = false;
		return await interaction.editReply('⏹️ Tchao !');
	},
};
