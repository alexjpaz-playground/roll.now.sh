const express = require('express')
const app = express()
const Roll = require('roll'),
    roll = new Roll();

const bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

app.post('/slack', function (req, res) {
    const result = roll.roll(req.body.text);
    const response = {
        "response_type": "in_channel",
        "text": `${req.body.user_name} rolled ${req.body.text}: ${result.rolled} = ${result.result}`,
    };
    res.json(response);
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})
