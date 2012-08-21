


var app = {

	ready: function() {
		soundManager.onready(function(){
			app.start();
		});
	},

	start: function() {
		var content = document.id('content');
		sounds.each(function(data){

			var sound = new Sound(data);
			content.grab(sound);

		});
	}

};

window.addEvent('domready', app.ready);