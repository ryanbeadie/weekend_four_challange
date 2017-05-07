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
      var img = '<img src="https://t3.ftcdn.net/jpg/01/00/62/72/240_F_100627217_hh03qHpa6sIOcBXvmmMySYEDGEQZrP4O.jpg"style="width:60%" />';
      for (var i = 0; i < response.length; i++) {
        if (response[i].cost) {
          $('#saleListings').append( '<div class="col-sm-2">' + img + '<p>List Price: $' + response[i].cost + '<br>Square Feet: ' + response[i].sqft + 'sq.ft.<br>City: ' + response[i].city + '<br><br><br><p></p></div>');
        } else{
          $('#rentListings').append( '<div class="col-sm-2">' + img2 + '<p>Monthly Rent: $'+ Math.floor (response[i].rent / 12)  +'<br>Square Feet: ' + response[i].sqft + 'sq.ft.<br>City: ' + response[i].city + '<br><br><br><p></p></div>');
        }  // end else
      }  // end for loop
    }  // end success
  });  // end ajax
}  // end getListings
