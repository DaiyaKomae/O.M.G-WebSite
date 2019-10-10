$(function(){
    var duration = 300;

    var $image = $('#images p');
    var $layer = $('#fade-layer');
    var $body = $('body');


    $image.filter(':nth-child(1)')
        .on('mouseover', function(){
            $(this).find('strong').stop(true).animate({opacity:1, left:'0%'}, duration);
            $(this).find('span').stop(true).animate({opacity:1}, duration);
            $body.css('background-image', 'url(./img/20190505_190918_0080.jpg)');
        })
        .on('mouseout', function(){
            $(this).find('strong').stop(true).animate({opacity: 0, left: '-200%'}, duration);
            $(this).find('span').stop(true).animate({opacity: 0}, duration);
            $body.css('background-image', 'none');
        });
    $image.filter(':nth-child(2)')
        .on('mouseover', function(){
            $(this).find('strong').stop(true).animate({opacity:1, left:'0%'}, duration);
            $(this).find('span').stop(true).animate({opacity:1}, duration);
            $body.css('background-image', 'url(./img/cfb4616a425f2d3f7313e52c85ddee08a_7213903_190905_0010.jpg)');
        })
        .on('mouseout', function(){
            $(this).find('strong').stop(true).animate({opacity: 0, left: '-200%'}, duration);
            $(this).find('span').stop(true).animate({opacity: 0}, duration);
            $body.css('background-image', 'none');
        });
    $image.filter(':nth-child(3)')
        .on('mouseover', function(){
            $(this).find('strong').stop(true).animate({opacity:1, left:'0%'}, duration);
            $(this).find('span').stop(true).animate({opacity:1}, duration);
            $body.css('background-image', 'url(./img/20181006_190905_0202.jpg)');
        })
        .on('mouseout', function(){
            $(this).find('strong').stop(true).animate({opacity: 0, left: '-200%'}, duration);
            $(this).find('span').stop(true).animate({opacity: 0}, duration);
            $body.css('background-image', 'none');
        });    
    $image.filter(':nth-child(4)')
        .on('mouseover', function(){
            $(this).find('strong').stop(true).animate({opacity:1, left:'0%'}, duration);
            $(this).find('span').stop(true).animate({opacity:1}, duration);
            $body.css('background-image', 'url(./img/20190528_190905_0003.jpg)');
        })
        .on('mouseout', function(){
            $(this).find('strong').stop(true).animate({opacity: 0, left: '-200%'}, duration);
            $(this).find('span').stop(true).animate({opacity: 0}, duration);
            $body.css('background-image', 'none');
        });
});