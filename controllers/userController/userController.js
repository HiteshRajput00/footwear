exports.dashboard =async(req,res) => {
    res.render('front/dashboard/dashboard');
 }
   
exports.shop = async(req,res) => {
    res.render('front/shop/index');
}

exports.ProductDetails = async(req,res) => {
    res.render('front/shop/product_details');
}

exports.aboutPage = async(req,res) => {
    res.render('front/sitepages/about_us');
}

exports.contactPage = async(req,res) => {
    res.render('front/sitepages/contact_us');
}

exports.wishlist = async(req,res) => {
    res.render('front/wishlist/index');
}

exports.cartPage = async(req,res) => {
    res.render('front/cart/index');
}

exports.checkout = async(req,res) => {
    res.render('front/checkout/checkout');
}

exports.orderComplete = async(req,res) => {
    res.render('front/checkout/order_complete');
}
