// Copyright (c) conor 2023 All rights reserved
//
// Created by: conor-otoole
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict"

/**
 * Check service worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit-5-06/sw.js", {
    scope: "/ICS2O-Unit-5-06/",
  })
}

function myButtonClicked() {
  let text = ""
  let counter = 0
  const integerA = parseInt(document.getElementById("integer-A").value)
  var integerB = parseInt(document.getElementById("integer-B").value)
  const integerBOV = parseInt(document.getElementById("integer-B").value)

  while (counter < integerA) {
    text = text + "<br />Your number is: " + integerB
    counter++
    integerB = integerB + integerBOV
  }
  document.getElementById("answer").innerHTML = text
}