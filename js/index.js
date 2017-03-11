$(document).ready(function() {
  function setHeader(xhr) {
    xhr.setRequestHeader('Content-Type', 'application/javascript');
  }

  $('#quote-button').on('click', function(e) {
    // e.preventDefault();
    $.ajax( {
      url: 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand',
      type: 'GET',
      crossDomain: true,
      success: function(data) {
        var post = data.shift(); // The data is an array of posts. Grab the first one.
        $('#author').text(post.title);
        $('#quoteText').html(post.content);

        // If the Source is available, use it. Otherwise hide it.
        // if (typeof post.custom_meta !== 'undefined' && typeof post.custom_meta.Source !== 'undefined') {
        //   $('#quote-source').html('Source:' + post.custom_meta.Source);
        // } else {
        //   $('#quote-source').text('');
        // }
      },
      cache: false
    });
  });
});

//ready function starts
// $(document).ready(function() {
//     var post = undefined;
//   $("#quote-button").click(function(event) {
//   //   $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(response) {
//   //     post = response.shift();
//   //     $("#quoteText").html("&#34;" + post.content+ "&#34;");
//   //     $("#author").html("&#8211; " + post.title);
//   //   }); //end .getJSON
//   // }); //end quote button click event

//   $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(a) {
//     $("body").append(a[0].content + "<p>— " + a[0].title + "</p>");
//   });
//   });

// console.log(post);
// }); //end ready
