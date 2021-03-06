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

  var canvas = document.getElementById('canvas');
  var canvasCtx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  console.log(document.getElementsByClassName('active').length);

  //gets the array object of
  var audio = new $('.hour0 audio')[0];


  audio.crossOrigin = 'anonymous';
  // audio.src = 'https://api.soundcloud.com/tracks/436771803/stream?client_id=b1495e39071bd7081a74093816f77ddb';
  audio.controls = false;
  // audio.load();
  // audio.play();

  var audioCtx;

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
    // var x2 = canvas.width * Math.cos(angle);  // angle in radians
    // var y2 = canvas.width * Math.sin(angle);
    // var my_gradient= canvasCtx.createLinearGradient(0, 0, x2, y2);
    // my_gradient.addColorStop(0,"rgb(239,239,239)");
    // my_gradient.addColorStop(1,"rgb(255,255,255)");
    canvasCtx.fillStyle = "rgb(248,248,248)";
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




// $(window).unload(function(){
//   audio.disconnect();
// });

function resize(){
  $("#canvas").outerHeight($(window).height()-$("#canvas").offset().top- Math.abs($("#canvas").outerHeight(true) - $("#canvas").outerHeight()));
}
$(document).ready(function(){
  resize();
  $(window).on("resize", function(){
    resize();
  });
});
