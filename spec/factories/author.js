const factoryGirl = require('factory-girl')
// const adapter = new factoryGirl.SequelizeAdapter()
// factory.setAdapter(adapter)
var MongooseAdapter = new factoryGirl.MongooseAdapter() //require('factory-girl-mongoose').MongooseAdapter;
factory = factoryGirl.factory
factory.setAdapter(MongooseAdapter);

const Author = require('../../models_mongo').Author

factory.define('author', Author, {
    firstName: factory.sequence((n) => `firstName${n}`),
    lastName: factory.sequence((n) => `lastName${n}`),
})