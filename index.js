var settingGroundwork = require('./letter.js');

var Game1 = new settingGroundwork();

var letterGuessed = porcess.argv[2];

    Game1.test=true;
    Game1.letterGuessed=letterGuessed;
    for(var i=0; i< Game1.doubleLetter.length; i++){
        if(Game1.letterGuessed === Game1.doubleLetter[i] && test === true){
            Game1.doubleLetter.splice(i,1);
            Game1.compareLetters(letterGuessed);
            Game1.winLose();
        }
    }




