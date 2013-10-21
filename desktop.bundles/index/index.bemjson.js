({
    block: 'page',
    title: 'BEM Server Motivator',
    head: [
        { elem: 'css', url: '/desktop.bundles/index/_index.css' },
        { elem: 'meta', attrs: { name: 'description', content: 'Project to motivate yourself' }},
        { elem: 'meta', attrs: { name: 'keywords', content: 'bem, express, pysch' }}
    ],
    content: [
        {
            block: 'content',
            content: [
                {
                    block: 'carousel',
                    content: [
                        {
                            content: [
                                {
                                    elem: 'item',
                                    content: [
                                        {
                                            block: 'motivator',
                                            content: [
                                                {elem: 'img', elemMods: {theme: 'bem'}},
                                                {elem: 'slogan', content: 'BEM SERVER'},
                                                {elem: 'tagline', content: 'Делай BEM!!! пыщ пыщ!'}
                                        ]}
                                    ]
                                },
                                {
                                    elem: 'item',
                                    content: [
                                        {
                                            block: 'motivator',
                                            content: [
                                                {elem: 'img', elemMods: {theme: 'another'}},
                                                {elem: 'slogan', content: 'BATMAN'},
                                                {elem: 'tagline', content: 'Человек-летучая мышь - мрачный крепыш!'}
                                            ]
                                        }
                                    ]
                                },
                                {
                                    elem: 'item',
                                    content: [
                                        {
                                            block: 'motivator',
                                            content: [
                                                {elem: 'img', elemMods: {theme: 'america'}},
                                                {elem: 'slogan', content: 'CAPTAIN AMERICA'},
                                                {elem: 'tagline', content: 'Капитан Америка - у всех истерика!'}
                                            ]
                                        }
                                    ]
                                },
                                {
                                    elem: 'item',
                                    content: [
                                        {
                                            block: 'motivator',
                                            content: [
                                                {elem: 'img', elemMods: {theme: 'iron'}},
                                                {elem: 'slogan', content: 'IRONMAN'},
                                                {elem: 'tagline', content: 'Железный человек - в шлеме на век!'}
                                            ]
                                        }
                                    ]
                                },
                                {
                                    elem: 'item',
                                    content: [
                                        {
                                            block: 'motivator',
                                            content: [
                                                {elem: 'img', elemMods: {theme: 'brain'}},
                                                {elem: 'slogan', content: '???'},
                                                {elem: 'tagline', content: 'А этого никто не знает'}
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        { elem: 'js', url: '/desktop.bundles/index/_index.js' }
    ]
});