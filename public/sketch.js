// There are 2 deployments of this web app. 
// 1. GitHub Pages - https://samyakbambole.github.io/p5.js-Blackboard/public/index.html
// 2. Vercel - https://blackboard.vercel.app/
let colorPicker; 

let slider; 

let clearBoard;  
let improveCode; 

// var boardW = windowWidth; 
// var boardH = windowHeight - 10; 

function setup() {
	// createCanvas(1070, 600); 
	createCanvas(windowWidth, windowHeight - 36); 
	background(96, 96, 96);

	slider = createSlider(1, 90, 20); 

	clearBoard = createButton('Clear'); 
	clearBoard.mousePressed(ClearBoard); 
	
	improveCode = createButton('Improve this app!'); 
	improveCode.mousePressed(improveCodeFunction); 

	colorPicker = createColorPicker('#4fdcec'); 
	colorPicker.position(300, height + 4);
}

function mouseDragged() {
	var brushRadius = slider.value(); 
	var brushr = brushRadius;
	
	fill(colorPicker.color()); 
	noStroke(); 
	ellipse(mouseX, mouseY, brushr * 2, brushr * 2);
}

function keyPressed() {
	if (keyCode = 67) {
		background(96, 96, 96); 
	}
}

function ClearBoard() {
	background(96, 96, 96); 
} 

function draw() {
	cursor(CROSS);
}

function improveCodeFunction() {
	window.open(
		'https://github.com/samyakbambole/p5.js-Blackboard.git', 
		'_blank'
		); 
}
