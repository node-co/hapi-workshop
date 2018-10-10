const books = require('../../../lib/data/books.json');

module.exports = {
  method: 'GET',
  path:'/api/public/books',
  handler: function(request,h){
    return books;
  }
};