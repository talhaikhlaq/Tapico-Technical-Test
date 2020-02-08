// IMPORT ROUTER FROM EXPRESS
const router = require('express').Router()

// IMPORT HEADLINES FUNCTIONS
const headlines = require('../controllers/headlines')

// DECLARE API ROUTES
router.route('/headlines/:searchQuery').get(headlines.show)
router.route('/headlines').get(headlines.index)


module.exports = router
