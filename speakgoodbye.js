(function (window) {
	var byeSpeaker = {};

	var speakWord = "Good Bye";


  byeSpeaker.speak= function (name) {
  console.log( "Good bye " + name);
}
window.byeSpeaker= byeSpeaker;
})(window);