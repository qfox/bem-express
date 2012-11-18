exports.getTechs = function() {
    var techs;
    techs = techs || this.__base();
    techs['css'] = 'bem/lib/techs/css.js';
    techs['js'] = 'bem/lib/techs/js.js';
    techs['bemhtml.js'] = '../../bem-bl/blocks-common/i-bem/bem/techs/bemhtml.js';
    techs['deps.js'] = 'bem/lib/techs/deps.js.js';
    return techs;
};
