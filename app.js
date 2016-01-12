var Botkit = require('botkit');
var figlet = require('figlet');

var controller = Botkit.slackbot({
  debug: false
  //include "log: false" to disable logging
  //or a "logLevel" integer from 0 to 7 to adjust logging verbosity
});

// connect the bot to a stream of messages
controller.spawn({
  token: process.env.ASCII_BOT_SLACK_TOKEN,
}).startRTM()

controller.hears(['^ascii me (.*)'],['ambient'],function(bot,message) {
  var x = message.match[1];

  figlet(x, function(err, data) {
    bot.reply(message, '```' + data + '```');
  });
});

