const file = require('../models/file');

module.exports = {
    async index(req, res) {
        const posts = await file.find();

        return res.json(posts);
    },
    async store(req, res) {
        const { originalname: name, size, key, location: url = "" } = req.file;

        const post = await file.create({
            name,
            size,
            key,
            url
        });

        return res.json(post);
    },
    async delete(req, res) {
        const post = await file.findById(req.params.id);

        await post.remove();

        return res.send();
    }

}