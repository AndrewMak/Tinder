const Quest = require("../models/questionario");

module.exports = {
  async store(req, res) {
    const {valor, tempo, user} = req.body;
    try {
      const userid =  user;
      const post = await Quest.create({valor, tempo, userid});

      return res.json(post);
    } catch (err) {
      return res.status(400).send({ error: " failed!" });
    }
  },
};