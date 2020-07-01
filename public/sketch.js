var colorR = 79; 
var colorG = 220; 
var colorB = 236; 

let slider; 

let buttonRed; 
let buttonBlue; 
let buttonGreen;
let buttonPurple;  
let buttonWhite; 
let buttonEraser; 

function setup() {
	createCanvas(1070, 600); 
	background(96, 96, 96);
	slider = createSlider(1, 70, 30); 

	buttonRed = createButton('Red');
	buttonRed.mousePressed(brushRed); 

	buttonBlue = createButton('Green');
	buttonBlue.mousePressed(brushGreen);

	buttonBlue = createButton('Purple');
	buttonBlue.mousePressed(brushPurple);

	buttonBlue = createButton('Blue');
	buttonBlue.mousePressed(brushBlue);

	buttonWhite = createButton('Eraser');
	buttonWhite.mousePressed(brushWhite);
}

function mouseDragged() {
	var brushRadius = slider.value(); 
	var brushr = brushRadius;
	
	fill(colorR, colorG, colorB); 
	noStroke(); 
	ellipse(mouseX, mouseY, brushr * 2, brushr * 2);
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

function keyPressed() {
	if (key = 'c') {
		background(96, 96, 96); 
	}
}

function draw() {

}