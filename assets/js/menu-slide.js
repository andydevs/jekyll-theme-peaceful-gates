$(function() {

    $('#open-menu').click(function() {
        $('#menu-window').show()
        $('body').addClass('scroll-lock')
        $('#menu').animate({ left: '0%' }, 400)
    })

    $('#close-menu').click(function() {
        $('#menu').animate({ left: '-100%' }, 400, function() {
            $('body').removeClass('scroll-lock')
            $('#menu-window').hide()
        })
    })

})