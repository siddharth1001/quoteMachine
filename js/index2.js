//ready function starts
$(document).ready(function() {
  $("#newQuoteButton").click(function(event) {
    $.getJSON("http://quotes.stormconsultancy.co.uk/random.json?&callback=?", function(response) {
      $("#quoteText").html("&#34;" + response.quote + "&#34;");
      $("#author").html("&#8211; " + response.author);
    }); //end .getJSON
  }); //end quote button click event
  //tweet quote
  $("#tweetButton").click(function(event) {
    window.open("http://twitter.com/intent/tweet?text=" + $("#quoteText").text() + " " + $("#author").text()); //en
  }); //end tweet button click event

  //adding animation from https://mdbootstrap.com/css/animations/
  // $("h1").addClass("animated zoomIn");
  $("h1").addClass("animated bounceInLeft");

}); //end ready