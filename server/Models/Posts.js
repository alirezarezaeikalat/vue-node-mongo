const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  text:{
    type: String,
  },
  createdAt: {
    type: Date
  } 
});

//Post is just the constructor for the model
const Post = mongoose.model('post', postSchema);

module.exports= Post;
