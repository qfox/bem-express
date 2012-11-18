var BEM = require('bem'),
    Q = BEM.require('q'),
    VM = require('vm');


exports.render = function(str, options, fn) {

    var app = options.app;

    if ('development' == app.get('env')) {
        BEM.api.make().then(function() {
            return exports.getCreateResult(str);
        }).then(function(data) {
            fn(false, data);
        });
    } else {
        exports.getCreateResult(str).then(function(data) {
            fn(false, data);
        });
    }

};


exports.getBemhtml = function(str) {

    var path = str;

    return BEM.util.readFile(path)
        .then(function(c) {
            /** @name BEMHTML variable appears after runInThisContext() call */
            VM.runInThisContext(c, path);
            return BEMHTML;
        });

};

exports.getBemjson = function(str) {

    var path = str.replace('bemhtml', 'bemjson');
    return BEM.util.readFile(path)
        .then(function(c) {
            return VM.runInThisContext(c, path);
        });

};

exports.getHtml = function(bemhtml, bemjson) {

    return Q.all([bemhtml, bemjson])
        .spread(function(bemhtml, bemjson) {
            return bemhtml.apply(bemjson);
        });

};

exports.getCreateResult = function(str) {

    return exports.getHtml(
        exports.getBemhtml(str),
        exports.getBemjson(str));

};

exports.__express = exports.render;