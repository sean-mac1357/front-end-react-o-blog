const express = require('express'),
    router = express.Router(),
    reviewModel = require('../models/reviewModel')

router.get('/', async (req,res) => {
    const reviewsData = await reviewModel.getAll();
    res.json(reviewsData).status(200);
});

router.get('/:slug', async (req, res) => {
    const { slug } = req.params;
    const review = await reviewModel.getReviews(slug);

    if (review) {
        res.json(review).status(200);
    } else {
        res.status(404).send(`No reviews for character id ${pony_id}.`)
    }
});

router.post('/', async (req,res) => {
    const { review_comment, pony_id, user_id } = req.body;
    console.log('reqBody: ', req.body)
    const response = await reviewModel.addReview(review_comment, pony_id, user_id);
    if (response.rowCount >= 1) {
        res.redirect('/reviews')
    } else {
        res.sendStatus(500)
    }
});

module.exports = router;