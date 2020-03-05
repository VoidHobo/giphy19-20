/* global $ */
//Create a fetch() request inside the click handler
//Get the response from using your search URL              https://api.giphy.com/v1/gifs/search?q=puppy&rating=pg&    api_key=rQrXp8Skecms5IYqoh0BS4HeQW9L35LY
 // Console log the response from your API call//
//console.log('hi');

$('h1').click(function(){
    $('h1').css('color', 'green');
    $('h1').text('Ready to Code');
});

$('button').click(function(){ 
    var searchTerm = $("input").val();
    
    
  var request_url = "https://api.giphy.com/v1/gifs/search?q=" + searchTerm + "&rating=pg&api_key=rQrXp8Skecms5IYqoh0BS4HeQW9L35LY";
    
  fetch(request_url)
    .then(function(response) {
      return response.json();
    })
    .then(function(resp) {
      var pic_url = resp.data;
      //.images.downsized_large.url;
      var index = Math.floor( Math.random() * pic_url.length );
      $('body').append('<img src=' + pic_url + '>');
    })
});