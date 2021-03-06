import $ from 'jquery';

const kinveyBaseUrl = "https://baas.kinvey.com/";
const kinveyAppKey = "kid_r1tM2yIMx";
const kinveyAppSecret = "297e1355ed414ce2b0a905febc09e3fb";

function makeAuth(type) {
    switch (type) {
        case 'basic':
            return { 'Authorization': "Basic " + btoa(kinveyAppKey + ":" + kinveyAppSecret) };
        case 'kinvey':
            return { 'Authorization': "Kinvey " + sessionStorage.getItem('authToken') };
        case 'homeposts':
            return { 'Authorization': "Basic " + btoa('ico:123') }
        default: break;
    }
}

function get(module, uri, auth) {
    const kinveyLoginUrl = kinveyBaseUrl + module + "/" + kinveyAppKey + "/" + uri;
    const kinveyAuthHeaders = makeAuth(auth);

    return $.ajax({
        method: "GET",
        url: kinveyLoginUrl,
        headers: kinveyAuthHeaders
    });
}

function post(module, uri, data, auth) {
    const kinveyLoginUrl = kinveyBaseUrl + module + "/" + kinveyAppKey + "/" + uri;
    const kinveyAuthHeaders = makeAuth(auth);

    let request = {
        method: "POST",
        url: kinveyLoginUrl,
        headers: kinveyAuthHeaders
    };

    if (data !== null) {
        request.data = data;
    }
    return $.ajax(request);
}

function update(module, uri, data, auth) {
    const kinveyLoginUrl = kinveyBaseUrl + module + "/" + kinveyAppKey + "/" + uri;
    const kinveyAuthHeaders = makeAuth(auth);

    let request = {
        method: "PUT",
        url: kinveyLoginUrl,
        headers: kinveyAuthHeaders,
        data: data
    };

    return $.ajax(request);
}

function deleteRequest(module, uri, id, auth) {
    const kinveyLoginUrl = kinveyBaseUrl + module + "/" + kinveyAppKey + "/" + uri + "/" + id;
    const kinveyAuthHeaders = makeAuth(auth);

    let request = {
        method: "Delete",
        url: kinveyLoginUrl,
        headers: kinveyAuthHeaders
    };

    return $.ajax(request);
}

export {get, post, update, deleteRequest};