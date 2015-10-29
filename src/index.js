export default function scrolled(passedOptions) {
  // Default options
  var defaultOptions = {
    scrolledClass: "js-has-scrolled",
    hasLoadedClass: "js-has-loaded",
    scrollingPossibleCheck: true,
    notScrollableClass: "js-not-scrollable",
    scrolledClassOnNotScrollable: true
  }
  // Get the correct document element
  var docElem = (document.documentElement.clientHeight) ? document.documentElement : document.body;
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
    return Math.max(
        docElem.scrollHeight,
        docElem.offsetHeight,
        docElem.clientHeight
    );
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