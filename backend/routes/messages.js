const express = require('express');
const router = express.Router();
const Message = require('../models/Message');

router.post('/', async (req, res) => {
  const msg = new Message({
    name: req.body.name,
    email: req.body.email,
    message: req.body.message
  });
  try {
    const saved = await msg.save();
    res.status(201).json({ success: true, message: 'Message received!', data: saved });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

module.exports = router;
