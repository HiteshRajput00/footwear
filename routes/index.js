var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController/userController');
const { resolveInclude } = require('ejs');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index');
// });


router.get('/',userController.dashboard);
router.get('/shop',userController.shop);
router.get('/product-details',userController.ProductDetails);
router.get('/about',userController.aboutPage);
router.get('/contact',userController.contactPage);
router.get('/wishlist',userController.wishlist);
router.get('/cart',userController.cartPage);
router.get('/checkout',userController.checkout);
router.get('/order-complete',userController.orderComplete);

module.exports = router;
