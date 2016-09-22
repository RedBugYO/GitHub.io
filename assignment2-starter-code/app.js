(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyShoppingController', ToBuyShoppingController)
.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
.provider('ShoppingListCheckOffService', ShoppingListCheckOffServiceProvider)
.config(Config);

Config.$inject = ['ShoppingListCheckOffServiceProvider'];
function Config(ShoppingListCheckOffServiceProvider) {
}


ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
function ToBuyShoppingController(ShoppingListCheckOffService) {
  var list = this;

  list.items = ShoppingListCheckOffService.getBuylist();

  list.buyItem = function (itemIndex) {
    ShoppingListCheckOffService.buyItem(itemIndex);
  };
}

function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
  var list = this;

  list.items = ShoppingListCheckOffService.getBoughtlist();

}


// If not specified, maxItems assumed unlimited
function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var items = [ { name: "cookies", quantity: 5},
                { name: "coke", quantity: 10},
                { name: "bear", quantity: 1},
                { name: "books", quantity: 7},
                { name: "toys", quantity: 8},
                { name: "candies", quantity: 3}];
  var boughtitems = [];

  

  service.buyItem = function (itemIndex) {
    boughtitems.push(items[itemIndex]); 
    items.splice(itemIndex, 1);
  };

  service.getBoughtlist = function () {
    return boughtitems;
  };

  service.getBuylist = function () {
    return items;
  };
}


function ShoppingListCheckOffServiceProvider() {
  var provider = this;


  provider.$get = function () {
    var shoppingList = new ShoppingListCheckOffService();

    return shoppingList;
  };
}

})();
