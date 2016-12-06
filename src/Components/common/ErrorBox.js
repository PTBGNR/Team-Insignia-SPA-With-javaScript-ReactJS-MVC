/**
 * Created by Hristo on 03.12.2016 г..
 */
import $ from 'jquery';

function showError(errorMsg) {
    $('#errorBox').text("Error: " + errorMsg).show();
}

export {showError};