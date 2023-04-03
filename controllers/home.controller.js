const fileController = require('./file.controller');

const uploadedFileNames = fileController.uploadedFileNames;


//array containing the csv filenames
const array = uploadedFileNames();   

module.exports.home = function(req,res){
    return res.render('home',{
        files: array
    });
}