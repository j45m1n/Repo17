const _ = require('lodash');

var users = [ "John", "Doe", 24, "male"];

function getUsers() {
  var output = "";

}


function findUser(lastName, gender) {
  try {
    var user = _.user(users);
  } catch (error) {
      return 
      console.log();
  }
}

getUsers();
findUser();

module.exports = findUser;