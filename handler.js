
const serverless = require('serverless-http');
const bodyParser = require('body-parser');
const express = require('express');
   
const app = express();
app.use(bodyParser.json({ strict: false}));
const { WebhookClient, Payload, Image, Card, Suggestion } = require('dialogflow-fulfillment');
const Request = require('request');

app.post('/', function (req, res) {
    const agent = new WebhookClient({ request: req, response: res });
    console.log(req);
    function justSayHi(agent) {
        if (agent.paramaters. === 0) {

        }
        agent.add('Hello, dialogflow-fulfillment is working!');
    }

    let intentMap = new Map();
    intentMap.set('justsayhi', justSayHi);

    agent.handleRequest(intentMap);
});

module.exports.server = serverless(app);