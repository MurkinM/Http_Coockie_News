const express = require('express');
const router = express.Router();

const { getCookies } = require('../controllers/cookie');
router.get('/get-cookies', getCookies);

const { createRecept, getRecepts } = require('../controllers/recepts');

router.post('/create-recept', createRecept);
router.get('/get-recepts', getRecepts);


const { getNews, deleteNews } = require('../controllers/news');
router.get('/get-news', getNews);
router.delete('/delete-news/:newsId', deleteNews);

exports.router = router;
