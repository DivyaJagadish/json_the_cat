const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request('https://api.thecatapi.com/v1/breeds/search?q=' + breedName, (error, response, body) => {

    let description = "";
    const data = JSON.parse(body);//convert to object
    if (data.length === 0) {
      description = "Breed not exists";
    } else {
      description = data[0]["description"];// data is array of which first element is an object which contains key description.
    }
    callback(error, description);
  });
};
module.exports = fetchBreedDescription;