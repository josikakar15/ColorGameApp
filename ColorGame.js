var numberOfSquares=6;
var colors=getrandomcolor(numberOfSquares);

var pickedcolor=pickColor();
var colordisplay=document.querySelector("#colordisplay");
colordisplay.textContent=pickedcolor;
var col=document.querySelectorAll(".square");
var messageDisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var easyBtn=document.querySelector("#easyBtn");
var hardBtn=document.querySelector("#hardBtn");

var modeButtons=document.querySelectorAll(".mode");
for(var i=0;i<modeButtons.length;i++){
modeButtons[i].addEventListener("click",function(){
	
	modeButtons[0].classList.remove("selected");
	modeButtons[1].classList.remove("selected");
	this.classList.add("selected");
	this.textContent==="Easy"? numberOfSquares=3:numberOfSquares=6;
	reset();
});
}



function reset(){
	colors=getrandomcolor(numberOfSquares);
	pickedcolor=pickColor();
	colordisplay.textContent=pickedcolor;
	messageDisplay.textContent="";
	resetButton.textContent="New Colors";
	for(var i=0;i<col.length;i++){
		if(colors[i]){
			col[i].style.display="block";
		col[i].style.backgroundColor=colors[i];
	}else{
		col[i].style.display="none";
	}
	}
	h1.style.backgroundColor="steelblue";
}

// easyBtn.addEventListener("click",function(){
// 	easyBtn.classList.add("selected");
// 	hardBtn.classList.remove("selected");
// 	numberOfSquares=3;
// 	colors=getrandomcolor(numberOfSquares);
// 	pickedcolor=pickColor();
// 	colordisplay.textContent=pickedcolor;
// 	for(var i=0;i<col.length;i++){
// 		if(colors[i]){
// 			col[i].style.background=colors[i];
// 		}else{
// 			col[i].style.display="none";
// 		}
// 	}

// });
// hardBtn.addEventListener("click",function(){
// easyBtn.classList.remove("selected");
// 	hardBtn.classList.add("selected");
// 	numberOfSquares=6;
// 	colors=getrandomcolor(numberOfSquares);
// 	pickedcolor=pickColor();
// 	colordisplay.textContent=pickedcolor;
// 	for(var i=0;i<col.length;i++){
		
// 			col[i].style.background=colors[i];
		
// 			col[i].style.display="block";
		
// 	}

// });
resetButton.addEventListener("click",reset);
	



for(var i=0;i<col.length;i++){
	col[i].style.backgroundColor=colors[i];
col[i].addEventListener("click",function(){
	var clickedcolor=this.style.backgroundColor;
	if(clickedcolor===pickedcolor){
		messageDisplay.textContent="Correct!";
		change(clickedcolor);
		h1.style.backgroundColor=clickedcolor;
		resetButton.textContent="Play Again?";
	}else{
		this.style.backgroundColor="#232323";
		messageDisplay.textContent="Try Again";

	}
});
}

function change(color){
	for(var i=0;i<colors.length;i++){
		col[i].style.background=color;
	}
}

function pickColor(){
	var random=Math.floor(Math.random()*colors.length);
	return colors[random];
}
function getrandomcolor(num){
	var arr =[]
	for(var i=0;i<num;i++){
		arr.push(generatecolor());
	}
	return arr;
}
function generatecolor(){
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return "rgb(" + r + ", "+ g + ", " + b + ")";

}