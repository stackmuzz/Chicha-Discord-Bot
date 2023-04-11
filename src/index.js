const { Client, IntentsBitField, EmbedBuilder, ActivityType } = require("discord.js");
const eventHandler = require("./handlers/eventHandler");
require("dotenv").config();

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

eventHandler(client);






const token = process.env.BOT_TOKEN;
client.login(token);

























































// let status=[
// {
//   name:"Chacha",
//     type: ActivityType.Streaming,
//     url:"https://www.youtube.com/watch?v=j_nJPCgxYS4",

// },
// {
//   name:"Polis aa gyi",
//     type: ActivityType.Streaming,
//     url:"https://www.youtube.com/watch?v=_NGBIQLNr7s",

// },
// {
//   name:"BobbyWave",
//     type: ActivityType.Streaming,
//     url:"https://www.youtube.com/watch?v=5NeW-KB0KPU",

// },
// {
//   name:"Bhola baba dede ",
//     type: ActivityType.Streaming,
//     url:"https://www.youtube.com/watch?v=cGzNQBqE0-U",

// }

// ]




// client.on("ready", (c) => {
//   console.log(`${c.user.tag} is online`);
// });




  // client.user.setActivity({
  //   name:"Chacha",
  //   type: ActivityType.Streaming,
  //   url:"https://www.youtube.com/watch?v=j_nJPCgxYS4",
  // });
//   setInterval(()=>{
// var random=Math.floor(Math.random()*status.length);
// client.user.setActivity(status[random]);
//   },12000);




//assign roles using buttons






// client.on("interactionCreate", async (interaction)=>{
// try {
//   if(!interaction.isButton()) return;

// await interaction.deferReply({ephemeral: true});
// const role=interaction.guild.roles.cache.get(interaction.customId);
// if(!role){
//   interaction.editReply({
//     content:"I can't find that role",
    
//   });
//   return;
// }
// const hasRole=interaction.member.roles.cache.has(role.id);
// if(hasRole){
//   await interaction.member.roles.remove(role);
//   await interaction.editReply(`The role ${role} has been removed`);
//   return;
// }
// await interaction.member.roles.add(role);
// await interaction.editReply(`The role ${role} has been added`);

// } catch (error) {
//   console.log(error);
// }
// });




// send message 





// client.on("interactionCreate", (interaction) => {
//   if (!interaction.isChatInputCommand()) return;

//   if (interaction.commandName === "embed") {
//     const embed = new EmbedBuilder()
//       .setTitle("Embed Title")
//       .setDescription("This is an embed description")
//       .setColor("Random")
//       .addFields({
//         name: "Field-Title",
//         value: "some random value1",
//         inline: true,
//       },
//       {
//         name: "2nd Field-Title",
//         value: "some random value2",
//         inline: true,
//       });

//     interaction.reply({ embeds: [embed] });
//   }
// });

// client.on("messageCreate", (msg) => {
//   console.log(msg.content);
//   if (msg.author.bot) {
//     return;
//   }
//   if (msg.content === "Chicha" || msg.content === "chicha") {
//     msg.reply(
//       "Tatt teri behen ki bur ma , Chacha Chacha karat hai bhosdik bolat nhi hai!!"
//     );
//   }
//   if (
//     msg.content === "gattu" ||
//     msg.content === "Gattu" ||
//     msg.content === "gutts" ||
//     msg.content === "Gutts"
//   ) {
//     msg.reply("Yeh konsa pokemon hai!!! , yeh hai GattuMon !!!");
//   }
//   if (
//     msg.content === "Surendra" ||
//     msg.content === "surendra" ||
//     msg.content === "cycle" ||
//     msg.content === "bawasir"
//   ) {
//     msg.reply("Surendra ki maa ki chut, Bhena ka loda Bawasir!!");
//   }
//   if (msg.author.tag === "stackmuzz#2444") {
//     msg.reply("Cheetah!!!");
//   }
//   if(msg.content==='embed'){
//     const embed = new EmbedBuilder()
//     .setTitle("Embed Title")
//     .setDescription("This is an embed description")
//     .setColor("Random")
//     .addFields({
//       name: "Field-Title",
//       value: "some random value1",
//       inline: true,
//     },
//     {
//       name: "2nd Field-Title",
//       value: "some random value2",
//       inline: true,
//     });
//     msg.channel.send({ embeds: [embed] })
//   }
// });

