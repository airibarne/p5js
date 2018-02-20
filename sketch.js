// CASE 0: no node specified
// Canvas is auto-generated and appended to body.
var sketch = function (p) {

  p.setup = function () {
    width = p.windowWidth;
	height = p.windowHeight;
	p.createCanvas(width, height);
	numberOfWaves = 12;
	theta = 0;
	speed = 0.04;
	p.noStroke();
  };

  p.draw = function () {
    p.background(0);
	for(i=0; i<numberOfWaves; i++) {
		p.drawWave(i);
	}
	theta += speed
	if(theta>100) {
		console.log("alert")
	}
  };

  p.drawWave = function (i) {
    p.randomSeed(123);
	for(x=0; x<=width; x+=10) {
	  	amplitude = p.map(i,0,numberOfWaves-1, 1, 100);
	  	offSet = 2*p.PI/width*x;
	  	y = height/2 + Math.sin(theta+offSet)*amplitude;
	  	p.fill(p.random(255)/numberOfWaves*i,p.random(255)/numberOfWaves*i,p.random(255)/numberOfWaves*i);
	  	p.ellipse(x, y, 4, 4);
  	}
  };
};

new p5(sketch);
