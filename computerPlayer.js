const Board = require("./board.js")
const HumanPlayer = require("./humanPlayer")
const { allWords } = require("./dictionary")


class ComputerPlayer {
    constructor(){
        this.dictionary = allWords
        this.secretWord = "" 
        this.currentPostionsArr = []
    } 
    getWord(){
        this.secretWord = allWords[(Math.floor(Math.random() * (((allWords.length-1) - 0) + 0 )))]

    }  
    secretWordLength(){
        return this.secretWord.length

    }
    reveal(){
        return this.secretWord
    }
    givePosition(secretWord,currentMove){
        
        for(let i=0;i < secretWord.length; i++){
         if (secretWord[i] === currentMove){
            this.currentPostionsArr.push(i)
         } 
        }
        
    }
} 
module.exports = ComputerPlayer;