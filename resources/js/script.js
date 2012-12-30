// script.js

(function(){

	function createView(data) {
		var sound = new Element('div.sound');
		
		// structure setup
		sound.grab(new Element('div.quote').grab(new Element('h3')));
		sound.grab(new Element('div.avatar').grab(new Element('img')));
		
		var meta = new Element('div.meta');
		if ( data.origin != undefined ) {
			meta.grab(new Element('div.origin'));
			var origin = meta.getElement('.origin');
			if ( data.origin.link )
				origin.grab(new Element('a').set('html', data.origin.name).set('href', data.origin.link));
			else
				origin.set('html', data.origin.name);
		}

		meta.grab(new Element('div.author'));
		sound.grab(meta);

		// attribute setup
		sound.getElement('.quote h3').set('html', data.quote);
		if ( data.quote.length > 28 ) sound.getElement('.quote h3').addClass('long');
		sound.getElement('.avatar img').set('src', data.author.avatar);

		// seems repetitive

		var author = sound.getElement('.author');
		if ( data.author.link )
			author.grab(new Element('a').set('html', data.author.name).set('href', data.author.link));
		else
			author.set('html', data.author.name);



		return sound;

	}

	var Sound = new Class({

		options: {},

		initialize: function(data) {
			this.data = data;

			// Assuming soundManger.onready is completed...
			this.sound = soundManager.createSound({
				id: data.quote.clean().hyphenate(),
				url: data.files[0]
			});

			this.construct();

		},

		construct: function() {
			var view = createView(this.data);
			this.view = view;
			var self = this;

			view.getElements('.quote, .avatar').addEvent('click', function(event){
				self.sound.play();
			});

		},

		toElement: function() {
			return this.view;
		}



	}); 

	window.Sound = Sound;

})();




var app = {

	ready: function() {
		soundManager.onready(function(){
			app.start();
		});
	},

	start: function() {
		var content = document.id('content');

		if (typeof sounds === 'undefined') {
			sounds = [];
		}

		sounds.each(function(data){

			var sound = new Sound(data);
			content.grab(sound);

		});
	}

};

window.addEvent('domready', app.ready);