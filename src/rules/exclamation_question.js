Typograf.rule({
    title: '!? → ?!',
    name: 'exclamation_question',
    sortIndex: 1140,
    func: function(text) {
        var re = new RegExp('(^|[^!])!\\?([^?]|$)', 'g');
        return text.replace(re, '$1?!$2');
    }
});
