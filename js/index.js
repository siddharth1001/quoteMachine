$(document).ready(function() {
  function setHeader(xhr) {
    xhr.setRequestHeader('Content-Type', 'application/javascript');
  }
  $('a#newQuoteButton').on('click', function() {
    var settings = {
      "async": true,
      "url": "http://quotes.stormconsultancy.co.uk/random.json",
      "method": "GET",
    }
    $.ajax(settings).done(function(response) {
      $('h3#quoteText').html("\"" + response.quote + "\"");
      $('h4#author').html(response.author);
    });
  });
});


// Original json api is not configured properly hence the error. 
// It isn't returning data mime type as application/javascript