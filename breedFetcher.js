const request = require('request');
const args = process.argv
const temp  = args[2];
request('https://api.thecatapi.com/v1/breeds/search?q='+temp, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was receive
  const data = JSON.parse(body);//convert to object
 console.log(body.length);
 console.log(data.length);
  if(data.length === 0){
    console.log("Breed not exists");
  } else {
 
  const temp =data[0]["description"];// data is array of which first element is an object which contains key description.
  console.log(temp);//output description of cat data
  console.log(typeof data);
  }
});
