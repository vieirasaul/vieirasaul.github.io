$(document).ready(function(){
	new TypeIt('#myElement', {
      speed: 70,
      cursor: true,
      })
      .type('Olá, visitante!')
      .pause(500)
      .break()
      .type('Meu nome é Saul Vieira')
      .pause(500)
      .break()
      .type('e eu sou Desenvolvedor Front-end')

	window.onscroll = function(){
		if($(window).scrollTop() > 0) {
			$('.menu-bar').addClass('animate-menu');
		}else{
			$('.menu-bar').removeClass('animate-menu');
		}  	
  	}
	
});







// ROLAGEM DE PÁGINA SUAVE
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            event.stopPropagation();
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        // $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            // return false;
                        } else {
                            //  $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            // $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });
    //FIM - ROLAGEM DE PAGINA SUAVE