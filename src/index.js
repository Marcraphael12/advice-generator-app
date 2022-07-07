import _ from 'lodash';
import './style.css';
import separator from './images/pattern-divider-desktop.svg';
import dice from './images/icon-dice.svg';


// let's get our API url
let API_URL = 'https://api.adviceslip.com/advice';

// Now we fethc it to get a Json object
const get = async (url) => {
  const reponse = await fetch(url);
  return await reponse.json();
}

// Now we assign to an object the data we want
const API = {get}

// import our DOM elements
const quote = document.querySelector('.quote');
const id = document.querySelector('.id');

// Now, our function to get a random quote
const getRandomQuote = async () => {
  //we run the get() method in the API object wich is a JSON file
  API.get(API_URL).then(data => {
    // we assign the data to a variable
    const randomQuote = data.slip.advice;
    // we assign the id to a variable
    const randomId = data.slip.id;
    // we assign the quote to the DOM element
    quote.innerHTML = `"${randomQuote.toString()}"`;
    // we assign the id to the DOM element
    id.innerHTML = `Adivce #${randomId}`;
  })
}

const reloadButton = document.querySelector('.get-quote')
reloadButton.addEventListener("click", ()=> getRandomQuote());

// Now we call our function when the page loads
document.body.onload = getRandomQuote();