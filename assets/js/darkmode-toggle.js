$(function() {
    // Get body jQuery
    let $body = $('body')

    /**
     * Enable darkmode
     */
    function darkmodeEnable() {
        $body.addClass('colormode-dark')
        console.log('Darkmode enabled!')
    }

    /**
     * Disable darkmode
     */
    function darkmodeDisable() {
        $body.removeClass('colormode-dark')
        console.log('Darkmode disabled!')
    }

    // Get darkmode from localstorage
    let darkmode = localStorage.getItem('darkmode') || 'off'
    console.log('Darkmode:', darkmode)

    // Set initial darkmode
    if (darkmode === 'on') darkmodeEnable();
    else darkmodeDisable();

    // Darkmode toggle
    $('#toggle-darkmode').click(function() {
        console.group('Darkmode Toggle')
        console.log('Current darkmode:', darkmode)
        if (darkmode === 'on') {
            darkmodeDisable();
            darkmode = 'off';
        }
        else {
            darkmodeEnable()
            darkmode = 'on'
        }
        console.log('Next darkmode:', darkmode)
        localStorage.setItem('darkmode', darkmode)
        console.groupEnd()
    })
})