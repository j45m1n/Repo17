const _ = require('lodash');

var users = [ 1, "John", "Doe", 24, "male"];

function getUsers() {
    var output = "";
   for(i = 0; i < users.length; i++) {
      output = users;
      i++;
   }
    return output;
}
function findUserById(id) {
    try {
        var user = _.user(users);
        var iFindUser = user;
    } catch (error) {
        return iFindUser;
        console.log();
    }
}

getUsers();
findUserById();

module.exports = findUserById;