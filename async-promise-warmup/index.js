'use strict';

const superagent = require('superagent');

function fetchPeopleWithPromises(req, res) {
  let newArrayOfPromises = [];
  let url = 'https://swapi.co/api/people'
  
  return superagent.get(url)
  .then(apiResponse => apiResponse.body.results.map( link => link.url))
  .then(result => {
    for(let i in result){
      newArrayOfPromises.push(Promise.resolve(superagent.get(result[i])))
    }
    return Promise.all(newArrayOfPromises)
    .then( response => {
      const names = response.map( result => result.body.name);
      console.log(names);
    })
  })
}

const fetchPeopleWithAsync = async () => {
  const url = 'https://swapi.co/api/people/';
  const result = await superagent.get(url);
  const urlArray = result.body.results.map(person => person.url);
  const promiseArray = urlArray.map(url => superagent.get(url));
  const people = await Promise.all(promiseArray);
  people.forEach(person => console.log(person.body.name));
};

fetchPeopleWithPromises();
fetchPeopleWithAsync();