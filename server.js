const express = require('express');
//entry file-- bring an express.. run a express server

const app = express();
//initialize app variable

app.get('/', (req, res) => res.send('API Running'));
//end point-- get request to slash

//get the app variable listen to port
const PORT = process.env.PORT || 5000; 
//environment variable- not set goes to 5000

app.listen(PORT, () => console.log('Server started on port ${PORT}'));

