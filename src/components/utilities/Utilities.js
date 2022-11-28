import axios from 'axios';
import { useCallback } from 'react';

export const spoonacular = async ( query, cuisine, diet, number, setData) => {
try {
  const { data } = await axios.get(`https://api.spoonacular.com/recipes/complexSearch/?apiKey=bb722ae513d24c0da33e587bf7f50f42/}`);

  if(!localStorage.getItem(`${query}`)){
    localStorage.setItem(`${query}`, JSON.stringify(data));
    return data;
  }
}

catch (error){
  //contingency plan if something went wrong
  let collection = localStorage.getItem(`${query}`);
  setData(JSON.parse(collection));
  }
};

// a controller on how often we send a request as the user is typing
export const debouncedSearch = (callack, delay) => {
  let timer;
  return function (...args){
    const context = this;
    console.log(this);
    if (timer) clearTimeout (timer);
    timer = setTimeout(() => {
      timer = null;
      useCallback.apply(context, args);

    }, delay);
  }
}