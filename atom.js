	
var atom = function(p) {
	/* Parametrize the sketch */
	var r0 = 300; // size of the pattern
	var dr = 25; // step between circles
	var shake, temp, k, lineDensity, alpha, speed, x, y;

	p.setup = function () {
		var canvas = p.createCanvas(p.windowWidth, p.windowHeight-5);
		canvas.parent('atom');
	}

	p.draw = function () {	
		/* Centre the pattern at the middle of the screen */
		var x0 = p.windowWidth/2;
		var y0 = p.windowHeight/2;
		if(p.mouseIsPressed) {
			shake=true;
			temp++;
		} else {
			shake=false;
			temp=0;
		}
		lineDensity = temp; // number of connections drawed
		speed = temp/50;
		p.background(68,61,107);
		k = 0;
		size = 15;
		sizeStep = 1;
		dots = [];
		p.fill(255,123,79);
		for(r = dr; r <= r0; r+=dr) {
			k += 1;
			size -= sizeStep;
			for (alpha = 0; alpha < 2*Math.PI; alpha += Math.PI/(3*k)) {
				x = x0 + r*Math.cos(alpha)
				y = y0 + r*Math.sin(alpha)
				dots.push([x,y]);
				p.noStroke();
				bug = new p.Dot(x,y,size);
				if(shake) bug.move(speed);
				bug.display();
			}	
		}
		p.stroke(0,60);
		if(shake)
			for(i = 0; i<lineDensity; i++) {
				indexA = Math.floor(Math.random()*dots.length)
				indexB = Math.floor(Math.random()*dots.length)
				p.line(dots[indexA][0],dots[indexA][1],dots[indexB][0],dots[indexB][1])
			}
	}

	// Dot class
	p.Dot = function (width, height, diameter) {
	  this.x = width;
	  this.y = height;

	  this.move = function(speed) {
	    this.x += speed*(2*Math.random()-1);
	    this.y += speed*(2*Math.random()-1);
	  };

	  this.display = function() {
	    p.ellipse(this.x, this.y, diameter, diameter);
	  };
	};
}

new p5(atom);