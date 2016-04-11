/**
 * Created by kamal on 4/10/16.
 */
module.exports = function(app){
  var society = app.models.user.find({

  });
  console.log('found this society '+JSON.stringify(society));
  /*society.user.create([{
    'name': 'abhijesasdfasdfdfet ',
    'email': 'akaasdfasssdfh123@demo.com',
    'username': 'asdfasfkas33h',
    'password': 'asdfasdfkash'
  }], function(err, userCreated) {
    if(err)
      console.log('some error in creating user'+err);
    else
      console.log('created following user '+JSON.stringify(userCreated));
  });
*/
};
