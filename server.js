const Hapi = require('hapi');
require('dotenv').config();
const glob = require('glob');

async function init() {
  const server = Hapi.server({
    port: process.env.HAPI_PORT || 3000,
		host: process.env.HAPI_HOST || 'localhost',
		app:{
			logger: function(){
				console.log('log!');
			}
    }
  });


  glob.sync('./api/**/routes/*.js').forEach(file => {
    const route = require(file);
    if(route.path && route.method && route.handler){
      server.route(route);
    }
  });
  await server.start();
  console.log(`Server running at ${server.info.uri}`);
}

try {
  init();
} catch (error) {
  process.exit(1);
}