// Your DOM library code goes here inside of an IIFE and must set a global variables called md.
(function() {
    'use strict'

    var one = function(selector) {
        return document.querySelector(selector)
    }

    var all = function(selector) {
        return document.querySelectorAll(selector)
    }

    var remove = function(tag, text) {
        var text = tag.innerHTML
        return document.querySelector(tag).remove(text)
    }
    //var remove = function(selector) {
//         return one(selector).remove()
// }

    var addClass = function(selector, tag) {
        document.querySelector(class).classList.add(tag)
    }

    var removeClass = function(selector, tag) {
        return document.querySelector().classList.remove(tag)
    }
    var hasClass = function(element, selector) {
        var itDoes = document.querySelector(element)
        return itDoes.classList.contains(selector)

    }
    var getAttr = function(attribute, selector) {
        return document.querySelector(attribute).getAttribute(selector)

    }
    var setAttr = function(selector, attribute, attributeValue) {
        return document.querySelector(selector).setAttribute(attribute, attributeValue)

    }
    var setHTML = function(tag, newWords) {
        var newHeadline = document.querySelector(tag)
        return newHeadline.innerHTML = newWords
    }
    var getHTML = function(tag) {
        var newHeadline = document.querySelector(tag).innerHTML
        return newHeadline
    }



    window.md = {
        one: one,
        all: all,
        remove: remove,
        addClass: addClass,
        removeClass: removeClass,
        hasClass: hasClass,
        getAttr: getAttr,
        setAttr: setAttr,
        setHTML: setHTML,
        getHTML: getHTML,




    }
}())
