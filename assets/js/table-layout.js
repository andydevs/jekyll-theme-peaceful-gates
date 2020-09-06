$(function() {
    $('table').each(function() {
        // Get longest word
        let longest = $(this)
            .find('th,td')
            .map(function() {
                return $(this).text()
            })
            .get()
            .reduce(function(a, b) {
                return a.length >= b.length ? a : b
            }, '')

        // Get length of longest
        let font = $(this).find('td').css('font')
        let canvas = document.createElement('canvas')
        let ctx = canvas.getContext('2d')
        ctx.font = font
        let length = ctx.measureText(longest).width

        // Set table cell lengths to length of longest
        $(this).find('th,td').css('width', length)
    })
})