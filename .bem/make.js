MAKE.decl('Arch', {

    getLibraries: function() {

        return {
            'bem-bl': {
                type: 'git',
                url: 'git://github.com/bem/bem-bl.git',
                treeish: '0.3'
            }
            // ,
            // 'bl-core-bemhtml' : {
            //     type: 'git',
            //     url: 'git://github.com/bem/bl-core-bemhtml.git'
            // }
        };

    }

});

MAKE.decl('BundleNode', {

    getTechs: function() {

        return [
            'bemjson.js',
            'bemdecl.js',
            'deps.js',
            'bemhtml.js',
            'css',
            'js'
            // ,
            // 'html'
        ];
    }

});

