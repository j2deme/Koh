var fs = require('fs');
/*
 * GET home page.
 */
exports.index = function(req, res){
  res.render('index', { title: 'Koh' });
};

/*
 * POST Image uploading
 */
exports.postImage = function(req, res){
  fs.readFile(req.files.displayImage.path, function (err, data) {
    var filename = req.files.displayImage.name;
    var newPath = "./uploads/" + filename;
    fs.writeFile(newPath, data, function (err) {
      //res.send(req.files);
      if(err) {
        console.log(err);
        res.redirect("back");
      } else {
        console.log("The file %s was saved!", filename);
      }
    });
  });
};
