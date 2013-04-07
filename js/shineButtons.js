/*--
JPGShiny Buttons
Author: Jose Pablo Granados
Email: jpgcodecr@gmail.com
Add cool shiny effect to the links in your page!
Version: 1.0
Last Modification: February 2013
--*/
(function($){ 
   $.fn.jpgShiny = function(options) {
        var btn = this;
        $.each(btn, function(){
            var btnWidth         = $(this).width(),
                btnHeight        = $(this).height(),
                btnMarginTop     = $(this).css('margin-top'),
                btnMarginLeft    = $(this).css('margin-left'),
                btnMarginBottom  = $(this).css('margin-bottom'),
                btnMarginRight   = $(this).css('margin-right'),
                btnPaddingTop    = $(this).css('padding-top'),
                btnPaddingRight  = $(this).css('padding-left'),
                btnPaddingBottom = $(this).css('padding-bottom'),
                btnPaddingLeft   = $(this).css('padding-left');

            $(this).css({ margin: '0', padding: '0'})
                   .wrap('<div class="btnShineWrap" style="position:relative; width: '+ btnWidth +'px; margin: '+ btnMarginTop + ' '+ btnMarginRight + ' ' + btnMarginBottom + ' ' + btnMarginLeft + ';' + ' padding: ' + btnPaddingTop + ' '+ btnPaddingRight + ' '+ btnPaddingBottom + ' '+ btnPaddingLeft+ ';'+ ' height: '+ btnHeight +'px; overflow: hidden;">');
            $(this).parent().prepend('<div class="shineImg" style="position: absolute; top: 0px; left: -'+ btnWidth +'px; z-index: 1; width: '+ btnWidth +'px; height: '+ btnHeight +'px; background: url('+ options.shineBackgroundURL +') no-repeat;"></div>');

            var shineImg = $(this).prev();

            $(this).parent().hover(function(){
                shineImg.stop().css('left', btnWidth-(btnWidth*2));
                shineImg.animate({
                    left: btnWidth
                },options.speed);
            }, function(){
                shineImg.css('left', btnWidth-(btnWidth*2));
            });
        });
   } 
})(jQuery);