"use strict"

//================================================================================================//

//My Way

//function printPigLatin(word){
    //word = word.split("");

    //for(let i = 0; i < word.length; i++){
        //if(word[i] == "a" || word[i] == "e" || word[i] == "i" || word[i] == "o" || word[i] == "u"){
            //return (word + "way");
        //}else{
           //for(let i = 0; i < word.length; i++){
                //let firstLetter = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", 
                //"r", "s", "t", "v", "w", "x", "y", "z" ];
                //if(word[i] == "b" || word[i] == "c" || word[i] == "d" || word[i] == "f" || word[i] == "g" || word[i] == "h" || word[i] == "j" || word[i] == "k" ||word[i] == "l" || word[i] == "m" || word[i] == "n" || word[i] == "p" || word[i] == "q" || word[i] == "q" ||word[i] == "r" || word[i] == "s" || word[i] == "t" || word[i] == "v" || word[i] == "w" || word[i] == "x" || word[i] == "y" || word[i] == "z"){
                    //let firstLetterShift = word.shift(0);
                    //word + firstLetterShift;
                //}
                //return (word + "ay");
            //}
        //}
    //}
//}
//console.log(printPigLatin("bean"));

//================================================================================================//

//Mr.Peck's Way

function createPLWord(word){
    word = word.toLowerCase();
    word = word.split("");
    if(word[0] == `a` || word[0] == `e` || word[0] == `i` || word[0] == `o` || word[0] == `u`){
        return (word.join("") + "yay");
    }
    for(let i = 0; i < word.length;){
        if(word[i] == `a` || word[i] == `e` || word[i] == `i` || word[i] == `o` || word[i] == `u`){
            return (word.join("") + "ay");
    }else{
        let temp = word.shift();
        word.push(temp);
    }
}
}

function createPLSentence(){
    let sentence;
    sentence = document.getElementById("input").value;
    sentence = sentence.split(" ");
    for(let i = 0; i < sentence.length; i++){
        sentence[i] = createPLWord(sentence[i]);
    }
    document.getElementById("output").textContent = sentence.join();
}




