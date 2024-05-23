// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Pablo Fiallos
// Created on: May 2024
// This file contains the JS functions for index.html

"use strict"

function enterClicked() {

  // input

  let n = parseInt(document.getElementById('n').value)

  let sum = 0

  // process

  for (let i = 0; i <= n; i++) {
    sum += i;
  }

  // output

  document.getElementById("user-info").innerHTML = sum
}
