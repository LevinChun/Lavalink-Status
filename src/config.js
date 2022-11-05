module.exports = {
  token: "Bot Token",
  channel: "ChannelId",

  nodes: [
    {
      host: "49.12.8.143",
      password: "SevenDev",
      port: 2024,
      retryDelay: 300000,
      retryAmount: 25,
      identifier: "Lavalink Node 1",
      secure: true,
    },
    {
      host: "kartadharta.xyz",
      password: "kdlavalink",
      port: 3000,
      retryDelay: 300000,
      retryAmount: 25,
      identifier: "Lavalink Node 2",
      secure: false,
    },
    {
      host: "",
      password: "",
      port: 443,
      retryDelay: 300000,
      retryAmount: 25,
      identifier: "Lavalink Node 3",
      secure: true,
    },
  ],
};
