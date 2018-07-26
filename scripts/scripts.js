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

$("#sound-siren").hover(function(){
  $("#siren-hover").fadeIn(300);
},function(){
  $("#siren-hover").fadeOut(300);
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
