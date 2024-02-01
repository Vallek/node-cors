const express = require('express');
const cors = require('cors');

const app = express();

// For native form
app.use(express.urlencoded({extended: true})); 

app.use(express.json());
app.use(cors({origin: 'http://localhost:5500'}));

app.post('/', function(request, response){
	response.send('{"form": "vallek"}');
	console.log(request.body);
});

app.listen(2000);