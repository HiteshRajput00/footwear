exports.dashboard =async(req,res) => {
    res.render('front/dashboard/dashboard');
 }
   
exports.shop = async(req,res) => {
    res.render('front/shop/index');
}

exports.ProductDetails = async(req,res) => {
    res.render('front/shop/product_details');
}

exports.aboutPage = (req,res) => {
    res.render('front/sitepages/about_us');
}

exports.contactPage = (req,res) => {
    res.render('front/sitepages/contact_us');
}

exports.wishlist = (req,res) => {
    res.render('front/wishlist/index');
}

exports.cartPage = (req,res) => {
    res.render('front/cart/index');
}

exports.checkout = (req,res) => {
    res.render('front/checkout/checkout');
}

exports.orderComplete = (req,res) => {
    res.render('front/checkout/order_complete');
}
