$(function() {
    // Get body jQuery
    let $body = $('body')

    function darkmodeEnable() {
        $body.addClass('darkmode')
        console.log('Darkmode enabled!')
    }

    function darkmodeDisable() {
        $body.removeClass('darkmode')
        console.log('Darkmode disabled!')
    }

    // Darkmode false/true
    let darkmode = localStorage.getItem('darkmode') || 'off'
    console.log('Darkmode:', darkmode)

    // Toggle initial darkmode
    if (darkmode === 'on') {
        darkmodeEnable();
    }
    else {
        darkmodeDisable();
    }

    // Darkmode toggle
    $('#toggle-darkmode').click(function() {
        console.group('Darkmode Toggle')
        console.log('Current darkmode:', darkmode)
        if (darkmode == 'on') {
            darkmodeDisable();
            darkmode = 'off';
        }
        else {
            darkmodeEnable();
            darkmode = 'on';
        }
        console.log('Next darkmode:', darkmode)
        localStorage.setItem('darkmode', darkmode)
        console.groupEnd()
    })
})