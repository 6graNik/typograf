Typograf.addRule({
    name: 'ru/dash/directSpeech',
    handler(text) {
        const dashes = Typograf.getData('common/dash');
        const re1 = new RegExp('(["»‘“,])[ |\u00A0]?(' + dashes + ')[ |\u00A0]', 'g');
        const re2 = new RegExp('(^|' + Typograf._privateLabel + ')(' + dashes + ')( |\u00A0)', 'gm');
        const re3 = new RegExp('([.…?!])[ \u00A0](' + dashes + ')[ \u00A0]', 'g');

        return text
            .replace(re1, '$1\u00A0\u2014 ')
            .replace(re2, '$1\u2014\u00A0')
            .replace(re3, '$1 \u2014\u00A0');
    }
});
