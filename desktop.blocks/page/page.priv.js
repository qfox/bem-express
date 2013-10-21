blocks['page'] = function(data) {
    return {
        block: 'page',
        content: [
            {
                elem: 'q',
                content: ['qq', Math.floor(Math.random()*1000)]
            },
            {
                elem: 'qq',
                content: 'blabla'
            }
        ]
    }
}
