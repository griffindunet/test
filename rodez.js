$('#eraser').click(function() {
  $('.Car_lign_1, .Cerc1_lign_1, .Cerc2_lign_1, .Cerc3_lign_1, .Cerc4_lign_1, .Cerc1_lign_2, .Car_lign_2, .Cerc2_lign_2, .Cerc3_lign_2, .Cerc4_lign_2, .Cerc1_lign_3, .Cerc2_lign_3, .Car_lign_3, .Cerc3_lign_3, .Cerc4_lign_3, .Cerc1_lign_4, .Cerc2_lign_4, .Cerc3_lign_4, .Car_lign_4, .Cerc4_lign_4, .Cerc1_lign_5, .Cerc2_lign_5, .Cerc3_lign_5, .Cerc4_lign_5, .Car_lign_5').each(function() {
    $(this).addClass("active");
  });
});



$('#button2').click(function() {
  $('.Car_lign_1, .Cerc1_lign_1, .Cerc2_lign_1, .Cerc3_lign_1, .Cerc4_lign_1, .Cerc1_lign_2, .Car_lign_2, .Cerc2_lign_2, .Cerc3_lign_2, .Cerc4_lign_2, .Cerc1_lign_3, .Cerc2_lign_3, .Car_lign_3, .Cerc3_lign_3, .Cerc4_lign_3, .Cerc1_lign_4, .Cerc2_lign_4, .Cerc3_lign_4, .Car_lign_4, .Cerc4_lign_4, .Cerc1_lign_5, .Cerc2_lign_5, .Cerc3_lign_5, .Cerc4_lign_5, .Car_lign_5').each(function() {
    $(this).removeClass("active");
  });
});



/* le code marche pas 
$('div hasClass:contains("Cerc")').click(function(){

    if ($(this).hasClass("active"))
    {
      $(this).removeClass("active");
    }
    else
    {
      $(this).addClass("active");
    }
  });*/











//cercles ligne 1 
$('.Cerc1_lign_1, .Cerc2_lign_1, .Cerc3_lign_1, .Cerc4_lign_1').click(function() {
  if ($(this).hasClass("active"))
    {
      $(this).removeClass("active");
    }
    else
    {
      $(this).addClass("active");
    }
  });


//carré ligne 1
$('.Car_lign_1').click(function() {
  $('.Cerc1_lign_1, .Cerc2_lign_1, .Cerc3_lign_1, .Cerc4_lign_1').each(function() {
    $(this).toggleClass("active");
  });
});
//carré ligne 2

$('.Car_lign_2').click(function() {
  $('.Car_lign_2, .Cerc1_lign_2, .Cerc2_lign_2, .Cerc3_lign_2, .Cerc4_lign_2').each(function() {
    $(this).toggleClass("active");
  });
});
//carré ligne 3

$('.Car_lign_3').click(function() {
  $('.Car_lign_3, .Cerc2_lign_1, .Cerc2_lign_1, .Cerc2_lign_2, .Cerc3_lign_4, .Cerc3_lign_5, .Cerc1_lign_3, .Cerc2_lign_3, .Cerc3_lign_3, .Cerc4_lign_3').each(function() {
    $(this).toggleClass("active");
  });
});

//carré ligne 4

$('.Car_lign_4').click(function() {
  $('.Car_lign_4, .Cerc1_lign_4, .Cerc2_lign_4, .Cerc3_lign_4, .Cerc4_lign_4').each(function() {
    $(this).toggleClass("active");
  });
});
//carré ligne 5

$('.Car_lign_5').click(function() {
  $('.Car_lign_5, .Cerc1_lign_5, .Cerc2_lign_5, .Cerc3_lign_5, .Cerc4_lign_5').each(function() {
    $(this).toggleClass("active");
  });
});

