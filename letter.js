function settingGroundwork(){
    this.wordBank = [
        'felipe',
        'andy',
        'give',
        'devanshi',
        'an',
        'A',
        'please',
        'thankyou'
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
        this.choosenWord=this.wordBank[this.randomNumber];
            console.log("The word that we are guessing is: ",this.choosenWord);
        this.choosenWordLetters=this.choosenWord.split('');
            console.log("The letters in our array of letters is: ",this.choosenWordLetters);
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
        //getting a new word saved
            var randomNumber=parseInt(Math.random()*this.wordBank.length);
            this.choosenWord=this.wordBank[randomNumber];
                console.log('startGame-choosenWord', this.choosenWord);
            this.choosenWordLetters=this.choosenWord.split('');
                console.log('startGame-choosenWordLetters', this.choosenWordLetters);
            this.blanks=this.choosenWordLetters.length;
                console.log('startGame-blanks', this.blanks);
            //resetting the variable values
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
            //creating blanks
            for(var i=0; i<this.blanks; i++){
                this.playerArray.push('_');
                console.log(playerArray);
            }
                console.log('startGame-playerArray', this.choosenWordLetters);
            //making adjustments on the screen 
            console.log(this.playerArray.join(' '));
            console.log(this.guessesLeft);
            console.log(this.winCount);
            console.log(this.loseCount);
            console.log(wrongLetters);
            //document.getElementById('totalWrongGuess').innerHTML=wrongLetters;
    }    

    this.compareLetters = function(letterGuessed){
        if(this.choosenWord.indexOf(letterGuessed)>-1){
            for(var i=0; i<this.blanks; i++){
                if(this.choosenWordLetters[i] === letterGuessed)
                    {this.rightGuess++;
                    this.playerArray[i] = this.letterGuessed;
                    console.log(playerArray.join(' '));
                    }
                }
            }  
        else{
            this.wrongLetters.push(letterGuessed);
            this.guessesLeft--;
            console.log('Wrong Letters=' + this.wrongLetters);
            console.log('Guesses left are'+ this.guessesLeft);
        }
    }

    this.winLose=function(){
        if(this.rightGuess === this.blanks){
            this.winCount++;
            console.log("win count",this.winCount);
            console.log("choosenWord ", this.choosenWord);
            this.resettingGame();
        }
        else if (this.guessesLeft===0){
            this.loseCount++;
            console.log("loseCount", this.loseCount);
            alert('Let us try another word');
            this.resettingGame();
        }
    }
};

module.exports = settingGroundwork;


