/*
*  How to search for images and restrict them by size.
*  This demo will also show how to use Raw Searchers, aka a searcher that is
*  not attached to a SearchControl.  Thus, we will handle and draw the results
*  manually.
*/

    google.load('search', '1', {"nocss" : true});
    
    function searchComplete(searcher) {
      // Check that we got results
      if (searcher.results && searcher.results.length > 0) {
        // Grab our content div, clear it.
        var contentDiv = document.getElementById('content');
        contentDiv.innerHTML = '';
    
        // Loop through our results, printing them to the page.
        var results = searcher.results;

          // For each result write it's title and image to the screen
          var result = results[0];
          var imgContainer = document.createElement('div');
    
          var newImg = document.createElement('img');
          // There is also a result.url property which has the escaped version
          newImg.src = result.tbUrl;
    
          imgContainer.appendChild(newImg);
    
          // Put our title + image in the content
          contentDiv.appendChild(imgContainer);
       
      }
    }
    
    function OnLoad() {
      // Our ImageSearch instance.
      var imageSearch = new google.search.ImageSearch();
    
      // Restrict to extra large images only
      imageSearch.setRestriction(google.search.ImageSearch.RESTRICT_IMAGESIZE,
                                 google.search.ImageSearch.IMAGESIZE_LARGE);
    
      // Here we set a callback so that anytime a search is executed, it will call
      // the searchComplete function and pass it our ImageSearch searcher.
      // When a search completes, our ImageSearch object is automatically
      // populated with the results.
      imageSearch.setSearchCompleteCallback(this, searchComplete, [imageSearch]);
      // Find me a picture...
      imageSearch.execute(gon.picture);
      console.log(gon.picture);
    }

  google.setOnLoadCallback(OnLoad);
  // window.onload= OnLoad;
 // document.addEventListener("page:load", OnLoad);



