
var sounds = [


	{
		files: ['assets/mp3/hows-it-going.mp3'],
		quote: "Hey, how's it going?",
		author: {name: 'Ryan Rampersad', avatar: 'assets/avatar/ryan.png', link: 'http://twitter.com/ryanmr'},
		origin: {name: 'Every Day'}
	},
	{
		files: ['assets/mp3/hold-on-tweet.mp3'],
		quote: "Hold on while I tweet this...",
		author: {name: 'Ryan Rampersad', avatar: 'assets/avatar/ryan.png'}
	}


];


window.addEvent('domready', function(){

	var content = document.id('content');
	sounds.each(function(data){

		var sound = new Sound(data);
		content.grab(sound);

	});

});