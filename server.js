console.log('Server running'); 
console.log('If you want to save space on your Computer, use one of these deployments'); 
console.log('Vercel Deployment - https://blackboard.vercel.app/');
console.log('GitHub Pages Deployment - https://samyakbambole.github.io/p5.js-Blackboard/public/index.html');  

var express = require('express'); 
var app = express(); 
var server = app.listen(3030, listening);

function listening() {
	console.log('Listening on http://localhost:3030'); 
}

app.use(express.static('public'));