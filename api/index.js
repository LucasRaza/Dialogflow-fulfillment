const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    const { WebhookClient } = require('dialogflow-fulfillment');
    const agent = new WebhookClient({ Request: req, Response: res });
    console.log('This is the request' + req);

    function justSayHi(agent) {
        agent.add('hello from dialogflow');
    }
    let intentMap = new Map();
    intentMap.set('justsayhi', justSayHi);
    agent.handleRequest(intentMap);
});

module.exports = router;