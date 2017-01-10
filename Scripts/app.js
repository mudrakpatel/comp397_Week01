/**
 * Custom javascript goes here
 */
(function () {
    //variables
    var answer;
    var guesses = 0;
    var hint = "";
    /**
     *@function randomNumber
     *@params seed
     *@return int 
     */
    function randomNumber(seed){
        return Math.floor(Math.random() * seed + 1);
    }
}());