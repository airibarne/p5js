function setup() {
	width = windowWidth;
	height = 300;
	createCanvas(width, height);
	numberOfWaves = 12;
	noStroke();
	theta = 0;
}

function draw() {
	background(0);
	for(i=0; i<numberOfWaves; i++) {
		drawWave(i);
	}
	theta += 0.04;
}


function drawWave(i) {
	randomSeed(123);
	for(x=0; x<=width; x+=10) {
		amplitude = map(i, 0, numberOfWaves-1, 1, 100);
		offSet = 2*PI/width*x
		y = height/2 + sin(theta*offSet)*amplitude;
		fill(random(255)/numberOfWaves*i,random(255)/numberOfWaves*i,random(255)/numberOfWaves*i);
		ellipse(x, y, 4, 4);
	}
};
/*function drawWave(i) {
	randomSeed(123);
	for(x=0; x<=width; x+=10) {
	  	amplitude = map(i,0,numberOfWaves-1, 1, 100);
	  	offSet = 2*PI/width*x;
	  	y = height/2 + sin(theta+offSet)*amplitude;
	  	fill(random(255)/numberOfWaves*i,random(255)/numberOfWaves*i,random(255)/numberOfWaves*i);
	  	ellipse(x, y, 4, 4);
  	}
};*/
