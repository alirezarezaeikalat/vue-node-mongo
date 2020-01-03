const express = require('express');
const mongoose = require('mongoose');
const Post = require('../../Models/Posts');

const router = express.Router();

// Get Posts
router.get('/', async(req, res) => {
  const posts = await Post.find({});
  res.send(posts);
});

// Add posts
router.post('/', async(req, res) => {
  const newPost = await Post.create({
    text: req.body.text,
    createdAt: new Date()
  });
  res.status(201).send(newPost); 
});
// Delete posts
router.delete('/:id', async(req, res) => {
  const removedPost = await Post.findOneAndRemove({_id: req.params.id});
  res.status(200).send(removedPost);
});

// 



module.exports = router;