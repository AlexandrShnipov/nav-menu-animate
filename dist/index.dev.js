"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var indicator = document.querySelector("[data-indicator]");
document.addEventListener("click", function (e) {
  var anchor;

  if (e.target.matches("a")) {
    anchor = e.target;
  } else {
    anchor = e.target.closest("a");
  }

  if (anchor != null) {
    var allAnchors = _toConsumableArray(document.querySelectorAll("a"));

    var index = allAnchors.indexOf(anchor);
    indicator.style.setProperty("--position", index);
    document.querySelectorAll("a").forEach(function (elem) {
      elem.classList.remove("active");
    });
    anchor.classList.add("active");
  }
});