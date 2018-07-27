$("#intro").delay(15000).fadeOut();

$("#location-duomo").hover(function(){
  $("#duomo-hover").fadeIn(300);
},function(){
  $("#duomo-hover").fadeOut(300)
});

$("#location-san-marco").hover(function(){
  $("#san-marco-hover").fadeIn(300);
},function(){
  $("#san-marco-hover").fadeOut(300)
});

$("#location-san-lorenzo").hover(function(){
  $("#san-lorenzo-hover").fadeIn(300);
},function(){
  $("#san-lorenzo-hover").fadeOut(300);
});

$("#location-piazza-della-repubblica").hover(function(){
  $("#piazza-della-repubblica-hover").fadeIn(300);
},function(){
  $("#piazza-della-repubblica-hover").fadeOut(300);
});

$("#location-santa-croce").hover(function(){
  $("#santa-croce-hover").fadeIn(300);
},function(){
  $("#santa-croce-hover").fadeOut(300);
});

$("#location-santissima-annunziata").hover(function(){
  $("#santissima-annunziata-hover").fadeIn(300);
},function(){
  $("#santissima-annunziata-hover").fadeOut(300);
});

$("#location-santo-spirito").hover(function(){
  $("#santo-spirito-hover").fadeIn(300);
},function(){
  $("#santo-spirito-hover").fadeOut(300);
});

$("#location-duomo-milano").hover(function(){
  $("#duomo-milano-hover").fadeIn(300);
},function(){
  $("#duomo-milano-hover").fadeOut(300);
});

$("#location-piazza-della-signoria").hover(function(){
  $("#piazza-della-signoria-hover").fadeIn(300);
},function(){
  $("#piazza-della-signoria-hover").fadeOut(300);
});

$("#location-piazzale-michelangelo").hover(function(){
  $("#piazzale-michelangelo-hover").fadeIn(300);
},function(){
  $("#piazzale-michelangelo-hover").fadeOut(300);
});

$("#location-chiesa-di-santa-fosca").hover(function(){
  $("#chiesa-di-santa-fosca-hover").fadeIn(300);
},function(){
  $("#chiesa-di-santa-fosca-hover").fadeOut(300);
});

$("#sound-music").hover(function(){
  $("#music-hover").fadeIn(300);
},function(){
  $("#music-hover").fadeOut(300);
});

$("#sound-water").hover(function(){
  $("#water-hover").fadeIn(300);
},function(){
  $("#water-hover").fadeOut(300);
});

$("#sound-chinese").hover(function(){
  $("#chinese-hover").fadeIn(300);
},function(){
  $("#chinese-hover").fadeOut(300);
});

$("#sound-children").hover(function(){
  $("#children-hover").fadeIn(300);
},function(){
  $("#children-hover").fadeOut(300);
});

$('#sounds-btn').click(function(){
  $('#location-btn').removeClass('active');
  $(this).addClass('active');
  $('.location').css("display", "none");
  $('.sound').css("display", "block");
});

$('#location-btn').click(function(){
  $('#sounds-btn').removeClass('active');
  $(this).addClass('active');
  $('.location').css("display", "block");
  $('.sound').css("display", "none");
});

// Get the modal
var modal = document.getElementById('about-modal');

// Get the button that opens the modal
var btn = document.getElementById("about-button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
    $(".wrapper").css("filter","blur(4px)");
    $(".wrapper").css("-webkit-filter","blur(4px)");
    // -moz-filter: blur(4px);
    // -ms-filter: blur(4px);
    // -o-filter: blur(4px);
    // filter: blur(4px);
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
    $(".wrapper").css("filter","blur(0px)");
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        $(".wrapper").css("filter","blur(0px)");
        $(".wrapper").css("-webkit-filter","blur(0px)");

    }

}
