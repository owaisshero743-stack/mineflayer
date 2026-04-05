const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: 'shadowraid.freeservers.cloud',  // <-- Yahan PowerUpStack server IP
  port: 25565,
  username: 'noob_#tr'      // <-- Jo bhi naam chahte ho server me
});

bot.on('spawn', () => {
  console.log('Bot joined server!');

  // AFK jump every 30 sec
  setInterval(() => {
    bot.setControlState('jump', true);
    setTimeout(() => bot.setControlState('jump', false), 500);
  }, 30000);
});

// Optional: Express server for 24/7 uptime
const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Bot Online'));
app.listen(3000, () => console.log('Web server ready'));
