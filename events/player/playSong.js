const db = require("../../mongoDB");
const { EmbedBuilder } = require("discord.js");

module.exports = async (client, queue, song) => {
  if (queue) {
    if (!client.config.opt.loopMessage && queue?.repeatMode !== 0) return;
    if (queue?.textChannel) {
      const embed = new EmbedBuilder()
      .setAuthor({
        name: '...Currently playing a Track',
        iconURL: 'https://cdn.discordapp.com/emojis/1166063294163984418.gif?size=96&quality=lossless', 
        url: 'https://discord.gg/t5Brkkjhtw'
    })
    .setDescription(`\n ‎ \n🎷 **Playing :** **${song?.name}**\n
    - **Enjoy the Ultimate Music Experience. ** \n- **If link breaks playback try to give query.**`)
        .setImage(`https://cdn.discordapp.com/attachments/1115904220034510869/1166031466795368468/Seal_Clio_Music.gif?ex=6549026d&is=65368d6d&hm=9270b419cfba68c36050761b68b4f9842a2c0d0c3368b425394b0e065531dbd5&`)
    .setColor('#fdfd96')
    .setFooter({ text: 'More info - Use /help command [SEAL]' });
      
      queue?.textChannel?.send({ embeds: [embed] }).catch(e => { });
    }
  }
}

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