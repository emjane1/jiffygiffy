# jiffygiffy
simple-n-sweet gif search which finds giphy stickers
  
## UX/Design
* tone is playful and casual to match nature of sticker (error message reflects this)
* error message shows if no results are matched for search term
* layout adapts for device width
* nice to have: ability to save and view favorites with account login, auto-clear feature on new search, robust filters for search precision; integrate with Google Vision and upload a static image to match it with relevant giphy stickers; animated svg logo could add more fun to overall look and feel

##Shareable
* FB & Twitter sharing would be a nice to have

## Re-usability
* JS is constructed in a way to easily swap out variables for api code updates/variations
* styles are annotated by component
* colors utalize sass variables for easy updating

## Code collaboration/best practices
* comments allow for code readability
* simple js and light framework allow code to speak for itself 

## Optimizations
* logo was made lightweight by using inline SVG code
* nice to have: check for callback timeout and display error message if connection is not made to giphy api
* baselines for quality frontend development include: feedback for lack of data returned, responsive layout (if it doesn't look good, no one will use it), page should load in a second or less
