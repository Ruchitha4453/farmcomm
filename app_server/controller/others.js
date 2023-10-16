module.exports.about = function(req, res) {
    res.render('generic-text', {
    title: 'About FarmerPortal',
    content: 'Seed information providers using Farmer portal websites play a vital role in helping farmers make informed decisions about the seeds they plant. These websites typically provide information on a wide range of seed varieties, including their characteristics, growing requirements, and suitability for different climates and soil types. Farmers can use this information to select the seeds that are most likely to produce a successful crop.'
    });
    };
    
  
  /* GET 'signin' page */
  module.exports.signin = function(req, res){
      res.render('signin', { title: 'signin' });
      content: 'Application which provides information on types of seeds and the information related to it on which season it needs to be grown and usecases'
    }
    /* GET 'register' page */
    module.exports.register = function(req, res){
      res.render('register', { title: 'register' });
      content: 'Application which provides information on types of seeds and the information related to it on which season it needs to be grown and usecases'
    }