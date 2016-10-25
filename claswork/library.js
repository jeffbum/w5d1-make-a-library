(function() {
    'use strict'

    //IIFE = immediately invoked functional expression. makes an anonymous function, and then calls itself to output the code. Adds a bunch of error checking to our code.
    var capitalizeFirst = function(word){
        return word.charAt(0).toUpperCase() + word.substring(1)
    }

    var capitalizeAll = function(words) {
        return words.split(' ').map(capitalizeFirst).join(' ')
    }

//can assign arguments default values in the argument(called default arguments). or use line 15 & 16 ( || = or ).
    var padLeft = function(word, char = '0', length = 2) {
        // char = char || '0'
        // length = length || 2
        //padLeft(1, '0', 2) => 01 .repeat
        //Collin's way: char.repeat(length - word.length) + word
        var repeat = char.repeat(length - 1)
        return repeat + word
    }
    var one = function(selector) {
        return document.querySelector(selector).innerHTML
    }

    window.dog = {
        name: 'Alfy',
        capitalizeFirst: capitalizeFirst,
        capitalizeAll: capitalizeAll,
        padLeft: padLeft,
        one: one,
    }
}())
