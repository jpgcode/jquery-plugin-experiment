var Shine = {

	init: function(){
		this.shine();	
	},

	shine: function(){
		$('a.shine').jpgShiny({
            speed: 700,
            shineBackgroundURL: "img/shine.png"
        });
	}
}


$(function(){
	Shine.init();
});