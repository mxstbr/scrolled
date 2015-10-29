(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.scrolled = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = scrolled;

function scrolled(passedOptions) {
  // Default options
  var defaultOptions = {
    scrolledClass: "js-has-scrolled",
    hasLoadedClass: "js-has-loaded",
    scrollingPossibleCheck: true,
    notScrollableClass: "js-not-scrollable",
    scrolledClassOnNotScrollable: true
  };
  // Get the correct document element
  var docElem = document.documentElement.clientHeight ? document.documentElement : document.body;
  var finalOptions = {};

  // Merge the passed options with the default options
  if (passedOptions !== undefined) {
    for (var option in defaultOptions) {
      if (passedOptions[option] !== undefined) {
        finalOptions[option] = passedOptions[option];
      } else {
        finalOptions[option] = defaultOptions[option];
      }
    }
  } else {
    finalOptions = defaultOptions;
  }

  //
  // Initialises the app, called on window load
  //
  function init() {
    docElem.classList.add(finalOptions.hasLoadedClass);
    // If the user won't be able to scroll because there is nothing to scroll to
    if (window.innerHeight >= getDocumentHeight() && finalOptions.scrollingPossibleCheck) {
      docElem.classList.add(finalOptions.notScrollableClass);
      if (finalOptions.scrolledClassOnNotScrollable) {
        docElem.classList.add(finalOptions.scrolledClass);
      }
    } else {
      // Check if page is already scrolled
      setScrolledClass();
      window.onscroll = setScrolledClass;
    }
  }

  //
  // Sets the scrolled class
  //
  function setScrolledClass() {
    if (isScrolled() == true) {
      docElem.classList.add(finalOptions.scrolledClass);
    } else {
      docElem.classList.remove(finalOptions.scrolledClass);
    }
  };

  //
  // Checks if the page is scrolled
  //
  function isScrolled() {
    // Crossbrowser
    var scrollPos = getScrollPos();
    if (scrollPos > 0) {
      return true;
    } else {
      return false;
    }
  };

  //
  // Gets the current scroll position
  //
  function getScrollPos() {
    if (typeof pageYOffset != "undefined") {
      return pageYOffset; // Most browsers
    } else {
        return docElem.scrollTop;
      }
  };

  //
  // Gets the document element height
  //
  function getDocumentHeight() {
    // It's gotta be one of those
    return Math.max(docElem.scrollHeight, docElem.offsetHeight, docElem.clientHeight);
  };

  //
  // Adds an event listener
  //
  function addEventListener(elem, evt, callback, useCapture) {
    if (elem.addEventListener) {
      elem.addEventListener(evt, callback, useCapture);
    } else {
      elem.attachEvent && elem.attachEvent("on" + evt, callback);
    }
  };

  addEventListener(window, "load", init, false);
}

module.exports = exports["default"];
},{}]},{},[1])(1)
});