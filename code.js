/*
 * code.js
 */

$(document).ready(function () {
    console.log('Page loaded!');
    setup_first_button();

    return;
});


function setup_first_button() {
    $('#first_button').on('click', function () {
        alert('woo, clicked!');
    });
    
    return;
}

