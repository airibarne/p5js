var band = function (p) {
	var width = p.windowWidth;
	var height = p.windowHeight;
	var theta = 0;
	var speed = 0.04;
	var numberOfWaves = 12;
	p.setup = function () {
		var canvas = p.createCanvas(width, height);
		canvas.parent('band');
		p.noStroke();
	  };

	  p.draw = function () {
	    if(p.mouseIsPressed) {
			speed+=0.005;
		} else {
			if(speed>0.04) {
				speed-=0.01;
				//console.log(speed);
			}
		}
	    p.background(0);
		for(i=0; i<numberOfWaves; i++) {
			p.drawWave(i);
		}
		theta += speed;
	  };

	  p.drawWave = function (i) {
	    p.randomSeed(123);
		for(x=0; x<=p.windowWidth; x+=10) {
		  	this.amplitude = p.map(i,0,numberOfWaves-1, 1, 100);
		  	this.offSet = 2*p.PI/p.windowWidth*x;
		  	y = p.windowHeight/2 + Math.sin(theta+this.offSet)*this.amplitude;
		  	p.fill(p.random(255)/numberOfWaves*i,p.random(255)/numberOfWaves*i,p.random(255)/numberOfWaves*i);
		  	p.ellipse(x, y, 4, 4);
	  	}
	  };
	};

new p5(band);