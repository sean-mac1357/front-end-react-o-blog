const express = require('express'),
    router = express.Router(),
    ponyModel = require('../models/ponyModel'),
    slugify = require('slugify');

router.get('/', async (req,res) => {
    const poniesData = await ponyModel.getAll();

    res.json(poniesData).status(200);
});

router.get('/:slug', async (req, res) => {
    const { slug } = req.params;
    const pony = await ponyModel.getBySlug(slug);

    if (pony) {
        res.json(pony).status(200);
    } else {
        res.status(404).send(`No Pony with the slug of ${slug}. Sorry 😢`)
    }
});

router.post('/', async (req, res) => {
    const { pony_name, pony_attribute } = req.body;
    const slug = slugify(pony_name, {
        replacement: '_',
        lower: true,
        strict: true
    });
    const response = await ponyModel.addEntry(pony_name, slug, pony_attribute, pony_image);
    if (response.rowCount >= 1) {
        res.redirect('/ponies')
    } else {
        res.sendStatus(500)
    }
});

router.post('/delete', async (req, res) => {
    const { pony_id } = req.body;

    const pony = new ponyModel(pony_id);
    const response = await pony.deleteEntry();
    if (response.rowCount >= 1) {
        res.redirect('/ponies')
    } else {
        res.sendStatus(500)
    }
});

module.exports = router;