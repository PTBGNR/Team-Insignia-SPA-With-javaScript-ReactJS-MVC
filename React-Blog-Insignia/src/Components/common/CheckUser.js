/**
 * Created by Hristo on 06.12.2016 г..
 */

function checkUser(nextState, replace){
    //alert(sessionStorage.getItem('authToken'));

    let name = sessionStorage.getItem("username");

    if (!name) {
        replace({
            pathname: '/login',
            state: { nextPathname: nextState.location.pathname }
        });
    }
}

export {checkUser};