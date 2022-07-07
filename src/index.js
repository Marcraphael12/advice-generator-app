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