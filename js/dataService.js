//
angular.module('quoteBook').service('dataService',function($http){
  var quotes = null;

  this.getQuotes = function(){
    return $http({
              method: 'GET',
              url: './data/quotes.json'
              }).then(function(response) {
                 quotes = response.data;
                 if (localStorage.length > 0){
                   for (var i = 0; i < localStorage.length; i++){
                   console.log(JSON.parse(localStorage.getItem(i)));
                   quotes.push(JSON.parse(localStorage.getItem(i)));
                 }}

                 return quotes;
              }, function(response) {
                return 'no data'
              });
            }

    this.removeQuote = function(quoteText){
      for (var i=0;i<quotes.length;i++){
        if (quotes[i].text.toLowerCase() === quoteText.toLowerCase()){
          quotes.splice(i--,1);

          if (localStorage.length > 0){
            for (var i = 0; i < localStorage.length; i++){
              if (JSON.parse(localStorage.getItem(i)).text.toLowerCase() === quoteText.toLowerCase() ){
                localStorage.removeItem(i);
              }
            }
          }

        }
      }
    };

    this.addQuote = function(newQuoteText,newQuoteAuthor) {
      var newQuote = {
        text: newQuoteText,
        author: newQuoteAuthor
      }
      localStorage.setItem(localStorage.length,JSON.stringify(newQuote));
      quotes.push(newQuote);
    }

});
