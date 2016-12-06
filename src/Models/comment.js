/**
 * Created by Hristo on 05.12.2016 г..
 */
import {get, post} from './requester';

function getComments(postId, callback) {
    get('appdata', `comments/?query={"post_id":"${postId}"}`, 'homeposts')
        .then(callback);
}

function getAllComments(callback) {
    get('appdata', 'comments', 'homeposts')
        .then(callback);
}

function createComment(text, author, email, post_id, callback) {
    let commentData = {
        text,
        author,
        email,
        post_id
    };
    post('appdata', 'comments', commentData, 'homeposts')
        .then(createSuccess);
    function createSuccess() {
        callback(true);
    }
}

export {getComments, createComment, getAllComments};