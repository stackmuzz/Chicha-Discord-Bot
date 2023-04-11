const {
  Client,
  IntentsBitField,
  EmbedBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
} = require("discord.js");
require("dotenv").config();

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

// client.on("ready", (c) => {
//   console.log(`${c.user.tag} is online`);
// });

const roles = [
  {
    id: "1095185125957959733", // colour red
    label: "Gandu",
  },
  {
    id: "1095185419626364960", // colour yellow
    label: "Chutiya",
  },
  {
    id: "1095185526329454653", // colour green
    label: "Bhaadu",
  },
];

client.on("ready", async (c) => {
  const channel = await client.channels.cache.get("1095126076574941185");
  try {
    if (!channel) return;

    const row = new ActionRowBuilder();
    roles.forEach((role) => {
      row.components.push(
        new ButtonBuilder()
          .setCustomId(role.id)
          .setLabel(role.label)
          .setStyle(ButtonStyle.Success)
      );
    });

    await channel.send({
      content: "Claim or Remove a role below",
      components: [row],
    });
    process.exit();
  } catch (error) {
    console.log(error);
  }
});

const token = process.env.BOT_TOKEN;
client.login(token);
