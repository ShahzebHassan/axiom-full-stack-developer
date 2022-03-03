//GEt DOM Elements
const word = document.getElementById('word');
const incorrectLetter = document.getElementById('incorrect-letter');
const popup = document.getElementById('popup-container');
const finalMessage = document.getElementById('final-mesage');
const playBtn = document.getElementById('play-btn');
const notification = document.getElementById('notification-container');
//Get DOm Element for Hangman
 const figureParts = document.querySelectorAll('.figure-part');
//this is the list of word whic will be used
 const words = ["log","may","weak","ago","fur","state","usual","weight","day","put","job","soft","life","dirt","string","went","away","express","fill","add","purple","skill","buy","surrounded","back","aboard","shore","region","half","corner","small","valley","pie","molecular","vegetable","great","very","beat","fought","fellow","are","air"]

 //select a word at random from word array
 //let selectedword = words[ ]

 let selectedWord = words[Math.floor(Math.random() * words.length)];