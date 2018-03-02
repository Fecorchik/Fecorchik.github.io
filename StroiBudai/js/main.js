jQuery(document).ready(function($) {

  $('.pop-up').magnificPopup();
  $('.btn-polit').magnificPopup();

      $(window).scroll(function(){
        if ($(this).scrollTop() > 600) {
          $('.scroll-menu').show();
        } else {
          $('.scroll-menu').hide();
        };
      });

	$('.slider-blocks').slick({
	  nextArrow: '<img class="slick-btn-next" src="/img/sri1.png" alt="next">',
    prevArrow: '<img class="slick-btn-prev" src="/img/sle1.png" alt="prev">',
    slidesToShow: 1,
  	slidesToScroll: 1,
  	fade: true,
    dots:true,
  	});


$('.pup-up-slider-big').slick({
  nextArrow: '<img class="pup-up-right" src="../img/pup-up/pr.png" alt="next">',
  prevArrow: '<img class="pup-up-left" src="../img/pup-up/pl.png" alt="prev">',
  arrows:true,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  asNavFor: '.pup-up-slider-little',
  slickSetOption: true
 // autoplay: true
});
$('.pup-up-slider-little').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false, 
  asNavFor: '.pup-up-slider-big',
  focusOnSelect: true,
  slickSetOption: true
});


$('.otzivi').slick({
  nextArrow: '<img class="slick-btn-next" src="../img/sri1.png" alt="next">',
  prevArrow: '<img class="slick-btn-prev" src="../img/sle1.png" alt="prev">',
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  dots:true
});


// $("#btn-polit").click(function(){ 
//     $('.overlay-pupup').show();
//     $('#polit').show();
// });
// $("#polit-close").click(function(){ 
//     $('#polit').hide();
//     $('.overlay-pupup').hide();
// });



$("#sec3-btn-1").addClass('act');
$('#sec-3-card-2').hide(); 
$('#sec-3-card-3').hide();
$('#sec-3-card-4').hide();
$('#sec-3-card-5').hide();


$("#sec3-btn-1").click(function(){ 

  $("#sec3-btn-1").addClass('act');
  $("#sec3-btn-2").removeClass('act');
  $("#sec3-btn-3").removeClass('act');
  $("#sec3-btn-4").removeClass('act');
  $("#sec3-btn-5").removeClass('act');

  $(".menu-s3-wrap-arround").css("padding","5rem");

  $("#sec-3-card-1").show();
  $("#sec-3-card-2").hide();
  $("#sec-3-card-3").hide();
  $("#sec-3-card-4").hide();
  $("#sec-3-card-5").hide();

});
$("#sec3-btn-2").click(function(){ 
 
  $("#sec3-btn-1").removeClass('act');
  $("#sec3-btn-2").addClass('act');
  $("#sec3-btn-3").removeClass('act');
  $("#sec3-btn-4").removeClass('act');
  $("#sec3-btn-5").removeClass('act');

  $(".menu-s3-wrap-arround").css("padding","7rem");

  $('#sec-3-card-1').hide(); 
  $('#sec-3-card-2').show();
  $('#sec-3-card-3').hide();
  $('#sec-3-card-4').hide();
  $('#sec-3-card-5').hide();

});
$("#sec3-btn-3").click(function(){ 

  $("#sec3-btn-1").removeClass('act');
  $("#sec3-btn-2").removeClass('act');
  $("#sec3-btn-3").addClass('act');
  $("#sec3-btn-4").removeClass('act');
  $("#sec3-btn-5").removeClass('act');

  $(".menu-s3-wrap-arround").css("padding","7rem");

  $('#sec-3-card-1').hide(); 
  $('#sec-3-card-2').hide();
  $('#sec-3-card-3').show();
  $('#sec-3-card-4').hide();
  $('#sec-3-card-5').hide();
});
$("#sec3-btn-4").click(function(){ 

  $("#sec3-btn-1").removeClass('act');
  $("#sec3-btn-2").removeClass('act');
  $("#sec3-btn-3").removeClass('act');
  $("#sec3-btn-4").addClass('act');
  $("#sec3-btn-5").removeClass('act');

  $(".menu-s3-wrap-arround").css("padding","5rem");

  $('#sec-3-card-1').hide(); 
  $('#sec-3-card-2').hide();
  $('#sec-3-card-3').hide();
  $('#sec-3-card-4').show();
  $('#sec-3-card-5').hide();
});
$("#sec3-btn-5").click(function(){ 
 
  $("#sec3-btn-1").removeClass('act');
  $("#sec3-btn-2").removeClass('act');
  $("#sec3-btn-3").removeClass('act');
  $("#sec3-btn-4").removeClass('act');
  $("#sec3-btn-5").addClass('act');

  $(".menu-s3-wrap-arround").css("padding","7rem");

  $('#sec-3-card-1').hide(); 
  $('#sec-3-card-2').hide();
  $('#sec-3-card-3').hide();
  $('#sec-3-card-4').hide();
  $('#sec-3-card-5').show();
});

// Картинки
  $("#pup-up-img1").click(function(){ 
    $('.pup-up-slider-big').get(0).slick.setPosition();
    $('.pup-up-slider-little').get(0).slick.setPosition();
  });
    $("#pup-up-img2").click(function(){ 
    $('.pup-up-slider-big').get(0).slick.setPosition();
    $('.pup-up-slider-little').get(0).slick.setPosition();
  });
    $("#pup-up-img3").click(function(){ 
    $('.pup-up-slider-big').get(0).slick.setPosition();
    $('.pup-up-slider-little').get(0).slick.setPosition();
  });
    $("#pup-up-img4").click(function(){ 
    $('.pup-up-slider-big').get(0).slick.setPosition();
    $('.pup-up-slider-little').get(0).slick.setPosition();
  });
    $("#pup-up-img5").click(function(){ 
    $('.pup-up-slider-big').get(0).slick.setPosition();
    $('.pup-up-slider-little').get(0).slick.setPosition();
  });


//Кнопка закрытия
  // $(".overlay-pupup").click(function(){ 
  //   $('#pup-up-1').hide();
  //   $('#pup-up-2').hide();
  //   $('#pup-up-3').hide();
  //   $('#pup-up-4').hide();
  //   $('#pup-up-5').hide();

  //   $('#polit').hide();
  //   $('.overlay-pupup').hide();
  // });


var thousandSeparator = function(str) {
    var parts = (str + '').split('.'),
        main = parts[0],
        len = main.length,
        output = '',
        i = len - 1;
    
    while(i >= 0) {
        output = main.charAt(i) + output;
        if ((len - i) % 3 === 0 && i > 0) {
            output = ' ' + output;
        }
        --i;
    }

    if (parts.length > 1) {
        output += '.' + parts[1];
    }
    return output;
};

$("#calc-card-1-right").click(function(){ 
  $('#calc-card-1').hide();
  $('#calc-card-2').show();

  $('#arr-1').removeClass('arr-active');
  $('#arr-2').addClass('arr-active');

  $dlina = $('#bathrooms-dlina').val("");
  $visota = $('#bathrooms-visota').val("");
  $shirina = $('#bathrooms-shirina').val("");
  $('#calc-card-vivod-1 span').text("0");
});

$("#calc-card-1-center").click(function(){ 
  $input = $('input[name=bathrooms]:checked').val();
  $dlina = $('#bathrooms-dlina').val();
  $visota = $('#bathrooms-visota').val();
  $shirina = $('#bathrooms-shirina').val();

  $vivod = $input*$dlina*$shirina;
  $fix = $vivod.toFixed()

  $otvet = thousandSeparator($fix);
  $('#calc-card-vivod-1 span').text($otvet);
});

//===================================================================


$("#calc-card-2-left").click(function(){ 
  $('#calc-card-2').hide();
  $('#calc-card-1').show();

  $('#arr-2').removeClass('arr-active');
  $('#arr-1').addClass('arr-active');

  $dlina = $('#balk-dlina').val("");
  $visota = $('#balk-visota').val("");
  $shirina = $('#balk-shirina').val("");
  $('#calc-card-vivod-2 span').text("0");
});
$("#calc-card-2-right").click(function(){ 
  $('#calc-card-2').hide();
  $('#calc-card-3').show();

  $('#arr-2').removeClass('arr-active');
  $('#arr-3').addClass('arr-active');

  $dlina = $('#balk-dlina').val("");
  $visota = $('#balk-visota').val("");
  $shirina = $('#balk-shirina').val("");
  $('#calc-card-vivod-2 span').text("0");
});

$("#calc-card-2-center").click(function(){ 
  $input = $('input[name=balk]:checked').val();
  $dlina = $('#balk-dlina').val();
  $visota = $('#balk-visota').val();
  $shirina = $('#balk-shirina').val();

  $vivod = $input*$dlina*$shirina;
  $fix = $vivod.toFixed()

  $otvet = thousandSeparator($fix);


  $('#calc-card-vivod-2 span').text($otvet);
});

//===================================================================
$("#calc-card-3-left").click(function(){ 
  $('#calc-card-3').hide();
  $('#calc-card-2').show();

  $('#arr-3').removeClass('arr-active');
  $('#arr-2').addClass('arr-active');

  $dlina = $('#room-dlina').val("");
  $visota = $('#room-visota').val("");
  $shirina = $('#room-shirina').val("");
  $('#calc-card-vivod-3 span').text("0");
});
$("#calc-card-3-right").click(function(){ 
  $('#calc-card-3').hide();
  $('#calc-card-4').show();

  $('#arr-3').removeClass('arr-active');
  $('#arr-4').addClass('arr-active');

   $dlina = $('#room-dlina').val("");
  $visota = $('#room-visota').val("");
  $shirina = $('#room-shirina').val("");
  $('#calc-card-vivod-3 span').text("0");
});

$("#calc-card-3-center").click(function(){ 
  $input = $('input[name=room]:checked').val();
  $dlina = $('#room-dlina').val();
  $visota = $('#room-visota').val();
  $shirina = $('#room-shirina').val();

  $vivod = $input*$dlina*$shirina;
  $fix = $vivod.toFixed()

  $otvet = thousandSeparator($fix);

  $('#calc-card-vivod-3 span').text($otvet);
});

//===================================================================
$("#calc-card-4-left").click(function(){ 
  $('#calc-card-4').hide();
  $('#calc-card-3').show();

  $('#arr-4').removeClass('arr-active');
  $('#arr-3').addClass('arr-active');

  $dlina = $('#kitchen-dlina').val("");
  $visota = $('#kitchen-visota').val("");
  $shirina = $('#kitchen-shirina').val("");
  $('#calc-card-vivod-4 span').text("0");
});
$("#calc-card-4-right").click(function(){ 
  $('#calc-card-4').hide();
  $('#calc-card-5').show();

  $('#arr-4').removeClass('arr-active');
  $('#arr-5').addClass('arr-active');

  $dlina = $('#kitchen-dlina').val("");
  $visota = $('#kitchen-visota').val("");
  $shirina = $('#kitchen-shirina').val("");
  $('#calc-card-vivod-4 span').text("0");
});
$("#calc-card-4-center").click(function(){ 
  $input = $('input[name=kitchen]:checked').val();
  $dlina = $('#kitchen-dlina').val();
  $visota = $('#kitchen-visota').val();
  $shirina = $('#kitchen-shirina').val();

  $vivod = $input*$dlina*$shirina;
  $fix = $vivod.toFixed()

  $otvet = thousandSeparator($fix);

  $('#calc-card-vivod-4 span').text($otvet);
});
//===================================================================
$("#calc-card-5-left").click(function(){ 
  $('#calc-card-5').hide();
  $('#calc-card-4').show();

  $('#arr-5').removeClass('arr-active');
  $('#arr-4').addClass('arr-active');

   $dlina = $('#corridor-dlina').val("");
  $visota = $('#corridor-visota').val("");
  $shirina = $('#corridor-shirina').val("");
  $('#calc-card-vivod-5 span').text("0");
});
$("#calc-card-5-right").click(function(){ 
  $('#calc-card-5').hide();
  $('#calc-card-1').show();

  $('#arr-5').removeClass('arr-active');
  $('#arr-1').addClass('arr-active');

  $dlina = $('#corridor-dlina').val("");
  $visota = $('#corridor-visota').val("");
  $shirina = $('#corridor-shirina').val("");
  $('#calc-card-vivod-5 span').text("0");
});
$("#calc-card-5-center").click(function(){ 
  $input = $('input[name=corridor]:checked').val();
  $dlina = $('#corridor-dlina').val();
  $visota = $('#corridor-visota').val();
  $shirina = $('#corridor-shirina').val();

  $vivod = $input*$dlina*$shirina;
  $fix = $vivod.toFixed()

  $otvet = thousandSeparator($fix);

  $('#calc-card-vivod-5 span').text($otvet);
});
//===================================================================
});
