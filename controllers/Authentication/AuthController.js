
exports.registerPage = async(req,res) => {
    res.render('forms/register');
}

exports.registerProcess = async(req,res) => {
    res.redirect('/');
}