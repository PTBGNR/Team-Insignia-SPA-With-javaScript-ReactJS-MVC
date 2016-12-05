/**
 * Created by Hristo on 02.12.2016 г..
 */
import {get, post, update, postDelete} from './requester';

function findHomePosts(callback) {
    get('appdata', 'posts', 'homeposts')
        .then(callback);
}

function findSinglePostPage(postId, callback) {
    get('appdata', `posts/${postId}`, 'homeposts')
        .then(callback)
}

function createPost(title, body, author, date, category, callback) {
    let userData = {
        title,
        body,
        author,
        date,
        category
    };
    post('appdata', 'posts', userData, 'kinvey')
        .then(createSuccess);

    function createSuccess(postInfo) {
        let rateData = {
            postId: postInfo._id,
            rating: 0
        };
        post('appdata', 'postsRate', rateData, 'kinvey');
        callback(true);
    }
}
function deletePost(title, body, author, date, category, postId) {
    let userData = {
        title,
        body,
        author,
        date,
        category,
        postId
    };
    postDelete('appdata', 'postsRate', userData, 'kinvey')
    .then(deleteSuccess);

    function deleteSuccess() {
        alert('POST DELETE IS WORKING CORRECTLY');
    }
}
function getRates(callback) {
    get('appdata', 'postsRate', 'homeposts')
        .then(callback)
}
    
function getRatesUpdateRate(postId, callback) {
    get('appdata', 'postsRate', 'homeposts')
        .then(updateRate);
    function updateRate(rates) {
        let ratePost = 1;
        let rateId;
        for(let rate of rates){
            if(rate.postId === postId){
                ratePost += Number(rate.rating);
                rateId = rate._id
            }
        }
        let rateData = {
            postId: postId,
            rating: ratePost
        };
        update('appdata', 'postsRate/' + rateId, rateData, 'homeposts')
            .then(getUpdatedRates);
        function getUpdatedRates() {
            get('appdata', 'postsRate', 'homeposts')
                .then(callback)
        }
    }
}

export {findHomePosts, findSinglePostPage, createPost, getRatesUpdateRate, getRates, deletePost};