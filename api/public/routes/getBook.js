const books = require('../../../lib/data/books.json');
module.exports = {
  path:'/api/public/book/{book}',
  method: 'GET',
  handler: function(request, h){
    console.log(request.params.book, request.query.page);
    return books.filter(book => book.title === request.params.title);
  }
};