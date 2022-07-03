// importing modules
require('dotenv').config()
const https = require('node:https');
const fs = require('node:fs');
const path = require('path')
const app = require('../app')

// import enviroment variables
const PORT = process.env.PORT || 443

// https server options
const options = {
  key: fs.readFileSync(path.join(__dirname,'localCERT/key.pem')),
  cert: fs.readFileSync(path.join(__dirname,'localCERT/cert.pem')),
  passphrase: 'hisham'
};

// creating https server with express app
https.createServer(options,app).listen(PORT);