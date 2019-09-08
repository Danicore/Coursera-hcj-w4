(function(window) {

    var goodByeSpeaker = {};
    goodByeSpeaker.name = window.names;
    var speakWord = "GoodBye";
    goodByeSpeaker.speak = function(name) {
        console.log(speakWord + " " + name);
    }

    //goodByeSpeaker.speak();

    window.goodByeSpeaker = goodByeSpeaker;

})(window);