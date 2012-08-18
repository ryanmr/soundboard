// script.js


var app = {};

(function(){

	function createView(data) {
		var sound = new Element('div.sound');
		
		// structure setup
		sound.grab(new Element('div.quote').grab(new Element('h3')));
		sound.grab(new Element('div.avatar').grab(new Element('img')));
		sound.grab(new Element('div.meta').grab(new Element('div.origin')).grab(new Element('div.author')));

		// attribute setup
		sound.getElement('.quote h3').set('html', data.quote);
		sound.getElement('.avatar img').set('src', data.author.avatar);

		// seems repetitive

		var author = sound.getElement('.author');
		if ( data.author.link )
			author.grab(new Element('a').set('html', data.author.name).set('href', data.author.link));
		else
			author.set('html', data.author.name);

		var origin = sound.getElement('.author');
		if ( data.origin.link )
			origin.grab(new Element('a').set('html', data.origin.name).set('href', data.origin.link));
		else
			origin.set('html', data.origin.name);

		return sound;

	}

	var Sound = new Class({

		options: {},

		initialize: function(data) {
			this.setOptions(options);
			this.data = data;

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

		}



	}); 

	window.Sound = Sound;

});