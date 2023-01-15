const express = require('express');
const router = express.Router();

const contactsController = require('../controllers/contacts');

router.get('/', contactsController.getAll);

router.get('/63c35b8b7af1679be19b2763', contactsController.getSingle);

router.get('/63c35dbe7af1679be19b2765', contactsController.getSingle);

router.get('/63c35d977af1679be19b2764', contactsController.getSingle);

module.exports = router;
