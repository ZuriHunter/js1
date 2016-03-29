module.exports = function(bot){
  bot.respond(/my code is not working/i, function(msg){
    return msg.send("Did you know the semicolon has been the Hide and Seek champion since 1960....find that ';'!")
  });

  bot.hear(/"Let's sing a song"/i, function(msg){

    for (var errors = 0; errors < 10; errors++) {
        msg.send(errors + " errors in the log, " + errors + " errors in the log Fix one now and cry and pout " + errors + " errors in the log!")
    }
  });

  // Entering and Leaving
  greeting = ["Welcome", "Howdy", "Ayyyee", "Elllo"];
  farewell = ["Deuces", "Goodbye", "Chao", "You will be back!"];
  // user =

    bot.enter(function(response){
      return response.send("Hi");
    });

    bot.leave(function(response){

      return response.send("Bye");
      // return response.send((Math.floor((Math.random() * farewell.length)+1))) + " " + user.name
    });

}


// res.random(leaveReplies));
//
// Math.floor((Math.random() * 6)+1);
