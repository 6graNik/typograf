Typograf.addRule({
    name: 'common/symbols/arrow',
    handler(text) {
        return Typograf._replace(text, [
            [/(^|[^-])->(?!>)/g, '$1→'],
            [/(^|[^<])<-(?!-)/g, '$1←']
        ]);
    }
});
