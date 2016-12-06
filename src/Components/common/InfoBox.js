/**
 * Created by Hristo on 03.12.2016 г..
 */
import $ from 'jquery';

function showInfo(message) {
    $('#infoBox').text(message).show();
    setTimeout(function() {
        $('#infoBox').fadeOut();
    }, 3000);
}

export {showInfo};