"use strict";

app.controller("ShroomCtrl", function($q, $http, FBCreds, $scope)  {

  let getShroomList = () => {

        return $q( (resolve, reject) => {
          $http.get(`${FBCreds.databaseURL}/mushrooms.json`)
            .then(  (shrooms) => {
              resolve(shrooms);
            })
            .catch( (error) => {
              reject(error);
            });
          });
  };

   let shroomsPrintToDom = () => {
      getShroomList()
        .then(  (shrooms) => {
          var shroomObj = shrooms.data;
          var shroomArray = [];
            Object.keys(shroomObj).forEach(function(key){
              var newObj = {};
              newObj.name = Object.keys(shroomObj[key]);
              newObj.description = shroomObj[key][newObj.name].description;
              newObj.edible = shroomObj[key][newObj.name].edible;
              shroomArray.push(newObj);
            });
            $scope.shrooms = shroomArray;
        });
    };
    
   shroomsPrintToDom();

});


