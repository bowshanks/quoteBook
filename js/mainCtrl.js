//
angular.module('quoteBook').controller('mainCtrl',function($scope, dataService){

  function getQuotes() {
      dataService.getQuotes().then(function(quotes) {
        $scope.quotes = quotes;
      })
  }
  getQuotes();

  $scope.removeQuote = dataService.removeQuote;

  $scope.addQuote = dataService.addQuote;
});
