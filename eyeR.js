var eyeR = function (p) {
	var width = p.windowWidth;
	var height = p.windowHeight;
	var backgroundColor = "#fbbe3c";
	var eyeColor = "#f9b732";
	var pupilColor = "#102a54";
	p.setup = function () {
		var canvas = p.createCanvas(width/2, height);
		canvas.parent('eyes');
	};

	p.draw = function () {
	  	this.cX = p.windowWidth/4;
	  	this.cY = p.windowHeight/2;
	  	this.r0 = p.windowWidth/5;
	  	this.r1 = p.windowWidth/4;
	  	this.closeness = p.map(p.mouseY,0,p.windowHeight,0,0.15); 
	  	p.background(backgroundColor);
		p.noStroke();
	  	p.fill(eyeColor);
		// p.stroke(eyeColor);
		p.ellipse(this.cX, this.cY, this.r1, this.r1);
	  	p.fill(255);
	  	// p.stroke(255);
	  	p.arc(this.cX, this.cY, this.r0, this.r0, Math.PI*this.closeness, Math.PI*(1-this.closeness), p.CHORD);
	  	p.fill(pupilColor);
	  	p.arc(this.cX,this.cY,this.r0/2,this.r0/2,0,Math.PI,p.CHORD);
	  	p.fill(backgroundColor);
	  	// p.stroke(backgroundColor);
	  	p.arc(this.cX, this.cY, this.r0, this.r0, Math.PI*(1-this.closeness)+Math.PI*0.07, Math.PI*this.closeness-Math.PI*0.07, p.CHORD);
	};
};

new p5(eyeR);