
var sounds = [


	{
		files: ['assets/audio/have-a-good-one.mp3'],
		quote: "Have a good one",
		author: {name: 'Ryan Rampersad', avatar: 'assets/avatar/ryan.jpg', link: 'http://twitter.com/ryanmr'},
		origin: {name: 'Every Day'}
	},
	{
		files: ['assets/audio/hold-on-tweet.mp3'],
		quote: "Hold on while I tweet this...",
		author: {name: 'Ryan Rampersad', avatar: 'assets/avatar/ryan.jpg'}
	}


];

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