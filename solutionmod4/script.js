//Immediately Invoked Function Expression (IIFE) 
(function (window){

  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  for ( var i in names ) { /* 'for' loop to loop over names array */
    var firstLetter = ((names[i]).charAt(0).toLowerCase());

    if ( firstLetter == 'j' ) { /* fill in condition here */
      byeSpeaker.speak(names[i]);
      } else {
      helloSpeaker.speak(names[i]);
    }
  }
})(window);
