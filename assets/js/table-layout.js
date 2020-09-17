$(function() {
    $('.horizontal-scroll > table').each(function() {
        // Get cell width from longest line in table
        let cellWidth = $(this)
            .find('th,td')
            .map(function() { return parseInt($(this).outerWidth()) })
            .get()
            .reduce((a, b) => Math.max(a, b))

        // Set minimum width of table cell to width of longest element
        $(this).find('th,td').css('min-width', cellWidth)
    })
})