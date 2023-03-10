//Dependencies
const express = require('express');
const app = express();

app.use(express.json());

//Handling Get request for / URI
app.get('/', (req, res) => {
    res.send('Express App Running');
});

app.get('/time', (req, res) => {
    const time = Date.now();
    res.send('çurrent time ' + time);
});

app.post('/post', (req, res) => {
    res.send('post request');
});

app.post('/getTemp', function (req, res) {
    const temp = req.query.temp;
    const air = req.query.air;
    if (air && temp) {
        res.send("Sensor reading : Temp = " + temp + " | Air = " + air);
    } else {
        res.send("Temp and Air query parameter is not set in request");
    }
});

app.post('/handleJSON', function (req, res) {
    console.log(req.body);
    const temp = req.body.temp;
    const uid = req.body.sensor.uid;
    if (temp) {
        //UpdateDB(temp)
        res.send("Sensor 1 reading = " + temp + " | UID: " + uid);
    } else {
        res.send("Temp JSON parameter is not set in request");
    }
});

//Deploying the listener
const port = process.env.port || 3000;
app.listen(port, () => console.log(`Express server listening on port ${port}`));
