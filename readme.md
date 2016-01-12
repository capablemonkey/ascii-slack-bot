# ascii-bot: an ascii art regurgitating Slack bot

Say `ascii me hello world` and get:

```
  _          _ _                            _     _ 
 | |__   ___| | | ___   __      _____  _ __| | __| |
 | '_ \ / _ \ | |/ _ \  \ \ /\ / / _ \| '__| |/ _` |
 | | | |  __/ | | (_) |  \ V  V / (_) | |  | | (_| |
 |_| |_|\___|_|_|\___/    \_/\_/ \___/|_|  |_|\__,_|

```

Pretty neat, eh? 

Built with botkit and the figlet library.  

## Getting it running

Just clone this repo and do:

```
npm install
```

Then:

```
ASCII_BOT_SLACK_TOKEN=<your slack token> node app.js
```

Replacing `your slack token` with a Slack bot token.

## Contributing

Feel free to fork and suggest changes!

## TODO:

- add support for different fonts
- add support for random font
- add cowsay support