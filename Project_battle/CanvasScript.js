const canvas = document.querySelector('canvas');
		const ctx = canvas.getContext('2d');
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		canvas.backgroundColor='black';
		marr=[];
		let hue = 1;
		if (hue > 360) {
			hue = 0;
		}
		class Mouse {
			constructor(){
			this.x= 10+ Math.random() * (canvas.width-10);
			this.y= 10+ Math.random() * (canvas.height-10) ;
			this.dx= 2+Math.random() * 8;
			if(Math.random>0.4){
				this.dx=-this.dx;
			}
			this.dy= 2+Math.random() * 8;
			if(Math.random>0.5){
				this.dy=-this.dy;
			}
			
			this.hue=Math.floor(Math.random()*360);
			this.parr=[];
			}
			move= function(params) {
				this.x=this.x+this.dx;
		  		  this.y=this.y+this.dy;
					// console.log(this.x+" "+this.y);
		   		if(this.x>innerWidth||this.x<0){
		   			this.dx=-this.dx;
		   		}
		   		if(this.y>innerHeight||this.y<0){
		   			this.dy=-this.dy;
		   		}
				   for (let i = 0; i < 3; i++) {
			       this.parr.push(new Particle(this.x,this.y,this.hue));

		}
			}
		}
		for (let i = 0; i < 30; i++) {
			marr.push(new Mouse());
			
		} 
		// canvas.addEventListener('click', (e) => {


		// })
		// canvas.addEventListener('mousemove', (e) => {
		// 	Mouse.x = e.x;
		// 	Mouse.y = e.y;


		// })
		class Particle {
			constructor(x,y,hue) {
				this.x = x;
				this.y = y;
				this.size = 2;
				this.hue=hue;
				this.dx = Math.random() * 2 - 1;
				this.dy = Math.random() * 2 - 1;
				this.clr = `hsl(${this.hue},100%,50%)`;
			}
			draw() {
				ctx.fillStyle = this.clr;
				ctx.beginPath();
				// console.log("========================="+this.x+" "+this.y)
				ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
				ctx.fill();
			}
			update() {
				// this.x += this.dx;
				// this.y += this.dy;
				if (this.size > 0.1) {
					this.size -= 0.07;
				}
				// canvas.style.backgroundColor = `hsl(${hue},100%,50%)`;
			}
		}
		// for (let i = 0; i < 5; i++) {
		// 	parr.push(new Particle());

		// }
		// function init() {
		//     for (let i = 0; i < 1; i++) {
		//         parr.push(new Particle());
		//     }

		// }

		function handle() {
			for (let j = 0; j < marr.length; j++) {
				for (let i = 0; i < marr[j].parr.length; i++) {
				marr[j].parr[i].update();
				marr[j].parr[i].draw();
				if (marr[j].parr[i].size < 0.2) {
					marr[j].parr.splice(i, 1);
					i--;
				}
			}
				
			}
			
		}

		// function circle() {
		//     ctx.fillStyle='aqua';
		//     ctx.beginPath();
		//     ctx.arc(Mouse.x,Mouse.y,10,0,Math.PI*2);
		//     ctx.linewidth=5;
		//     ctx.strokeStyle="aqua";
		//     ctx.stroke();
		// }

		function animate() {
			// ctx.clearRect(0,0,canvas.width,canvas.height);
			ctx.fillStyle = 'rgba(0,0,0,0.5)';
			ctx.fillRect(0, 0, canvas.width, canvas.height);
			for (let i = 0; i < marr.length; i++) {
				marr[i].move();
				// marr[i].hue++;
			}
			handle();
			
			requestAnimationFrame(animate);

			// circle();
		}
		animate()
	