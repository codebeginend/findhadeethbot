
const config = require('./config.json')
const TelegramBot = require('node-telegram-bot-api');
const token = config.token;

const bot = new TelegramBot(token, { polling: true });

var answerCallbacks = {};

bot.on('message', function (message) {
    var callback = answerCallbacks[message.chat.id];
    if (callback) {
        delete answerCallbacks[message.chat.id];
        return callback(message);
    }
});

bot.onText(/search/, function (message,match) {
    bot.sendMessage(message.chat.id, "Введите ключевое слово").then(function () {
        answerCallbacks[message.chat.id] = function (answer) {
            var name = answer.text;
            var text = "";
            if(name == "by"){
                text = "good by"
            }else{
                text = "Ошибка запроса"
            }
            bot.sendMessage(message.chat.id, text);
        }
    });
});

