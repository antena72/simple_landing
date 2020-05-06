$(document).ready(function(){
        //slider
        $(function(){
            $('.slider').bxSlider({
                mode: 'fade',
                captions: true
        });
        //smooth scroll
        $(function smoothScroll() {
                $('nav a').click(function(event) {
                let id = $(this).attr("href");
                let offset = 70;
                let target = $(id).offset().top - offset;
                $('html, body').animate({
                    scrollTop: target}, 500);
                event.preventDefault();
                })
        });
        
    
        //portfolio
        $('.portfolioItem').hover(function(){
            $(this).children('img').toggleClass('opacity2');
            $(this).children('p').toggleClass('opacity1');
        })
        
    });
    
     
});
