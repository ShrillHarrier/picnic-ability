const http = require('http')
const express = require('express');
const knex = require('knex');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/', (req, res) => {
	res.send("working");
})

app.post('/subscribe', (req, res) => {
	res.send("subscribed");
	console.log("sub sent");
})

app.listen(3001, "192.168.1.17", () => {
	console.log("port 3001");
})

const db = knex({
	client: "pg",
	connection: {
		host: "localhost",
		user: "postgres",
		password: "1357",
		database: "Test"
	}

})

db.select("*").from("subscribers").then(data => {
	console.log(data);
});





