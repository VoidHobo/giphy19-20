/* global $ */
//Create a fetch() request inside the click handler
//Get the response from using your search URL              https://api.giphy.com/v1/gifs/search?q=puppy&rating=pg&    api_key=rQrXp8Skecms5IYqoh0BS4HeQW9L35LY
 // Console log the response from your API call//
//console.log('hi');

$('h1').click(function(){
    $('h1').css('color', 'green');
    $('h1').text('Ready to Code');
});
  fetch("https://api.giphy.com/v1/gifs/search?q=puppy&     rating=pg&api_key=rQrXp8Skecms5IYqoh0BS4HeQW9L35LY")
  .then(function(response){
    response.json();
  })
  .then(function(data) {
    console.log("Hello")
  });