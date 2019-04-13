function settingGroundwork(){
    this.wordBank = [
        'bakedpotatoes',
        'hashbrowns',
        'mashedpotatoes',
        'potatopancakes',
        'potatoaugratin',
        'frenchfries',
        'scallopedpotatoes',
        'twicebakedpotatoes'
    ];
    this.doubleLetter=[
        'a','b','c',
        'd','e','f',
        'g','h','i',
        'j','k','l',
        'm','n','o',
        'p','q','r',
        's','t','u',
        'v','w','x',
        'y','z'
    ];
    this.choosenWordLetters = [];
    this.playerArray = [];
    this.wrongLetters= [];

    this.choosenWord = "";
    this.blanks= 0;
    this.winCount=0;
    this.loseCount=0;
    this.guessesLeft= 10;
    this.rightGuess= 0;
    this.letterGuessed= "";

    this.resettingGame = function(){
        //getting a new word saved
        this.randomNumber= this.randomNumber=parseInt(Math.random()*this.wordBank.length);
            console.log(this.randomNumber);
        this.choosenWord=this.wordBank[this.randomNumber];
            console.log(this.choosenWord);
        this.choosenWordLetters=this.choosenWord.split('');
            console.log(this.choosenWordLetters);
        this.blanks=this.choosenWordLetters.length;
            console.log(this.blanks);
        //resetting the variable values
        this.letterGuessed=0;
        this.rightGuess=0;
        this.guessesLeft =10;
        this.wrongLetters=[];
        this.playerArray=[];   
        this.doubleLetter=['a','b','c',
            'd','e','f',
            'g','h','i',
            'j','k','l',
            'm','n','o',
            'p','q','r',
            's','t','u',
            'v','w','x',
            'y','z'
            ];
        this.test=false;
        this.startGame();
    };

    this.startGame = function(){
        console.log("YOU ARE IN START GAME");
    }    
};

function doSomething(){
    console.log('this function is doing something')
}



module.exports = settingGroundwork;