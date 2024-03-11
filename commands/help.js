/*

  ██████╗░████████╗██╗░░██╗           
  ██╔══██╗╚══██╔══╝╚██╗██╔╝          
  ██████╔╝░░░██║░░░░╚███╔╝░          
  ██╔══██╗░░░██║░░░░██╔██╗░          
  ██║░░██║░░░██║░░░██╔╝╚██╗          
  ╚═╝░░╚═╝░░░╚═╝░░░╚═╝░░╚═╝          

   
   # MADE BY RTX!! FEEL FREE TO USE ANY PART OF CODE
   ## FOR HELP CONTACT ME ON DISCORD
   ## Contact    [ DISCORD SERVER :  https://discord.gg/FUEHs7RCqz ]
   ## YT : https://www.youtube.com/channel/UCPbAvYWBgnYhliJa1BIrv0A
*/
const { ApplicationCommandOptionType } = require('discord.js');
const db = require("../mongoDB");

module.exports = {
  name: "help",
  description: "Get information about bot and commands.",
  permissions: "0x0000000000000800",
  options: [],

  run: async (client, interaction) => {
    try {
      const { EmbedBuilder, ActionRowBuilder, ButtonBuilder } = require('discord.js');
const { ButtonStyle } = require('discord.js');

      const embed = new EmbedBuilder()
        .setColor('#fdfd96')
       .setAuthor({
        name: 'SEAL Bot Commands and Information',
        iconURL: 'https://cdn.discordapp.com/emojis/1160697920195153990.gif?size=96&quality=lossless', 
        url: 'https://discord.gg/WdpBEdTxRm'
    })
        
        .setDescription("__**Here are the available commands:**__\n\n"+
"🎹 **Play**: Stream a song from a given link or text\n"+
"⏹️ **Stop**: Makes the bot stop playing music\n"+
"📊 **Queue**: View and manage the song queue\n"+
"⏭️ **Skip**: Skip the current song\n"+
"⏸️ **Pause**: Pause the currently playing song\n"+
"▶️ **Resume**: Resume the paused song\n"+
"🔁 **Loop**: Toggle loop mode\n"+
"🏓 **Ping**: Check the bot's latency\n"+
"🗑️ **Clear**: Clear the song queue\n"+
"🔄 **Autoplay**: Enable or disable autoplay\n"+
"🔊 **Volume**: Adjust the music volume\n"+ 
"🎧 **Filter**: Apply filters to enhance the sound")

               .setImage(`https://cdn.discordapp.com/attachments/1115904220034510869/1166634550806446100/Music_Help_Banner_Image.png?ex=654b3417&is=6538bf17&hm=a2a0697e931d093ea3df59e2a338a8cac99b7c48d772568bb88d14c94858905a&`)
        
      const button1 = new ButtonBuilder()
      .setLabel('YouTube')
      .setURL('https://www.youtube.com/@s.e.a.l9272')
      .setStyle(ButtonStyle.Link);

    const button2 = new ButtonBuilder()
      .setLabel('Discord')
      .setURL('https://discord.gg/t5Brkkjhtw')
      .setStyle(ButtonStyle.Link);
      
    const button3 = new ButtonBuilder()
      .setLabel('Help')
      .setURL('https://discord.gg/WdpBEdTxRm')
      .setStyle(ButtonStyle.Link);
      
    const row = new ActionRowBuilder()
      .addComponents(button1, button2, button3);

      interaction.reply({ embeds: [embed], components: [row] }).catch(e => {});

    } catch (e) {
    console.error(e); 
  }
  },
};
/*

  ██████╗░████████╗██╗░░██╗           
  ██╔══██╗╚══██╔══╝╚██╗██╔╝          
  ██████╔╝░░░██║░░░░╚███╔╝░          
  ██╔══██╗░░░██║░░░░██╔██╗░          
  ██║░░██║░░░██║░░░██╔╝╚██╗          
  ╚═╝░░╚═╝░░░╚═╝░░░╚═╝░░╚═╝          

   
   # MADE BY RTX!! FEEL FREE TO USE ANY PART OF CODE
   ## FOR HELP CONTACT ME ON DISCORD
   ## Contact    [ DISCORD SERVER :  https://discord.gg/FUEHs7RCqz ]
   ## YT : https://www.youtube.com/channel/UCPbAvYWBgnYhliJa1BIrv0A
*/