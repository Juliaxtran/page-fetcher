const fs = require('fs')
const request = require('request');

let args = process.argv.slice(2);
const url = args[0];
const path = args[1];

// http://www.example.edu/ 

const fetcher = (url, path) => {
  request( url, (error, response, body) => {
    fs.writeFile(path, body, err => {
      if (err) {
        console.error(err)
        return
      } else {
        console.log(`Downloaded and saved ${body.length} bytes to ${path}`);
      }
      //file written successfully
    })
  
})
}
  fetcher(url, path);

  // Format of a request
// const request = require('request');
// request('http://www.google.com', (error, response, body) => {
//   console.log('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
// });