var connection = require("../config/connection.js");

function objToSql(ob) {
  var array = [];

  for (var key in ob) {
    if (Ob.hasOwnProperty(key)) {
      return key + "=" + ob[key];
    }
  }
}

var orm = {
  selectAll: function(tableInput, callback) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      callback(result);
    });
  },
  insertOne: function(tableInput, colToSearch, valOfCol, callback) {
    var queryString = "INSERT INTO " + tableInput;

    queryString += " (";
    queryString += colToSearch.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += "?";
    queryString += ") ";

    connection.query(queryString, valOfCol, function(err, result) {
      if (err) throw err;
      callback(result);
    });
  },
  updateOne: function(tableInput, objColVals, condition, callback) {
    var queryString = "UPDATE " + tableInput;

    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    connection.query(queryString, function(err, result) {
      callback(result);
    });
  }
};

module.exports = orm;
