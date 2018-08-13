// $(document).ready(function(){
//     $('.time-circle div').mouseover(function() {
//         // $('audio').removeClass('active');
//         $('audio', this).removeClass('active');
//     });
// 		$('.time-circle div').mouseout(function() {
// 				// $('audio').removeClass('active');
// 				$('audio', this).addClass('active');
// 		});
// });

$(document).ready(function(){
    $('.time-circle').mouseover(function() {
			$(".time-circle div").children('.active').removeClass('active');
			// $('audio', this).addClass('active');

    });
});

function togglePlay(soundobj) {
  var thissound=document.getElementById(soundobj);
  return thissound.paused ? thissound.play() : thissound.pause();
}

// function PlaySound(soundobj) {
//     var thissound=document.getElementById(soundobj);
//
//     thissound.play();
// 		var timeclick = $(".time-circle");
// 		// if() $(timeclick).click(function(){
// 		// 	thissound.play();
// 		// });
// 		// document.querySelector(".time-circle").classList.add('active');
// 		$(this).siblings('audio').removeClass('active');
// 		$(this).addClass('active');
// }
//
// function StopSound(soundobj) {
//     var thissound=document.getElementById(soundobj);
// 		var clicked = false;
// 		function clickHandler(){ // declare a function that updates the state
//   	clicked = true;
// 		}
// 		var element = document.getElementsByClassName("hour0");
//
// 		if(clicked == true){
// 			thissound.play();
// 		}
// 		else{
//     thissound.pause();
// 	}
//
// 		// $(".time-circle").click({
// 		// 	thissound.play();
// 		// });
//     // thissound.currentTime = 0;
// }

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

console.log(document.getElementsByClassName('active').length);

//gets the array object of
var audio = $('.hour15 audio')[0];

audio.crossOrigin = 'anonymous';
// audio.src = 'https://api.soundcloud.com/tracks/436771803/stream?client_id=b1495e39071bd7081a74093816f77ddb';
audio.controls = false;
// audio.load();
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
gradient.addColorStop(0, 'rgb(255, 123, 123)');
gradient.addColorStop(1, 'rgb(232, 180, 180)');


function draw() {
	analyser.getByteFrequencyData(dataArray);

	// background
	var my_gradient= canvasCtx.createLinearGradient(canvas.width/30, 0, canvas.width, canvas.height);
  my_gradient.addColorStop(0,"rgb(41,128,185)");
	my_gradient.addColorStop(1,"rgb(19,34,49)");
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

$('#name-title').css("color","white");
$('.hour0, .hour1, .hour2, .hour3, .hour4, .hour5, .hour6, .hour7, .hour8, .hour9, .hour10, .hour10-1, .hour10-2, .hour11, .hour12, .hour13, .hour14, .hour15, .hour16, .hour17, .hour18, .hour19, .hour20, .hour21, .hour22, .hour23').css("background","white");
$('#midnight').css("color","white");
$('#noon').css("color","white");
$('#six-am').css("color","white");
$('#six-pm').css("color","white");


var videoFile = 'bg-night.mp4';
$('#cover-video video source').attr('src',videoFile);
$("#cover-video video")[0].load();
