//global variable

//song
var canon=document.createElement('audio');
var furelise=document.createElement('audio');
var notalone=document.createElement('audio');//300-343
var odetojoy=document.createElement('audio');
//src song
canon.src="Assets/Music/Canon.mp3";
furelise.src="Assets/Music/Fur Elise.mp3";
notalone.src="Assets/Music/Not Alone.mp3";
odetojoy.src="Assets/Music/Ode To Joy.mp3";


window.onload=function()
{
	var cvs=document.getElementById("canvas");
	var ctx=cvs.getContext('2d');
	
	//temp
	var key="E";
	var key2="E";
	
	var can=false;
	var fur=false;
	var notal=false;
	var odeto=false;	
	
	buttonBoard(ctx);
	board(ctx);
	guideText(ctx);
	
	whitekey(ctx);
	blackkey(ctx);
	keytext(ctx);	
	
	printtext(ctx,key,key2);
	keydown(ctx);
	keyup(ctx);
	mouseEvent(cvs,ctx);
	mouseEventSong(cvs,ctx);
	lampPlace(ctx);
}

function guideText(ctx)
{
	ctx.fillStyle="#F16900";
	ctx.fillRect(0,5,500,194);
	
	ctx.fillStyle="black";
	ctx.font="30px arial bold"
	ctx.fillText("Virtual Piano",40,110);
	ctx.font="10px arial bold"
	ctx.fillText("Press ESC to Exit",80,130);
}

function keyup(ctx)
{
	window.addEventListener("keyup",doKeyUp)
	function doKeyUp(e)
	{
		whitekey(ctx);
		blackkey(ctx);
		keytext(ctx);
		lampPlace(ctx)
	}
}

function lampPlace(ctx)
{
	ctx.fillStyle="#676767";
	ctx.fillRect(50,5,100,50);
}

function lampOn(ctx)
{
	ctx.fillStyle="#26E84E";
	ctx.fillRect(50,5,100,50);
}

function buttonBoard(ctx)
{
	//the board
	ctx.fillStyle="#F16900";
	ctx.fillRect(370,5,500,194);
	
	//the button
	ctx.fillStyle="#964242";
	ctx.fillRect(638,45,112,50);
	ctx.fillRect(754,45,112,50);
	ctx.fillRect(638,100,112,50);
	ctx.fillRect(754,100,112,50);
	
	//play&pause
	ctx.fillRect(788,155,50,40);//stop
	ctx.fillRect(727,155,50,40);//pause
	ctx.fillRect(665,155,50,40);//play
	
	//the text
	ctx.fillStyle="Black";
	ctx.font="30px Arial solid black";
	ctx.fillText("Canon",656,78);
	ctx.fillText("Fur Elise",758,78);
	
	ctx.font="22px Arial solid black";
	ctx.fillText("Ode to Joy",758,132);
	ctx.fillText("Not Alone",650,132);
	
	//button text
	ctx.font="20px Arial solid black";
	ctx.fillText("Play",670,184);
	ctx.fillText("Pause",729,184);
	ctx.fillText("Stop",795,184);
}

function board(ctx)
{	
	//the board
	ctx.fillStyle="#F16900";
	ctx.fillRect(235,50,400,100);
}

function printtext(ctx,key,key2)
{
	//the status text
	ctx.fillStyle="black";
	ctx.font="20px arial bold";
	ctx.fillText(key,300,110);
	ctx.fillText("Keyboard: "+key2,450,110);
}

function mouseEventSong(cvs,ctx)
{
	var posX=0;
	var posY=0;
	
	cvs.addEventListener("mousemove",function(e)
	{
		console.log(e.pageX+" : "+e.pageY);
		var boundRect=cvs.getBoundingClientRect();
		posX=e.pageX-boundRect.left;
		posY=e.pageY;
	});
	
	cvs.addEventListener("mousedown",function(e)
	{	
		//Song text
		if((posX>=638 && posX<=750) && (posY>=245 && posY<=292))
		{
				can=true;
				fur=false;
				notal=false;
				odeto=false;
				
				buttonBoard(ctx);
				ctx.clearRect(235,50,400,100);
				board(ctx);
				
				
				key="Canon";
				key2="";
				
				ctx.strokeStyle = "yellow";
				ctx.lineWidth = 3;
				ctx.strokeRect(638,45,112,50);
		}
		else if((posX>=754 && posX<=866) && (posY>=245 && posY<=292))
		{
				can=false;
				fur=true;
				notal=false;
				odeto=false;
				
				buttonBoard(ctx);
				ctx.clearRect(235,50,400,100);
				board(ctx);
				
				key="Fur Elise";
				key2="";
				
				ctx.strokeStyle = "yellow";
				ctx.lineWidth = 3;
				ctx.strokeRect(754,45,112,50);
		}
		else if((posX>=638 && posX<=750) && (posY>=300 && posY<=343))
		{
				can=false;
				fur=false;
				notal=true;
				odeto=false;
				
				buttonBoard(ctx);
				ctx.clearRect(235,50,400,100);
				board(ctx);
				
				key="Not Alone";
				key2="";
				
				ctx.strokeStyle = "yellow";
				ctx.lineWidth = 3;
				ctx.strokeRect(638,100,112,50);
		}
		else if((posX>=754 && posX<=866) && (posY>=300 && posY<=343))
		{
				can=false;
				fur=false;
				notal=false;
				odeto=true;
				
				buttonBoard(ctx);
				ctx.clearRect(235,50,400,100);
				board(ctx);
				
				key="Ode To Joy";
				key2="";
				
				ctx.strokeStyle = "yellow";
				ctx.lineWidth = 3;
				ctx.strokeRect(754,100,112,50);
		}
		
		//pause
		if((posX>=665 && posX<=715) && (posY>=356 && posY<=393))
		{
			buttonBoard(ctx);	
			
			if(can==true)
			{
				
				canon.play();
				
				furelise.pause();
				furelise.currentTime=0;
				notalone.pause();
				notalone.currentTime=0;
				odetojoy.pause();
				odetojoy.currentTime=0;
			}
			else if(fur==true)
			{
				furelise.play();
				
				canon.pause();
				canon.currentTime=0;	
				notalone.pause();
				notalone.currentTime=0;
				odetojoy.pause();
				odetojoy.currentTime=0;
			}
			else if(notal==true)
			{
				notalone.play();
				
				canon.pause();
				canon.currentTime=0;	
				furelise.pause();
				furelise.currentTime=0;
				odetojoy.pause();
				odetojoy.currentTime=0;
			}
			else if(odeto==true)
			{
				odetojoy.play();
				
				canon.pause();
				canon.currentTime=0;	
				furelise.pause();
				furelise.currentTime=0;
				notalone.pause();
				notalone.currentTime=0;	
			}
			
			ctx.strokeStyle = "yellow";
			ctx.lineWidth = 3;
			ctx.strokeRect(665,155,50,40);
		}
		else if((posX>=727 && posX<=777) && (posY>=356 && posY<=393))
		{				
			buttonBoard(ctx);
			
			canon.pause();
			furelise.pause();
			notalone.pause();
			odetojoy.pause();
			
			ctx.strokeStyle = "yellow";
			ctx.lineWidth = 3;
			ctx.strokeRect(727,155,50,40);
		}
		else if((posX>=788 && posX<=838) && (posY>=356 && posY<=393))
		{
			buttonBoard(ctx);
			
			canon.pause();
			canon.currentTime=0;	
			furelise.pause();
			furelise.currentTime=0;
			notalone.pause();
			notalone.currentTime=0;
			odetojoy.pause();
			odetojoy.currentTime=0;
			
			ctx.strokeStyle = "yellow";
			ctx.lineWidth = 3;
			ctx.strokeRect(788,155,50,40);
		}
		
		ctx.clearRect(235,50,400,100);
		board(ctx);
		printtext(ctx,key,key2);
		
	});
}

function keydown(ctx)
{
	//Key Pressed
	window.addEventListener("keydown",onKeyDown);
	function onKeyDown(e)
	{
		var str=String.fromCharCode(e.keyCode);
		console.log(str+" : "+e.keyCode);
		
		if(e.keyCode==27)
			{
				location.replace("index.html");
			}
		
		
		switch(str)
				{
				case 'E': case 'e':
					var audio = new Audio("Assets/Tune/E.mp3");
					audio.play();
										
					//animasi
					ctx.fillStyle = '#5CC2DB'; 
					ctx.fillRect(62,200,30,200);//e
					
					ctx.fillStyle='black';
					ctx.fillRect(46,200,30,125);//d#
					ctx.font="14px arial";
					ctx.fillText("E",70,385);
					
					ctx.font="14px arial";
					ctx.fillStyle='white';
					ctx.fillText("D#",51,315);
						
					ctx.clearRect(235,50,400,100);
					board(ctx);
					key='E';
					key2='E';
					break;
				case 'U': case 'u':
					var audio = new Audio("Assets/Tune/B.mp3");
					audio.play();
					
					//animasi
					ctx.fillStyle = '#5CC2DB'; 
					ctx.fillRect(186,200,30,200);//b
					
					ctx.fillStyle='black';
					ctx.fillRect(170,200,30,125);//rect key # --A#
					ctx.font="14px arial";
					ctx.fillText("B",194,385);//text key biasa
					
					ctx.font="14px arial";
					ctx.fillStyle='white';
					ctx.fillText("A#",175,315);//text key #
					
					ctx.clearRect(235,50,400,100);
					board(ctx);
					key='B';
					key2='U';
					break;
				case 'P': case 'p':
					var audio = new Audio("Assets/Tune/E'.mp3");
					audio.play();
					
					//animasi
					ctx.fillStyle = '#5CC2DB'; 
					ctx.fillRect(279,200,30,200);//e'
					
					ctx.fillStyle='black';
					ctx.fillRect(263,200,30,125);//d#'
					ctx.font="14px arial";
					ctx.fillText("E'",287,385);
					
					ctx.font="14px arial";
					ctx.fillStyle='white';
					ctx.fillText("D#'",266,315);
					
					ctx.clearRect(235,50,400,100);
					board(ctx);
					key="E'";
					key2='P';
					break;
				case 'F': case 'f':
					var audio = new Audio("Assets/Tune/B'.mp3");
					audio.play();
					
					//animasi
					ctx.fillStyle = '#5CC2DB'; 
					ctx.fillRect(403,200,30,200);//b'
					
					ctx.fillStyle='black';
					ctx.fillRect(387,200,30,125);//a#'
					ctx.font="14px arial";
					ctx.fillText("B'",412,385);
					
					ctx.font="14px arial";
					ctx.fillStyle='white';
					ctx.fillText("A#'",390,315);
					
					ctx.clearRect(235,50,400,100);
					board(ctx);
					key="B'";
					key2='F';
					break;
				case 'J': case 'j':
					var audio = new Audio("Assets/Tune/E''.mp3");
					audio.play();
					
					//animasi
					ctx.fillStyle = '#5CC2DB'; 
					ctx.fillRect(496,200,30,200);//e''
					
					ctx.fillStyle='black';
					ctx.fillRect(480,200,30,125);//d#''
					ctx.font="14px arial";
					ctx.fillText("E''",502,385);
					
					ctx.font="14px arial";
					ctx.fillStyle='white';
					ctx.fillText("D#''",482,315);
					
					
					ctx.clearRect(235,50,400,100);
					board(ctx);
					key="E''";
					key2='J';
					break;
				case 'X': case 'x':
					var audio = new Audio("Assets/Tune/B''.mp3");
					audio.play();
					
					//animasi
					ctx.fillStyle = '#5CC2DB'; 
					ctx.fillRect(620,200,30,200);//B''
					
					ctx.fillStyle='black';
					ctx.fillRect(604,200,30,125);//A#''
					ctx.font="14px arial";
					ctx.fillText("B''",628,385);
					
					ctx.font="14px arial";
					ctx.fillStyle='white';
					ctx.fillText("A#''",607,315);
					
					ctx.clearRect(235,50,400,100);
					board(ctx);
					key="B''";
					key2='X';
					break;
				case 'B': case 'b':
					var audio = new Audio("Assets/Tune/E'''.mp3");
					audio.play();
					
					//animasi
					ctx.fillStyle = '#5CC2DB'; 
					ctx.fillRect(713,200,30,200);//E'''
					
					ctx.fillStyle='black';
					ctx.fillRect(697,200,30,125);//D#'''
					ctx.font="14px arial";
					ctx.fillText("E'''",718,385);
					
					ctx.font="14px arial";
					ctx.fillStyle='white';
					ctx.fillText("D#'''",697,315);
					
					ctx.clearRect(235,50,400,100);
					board(ctx);
					key="E'''";
					key2='B';
					break;
				case '\xBC':
					var audio = new Audio("Assets/Tune/A'''.mp3");
					audio.play();
					
					ctx.fillStyle = '#5CC2DB'; 
					ctx.fillRect(806,200,30,200);//A'''
					
					ctx.fillStyle='black';
					ctx.fillRect(790,200,30,125);//G#'''
					ctx.fillRect(821,200,30,125);//A#'''
					ctx.font="14px arial";
					ctx.fillText("A'''",811,385);
					
					ctx.font="14px arial";
					ctx.fillStyle='white';
					ctx.fillText("G#'''",790,315);
					ctx.fillText("A#'''",821,315);
					
					ctx.clearRect(235,50,400,100);
					board(ctx);
					key="A'''";
					key2=',';
					break;
				}
					
			if(!event.shiftKey){
				switch(str)
				{
				case 'Q': case 'q':
					var audio = new Audio("Assets/Tune/C.mp3");
					audio.play();
					
					//animasi
					ctx.fillStyle ='#5CC2DB'; 
					ctx.fillRect(0,200,30,200);//C
					
					ctx.fillStyle='black';
					ctx.fillRect(15,200,30,125);//C#
					ctx.font="14px arial";
					ctx.fillText("C",10,385);
					
					ctx.font="14px arial";
					ctx.fillStyle='white';
					ctx.fillText("C#",20,315);
					
					ctx.clearRect(235,50,400,100);
					board(ctx);
					key='C';
					key2='Q';
					break;
				case 'W': case 'w':
					var audio = new Audio("Assets/Tune/D.mp3");
					audio.play();
					
					//animasi
					ctx.fillStyle = '#5CC2DB'; 
					ctx.fillRect(31,200,30,200);//d
					
					ctx.fillStyle='black';
					ctx.fillRect(15,200,30,125);//c#
					ctx.fillRect(46,200,30,125);//d#
					ctx.font="14px arial";
					ctx.fillText("D",40,385);
					
					ctx.font="14px arial";
					ctx.fillStyle='white';
					ctx.fillText("C#",20,315);
					ctx.fillText("D#",51,315);
					
					ctx.clearRect(235,50,400,100);
					board(ctx);
					key='D';
					key2='W';
					break;
				
				case 'R': case 'r':
					var audio = new Audio("Assets/Tune/F.mp3");
					audio.play();
					
					//animasi
					ctx.fillStyle ='#5CC2DB'; 
					ctx.fillRect(93,200,30,200);//f
					
					ctx.fillStyle='black';
					ctx.fillRect(108,200,30,125);//f#
					ctx.font="14px arial";
					ctx.fillText("F",100,385);
					
					ctx.font="14px arial";
					ctx.fillStyle='white';
					ctx.fillText("F#",113,315);
					
					ctx.clearRect(235,50,400,100);
					board(ctx);
					key='F';
					key2='R';
					break;
				case 'T': case 't':
					var audio = new Audio("Assets/Tune/G.mp3");
					audio.play();
					
						//animasi
					ctx.fillStyle = '#5CC2DB'; 
					ctx.fillRect(124,200,30,200);//g
					
					ctx.fillStyle='black';
					ctx.fillRect(108,200,30,125);//f#
					ctx.fillRect(139,200,30,125);//g#
					ctx.font="14px arial";
					ctx.fillText("G",130,385);
					
					ctx.font="14px arial";
					ctx.fillStyle='white';
					ctx.fillText("F#",113,315);
					ctx.fillText("G#",144,315);
					
					ctx.clearRect(235,50,400,100);
					board(ctx);
					key='G';
					key2='T';
					break;
				case 'Y': case 'y':
					var audio = new Audio("Assets/Tune/A.mp3");
					audio.play();
					
					ctx.fillStyle = '#5CC2DB'; 
					ctx.fillRect(155,200,30,200);//a
					
					ctx.fillStyle='black';
					ctx.fillRect(139,200,30,125);//g#
					ctx.fillRect(170,200,30,125);//a#
					ctx.font="14px arial";
					ctx.fillText("A",163,385);
					
					ctx.font="14px arial";
					ctx.fillStyle='white';
					ctx.fillText("G#",144,315);
					ctx.fillText("A#",175,315);
					
					ctx.clearRect(235,50,400,100);
					board(ctx);
					key='A';
					key2='Y';
					break;
				
				case 'I': case 'i':
					var audio = new Audio("Assets/Tune/C'.mp3");
					audio.play();
					
					//animasi
					ctx.fillStyle ='#5CC2DB'; 
					ctx.fillRect(217,200,30,200);//c'
					
					ctx.fillStyle='black';
					ctx.fillRect(232,200,30,125);//c#'
					ctx.font="14px arial";
					ctx.fillText("C'",225,385);
					
					ctx.font="14px arial";
					ctx.fillStyle='white';
					ctx.fillText("C#'",235,315);
					
					ctx.clearRect(235,50,400,100);
					board(ctx);
					key="C'";
					key2='I';
					break;
				case 'O': case 'o':
					var audio = new Audio("Assets/Tune/D'.mp3");
					audio.play();
					
					ctx.fillStyle = '#5CC2DB'; 
					ctx.fillRect(248,200,30,200);//d'
					
					ctx.fillStyle='black';
					ctx.fillRect(232,200,30,125);//c#'
					ctx.fillRect(263,200,30,125);//d#'
					ctx.font="14px arial";
					ctx.fillText("D'",257,385);
					
					ctx.font="14px arial";
					ctx.fillStyle='white';
					ctx.fillText("C#'",235,315);
					ctx.fillText("D#'",266,315);
					
					ctx.clearRect(235,50,400,100);
					board(ctx);
					key="D'";
					key2='O';
					break;
				
				case 'A': case 'a':
					var audio = new Audio("Assets/Tune/F'.mp3");
					audio.play();
					
					//animasi
					ctx.fillStyle ='#5CC2DB'; 
					ctx.fillRect(310,200,30,200);//f'
					
					ctx.fillStyle='black';
					ctx.fillRect(325,200,30,125);//f#'
					ctx.font="14px arial";
					ctx.fillText("F'",317,385);
					
					ctx.font="14px arial";
					ctx.fillStyle='white';
					ctx.fillText("F#'",328,315);
					
					ctx.clearRect(235,50,400,100);
					board(ctx);
					key="F'";
					key2='A';
					break;
				case 'S': case 's':
					var audio = new Audio("Assets/Tune/G'.mp3");
					audio.play();
					
					ctx.fillStyle = '#5CC2DB'; 
					ctx.fillRect(341,200,30,200);//g'
					
					ctx.fillStyle='black';
					ctx.fillRect(325,200,30,125);//f#'
					ctx.fillRect(356,200,30,125);//g#'
					ctx.font="14px arial";
					ctx.fillText("G'",349,385);
					
					ctx.font="14px arial";
					ctx.fillStyle='white';
					ctx.fillText("F#'",328,315);
					ctx.fillText("G#'",359,315);
					
					ctx.clearRect(235,50,400,100);
					board(ctx);
					key="G'";
					key2='S';
					break;
				case 'D': case 'd':
					var audio = new Audio("Assets/Tune/A'.mp3");
					audio.play();
					
					ctx.fillStyle = '#5CC2DB'; 
					ctx.fillRect(372,200,30,200);//a'
					
					ctx.fillStyle='black';
					ctx.fillRect(356,200,30,125);//g#'
					ctx.fillRect(387,200,30,125);//a#'
					ctx.font="14px arial";
					ctx.fillText("A'",380,385);
					
					ctx.font="14px arial";
					ctx.fillStyle='white';
					ctx.fillText("G#'",359,315);
					ctx.fillText("A#'",390,315);
					
					ctx.clearRect(235,50,400,100);
					board(ctx);
					key="A'";
					key2='D';
					break;
				
				case 'G': case 'g':
					var audio = new Audio("Assets/Tune/C''.mp3");
					audio.play();
					
					//animasi
					ctx.fillStyle ='#5CC2DB'; 
					ctx.fillRect(434,200,30,200);//c''
					
					ctx.fillStyle='black';
					ctx.fillRect(449,200,30,125);//c#''
					ctx.font="14px arial";
					ctx.fillText("C''",442,385);
					
					ctx.font="14px arial";
					ctx.fillStyle='white';
					ctx.fillText("C#''",450,315);
					
					ctx.clearRect(235,50,400,100);
					board(ctx);
					key="C''";
					key2='G';
					break;
				case 'H': case 'h':
					var audio = new Audio("Assets/Tune/D''.mp3");
					audio.play();
					
					ctx.fillStyle = '#5CC2DB'; 
					ctx.fillRect(465,200,30,200);//d''
					
					ctx.fillStyle='black';
					ctx.fillRect(449,200,30,125);//c#''
					ctx.fillRect(480,200,30,125);//d#''
					ctx.font="14px arial";
					ctx.fillText("D''",472,385);
					
					ctx.font="14px arial";
					ctx.fillStyle='white';
					ctx.fillText("C#''",450,315);
					ctx.fillText("D#''",482,315);
					
					ctx.clearRect(235,50,400,100);
					board(ctx);
					key="D''";
					key2='H';
					break;
				
				case 'K': case 'k':
					var audio = new Audio("Assets/Tune/F''.mp3");
					audio.play();
					
					//animasi
					ctx.fillStyle ='#5CC2DB'; 
					ctx.fillRect(527,200,30,200);//f''
					
					ctx.fillStyle='black';
					ctx.fillRect(542,200,30,125);//f#''
					ctx.font="14px arial";
					ctx.fillText("F''",535,385);
					
					ctx.font="14px arial";
					ctx.fillStyle='white';
					ctx.fillText("F#''",545,315);
					
					ctx.clearRect(235,50,400,100);
					board(ctx);
					key="F''";
					key2='K';
					break;
				case 'L': case 'l':
					var audio = new Audio("Assets/Tune/G''.mp3");
					audio.play();
					
					ctx.fillStyle = '#5CC2DB'; 
					ctx.fillRect(558,200,30,200);//g''
					
					ctx.fillStyle='black';
					ctx.fillRect(542,200,30,125);//f#''
					ctx.fillRect(573,200,30,125);//g#''
					ctx.font="14px arial";
					ctx.fillText("G''",565,385);
					
					ctx.font="14px arial";
					ctx.fillStyle='white';
					ctx.fillText("F#''",545,315);
					ctx.fillText("G#''",575,315);
					
					ctx.clearRect(235,50,400,100);
					board(ctx);
					key="G''";
					key2='L';
					break;
				case 'Z': case 'z':
					var audio = new Audio("Assets/Tune/A''.mp3");
					audio.play();
					
					ctx.fillStyle = '#5CC2DB'; 
					ctx.fillRect(589,200,30,200);//a''
					
					ctx.fillStyle='black';
					ctx.fillRect(573,200,30,125);//g#''
					ctx.fillRect(604,200,30,125);//a#''
					ctx.font="14px arial";
					ctx.fillText("A''",597,385);
					
					ctx.font="14px arial";
					ctx.fillStyle='white';
					ctx.fillText("G#''",575,315);
					ctx.fillText("A#''",607,315);
					
					ctx.clearRect(235,50,400,100);
					board(ctx);
					key="A''";
					key2='Z';
					break;
				
				case 'C': case 'c':
					var audio = new Audio("Assets/Tune/C'''.mp3");
					audio.play();
					
					//animasi
					ctx.fillStyle ='#5CC2DB'; 
					ctx.fillRect(651,200,30,200);//c'''
					
					ctx.fillStyle='black';
					ctx.fillRect(666,200,30,125);//c#''' satanic x lol
					ctx.font="14px arial";
					ctx.fillText("C'''",656,385);
					
					ctx.font="14px arial";
					ctx.fillStyle='white';
					ctx.fillText("C#'''",666,315);//L...O...L
					
					ctx.clearRect(235,50,400,100);
					board(ctx);
					key="C'''";
					key2='C';
					break;
				case 'V': case 'v':
					var audio = new Audio("Assets/Tune/D'''.mp3");
					audio.play();
					
					ctx.fillStyle = '#5CC2DB'; 
					ctx.fillRect(682,200,30,200);//d'''
					
					ctx.fillStyle='black';
					ctx.fillRect(666,200,30,125);//c#''' satanic x lol
					ctx.fillRect(697,200,30,125);//d#'''
					ctx.font="14px arial";
					ctx.fillText("D'''",686,385);
					
					ctx.font="14px arial";
					ctx.fillStyle='white';
					ctx.fillText("C#'''",666,315);//L...O...L
					ctx.fillText("D#'''",697,315);
					
					ctx.clearRect(235,50,400,100);
					board(ctx);
					key="D'''";
					key2='V';
					break;
				
				case 'N': case 'n':
					var audio = new Audio("Assets/Tune/F'''.mp3");
					audio.play();
					
					//animasi
					ctx.fillStyle ='#5CC2DB'; 
					ctx.fillRect(744,200,30,200);//f'''
					
					ctx.fillStyle='black';
					ctx.fillRect(759,200,30,125);//f#'''
					ctx.font="14px arial";
					ctx.fillText("F'''",750,385);
					
					ctx.font="14px arial";
					ctx.fillStyle='white';
					ctx.fillText("F#'''",759,315);
					
					ctx.clearRect(235,50,400,100);
					board(ctx);
					key="F'''";
					key2='N';
					break;
				case 'M': case 'm':
					var audio = new Audio("Assets/Tune/G'''.mp3");
					audio.play();
					
					ctx.fillStyle = '#5CC2DB'; 
					ctx.fillRect(775,200,30,200);//g'''
					
					ctx.fillStyle='black';
					ctx.fillRect(759,200,30,125);//f#'''
					ctx.fillRect(790,200,30,125);//g#'''
					ctx.font="14px arial";
					ctx.fillText("G'''",780,385);
					
					ctx.font="14px arial";
					ctx.fillStyle='white';
					ctx.fillText("F#'''",759,315);
					ctx.fillText("G#'''",790,315);
					
					ctx.clearRect(235,50,400,100);
					board(ctx);
					key="G'''";
					key2='M';
					break;
				case '\xBE':
					var audio = new Audio("Assets/Tune/B'''.mp3");
					audio.play();
					
					//animasi
					ctx.fillStyle ='#5CC2DB'; 
					ctx.fillRect(837,200,30,200);//b'''
					
					ctx.fillStyle='black';
					ctx.fillRect(821,200,30,125);//a#'''
					ctx.font="14px arial";
					ctx.fillText("B'''",841,385);
					
					ctx.font="14px arial";
					ctx.fillStyle='white';
					ctx.fillText("A#'''",821,315);
					
					ctx.clearRect(235,50,400,100);
					board(ctx);
					key="B'''";
					key2='.';
					break;
			}
		}
			else if(event.shiftKey)
			{
				switch(str)
				{
					case 'Q': case 'q':
						var audio = new Audio("Assets/Tune/Cs.mp3");
						audio.play();
						
						//animasi
						ctx.fillStyle ='#5CC2DB'; 
						ctx.fillRect(15,200,30,125);//c#
				
						ctx.font="14px arial";
						ctx.fillStyle='white';
						ctx.fillText("C#",20,315);
						
						ctx.clearRect(235,50,400,100);
						board(ctx);
						key="C#";
						key2='SHIFT+Q';
						break;
					case 'W': case 'w':
						var audio = new Audio("Assets/Tune/Ds.mp3");
						audio.play();
						
						//animasi
						ctx.fillStyle ='#5CC2DB'; 
						ctx.fillRect(46,200,30,125);//d#
				
						ctx.font="14px arial";
						ctx.fillStyle='white';
						ctx.fillText("D#",51,315);
						
						ctx.clearRect(235,50,400,100);
						board(ctx);
						key="D#";
						key2='SHIFT+W';
						break;
					case 'R': case 'r':
						var audio = new Audio("Assets/Tune/Fs.mp3");
						audio.play();
						
						//animasi
						ctx.fillStyle ='#5CC2DB'; 
						ctx.fillRect(108,200,30,125);//f#
				
						ctx.font="14px arial";
						ctx.fillStyle='white';
						ctx.fillText("F#",113,315);
						
						ctx.clearRect(235,50,400,100);
						board(ctx);
						key="F#";
						key2='SHIFT+R';
						break;
					case 'T': case 't':
						var audio = new Audio("Assets/Tune/Gs.mp3");
						audio.play();
						
						//animasi
						ctx.fillStyle ='#5CC2DB'; 
						ctx.fillRect(139,200,30,125);//g#
				
						ctx.font="14px arial";
						ctx.fillStyle='white';
						ctx.fillText("G#",144,315);
						
						ctx.clearRect(235,50,400,100);
						board(ctx);
						key="G#";
						key2='SHIFT+T';
						break;
					case 'Y': case 'y':
						var audio = new Audio("Assets/Tune/As.mp3");
						audio.play();
						
						//animasi
						ctx.fillStyle ='#5CC2DB'; 
						ctx.fillRect(170,200,30,125);//a#
				
						ctx.font="14px arial";
						ctx.fillStyle='white';
						ctx.fillText("A#",175,315);
						
						ctx.clearRect(235,50,400,100);
						board(ctx);
						key="A#";
						key2='SHIFT+Y';
						break;
					case 'I': case 'i':
						var audio = new Audio("Assets/Tune/Cs'.mp3");
						audio.play();
						
						//animasi
						ctx.fillStyle ='#5CC2DB'; 
						ctx.fillRect(232,200,30,125);//c#'
				
						ctx.font="14px arial";
						ctx.fillStyle='white';
						ctx.fillText("C#'",235,315);
						
						ctx.clearRect(235,50,400,100);
						board(ctx);
						key="C#'";
						key2='SHIFT+I';
						break;
					case 'O': case 'o':
						var audio = new Audio("Assets/Tune/Ds'.mp3");
						audio.play();
						
						//animasi
						ctx.fillStyle ='#5CC2DB'; 
						ctx.fillRect(263,200,30,125);//d#'
				
						ctx.font="14px arial";
						ctx.fillStyle='white';
						ctx.fillText("D#'",266,315);
						
						ctx.clearRect(235,50,400,100);
						board(ctx);
						key="D#'";
						key2='SHIFT+O';
						break;
					case 'A': case 'a':
						var audio = new Audio("Assets/Tune/Fs'.mp3");
						audio.play();
						
						//animasi
						ctx.fillStyle ='#5CC2DB'; 
						ctx.fillRect(325,200,30,125);//f#'
				
						ctx.font="14px arial";
						ctx.fillStyle='white';
						ctx.fillText("F#'",328,315);
						
						ctx.clearRect(235,50,400,100);
						board(ctx);
						key="F#'";
						key2='SHIFT+A';
						break;
					case 'S': case 's':
						var audio = new Audio("Assets/Tune/Gs'.mp3");
						audio.play();
						
						//animasi
						ctx.fillStyle ='#5CC2DB'; 
						ctx.fillRect(356,200,30,125);//g#'
				
						ctx.font="14px arial";
						ctx.fillStyle='white';
						ctx.fillText("G#'",359,315);
						
						ctx.clearRect(235,50,400,100);
						board(ctx);
						key="G#'";
						key2='SHIFT+S';
						break;
					case 'D': case 'd':
						var audio = new Audio("Assets/Tune/As'.mp3");
						audio.play();
						
						//animasi
						ctx.fillStyle ='#5CC2DB'; 
						ctx.fillRect(387,200,30,125);//a#'
				
						ctx.font="14px arial";
						ctx.fillStyle='white';
						ctx.fillText("A#'",390,315);
						
						ctx.clearRect(235,50,400,100);
						board(ctx);
						key="A#'";
						key2='SHIFT+D';
						break;
					case 'G': case 'g':
						var audio = new Audio("Assets/Tune/Cs''.mp3");
						audio.play();
						
						//animasi
						ctx.fillStyle ='#5CC2DB'; 
						ctx.fillRect(449,200,30,125);//c#''
				
						ctx.font="14px arial";
						ctx.fillStyle='white';
						ctx.fillText("C#''",450,315);
						
						ctx.clearRect(235,50,400,100);
						board(ctx);
						key="C#''";
						key2='SHIFT+G';
						break;
					case 'H': case 'h':
						var audio = new Audio("Assets/Tune/Ds''.mp3");
						audio.play();
						
						//animasi
						ctx.fillStyle ='#5CC2DB'; 
						ctx.fillRect(480,200,30,125);//d#''
				
						ctx.font="14px arial";
						ctx.fillStyle='white';
						ctx.fillText("D#''",482,315);
						
						ctx.clearRect(235,50,400,100);
						board(ctx);
						key="D#''";
						key2='SHIFT+H';
						break;
					case 'K': case 'k':
						var audio = new Audio("Assets/Tune/Fs''.mp3");
						audio.play();
						
						ctx.fillStyle ='#5CC2DB'; 
						ctx.fillRect(542,200,30,125);//f#''
				
						ctx.font="14px arial";
						ctx.fillStyle='white';
						ctx.fillText("F#''",545,315);
						
						ctx.clearRect(235,50,400,100);
						board(ctx);
						key="F#''";
						key2='SHIFT+K';
						break;
					case 'L': case 'l':
						var audio = new Audio("Assets/Tune/Gs''.mp3");
						audio.play();
						
						ctx.fillStyle ='#5CC2DB'; 
						ctx.fillRect(573,200,30,125);//g#''
				
						ctx.font="14px arial";
						ctx.fillStyle='white';
						ctx.fillText("G#''",575,315);
						
						ctx.clearRect(235,50,400,100);
						board(ctx);
						key="G#''";
						key2='SHIFT+L';
						break;
					case 'Z': case 'z':
						var audio = new Audio("Assets/Tune/As''.mp3");
						audio.play();
						
						ctx.fillStyle ='#5CC2DB'; 
						ctx.fillRect(604,200,30,125);//a#''
				
						ctx.font="14px arial";
						ctx.fillStyle='white';
						ctx.fillText("A#''",607,315);
						
						ctx.clearRect(235,50,400,100);
						board(ctx);
						key="A#''";
						key2='SHIFT+Z';
						break;
					case 'C': case 'c':
						var audio = new Audio("Assets/Tune/Cs'''.mp3");
						audio.play();
						
						ctx.fillStyle ='#5CC2DB'; 
						ctx.fillRect(666,200,30,125);//c#''' satanic x lol
				
						ctx.font="14px arial";
						ctx.fillStyle='white';
						ctx.fillText("C#'''",666,315);//L...O...L
						
						ctx.clearRect(235,50,400,100);
						board(ctx);
						key="C#'''";
						key2='SHIFT+C';
						break;
					case 'V': case 'v':
						var audio = new Audio("Assets/Tune/Ds'''.mp3");
						audio.play();
						
						ctx.fillStyle ='#5CC2DB'; 
						ctx.fillRect(697,200,30,125);//d#'''
				
						ctx.font="14px arial";
						ctx.fillStyle='white';
						ctx.fillText("D#'''",697,315);
						
						ctx.clearRect(235,50,400,100);
						board(ctx);
						key="D#'''";
						key2='SHIFT+V';
						break;
					case 'N': case 'n':
						var audio = new Audio("Assets/Tune/Fs'''.mp3");
						audio.play();
						
						ctx.fillStyle ='#5CC2DB'; 
						ctx.fillRect(759,200,30,125);//f#'''
				
						ctx.font="14px arial";
						ctx.fillStyle='white';
						ctx.fillText("F#'''",759,315);
						
						ctx.clearRect(235,50,400,100);
						board(ctx);
						key="F#'''";
						key2='SHIFT+N';
						break;
					case 'M': case 'm':
						var audio = new Audio("Assets/Tune/Gs'''.mp3");
						audio.play();
						
						ctx.fillStyle ='#5CC2DB'; 
						ctx.fillRect(790,200,30,125);//g#'''
				
						ctx.font="14px arial";
						ctx.fillStyle='white';
						ctx.fillText("G#'''",790,315);
						
						ctx.clearRect(235,50,400,100);
						board(ctx);
						key="G#'''";
						key2='SHIFT+M';
						break;
					case '\xBE':
						var audio = new Audio("Assets/Tune/As'''.mp3");
						audio.play();
						
						ctx.fillStyle ='#5CC2DB'; 
						ctx.fillRect(821,200,30,125);//a#'''
				
						ctx.font="14px arial";
						ctx.fillStyle='white';
						ctx.fillText("A#'''",821,315);
						
						ctx.clearRect(235,50,400,100);
						board(ctx);
						key="A#'''";
						key2="SHIFT+,";
						break;
				}
			}
			lampOn(ctx);
			printtext(ctx,key,key2);
	}
}

function mouseEvent(cvs,ctx)
{
	var posX=0;
	var posY=0;
	
	cvs.addEventListener("mousemove",function(e)
	{
		console.log(e.pageX+" : "+e.pageY);
		var boundRect=cvs.getBoundingClientRect();
		posX=e.pageX-boundRect.left;
		posY=e.pageY;
	});
	
	cvs.addEventListener("mouseup",function(e)
	{
		whitekey(ctx);
		blackkey(ctx);
		keytext(ctx);
		lampPlace(ctx);
	});
	
	cvs.addEventListener("mousedown",function(e)
	{
		//statusPlay="Not Play";
		//Black Key
		if((posX>=15 && posX<=45) && (posY>=399 && posY<=523))
		{
			var audio = new Audio("Assets/Tune/Cs.mp3");
			audio.play();
			
			ctx.fillStyle ='#5CC2DB'; 
			ctx.fillRect(15,200,30,125);//c#
				
			ctx.font="14px arial";
			ctx.fillStyle='white';
			ctx.fillText("C#",20,315);
			
			ctx.clearRect(235,50,400,100);
			board(ctx);
			key="C#";
			key2='SHIFT+Q';
		}
		else if((posX>=46 && posX<=76) && (posY>=399 && posY<=523))
		{
			var audio = new Audio("Assets/Tune/Ds.mp3");
			audio.play();
			
			//animasi
			ctx.fillStyle ='#5CC2DB'; 
			ctx.fillRect(46,200,30,125);//d#
				
			ctx.font="14px arial";
			ctx.fillStyle='white';
			ctx.fillText("D#",51,315);
						
			
			ctx.clearRect(235,50,400,100);
			board(ctx);
			key="D#";
			key2='SHIFT+W';
		}
		else if((posX>=108 && posX<=138) && (posY>=399 && posY<=523))
		{
			var audio = new Audio("Assets/Tune/Fs.mp3");
			audio.play();
			
			//animasi
			ctx.fillStyle ='#5CC2DB'; 
			ctx.fillRect(108,200,30,125);//f#
	
			ctx.font="14px arial";
			ctx.fillStyle='white';
			ctx.fillText("F#",113,315);
			
			ctx.clearRect(235,50,400,100);
			board(ctx);
			key="F#";
			key2='SHIFT+R';
		}
		else if((posX>=139 && posX<=169) && (posY>=399 && posY<=523))
		{
			var audio = new Audio("Assets/Tune/Gs.mp3");
			audio.play();
			
			//animasi
			ctx.fillStyle ='#5CC2DB'; 
			ctx.fillRect(139,200,30,125);//g#
	
			ctx.font="14px arial";
			ctx.fillStyle='white';
			ctx.fillText("G#",144,315);
			
			ctx.clearRect(235,50,400,100);
			board(ctx);
			key="G#";
			key2='SHIFT+T';
		}
		else if((posX>=170 && posX<=200) && (posY>=399 && posY<=523))
		{
			var audio = new Audio("Assets/Tune/As.mp3");
			audio.play();
			
			//animasi
			ctx.fillStyle ='#5CC2DB'; 
			ctx.fillRect(170,200,30,125);//a#
	
			ctx.font="14px arial";
			ctx.fillStyle='white';
			ctx.fillText("A#",175,315);
			
			ctx.clearRect(235,50,400,100);
			board(ctx);
			key="A#";
			key2='SHIFT+Y';
		}
		else if((posX>=232 && posX<=262) && (posY>=399 && posY<=523))
		{
			var audio = new Audio("Assets/Tune/Cs'.mp3");
			audio.play();
			
			//animasi
			ctx.fillStyle ='#5CC2DB'; 
			ctx.fillRect(232,200,30,125);//c#'
	
			ctx.font="14px arial";
			ctx.fillStyle='white';
			ctx.fillText("C#'",235,315);
			
			ctx.clearRect(235,50,400,100);
			board(ctx);
			key="C#'";
			key2='SHIFT+I';			
		}
		else if((posX>=263 && posX<=293) && (posY>=399 && posY<=523))
		{
			var audio = new Audio("Assets/Tune/Ds'.mp3");
			audio.play();
			
			//animasi
			ctx.fillStyle ='#5CC2DB'; 
			ctx.fillRect(263,200,30,125);//d#'
	
			ctx.font="14px arial";
			ctx.fillStyle='white';
			ctx.fillText("D#'",266,315);
			
			ctx.clearRect(235,50,400,100);
			board(ctx);
			key="D#'";
			key2='SHIFT+O';
		}
		else if((posX>=325 && posX<=355) && (posY>=399 && posY<=523))
		{
			var audio = new Audio("Assets/Tune/Fs'.mp3");
			audio.play();
			
			//animasi
			ctx.fillStyle ='#5CC2DB'; 
			ctx.fillRect(325,200,30,125);//f#'
	
			ctx.font="14px arial";
			ctx.fillStyle='white';
			ctx.fillText("F#'",328,315);
			
			ctx.clearRect(235,50,400,100);
			board(ctx);
			key="F#'";
			key2='SHIFT+A';
		}
		else if((posX>=356 && posX<=386) && (posY>=399 && posY<=523))
		{
			var audio = new Audio("Assets/Tune/Gs'.mp3");
			audio.play();
			
			//animasi
			ctx.fillStyle ='#5CC2DB'; 
			ctx.fillRect(356,200,30,125);//g#'
	
			ctx.font="14px arial";
			ctx.fillStyle='white';
			ctx.fillText("G#'",359,315);
			
			ctx.clearRect(235,50,400,100);
			board(ctx);
			key="G#'";
			key2='SHIFT+S';
		}
		else if((posX>=387 && posX<=417) && (posY>=399 && posY<=523))
		{
			var audio = new Audio("Assets/Tune/As'.mp3");
			audio.play();
			
			//animasi
			ctx.fillStyle ='#5CC2DB'; 
			ctx.fillRect(387,200,30,125);//a#'
	
			ctx.font="14px arial";
			ctx.fillStyle='white';
			ctx.fillText("A#'",390,315);
			
			ctx.clearRect(235,50,400,100);
			board(ctx);
			key="A#'";
			key2='SHIFT+D';
		}
		else if((posX>=449 && posX<=479) && (posY>=399 && posY<=523))
		{
			var audio = new Audio("Assets/Tune/Cs''.mp3");
			audio.play();
			
			//animasi
			ctx.fillStyle ='#5CC2DB'; 
			ctx.fillRect(449,200,30,125);//c#''
	
			ctx.font="14px arial";
			ctx.fillStyle='white';
			ctx.fillText("C#''",450,315);
			
			ctx.clearRect(235,50,400,100);
			board(ctx);
			key="C#''";
			key2='SHIFT+G';			
		}
		else if((posX>=480 && posX<=510) && (posY>=399 && posY<=523))
		{
			var audio = new Audio("Assets/Tune/Ds''.mp3");
			audio.play();
			
			//animasi
			ctx.fillStyle ='#5CC2DB'; 
			ctx.fillRect(480,200,30,125);//d#''
	
			ctx.font="14px arial";
			ctx.fillStyle='white';
			ctx.fillText("D#''",482,315);
			
			ctx.clearRect(235,50,400,100);
			board(ctx);
			key="D#''";
			key2='SHIFT+H';
		}
		else if((posX>=542 && posX<=572) && (posY>=399 && posY<=523))
		{
			var audio = new Audio("Assets/Tune/Fs''.mp3");
			audio.play();
								
			ctx.fillStyle ='#5CC2DB'; 
			ctx.fillRect(542,200,30,125);//f#''
	
			ctx.font="14px arial";
			ctx.fillStyle='white';
			ctx.fillText("F#''",545,315);
			
			ctx.clearRect(235,50,400,100);
			board(ctx);
			key="F#''";
			key2='SHIFT+K';	
		}
		else if((posX>=573 && posX<=603) && (posY>=399 && posY<=523))
		{
			var audio = new Audio("Assets/Tune/Gs''.mp3");
			audio.play();
			
			ctx.fillStyle ='#5CC2DB'; 
			ctx.fillRect(573,200,30,125);//g#''
	
			ctx.font="14px arial";
			ctx.fillStyle='white';
			ctx.fillText("G#''",575,315);
			
			ctx.clearRect(235,50,400,100);
			board(ctx);
			key="G#''";
			key2='SHIFT+L';
		}
		else if((posX>=604 && posX<=634) && (posY>=399 && posY<=523))
		{
			var audio = new Audio("Assets/Tune/As''.mp3");
			audio.play();
			
			ctx.fillStyle ='#5CC2DB'; 
			ctx.fillRect(604,200,30,125);//a#''
	
			ctx.font="14px arial";
			ctx.fillStyle='white';
			ctx.fillText("A#''",607,315);
			
			ctx.clearRect(235,50,400,100);
			board(ctx);
			key="A#''";
			key2='SHIFT+Z';
		}
		
		else if((posX>=666 && posX<=696) && (posY>=399 && posY<=523))
		{
			var audio = new Audio("Assets/Tune/Cs'''.mp3");
			audio.play();
			
			ctx.fillStyle ='#5CC2DB'; 
			ctx.fillRect(666,200,30,125);//c#''' satanic x lol
	
			ctx.font="14px arial";
			ctx.fillStyle='white';
			ctx.fillText("C#'''",666,315);//L...O...L
			
			ctx.clearRect(235,50,400,100);
			board(ctx);
			key="C#'''";
			key2='SHIFT+C';
		}
		else if((posX>=697 && posX<=727) && (posY>=399 && posY<=523))
		{
			var audio = new Audio("Assets/Tune/Ds'''.mp3");
			audio.play();
			
			ctx.fillStyle ='#5CC2DB'; 
			ctx.fillRect(697,200,30,125);//d#'''
	
			ctx.font="14px arial";
			ctx.fillStyle='white';
			ctx.fillText("D#'''",697,315);
			
			ctx.clearRect(235,50,400,100);
			board(ctx);
			key="D#'''";
			key2='SHIFT+V';
		}
		else if((posX>=759 && posX<=789) && (posY>=399 && posY<=523))
		{
			var audio = new Audio("Assets/Tune/Fs'''.mp3");
			audio.play();
			
			ctx.fillStyle ='#5CC2DB'; 
			ctx.fillRect(759,200,30,125);//f#'''
	
			ctx.font="14px arial";
			ctx.fillStyle='white';
			ctx.fillText("F#'''",759,315);
			
			ctx.clearRect(235,50,400,100);
			board(ctx);
			key="F#'''";
			key2='SHIFT+N';
		}
		else if((posX>=790 && posX<=820) && (posY>=399 && posY<=523))
		{
			var audio = new Audio("Assets/Tune/Gs'''.mp3");
			audio.play();
			
			ctx.fillStyle ='#5CC2DB'; 
			ctx.fillRect(790,200,30,125);//g#'''
	
			ctx.font="14px arial";
			ctx.fillStyle='white';
			ctx.fillText("G#'''",790,315);
			
			ctx.clearRect(235,50,400,100);
			board(ctx);
			key="G#'''";
			key2='SHIFT+M';
		}
		else if((posX>=821 && posX<=851) && (posY>=399 && posY<=523))
		{
			var audio = new Audio("Assets/Tune/As'''.mp3");
			audio.play();
			
			ctx.fillStyle ='#5CC2DB'; 
			ctx.fillRect(821,200,30,125);//a#'''
	
			ctx.font="14px arial";
			ctx.fillStyle='white';
			ctx.fillText("A#'''",821,315);
			
			ctx.clearRect(235,50,400,100);
			board(ctx);
			key="A#'''";
			key2="SHIFT+,";
		}
		
		
		//White Key
		else if((posX>=0 && posX<=30) && (posY>=399 && posY<=597))
		{
			var audio = new Audio("Assets/Tune/C.mp3");
			audio.play();
			
			//animasi
			ctx.fillStyle ='#5CC2DB'; 
			ctx.fillRect(0,200,30,200);//C
			
			ctx.fillStyle='black';
			ctx.fillRect(15,200,30,125);//C#
			ctx.font="14px arial";
			ctx.fillText("C",10,385);
			
			ctx.font="14px arial";
			ctx.fillStyle='white';
			ctx.fillText("C#",20,315);
			
			ctx.clearRect(235,50,400,100);
			board(ctx);
			key='C';
			key2='Q';
		}
		else if((posX>=31 && posX<=61) && (posY>=399 && posY<=597))
		{
			var audio = new Audio("Assets/Tune/D.mp3");
			audio.play();
			
			//animasi
			ctx.fillStyle = '#5CC2DB'; 
			ctx.fillRect(31,200,30,200);//d
			
			ctx.fillStyle='black';
			ctx.fillRect(15,200,30,125);//c#
			ctx.fillRect(46,200,30,125);//d#
			ctx.font="14px arial";
			ctx.fillText("D",40,385);
			
			ctx.font="14px arial";
			ctx.fillStyle='white';
			ctx.fillText("C#",20,315);
			ctx.fillText("D#",51,315);
			
			ctx.clearRect(235,50,400,100);
			board(ctx);
			key='D';
			key2='W';
		}
		else if((posX>=62 && posX<=92) && (posY>=399 && posY<=597))
		{
			var audio = new Audio("Assets/Tune/E.mp3");
			audio.play();
			
			//animasi
			ctx.fillStyle = '#5CC2DB'; 
			ctx.fillRect(62,200,30,200);//e
			
			ctx.fillStyle='black';
			ctx.fillRect(46,200,30,125);//d#
			ctx.font="14px arial";
			ctx.fillText("E",70,385);
			
			ctx.font="14px arial";
			ctx.fillStyle='white';
			ctx.fillText("D#",51,315);
			
			ctx.clearRect(235,50,400,100);
			board(ctx);
			key='E';
			key2='E';
		}
		else if((posX>=93 && posX<=123) && (posY>=399 && posY<=597))
		{
			var audio = new Audio("Assets/Tune/F.mp3");
			audio.play();
			
			//animasi
			ctx.fillStyle ='#5CC2DB'; 
			ctx.fillRect(93,200,30,200);//f
			
			ctx.fillStyle='black';
			ctx.fillRect(108,200,30,125);//f#
			ctx.font="14px arial";
			ctx.fillText("F",100,385);
			
			ctx.font="14px arial";
			ctx.fillStyle='white';
			ctx.fillText("F#",113,315);
			
			ctx.clearRect(235,50,400,100);
			board(ctx);
			key='F';
			key2='R';
		}
		else if((posX>=124 && posX<=154) && (posY>=399 && posY<=597))
		{
			var audio = new Audio("Assets/Tune/G.mp3");
			audio.play();
			
			//animasi
			ctx.fillStyle = '#5CC2DB'; 
			ctx.fillRect(124,200,30,200);//g
			
			ctx.fillStyle='black';
			ctx.fillRect(108,200,30,125);//f#
			ctx.fillRect(139,200,30,125);//g#
			ctx.font="14px arial";
			ctx.fillText("G",130,385);
			
			ctx.font="14px arial";
			ctx.fillStyle='white';
			ctx.fillText("F#",113,315);
			ctx.fillText("G#",144,315);
			
			ctx.clearRect(235,50,400,100);
			board(ctx);
			key='G';
			key2='T';
		}
		else if((posX>=155 && posX<=185) && (posY>=399 && posY<=597))
		{
			var audio = new Audio("Assets/Tune/A.mp3");
			audio.play();
			
			ctx.fillStyle = '#5CC2DB'; 
			ctx.fillRect(155,200,30,200);//a
			
			ctx.fillStyle='black';
			ctx.fillRect(139,200,30,125);//g#
			ctx.fillRect(170,200,30,125);//a#
			ctx.font="14px arial";
			ctx.fillText("A",163,385);
			
			ctx.font="14px arial";
			ctx.fillStyle='white';
			ctx.fillText("G#",144,315);
			ctx.fillText("A#",175,315);
			
			ctx.clearRect(235,50,400,100);
			board(ctx);
			key='A';
			key2='Y';
		}
		else if((posX>=186 && posX<=216) && (posY>=399 && posY<=597))
		{
			var audio = new Audio("Assets/Tune/B.mp3");
			audio.play();
			
			//animasi
			ctx.fillStyle = '#5CC2DB'; 
			ctx.fillRect(186,200,30,200);//b
			
			ctx.fillStyle='black';
			ctx.fillRect(170,200,30,125);//rect key # --A#
			ctx.font="14px arial";
			ctx.fillText("B",194,385);//text key biasa
			
			ctx.font="14px arial";
			ctx.fillStyle='white';
			ctx.fillText("A#",175,315);//text key #
			
			ctx.clearRect(235,50,400,100);
			board(ctx);
			key='B';
			key2='U';
		}
		else if((posX>=217 && posX<=247) && (posY>=399 && posY<=597))
		{
			var audio = new Audio("Assets/Tune/C'.mp3");
			audio.play();
			
			//animasi
			ctx.fillStyle ='#5CC2DB'; 
			ctx.fillRect(217,200,30,200);//c'
			
			ctx.fillStyle='black';
			ctx.fillRect(232,200,30,125);//c#'
			ctx.font="14px arial";
			ctx.fillText("C'",225,385);
			
			ctx.font="14px arial";
			ctx.fillStyle='white';
			ctx.fillText("C#'",235,315);
			
			ctx.clearRect(235,50,400,100);
			board(ctx);
			key="C'";
			key2='I';
		}
		else if((posX>=248 && posX<=278) && (posY>=399 && posY<=597))
		{
			var audio = new Audio("Assets/Tune/D'.mp3");
			audio.play();
			
			ctx.fillStyle = '#5CC2DB'; 
			ctx.fillRect(248,200,30,200);//d'
			
			ctx.fillStyle='black';
			ctx.fillRect(232,200,30,125);//c#'
			ctx.fillRect(263,200,30,125);//d#'
			ctx.font="14px arial";
			ctx.fillText("D'",257,385);
			
			ctx.font="14px arial";
			ctx.fillStyle='white';
			ctx.fillText("C#'",235,315);
			ctx.fillText("D#'",266,315);
			
			ctx.clearRect(235,50,400,100);
			board(ctx);
			key="D'";
			key2='O';
		}
		else if((posX>=279 && posX<=309) && (posY>=399 && posY<=597))
		{
			var audio = new Audio("Assets/Tune/E'.mp3");
			audio.play();
			
			//animasi
			ctx.fillStyle = '#5CC2DB'; 
			ctx.fillRect(279,200,30,200);//e'
			
			ctx.fillStyle='black';
			ctx.fillRect(263,200,30,125);//d#'
			ctx.font="14px arial";
			ctx.fillText("E'",287,385);
			
			ctx.font="14px arial";
			ctx.fillStyle='white';
			ctx.fillText("D#'",266,315);
			
			ctx.clearRect(235,50,400,100);
			board(ctx);
			key="E'";
			key2='P';
		}
		else if((posX>=310 && posX<=340) && (posY>=399 && posY<=597))
		{
			var audio = new Audio("Assets/Tune/F'.mp3");
			audio.play();
			
			//animasi
			ctx.fillStyle ='#5CC2DB'; 
			ctx.fillRect(310,200,30,200);//f'
			
			ctx.fillStyle='black';
			ctx.fillRect(325,200,30,125);//f#'
			ctx.font="14px arial";
			ctx.fillText("F'",317,385);
			
			ctx.font="14px arial";
			ctx.fillStyle='white';
			ctx.fillText("F#'",328,315);
			
			ctx.clearRect(235,50,400,100);
			board(ctx);
			key="F'";
			key2='A';
		}
		else if((posX>=341 && posX<=371) && (posY>=399 && posY<=597))
		{
			var audio = new Audio("Assets/Tune/G'.mp3");
			audio.play();
			
			ctx.fillStyle = '#5CC2DB'; 
			ctx.fillRect(341,200,30,200);//g'
			
			ctx.fillStyle='black';
			ctx.fillRect(325,200,30,125);//f#'
			ctx.fillRect(356,200,30,125);//g#'
			ctx.font="14px arial";
			ctx.fillText("G'",349,385);
			
			ctx.font="14px arial";
			ctx.fillStyle='white';
			ctx.fillText("F#'",328,315);
			ctx.fillText("G#'",359,315);
			
			ctx.clearRect(235,50,400,100);
			board(ctx);
			key="G'";
			key2='S';
		}
		else if((posX>=372 && posX<=402) && (posY>=399 && posY<=597))
		{
			var audio = new Audio("Assets/Tune/A'.mp3");
			audio.play();
			
			ctx.fillStyle = '#5CC2DB'; 
			ctx.fillRect(372,200,30,200);//a'
			
			ctx.fillStyle='black';
			ctx.fillRect(356,200,30,125);//g#'
			ctx.fillRect(387,200,30,125);//a#'
			ctx.font="14px arial";
			ctx.fillText("A'",380,385);
			
			ctx.font="14px arial";
			ctx.fillStyle='white';
			ctx.fillText("G#'",359,315);
			ctx.fillText("A#'",390,315);
			
			ctx.clearRect(235,50,400,100);
			board(ctx);
			key="A'";
			key2='D';
		}
		else if((posX>=403 && posX<=433) && (posY>=399 && posY<=597))
		{
			var audio = new Audio("Assets/Tune/B'.mp3");
			audio.play();
			
			//animasi
			ctx.fillStyle = '#5CC2DB'; 
			ctx.fillRect(403,200,30,200);//b'
			
			ctx.fillStyle='black';
			ctx.fillRect(387,200,30,125);//a#'
			ctx.font="14px arial";
			ctx.fillText("B'",412,385);
			
			ctx.font="14px arial";
			ctx.fillStyle='white';
			ctx.fillText("A#'",390,315);
			
			ctx.clearRect(235,50,400,100);
			board(ctx);
			key="B'";
			key2='F';
		}
		else if((posX>=434 && posX<=464) && (posY>=399 && posY<=597))
		{
			var audio = new Audio("Assets/Tune/C''.mp3");
			audio.play();
			
			//animasi
			ctx.fillStyle ='#5CC2DB'; 
			ctx.fillRect(434,200,30,200);//c''
			
			ctx.fillStyle='black';
			ctx.fillRect(449,200,30,125);//c#''
			ctx.font="14px arial";
			ctx.fillText("C''",442,385);
			
			ctx.font="14px arial";
			ctx.fillStyle='white';
			ctx.fillText("C#''",450,315);
			
			ctx.clearRect(235,50,400,100);
			board(ctx);
			key="C''";
			key2='G';	
		}
		else if((posX>=465 && posX<=495) && (posY>=399 && posY<=597))
		{
			var audio = new Audio("Assets/Tune/D''.mp3");
			audio.play();
			
			ctx.fillStyle = '#5CC2DB'; 
			ctx.fillRect(465,200,30,200);//d''
			
			ctx.fillStyle='black';
			ctx.fillRect(449,200,30,125);//c#''
			ctx.fillRect(480,200,30,125);//d#''
			ctx.font="14px arial";
			ctx.fillText("D''",472,385);
			
			ctx.font="14px arial";
			ctx.fillStyle='white';
			ctx.fillText("C#''",450,315);
			ctx.fillText("D#''",482,315);
			
			ctx.clearRect(235,50,400,100);
			board(ctx);
			key="D''";
			key2='H';
		}
		else if((posX>=496 && posX<=526) && (posY>=399 && posY<=597))
		{
			var audio = new Audio("Assets/Tune/E''.mp3");
			audio.play();
			
			//animasi
			ctx.fillStyle = '#5CC2DB'; 
			ctx.fillRect(496,200,30,200);//e''
			
			ctx.fillStyle='black';
			ctx.fillRect(480,200,30,125);//d#''
			ctx.font="14px arial";
			ctx.fillText("E''",502,385);
			
			ctx.font="14px arial";
			ctx.fillStyle='white';
			ctx.fillText("D#''",482,315);
			
			ctx.clearRect(235,50,400,100);
			board(ctx);
			key="E''";
			key2='J';
		}
		else if((posX>=527 && posX<=557) && (posY>=399 && posY<=597))
		{
			
			var audio = new Audio("Assets/Tune/F''.mp3");
			audio.play();
			
			//animasi
			ctx.fillStyle ='#5CC2DB'; 
			ctx.fillRect(527,200,30,200);//f''
			
			ctx.fillStyle='black';
			ctx.fillRect(542,200,30,125);//f#''
			ctx.font="14px arial";
			ctx.fillText("F''",535,385);
			
			ctx.font="14px arial";
			ctx.fillStyle='white';
			ctx.fillText("F#''",545,315);
			
			ctx.clearRect(235,50,400,100);
			board(ctx);
			key="F''";
			key2='K';
				
		}
		else if((posX>=558 && posX<=588) && (posY>=399 && posY<=597))
		{
			var audio = new Audio("Assets/Tune/G''.mp3");
			audio.play();
			
			ctx.fillStyle = '#5CC2DB'; 
			ctx.fillRect(558,200,30,200);//g''
			
			ctx.fillStyle='black';
			ctx.fillRect(542,200,30,125);//f#''
			ctx.fillRect(573,200,30,125);//g#''
			ctx.font="14px arial";
			ctx.fillText("G''",565,385);
			
			ctx.font="14px arial";
			ctx.fillStyle='white';
			ctx.fillText("F#''",545,315);
			ctx.fillText("G#''",575,315);
			
			ctx.clearRect(235,50,400,100);
			board(ctx);
			key="G''";
			key2='L';
		}
		else if((posX>=589 && posX<=619) && (posY>=399 && posY<=597))
		{
			var audio = new Audio("Assets/Tune/A''.mp3");
			audio.play();
			
			ctx.fillStyle = '#5CC2DB'; 
			ctx.fillRect(589,200,30,200);//a''
			
			ctx.fillStyle='black';
			ctx.fillRect(573,200,30,125);//g#''
			ctx.fillRect(604,200,30,125);//a#''
			ctx.font="14px arial";
			ctx.fillText("A''",597,385);
			
			ctx.font="14px arial";
			ctx.fillStyle='white';
			ctx.fillText("G#''",575,315);
			ctx.fillText("A#''",607,315);
			
			ctx.clearRect(235,50,400,100);
			board(ctx);
			key="A''";
			key2='Z';
		}
		else if((posX>=620 && posX<=650) && (posY>=399 && posY<=597))
		{
			var audio = new Audio("Assets/Tune/B''.mp3");
			audio.play();
			
			//animasi
			ctx.fillStyle = '#5CC2DB'; 
			ctx.fillRect(620,200,30,200);//B''
			
			ctx.fillStyle='black';
			ctx.fillRect(604,200,30,125);//A#''
			ctx.font="14px arial";
			ctx.fillText("B''",628,385);
			
			ctx.font="14px arial";
			ctx.fillStyle='white';
			ctx.fillText("A#''",607,315);
	
			ctx.clearRect(235,50,400,100);
			board(ctx);
			key="B''";
			key2='X';
		}
		else if((posX>=651 && posX<=681) && (posY>=399 && posY<=597))
		{
			var audio = new Audio("Assets/Tune/C'''.mp3");
			audio.play();
			
			//animasi
			ctx.fillStyle ='#5CC2DB'; 
			ctx.fillRect(651,200,30,200);//c'''
			
			ctx.fillStyle='black';
			ctx.fillRect(666,200,30,125);//c#''' satanic x lol
			ctx.font="14px arial";
			ctx.fillText("C'''",656,385);
			
			ctx.font="14px arial";
			ctx.fillStyle='white';
			ctx.fillText("C#'''",666,315);//L...O...L
			
			ctx.clearRect(235,50,400,100);
			board(ctx);
			key="C'''";
			key2='C';
		}
		else if((posX>=682 && posX<=712) && (posY>=399 && posY<=597))
		{
			var audio = new Audio("Assets/Tune/D'''.mp3");
			audio.play();
			
			ctx.fillStyle = '#5CC2DB'; 
			ctx.fillRect(682,200,30,200);//d'''
			
			ctx.fillStyle='black';
			ctx.fillRect(666,200,30,125);//c#''' satanic x lol
			ctx.fillRect(697,200,30,125);//d#'''
			ctx.font="14px arial";
			ctx.fillText("D'''",686,385);
			
			ctx.font="14px arial";
			ctx.fillStyle='white';
			ctx.fillText("C#'''",666,315);//L...O...L
			ctx.fillText("D#'''",697,315);
			
			ctx.clearRect(235,50,400,100);
			board(ctx);
			key="D'''";
			key2='V';
		}
		else if((posX>=713 && posX<=743) && (posY>=399 && posY<=597))
		{
			var audio = new Audio("Assets/Tune/E'''.mp3");
			audio.play();
			
			//animasi
			ctx.fillStyle = '#5CC2DB'; 
			ctx.fillRect(713,200,30,200);//E'''
			
			ctx.fillStyle='black';
			ctx.fillRect(697,200,30,125);//D#'''
			ctx.font="14px arial";
			ctx.fillText("E'''",718,385);
			
			ctx.font="14px arial";
			ctx.fillStyle='white';
			ctx.fillText("D#'''",697,315);
			
			ctx.clearRect(235,50,400,100);
			board(ctx);
			key="E'''";
			key2='B';
		}
		else if((posX>=744 && posX<=774) && (posY>=399 && posY<=597))
		{
			var audio = new Audio("Assets/Tune/F'''.mp3");
			audio.play();
			
			//animasi
			ctx.fillStyle ='#5CC2DB'; 
			ctx.fillRect(744,200,30,200);//f'''
			
			ctx.fillStyle='black';
			ctx.fillRect(759,200,30,125);//f#'''
			ctx.font="14px arial";
			ctx.fillText("F'''",750,385);
			
			ctx.font="14px arial";
			ctx.fillStyle='white';
			ctx.fillText("F#'''",759,315);
			
			ctx.clearRect(235,50,400,100);
			board(ctx);
			key="F'''";
			key2='N';
		}
		else if((posX>=775 && posX<=805) && (posY>=399 && posY<=597))
		{
			var audio = new Audio("Assets/Tune/G'''.mp3");
			audio.play();
			
			ctx.fillStyle = '#5CC2DB'; 
			ctx.fillRect(775,200,30,200);//g'''
			
			ctx.fillStyle='black';
			ctx.fillRect(759,200,30,125);//f#'''
			ctx.fillRect(790,200,30,125);//g#'''
			ctx.font="14px arial";
			ctx.fillText("G'''",780,385);
			
			ctx.font="14px arial";
			ctx.fillStyle='white';
			ctx.fillText("F#'''",759,315);
			ctx.fillText("G#'''",790,315);
			
			ctx.clearRect(235,50,400,100);
			board(ctx);
			key="G'''";
			key2='M';
		}
		else if((posX>=806 && posX<=836) && (posY>=399 && posY<=597))
		{
			var audio = new Audio("Assets/Tune/A'''.mp3");
			audio.play();
			
			ctx.fillStyle = '#5CC2DB'; 
			ctx.fillRect(806,200,30,200);//A'''
			
			ctx.fillStyle='black';
			ctx.fillRect(790,200,30,125);//G#'''
			ctx.fillRect(821,200,30,125);//A#'''
			ctx.font="14px arial";
			ctx.fillText("A'''",811,385);
			
			ctx.font="14px arial";
			ctx.fillStyle='white';
			ctx.fillText("G#'''",790,315);
			ctx.fillText("A#'''",821,315);
			
			ctx.clearRect(235,50,400,100);
			board(ctx);
			key="A'''";
			key2=',';
		}
		else if((posX>=837 && posX<=867) && (posY>=399 && posY<=597))
		{
			var audio = new Audio("Assets/Tune/B'''.mp3");
			audio.play();
			
			//animasi
			ctx.fillStyle ='#5CC2DB'; 
			ctx.fillRect(837,200,30,200);//b'''
			
			ctx.fillStyle='black';
			ctx.fillRect(821,200,30,125);//a#'''
			ctx.font="14px arial";
			ctx.fillText("B'''",841,385);
			
			ctx.font="14px arial";
			ctx.fillStyle='white';
			ctx.fillText("A#'''",821,315);
			
			ctx.clearRect(235,50,400,100);
			board(ctx);
			key="B'''";
			key2='.';
		}
		lampOn(ctx);
		printtext(ctx,key,key2);
		
	});
}

function blackkey(ctx)
{
	//Black Key
	ctx.fillStyle="black";
	ctx.fillRect(15,200,30,125);//c#
	ctx.fillRect(46,200,30,125);//d#
	ctx.fillRect(108,200,30,125);//f#
	ctx.fillRect(139,200,30,125);//g#
	ctx.fillRect(170,200,30,125);//a#
	ctx.fillRect(232,200,30,125);//c#'
	ctx.fillRect(263,200,30,125);//d#'
	ctx.fillRect(325,200,30,125);//f#'
	ctx.fillRect(356,200,30,125);//g#'
	ctx.fillRect(387,200,30,125);//a#'
	ctx.fillRect(449,200,30,125);//c#''
	ctx.fillRect(480,200,30,125);//d#''
	ctx.fillRect(542,200,30,125);//f#''
	ctx.fillRect(573,200,30,125);//g#''
	ctx.fillRect(604,200,30,125);//a#''
	ctx.fillRect(666,200,30,125);//c#''' satanic x lol
	ctx.fillRect(697,200,30,125);//d#'''
	ctx.fillRect(759,200,30,125);//f#'''
	ctx.fillRect(790,200,30,125);//g#'''
	ctx.fillRect(821,200,30,125);//a#'''
}

function whitekey(ctx)
{
	//White Key
	ctx.fillStyle="white";
	ctx.fillRect(0,200,30,200);//c
	ctx.fillRect(31,200,30,200);//d
	ctx.fillRect(62,200,30,200);//e
	ctx.fillRect(93,200,30,200);//f
	ctx.fillRect(124,200,30,200);//g
	ctx.fillRect(155,200,30,200);//a
	ctx.fillRect(186,200,30,200);//b
	ctx.fillRect(217,200,30,200);//c'
	ctx.fillRect(248,200,30,200);//d'
	ctx.fillRect(279,200,30,200);//e'
	ctx.fillRect(310,200,30,200);//f'
	ctx.fillRect(341,200,30,200);//g'
	ctx.fillRect(372,200,30,200);//a'
	ctx.fillRect(403,200,30,200);//b'
	ctx.fillRect(434,200,30,200);//c''
	ctx.fillRect(465,200,30,200);//d''
	ctx.fillRect(496,200,30,200);//e''
	ctx.fillRect(527,200,30,200);//f''
	ctx.fillRect(558,200,30,200);//g''
	ctx.fillRect(589,200,30,200);//a''
	ctx.fillRect(620,200,30,200);//b''
	ctx.fillRect(651,200,30,200);//c'''
	ctx.fillRect(682,200,30,200);//d'''
	ctx.fillRect(713,200,30,200);//e'''
	ctx.fillRect(744,200,30,200);//f'''
	ctx.fillRect(775,200,30,200);//g'''
	ctx.fillRect(806,200,30,200);//a'''
	ctx.fillRect(837,200,30,200);//b'''
}

function keytext(ctx)
{
	//Black Text
	ctx.fillStyle="black";
	ctx.font="14px arial";
	ctx.fillText("C",10,385);
	ctx.fillText("D",40,385);
	ctx.fillText("E",70,385);
	ctx.fillText("F",100,385);
	ctx.fillText("G",130,385);
	ctx.fillText("A",163,385);
	ctx.fillText("B",194,385);
	ctx.fillText("C'",225,385);
	ctx.fillText("D'",257,385);
	ctx.fillText("E'",287,385);
	ctx.fillText("F'",317,385);
	ctx.fillText("G'",349,385);
	ctx.fillText("A'",380,385);
	ctx.fillText("B'",412,385);
	ctx.fillText("C''",442,385);
	ctx.fillText("D''",472,385);
	ctx.fillText("E''",502,385);
	ctx.fillText("F''",535,385);
	ctx.fillText("G''",565,385);
	ctx.fillText("A''",597,385);
	ctx.fillText("B''",628,385);
	ctx.fillText("C'''",656,385);
	ctx.fillText("D'''",686,385);
	ctx.fillText("E'''",718,385);
	ctx.fillText("F'''",750,385);
	ctx.fillText("G'''",780,385);
	ctx.fillText("A'''",811,385);
	ctx.fillText("B'''",841,385);
	
	//White Text
	ctx.fillStyle="White";
	ctx.font="14px arial";
	ctx.fillText("C#",20,315);
	ctx.fillText("D#",51,315);
	ctx.fillText("F#",113,315);
	ctx.fillText("G#",144,315);
	ctx.fillText("A#",175,315);
	ctx.fillText("C#'",235,315);
	ctx.fillText("D#'",266,315);
	ctx.fillText("F#'",328,315);
	ctx.fillText("G#'",359,315);
	ctx.fillText("A#'",390,315);
	ctx.fillText("C#''",450,315);
	ctx.fillText("D#''",482,315);
	ctx.fillText("F#''",545,315);
	ctx.fillText("G#''",575,315);
	ctx.fillText("A#''",607,315);
	ctx.fillText("C#'''",666,315);//L...O...L
	ctx.fillText("D#'''",697,315);
	ctx.fillText("F#'''",759,315);
	ctx.fillText("G#'''",790,315);
	ctx.fillText("A#'''",821,315);
}


