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

    var addClass = function(tag) {
        return document.querySelector('.sidebar').classList.add(tag)
    }
    var removeClass = function(tag) {
        return document.querySelector('h1').classList.remove(tag)
    }
    var hasClass = function(element) {
        var itDoes = document.querySelector(element)
        return itDoes.classList.contains('navbar-collapse')

    }
    var getAttr = function(attribute) {
        return document.querySelector(attribute).getAttribute('data-toggle')

    }
    var setAttr = function(attribute, attributeValue) {
        return document.querySelector('input').setAttribute(attribute, attributeValue)

    }
    var setHTML = function(tag) {
        var newHeadline = document.querySelector(tag)
        return newHeadline.innerHTML = 'This is my page now!'
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
