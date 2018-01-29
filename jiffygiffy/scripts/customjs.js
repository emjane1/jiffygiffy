$(document).ready(function () {

    //fave button
    $('.fave svg').click(function () {
        console.log('yo');
        //   $(this).toggleClass('fave fave-added');
    }
    );

    // send request on button click
    $('#jiffyForm').on('submit', function () {

        //get search query
        var searchTerm = '&q=' + $('#form-value').val();

        //form api call (broken down to re-usable/swapable components)
        var api = "https://api.giphy.com/v1/stickers/search?"
        var key = "api_key=3MreAsY8D3dZ2I5GPk7kpVbiEfRNS1A6"
        var settings = "&limit=25&offset=0&rating=PG-13&lang=en"

        // Create the Giphy API URL
        var apiURL = api + key + settings + searchTerm;

        // AJAX call to GIPHY API 
        $.ajax({ url: apiURL, method: 'GET' }).done(function (response) {
            console.log(response.data);
          
        //throw error msg if no results for search
            var checkGif = response.data[0];
            if (!checkGif) {
               var errorMsg=" <div class=\"alert alert-warning\" role=\"alert\">" +
                            "<strong>Dang!</strong> Sorry but I'm fresh outta that - please try something else." +
                            "</div>"
               $('#results').append(errorMsg);
            } else {
                //step through data elements
                for (i = 0; i < response.data.length; i++) {
                    var giphyURL = response.data[i].images.fixed_width_downsampled.url;
                    var giphyAlt = response.data[i].title;
                    var newGif = $(
                        "<div class=\"float-left col-sm-3 col-lg-2  box\">" +
                        "<img src=\"" + giphyURL + "\"" + "alt=\"" + giphyAlt + "\"" + "/>" +
                        //fave icon removed for mvp "<span class=\"fave\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 305.75 270.8\"><defs></defs><title>Asset 1</title><g id=\"Layer_2\" data-name=\"Layer 2\"><g id=\"Layer_1-2\" data-name=\"Layer 1\"><g id=\"zbdbU7.tif\"><path class=\"cls-1\" d=\"M296.74,94.62c-.29-2.61-.42-12.32-.8-14.92-3.58-24.11-14-44.24-34.48-58.3-13-9-27.75-12.79-43.48-12-28,1.4-49.55,14.06-64.26,38.08l-.4.61-.23.16c-.2-.29-.41-.57-.6-.87C139.71,26.52,121.36,13.73,97.14,10,76.37,6.8,57.22,11.19,40.45,24.18c-14.14,11-23,25.51-27.89,42.58-5.55,19.43-4.3,38.7,1.6,57.81C19.6,142.22,28.52,158,39.85,172.51c11.6,14.85,25.15,27.74,39.7,39.63,13.81,11.28,28.54,21.29,43.16,31.44q10.9,7.57,21.79,15.19c5.75,4,11.6,4.06,17.3,0,17.85-12.62,35.84-25.05,53.49-37.95a261.68,261.68,0,0,0,45.08-41.44c14.06-16.51,25.14-34.73,31.54-55.59,2.51-8.17,4.29-20.68,4.83-29.21,0-.43-.08.43,0,0\"/></g></g></g></svg></span>" +
                        "</div>");
                    //show results on page
                    $('#results').append(newGif);
                }
            }
        });

        //Clear results
        $('#reset_button').on('click', function () {
            $('#results').html('');
        })
        return false;
    })

});