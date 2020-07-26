const http = require('http')
const express = require('express');
const knex = require('knex');
const cors = require('cors');
const bp = require('body-parser');

const app = express();
app.use(cors());
app.use(express.json());
app.use(bp.urlencoded({extended: false}));
app.use(bp.json());

app.get('/', (req, res) => {
	res.send("working");
})

app.get('/blogs', (req, res) => {
	db.select('*').from('blogs')
	.then(data => {
		res.json(data)
	})
	console.log("blogs sent");
})

app.post('/subscribe', (req, res) => {
	console.log(req.body);
	db('subscribers').insert([{email: req.body.email, country: req.body.country}])
	.then(res.send("subscribed"));
	db.select('*').from('subscribers').then(data => {
	console.log(data)});
	console.log("sub sent");
})

app.listen(3001, "192.168.1.17", () => {
	console.log("Connected to the port 3001.");
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





