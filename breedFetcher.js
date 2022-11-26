const path = process.argv[2];


const request = require('request');



const breedFetcher = function(breed, callback) {
  const url = "https://api.thecatap i.com/v1/breeds/search?q=" + breed;
  request(url, (error, response, body) => {


    if (error) {
      console.log(error.message);
    } else {
      const data = JSON.parse(body);
      if (data[0] === undefined) {
        callback(null, 'N/A');
      } else {
        console.log(data[0].description);
      }
    }
  });
};
breedFetcher(path);