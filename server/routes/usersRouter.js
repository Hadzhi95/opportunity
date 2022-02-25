const express = require('express');
const sha256 = require('sha256');

const router = express.Router();

const { User } = require('../db/models');

router.post('/signup', async (req, res) => {
  console.log(req.body);
  const { login, email } = req.body;
  const password = sha256(req.body.password);

  try {
    if (login && email && req.body.password) {
      const user = await User.create({
        login, password, email,
      });

      req.session.userId = user.id;
      req.session.userLogin = user.name;
      req.session.userEmail = user.email;
      req.session.userPassword = user.password;
      res.json({ user });
    } else {
      res.sendStatus(500);
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

router.post('/signin', async (req, res) => {
  console.log(req.body);

  const { email } = req.body;
  const password = sha256(req.body.password);

  try {
    const user = await User.findOne({ where: { email } });
    if (user) {
      if (user.password == password) {
        req.session.userId = user.id;
        req.session.userLogin = user.name;
        req.session.userEmail = user.email;
        res.json({ user });
      } else {
        res.sendStatus(400);
      }
    } else {
      res.sendStatus(401);
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

module.exports = router;