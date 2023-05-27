const express = require('express');
const router = express.Router();
const postsController = require('../controllers/posts.controller');

router.get('/posts', postsController.getPosts);

router.post('/posts', postsController.createPost);

module.exports = router;
