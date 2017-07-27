require('es6-promise');
'use strict'
// setTimeout(function(){
//   console.log('TIMED OUT!');
// }, 300);

var promise = new Promise(function (fulfill, reject) {
  setTimeout(function(){
    reject( Error("REJECTED!"));
  }, 300)
});

function onReject(error) {
  console.log(error);
};
