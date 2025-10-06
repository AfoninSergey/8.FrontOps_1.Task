const express = require('express');
const { default: fetch } = require('node-fetch');

const app = express();

const PORT = 3000;
const DATE_SERVER_HOST = process.env.DATE_SERVER_HOST || "http://localhost:3005/";

app.get('/', (req, res) => {
	// res.send('Hello, Result!')
	fetch(DATE_SERVER_HOST)
		.then((response) => response.json())
		.then((date) => {
			res.send(`Hello, Result! Now is ${date}`)
			console.log('date', date)
		});
});

app.listen(PORT, () => console.log(`Ready on port: ${PORT}`));
