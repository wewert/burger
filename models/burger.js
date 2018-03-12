var orm = require("../config/orm.js");

var burger = {

  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },

 create: function(cols, vals, cb){
   orm.create("burgers", cols, vals, function(res){
     cb(res);
   });
 },

 update: function(objColVals, condition, cb) {
   orm.update("burgers",objColVals, condition, function(res){
     cb(res);
   });
 }
};

//+++++++++++++++++++++++++++++++++++++++++++++++++++++
// var orm = require("../config/orm.js");
//
// var burger = {
//   selectAll: function(callback) {
//     orm.selectAll("burgers", function(res) {
//       callback(res);
//     });
//   },
//   insertOne: function(colToSearch, valOfCol, callback) {
//     orm.insertOne("burgers", colToSearch, valOfCol, function(res) {
//       callback(res);
//     });
//   },
//   updateOne: function(objColVals, condition, callback) {
//     orm.updateOne("burgers", objColVals, condition, function(res) {
//       callback(res);
//     });
//   }
// };

module.exports = burger;
