$(function() {
    $('#colormode-selector').change(function() {
        $('body').removeClass()
        let val = $(this).val()
        if (val !== 'colormode-auto') {
            $('body').addClass(val)
        }
    })
})