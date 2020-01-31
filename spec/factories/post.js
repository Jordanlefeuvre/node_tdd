const factoryGirl = require('factory-girl')
// const adapter = new factoryGirl.SequelizeAdapter()
// factory.setAdapter(adapter)
var MongooseAdapter = new factoryGirl.MongooseAdapter() //require('factory-girl-mongoose').MongooseAdapter;
factory = factoryGirl.factory
factory.setAdapter(MongooseAdapter);

const Post = require('../../models_mongo').Post

factory.define('post', Post, {
    title: factory.sequence((n) => `title${n}`),
    content: factory.sequence((n) => `content${n}`),
})