var orm = require("../config/orm.js");

var burger = {

  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },

 insertOne: function(cols, vals, cb){
   orm.insertOne("burgers", cols, vals, function(res){
     cb(res);
   });
 },

 updateOne: function(objColVals, condition, cb) {
   orm.updateOne("burgers",objColVals, condition, function(res){
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
