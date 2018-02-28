var eyeR = function (p) {
	var width = p.windowWidth;
	var height = p.windowHeight;
	var backgroundColor = "#fbbe3c";
	var eyeColor = "#f9b732";
	var pupilColor = "#102a54";
	var wide;
	p.setup = function () {
		var canvas = p.createCanvas(width/2, height);
		canvas.parent('eyes');
		p.noStroke();
	};
	this.r2 = p.windowWidth/10;
	p.draw = function () {
	  	this.cX = p.windowWidth/4;
	  	this.cY = p.windowHeight/2;
	  	this.r0 = p.windowWidth/5;
	  	this.r1 = p.windowWidth/4;
	  	if(!wide) {
	  		if(this.r2 > p.windowWidth/10) {
	  			this.r2-=(p.windowWidth/10)*0.05;
		  	} else {
		  		this.r2 = p.windowWidth/10;
	  		}
	  	}
	  	p.background(backgroundColor);
	  	// Background circle with darker yellow
	  	p.fill(eyeColor);
		p.ellipse(this.cX, this.cY, this.r1, this.r1);
		// White bottom semicircle 
	  	p.fill(255);
	  	p.arc(this.cX, this.cY, this.r0, this.r0,Math.PI*p.closeness, Math.PI*(1-p.closeness), p.CHORD);
	  	// Blue pupil
	  	p.fill(pupilColor);
	  	// Gotta find the arc's angle to simulate the closing eye with fixed pupil
	  	if(p.abs(2*p.sin(Math.PI*p.closeness))<1) {
	  		this.pupilTheta = p.asin(2*p.sin(Math.PI*p.closeness));
	  	} else {
	  		this.pupilTheta = Math.PI/2;
	  	}
	  	p.arc(this.cX,this.cY,this.r2,this.r2,this.pupilTheta,Math.PI-this.pupilTheta,p.CHORD);
	  	// 
	  	p.fill(backgroundColor);
	  	p.arc(this.cX, this.cY, this.r0, this.r0, Math.PI*(1-p.closeness)+Math.PI*0.07, Math.PI*p.closeness-Math.PI*0.07, p.CHORD);
	  	// The eye will wide-open when mouse is clicked. 
	  	// We want the animation to last a fixed amount of time so we need time wideStart
	  	p.mouseClicked = function() {
			wide = true;
			wideStart = p.second();
		}; 
		// The eye will wink at random times. Decrease 300 to make winking more probable. 
		if(Math.floor(300*Math.random())==100) {
			this.wink = true;
		}
		// Wink effect
		if(this.wink && !wide) {
	  		if(p.closeness < 0.499) {
	  			p.closeness+=0.5/3; // close the eye 'till closeness = 0.5 (fully closed)
	  		} else {
	  			this.wink = false; // when fully closed
	  		}
	  	} else {
	  		if(!wide) { // if there's not wide-open animation running
	  			if(p.closeness<0) {
	  				p.closeness += 0.04; 
	  			} else {
	  				p.closeness = 0; 
	  			}
	  		} else {
	  			this.wink = false; // don't want to "accumulate" wink during wide-open
	  		}
	  	}
	  	// Wide-open animation
	  	if(wide) {
	  		if((p.second() % 60) < (wideStart + 4 % 60)) {
	  			if(p.closeness>-0.39) {
	  				p.closeness-=0.04;
	  			} else {
	  				p.closeness = -.43;
	  			}
	  			if(this.r2 < p.windowWidth/5.5) {
	  				this.r2+=(p.windowWidth/10)*0.05;
	  			} else {
	  				this.r2 = p.windowWidth/5.5;
	  			}
	  		} else {
	  			wide = false; 			
	  		}
	  	}
	};	
};

new p5(eyeR);