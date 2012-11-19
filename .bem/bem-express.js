var BEM = require('bem'),
    Q = BEM.require('q'),
    VM = require('vm');


var bemDriver = function() {

    var getBemhtml = function(str) {

        var path = str;

        return BEM.util.readFile(path)
            .then(function(c) {
                /** @name BEMHTML variable appears after runInThisContext() call */
                VM.runInThisContext(c, path);
                return BEMHTML;
            });

    };

    var getBemjson = function(str) {

        var path = str.replace('bemhtml', 'bemjson');
        return BEM.util.readFile(path)
            .then(function(c) {
                return VM.runInThisContext(c, path);
            });

    };

    var getHtml = function(bemhtml, bemjson) {

        return Q.all([bemhtml, bemjson])
            .spread(function(bemhtml, bemjson) {
                return bemhtml.apply(bemjson);
            });

    };

    var getCreateResult = function(str) {

        return getHtml(
            getBemhtml(str),
            getBemjson(str));

    };

    return {

        render: function(str, options, fn) {

            var app = options.app;

            process.env.ISPROJECT = true;

            if ('development' == app.get('env')) {
                BEM.api.make().then(function() {
                    return getCreateResult(str);
                }).then(function(data) {
                    fn(false, data);
                });
            } else {
                getCreateResult(str).then(function(data) {
                    fn(false, data);
                });
            }

        }

    };

};






exports.__express = bemDriver().render;