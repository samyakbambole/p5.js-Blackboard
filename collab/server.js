console.log('Server running'); 
console.log('If you want to save space on your Computer, use one of these deployments'); 
console.log('Vercel Deployment - https://blackboard.vercel.app/');
console.log('GitHub Pages Deployment - https://samyakbambole.github.io/p5.js-Blackboard/public/index.html');  

const express = require('express'); 
const app = express(); 
const server = app.listen(3030, listening);

const chalk = require('chalk'); 
const Datastore = require('nedb'); 

const database = new Datastore('connections.db'); 
database.loadDatabase(); 

const mouseDatabase = new Datastore('mouse.db'); 
mouseDatabase.loadDatabase(); 

function listening() {
	console.log(chalk.blue('Listening on http://localhost:3030')); 
}

app.use(express.static('public'));

const socket = require('socket.io'); 
const io = socket(server); 

io.sockets.on('connection', newConnection); 

function newConnection(socket) {
	console.log('New connection!');
	database.insert({socket_id: socket.id, time: socket.handshake.time}); 

	socket.on('mouse', mouseMsg); 

	function mouseMsg (data) {
		console.log(data);
		socket.broadcast.emit('mouse', data); 
		mouseDatabase.insert({data: data}); 
	}
}