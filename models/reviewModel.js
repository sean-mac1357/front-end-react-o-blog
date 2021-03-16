'use strict';
const db = require('./conn');

class ReviewModel {
    constructor(id, pony_id, review_comment) {
        this.id = id;
        this.pony_id = pony_id;
        this.review_comment = review_comment;
    }

    static async getAll() {
        const response = await db.any(`
            SELECT * 
            FROM reviews`);
        return response;
    }

    static async getReviews(slug) {
        const response = await db.any(`
            SELECT * 
            FROM reviews
            INNER JOIN characters
                ON reviews.pony_id = characters.id
            WHERE slug = '${slug}';`);
        return response;
    }

    static async addReview (comment, pony_id, user_id) {
        const response = await db.result(`INSERT INTO reviews (comment, pony_id, user_id) VALUES ($1, $2, $3)`, [comment, pony_id, user_id]);
        return response;
    }
}

module.exports = ReviewModel;