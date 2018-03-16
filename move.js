<!DOCTYPE html><html><head>
<script type='text/javascript'>

onload = function(){


	/*htmlの準備*/
	var canvas = document.createElement('canvas');
	var ctx = canvas.getContext('2d');
	document.getElementsByTagName('body')[0].appendChild(canvas);
	canvas.width=window.innerWidth;
	canvas.height=window.innerHeight;

	/*imageの準備*/
	var images = [4];

	images[0] = new Image();
	images[0].src = "./images/test/0.gif";
	images[1] = new Image();
	images[1].src = "./images/test/1.gif";
	images[2] = new Image();
	images[2].src = "./images/test/2.gif";
	images[3] = new Image();
	images[3].src = "./images/test/3.gif";

	/*動かす*/
	var dx = 1;
	var dy = 0;
	var posX,posY;

	var nSlide=0;
	var hogeMove = setInterval(function(){
		posX += dx;
		if(posX<0)posX=0;
		if(posX>window.innerWidth)posX=window.innerWidth;		
		posY += dy;
		if(posY<0)posY=0;
		if(posY>window.innerHeight)posY=window.innerHeight

		ctx.drawImage(images[nSlide],posX,posY);
		if(++nSlide>images.length-1)nSlide=0
	},100);

	/*動画を変化させる*/
	var hogeMotion = setInterval(function(){
			nSlide++;
			if(nSlide>images.length)nSlide=0;
	},500);

}



</script>
</head><body><div></div></body></html>

