/**
 * Created by Hristo on 02.12.2016 г..
 */
import {get, post, update, deleteRequest} from './requester';

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
        post('appdata', 'postsRate', rateData, 'kinvey')
        callback(true);
    }
}

function getRates(callback) {
    get('appdata', 'postsRate', 'homeposts')
        .then(callback)
}

function getRatesUpdateRate(postId, callback) {
    get('appdata', 'postsRate', 'homeposts')
        .then(updateRate)
    function updateRate(rates) {
        let ratePost = 1;
        let rateId;
        for (let rate of rates) {
            if (rate.postId === postId) {
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

function updatePost(title, body, author, date, category, postId, callback) {
    let postData = {
        title,
        body,
        author,
        date,
        category
    };
    update('appdata', 'posts/' + postId, postData, 'kinvey')
        .then(updateSuccess);
    function updateSuccess() {
        callback(true);
    }
}

function deletePostMain(postId, callback) {
    deleteRequest('appdata', 'postsRate', `?query={"postId":"${postId}"}`, 'kinvey')
        .then(successDeleteRate);
    function successDeleteRate() {
        deleteRequest('appdata', 'comments', `?query={"post_id":"${postId}"}`, 'kinvey')
            .then(successDeleteComments);
        function successDeleteComments() {
            deleteRequest('appdata', 'posts', postId, 'kinvey')
                .then(deletePost);
            function deletePost() {
                callback(true);
            }
        }
    }
}

function deletePostComments() {

}

export {
    findHomePosts,
    findSinglePostPage,
    createPost,
    getRatesUpdateRate,
    updatePost,
    getRates,
    deletePostMain,
    deletePostComments
};