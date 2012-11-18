var express = require('express')
  , http = require('http')
  , app = express();

app.configure(function(){
    app.set('env', 'development');
    app.set('port', process.env.PORT || 3000);
    app.engine('.bemhtml.js', require(__dirname +'/.bem/bem-express.js').__express);
    app.set('views', __dirname + '/pages-desktop/');
    app.set('view engine', 'bemhtml.js');
    app.use(express.static(__dirname));
    app.use(app.router);
});

app.get('/', function(req, res) {
    res.render('index', { 
        data: 'Express', 
        app: app
    });
});

http.createServer(app).listen(app.get('port'), function() {
    console.log("Express server listening on port " + app.get('port'));
});
