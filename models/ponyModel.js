'use strict';

const db = require('./conn');

class PONYModel {
    constructor(id, name, slug, attribute) {
        this.id = id;
        this.name = name;
        this.slug = slug;
        this.attribute = attribute;
    }

    static async getAll() {
        const response = await db.any(`SELECT * FROM react_o_blog;`);
        return response;
    }

    static async getBySlug(slug) {
        const response = await db.one(`SELECT * FROM react_o_blog WHERE slug = '${slug}';`);
        return response;
    }

    static async addEntry (name, slug, attribute, image) {
        const response = await db.result(`INSERT INTO react_o_blog (name, slug, attribute, image) VALUES ($1, $2, $3, $4)`, [name, slug, attribute, image]);
        return response;
    }

    async deleteEntry() {
        const response = await db.result(`DELETE FROM react_o_blog WHERE id = $1`, [this.id]);
        return response;
    }
}

module.exports = PONYModel;