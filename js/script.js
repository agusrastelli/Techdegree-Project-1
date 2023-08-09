/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/



//Quotes that will display. It's an array with five objects inside.

const quotes = [
  {
     quote: 'It\'s OK to figure out murder mysteries, but you shouldn\'t need to figure out code. You should be able to read it.',
     source: 'Steve McConnell',
     citacion: 'Code complete',
     year: '2004',
     topic: 'Coding'
  },
  {
    quote: 'Definition of Programmer: a machine that turns coffee into code.',
    source: 'Unknown',
    citacion: 'https://devrant.com/rants/343239/definition-of-programmer-a-machine-that-turns-coffee-into-code',
    year: '2016',
    topic:'Coding'
 },
 {
  quote: 'Operating systems are like underwear: nobody really wants to look at them.',
  source: 'Bill Joy',
  citacion: 'https://softwarequotes.com/topic/funny',
  year: '1994',
  topic:'Computer engineer'
},
{
  quote: 'When I wrote this code, only God and I understood what I did. Now only God knows.',
  source: 'Unknown',
  citacion: 'https://www.reddit.com/r/ProgrammerHumor/comments/j7t8ju/just_need_to_replace_that_face_with_mine_collected/',
  year: '2020',
  topic:'Coding'
},
{
  quote: 'Measuring programming progress by lines of code is like measuring aircraft building progress by weight.',
  source: 'Bill Gates',
  citacion: 'https://https://twitter.com/CodeWisdom/status/837749167049031681.com/topic/funny',
  year: '2017',
  topic: 'Coding'
}
];


//Function 'getRandomQuote' takes the array above as input and returns a randomly selected element(object) from that array.

function getRandomQuote (array){
  let randomQuoteObject = array[Math.floor(Math.random()*5)];
  return randomQuoteObject;
}


// Function to generate random background color from https://www.w3resource.com/javascript-exercises/javascript-math-exercise-40.php

function random_bg_color() {
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);
  let bgColor = `rgb(${x},${y},${z})`;
  console.log(bgColor);
  document.body.style.background = bgColor;
  }

  
//Function that prints the random quote in the browser.

function printQuote (){
  let randomQuote = getRandomQuote(quotes);
  let quoteProperties = '';
  quoteProperties += `<p class="quote">${randomQuote.quote}</p>
                      <p class="source"> ${randomQuote.source}`;
  if (randomQuote.citation){
      quoteProperties += `<span class="citation">${randomQuote.citation}</span>`;}
  if (randomQuote.year){
      quoteProperties += `<span class="year">${randomQuote.year}</span>`;}
  if (randomQuote.topic){
      quoteProperties += `<span class="topic">${randomQuote.topic}</span></p>`;
      quoteProperties += `<span class="topic">${randomQuote.topic}</span>`;}
  quoteProperties += `</p>`
  random_bg_color();
  document.getElementById('quote-box').innerHTML = quoteProperties;
}


//Function call that excecute the function 'printQuote' at an interval of 10 seconds.

setInterval(printQuote, 10000);


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);