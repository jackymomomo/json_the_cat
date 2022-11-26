const { catBreed } = require('./breedFetcher')

const path = process.argv[2];

catBreed(path, (error, desc) => {
 
  if (error) {
    console.log('Error deatails', error);
  } else {
    console.log(desc)
  }
})