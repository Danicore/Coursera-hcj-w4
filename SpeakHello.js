(function(window) {

    var helloSpeaker = {};
    helloSpeaker.name = window.names;
    var speakWord = "Hello";
    helloSpeaker.speak = function(name) {
        console.log(speakWord + " " + name);
    }
    
    //helloSpeaker.speak(helloSpeaker.name);

    window.helloSpeaker = helloSpeaker;

})(window);
