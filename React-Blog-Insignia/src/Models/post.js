/**
 * Created by Hristo on 02.12.2016 г..
 */
import {get, post} from './requester';

function findHomePosts(callback) {
    get('appdata', 'posts', 'homeposts')
        .then(callback);
}

function findSinglePostPage(postId, callback) {
    get('appdata', `posts/${postId}`, 'homeposts')
        .then(callback);
}

function createPost(title, body, author, date, rate, callback) {
    let userData = {
        title,
        body,
        author,
        date,
        rate
    };
    console.dir(userData);
    post('appdata', 'posts', userData, 'kinvey')
        .then(createSuccess);

    function createSuccess(postInfo) {
        callback(true);
    }
}


export {findHomePosts, findSinglePostPage, createPost};
