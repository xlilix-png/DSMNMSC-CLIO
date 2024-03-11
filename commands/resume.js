const db = require("../mongoDB");
const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: "resume",
  description: "Start paused music.",
  permissions: "0x0000000000000800",
  options: [],
  voiceChannel: true,
  run: async (client, interaction) => {
    const queue = client.player.getQueue(interaction.guild.id);

    try {
      if (!queue) {
        return interaction.reply({ content: '⚠️ Queue is empty!!', ephemeral: true });
      }

      if (!queue.paused) {
        return interaction.reply({ content: '⚠️ No paused music!!', ephemeral: true });
      }

      const success = queue.resume();

      const embed = new EmbedBuilder()
        .setColor('#fdfd96')
        .setAuthor({
          name: 'Song Resumed',
          iconURL: 'https://cdn.discordapp.com/emojis/839710377432186920.gif?size=96&quality=lossless',
          url: 'https://discord.gg/t5Brkkjhtw'
        })
        .setDescription(success ? '**The music springs back to life!!**' : '❌ Error: Unable to resume song')
        

      return interaction.reply({ embeds: [embed] });
    } catch (e) {
      console.error(e);
    }
  },
};
