
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.postImage = function(req, res){
  fs.readFile(req.files.displayImage.path, function (err, data) {
    var newPath = __dirname + "/uploads/demo.png";
    fs.writeFile(newPath, data, function (err) {
      res.redirect("back");
    });
  });
};