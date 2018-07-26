/*
Credit information:
Artist: Amadeus
Song: Goodbye
Download/Stream: https://audiograb.com/5ksuJNaRs
*/

var canvas = document.getElementById('canvas');
var canvasCtx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;




// var audio = document.getElementById('audio-duomo-12:00');
// var audiosrc = document.getElementById('audio-duomo-12:00').src;
//
// var audio = document.getElementById('audio-duomo-13:00');
// var audiosrc = document.getElementById('audio-duomo-13:00').src;
var count;
var audio = new Audio();
audio = $(".audio-duomo");

// for(i=0; audio.length; i++){
// 	var audio[i] = document.getElementsByClassName('audio-duomo');
// 	var audiosrc[i] = document.getElementsByClassName('audio-duomo').src;
// }

audio.crossOrigin = 'anonymous';
// audio.src = 'https://api.soundcloud.com/tracks/436771803/stream?client_id=b1495e39071bd7081a74093816f77ddb';
// audio.src = 'http://localhost:8888/collections/Lucca%20Piazzale%20Anfiteatro%20Afternoon.m4a';
audio.controls = false;
audio.load();
// audio.play();

var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
var analyser = audioCtx.createAnalyser();
var audioSrc = audioCtx.createMediaElementSource(audio);

audioSrc.connect(analyser);
audioSrc.connect(audioCtx.destination);

analyser.fftSize = 2048;
analyser.minDecibels = -90;
analyser.maxDecibels = 0;

var bufferLength = analyser.frequencyBinCount;
var dataArray = new Uint8Array(bufferLength);

// gradient
var gradient = canvasCtx.createLinearGradient(0, 0, 0, canvas.height);
gradient.addColorStop(0, 'rgb(249, 185, 107)');
gradient.addColorStop(1, 'rgb(232, 162, 101)');

function draw() {
	analyser.getByteFrequencyData(dataArray);

	// background
	var my_gradient= canvasCtx.createLinearGradient(canvas.width/20, 0, canvas.width, canvas.height);
	my_gradient.addColorStop(0,"rgb(239,239,239)");
	my_gradient.addColorStop(1,"rgb(255,255,255)");
	canvasCtx.fillStyle = my_gradient;
	canvasCtx.fillRect(0, 0, canvas.width, canvas.height);

	// $(".hour0").hover(function(){
	// 	var my_gradient= canvasCtx.createLinearGradient(canvas.width/20, 0, canvas.width, canvas.height);
	// 	my_gradient.addColorStop(0,"rgb(156,236,251)");
	// 	my_gradient.addColorStop(1,"rgb(0,82,212)");
	// 	canvasCtx.fillStyle = my_gradient;
	// 	canvasCtx.fillRect(0, 0, canvas.width, canvas.height);
	// });

	var segments = dataArray.length / 2;
	var radius = (canvas.height + dataArray[0]) / 3.5;
	var a = (Math.PI * 2) / segments;
	var barHeight;

	for(let i = 0; i < segments; i++) {
		barHeight = dataArray[i] > 0 ? dataArray[i] : 1;

		let x1 = canvas.width / 2 + (radius * Math.cos(a * i));
		let x2 = canvas.width / 2 + ((radius + barHeight) * Math.cos(a * i));

		let y1 = canvas.height / 2 + (radius * Math.sin(a * i));
		let y2 = canvas.height / 2 + ((radius + barHeight) * Math.sin(a * i));

		canvasCtx.beginPath();
		canvasCtx.moveTo(x1, y1);
		canvasCtx.lineTo(x2, y2);
		canvasCtx.closePath();
		canvasCtx.lineWidth = 2;
		canvasCtx.strokeStyle = gradient;
		canvasCtx.stroke();
	}

	requestAnimationFrame(draw);
}

draw();

function resize(){
	$("#canvas").outerHeight($(window).height()-$("#canvas").offset().top- Math.abs($("#canvas").outerHeight(true) - $("#canvas").outerHeight()));
}
$(document).ready(function(){
	resize();
	$(window).on("resize", function(){
			resize();
	});
});

function PlaySound(soundobj) {
    var thissound=document.getElementById(soundobj);

    thissound.play();
		var timeclick = $(".time-circle");
		// if() $(timeclick).click(function(){
		// 	thissound.play();
		// });
		document.querySelector(".time-circle").classList.add('active');
}

function StopSound(soundobj) {
    var thissound=document.getElementById(soundobj);
		document.querySelector(".time-circle").classList.remove('active');
		// var timeclick = $(".time-circle");
		// element.addEventListener("click", function(){ thissound.play(); })

		var clicked = false;
		function clickHandler(){ // declare a function that updates the state
  	clicked = true;
		}
		var element = document.getElementsByClassName("hour0");
		// element[0].addEventListener('click', clickHandler());


		if(clicked == true){
			thissound.play();
		}
		else{
    thissound.pause();
	}

		// $(".time-circle").click({
		// 	thissound.play();
		// });
    // thissound.currentTime = 0;
}
