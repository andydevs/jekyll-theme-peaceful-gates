$(function() {
    // Get body jQuery
    let $body = $('body')
    let $auto = $('.show-on-auto')

    /**
     * Enable darkmode
     */
    function darkmodeEnable() {
        $auto.hide()
        $body.addClass('darkmode')
        console.log('Darkmode enabled!')
    }

    /**
     * Disable darkmode
     */
    function darkmodeDisable() {
        $auto.hide()
        $body.removeClass('darkmode')
        console.log('Darkmode disabled!')
    }

    /**
     * Darkmode on auto
     */
    function darkmodeAuto() {
        $auto.show()
        let isdarkmode = window.matchMedia('prefers-color-scheme: dark').matches
        $body.toggleClass('darkmode', isdarkmode)
        console.log('Darkmode on auto!')
    }

    // Get darkmode from localstorage
    let darkmode = localStorage.getItem('darkmode') || 'auto'
    console.log('Darkmode:', darkmode)

    // Set initial darkmode
    if (darkmode === 'auto') darkmodeAuto();
    else if (darkmode === 'on') darkmodeEnable();
    else darkmodeDisable();

    // Darkmode toggle
    $('#toggle-darkmode').click(function() {
        console.group('Darkmode Toggle')
        console.log('Current darkmode:', darkmode)
        if (darkmode === 'auto') {
            darkmodeEnable();
            darkmode = 'on';
        }
        else if (darkmode === 'on') {
            darkmodeDisable();
            darkmode = 'off';
        }
        else {
            darkmodeAuto()
            darkmode = 'auto'
        }
        console.log('Next darkmode:', darkmode)
        localStorage.setItem('darkmode', darkmode)
        console.groupEnd()
    })
})