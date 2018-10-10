module.exports = {
  path: '/api/public/book',
  method: 'POST',
  handler: function(request, h){
    const {world, hello, say} = request.pre;
    console.log(world, hello, say);
    return h.response({message: 'book created!'}).code(201);
  },
  options:{
    pre:[
      [{
        method: function(request, h){
          return new Promise((resolve)=>{
            setTimeout(() => {
              throw new Error();
            }, 2000);
          });
        },
        assign: 'world'
      },
      {
        method: function(request, h){
          return new Promise((resolve)=>{
            setTimeout(() => {
              resolve('by bye');
            }, 2000);
          });
        },
        assign: 'hello'
      }],
      {
        method: function(request, h){
          return new Promise((resolve)=>{
            setTimeout(() => {
              resolve('hello');
            }, 2000);
          });
        },
        assign: 'say'
      }
    ],
    description: 'Create a new book',
    tags:['api', 'books'],
    payload:{
      maxBytes: 1048576*20
    }
  }
};