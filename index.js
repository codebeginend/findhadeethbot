const Telegraf = require('telegraf')
 
const bot = new Telegraf('823203998:AAGOTjIzNdvPHFpDTn_v3jdTJuLxhjgFJHg')
bot.start((ctx) => {
    console.log('Id пользователя:', ctx.from.id);
    return ctx.reply('Добро пожаловать!');
  });