var Botkit = require('botkit');
var figlet = require('figlet');
var droplet = require('./droplet.json');

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

controller.hears(['^ascii animate droplet'], ['ambient'], function(bot, message) {
  bot.api.chat.postMessage({
    channel: message.channel,
    as_user: true,
    text: 'get ready'
  }, function(err, res) {
    message_id = res.ts

    function update(frame) {
      bot.api.chat.update({
        channel: message.channel,
        ts: message_id,
        text: '```' + frame + '```'},
        function(err, res) {console.log(err); console.log(res)});
    }

    var idx = 0;
    var intervalId = setInterval(function(){
      update(droplet.content[idx].text);
      idx++;
      idx = idx % droplet.content.length;
    }, 250);
  });
});