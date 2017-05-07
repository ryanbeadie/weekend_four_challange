$(document).ready( onReady);

function onReady(){
console.log('on ready');

}

getListings();

///functions
function getListings(){
  $.ajax({
    type: 'GET',
    url: '/listings',
    success: function(response){
      console.log('response:', response);

      var img2 = '<img src="http://www.iconsplace.com/icons/preview/orange/apartment-256.png"style="width:60%" />';
      var img = '<img src="http://files.erealtymedia.com/images/photo_not_available_240x180.jpg?&width=180&siteId=282&status=Active"style="width:60%" />';
      for (var i = 0; i < response.length; i++) {
        if (response[i].cost) {
          $('#saleListings').append( '<div class="col-sm-2">' + img + '<p></p><br>List Price:$' + response[i].cost + '</p><p>Square Feet:' + response[i].sqft + 'sq.ft.</p><p>City:' + response[i].city + '</p></div>');
        } else{
          $('#rentListings').append( '<div class="col-sm-2">' + img2 + '<p>Monthly Rent:$'+ Math.floor (response[i].rent / 12)  +'</p><p>Square Feet:'+response[i].sqft+'sq.ft.</p><p>City:'+response[i].city+'</p></div>');
        }  // end else
      }  // end for loop
    }  // end success
  });  // end ajax
}  // end getListings
