var colorR = 79; 
var colorG = 220; 
var colorB = 236; 
 
let laserPointerButton; 

let slider; 

let buttonRed; 
let buttonBlue; 
let buttonGreen;
let buttonPurple;  
let buttonWhite; 
let buttonEraser; 
let buttonChalk;
let clearBoard;  

// var boardW = windowWidth; 
// var boardH = windowHeight - 10; 

function setup() {
	// createCanvas(1070, 600); 
	createCanvas(windowWidth, windowHeight - 36); 
	background(96, 96, 96);

	slider = createSlider(1, 90, 30); 

	buttonRed = createButton('Red');
	buttonRed.mousePressed(brushRed); 

	buttonBlue = createButton('Green');
	buttonBlue.mousePressed(brushGreen);

	buttonBlue = createButton('Purple');
	buttonBlue.mousePressed(brushPurple);

	buttonBlue = createButton('Blue');
	buttonBlue.mousePressed(brushBlue);

	buttonChalk = createButton('White'); 
	buttonChalk.mousePressed(chalk); 

	buttonWhite = createButton('Eraser');
	buttonWhite.mousePressed(brushWhite);

	clearBoard = createButton('Clear'); 
	clearBoard.mousePressed(ClearBoard); 
}

function mouseDragged() {
	var brushRadius = slider.value(); 
	var brushr = brushRadius;
	
	fill(colorR, colorG, colorB); 
	noStroke(); 
	ellipse(mouseX, mouseY, brushr * 2, brushr * 2);
}

function keyPressed() {
	if (keyCode = 67) {
		background(96, 96, 96); 
	}
}

function brushRed() {
	// fill(255, 0, 0); 
	colorR = 255; 
	colorG = 0; 
	colorB = 0; 
}

function brushBlue() {
	// fill(0, 0, 255); 
	colorR = 79; 
	colorG = 220; 
	colorB = 236; 	
}

function brushWhite() {
	// fill(255); 
	colorR = 96; 
	colorG = 96; 
	colorB = 96; 
}

function brushGreen() {
	// fill(255); 
	colorR = 10; 
	colorG = 252; 
	colorB = 42; 
}

function brushPurple() {
	// fill(255); 
	colorR = 102; 
	colorG = 0; 
	colorB = 204; 
}

function chalk() {
	// fill(255); 	
	colorR = 255; 
	colorG = 255; 
	colorB = 255; 
}

function ClearBoard() {
	background(96, 96, 96); 
} 

function draw() {
	cursor(CROSS);
}
