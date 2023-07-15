const express = require('express')
const home = require('../controllers/home')
const checkout = require('../controllers/checkout')
const product = require('../controllers/product')

const router = express.Router()

router.get('/', home.index)

router.get('/product', product.index)

router.get('/checkout', checkout.index)

module.exports = router