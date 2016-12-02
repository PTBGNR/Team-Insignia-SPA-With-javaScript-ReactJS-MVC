/**
 * Created by Hristo on 02.12.2016 г..
 */
import {get} from './requester';

function findHomePosts(callback) {
    get('appdata', 'posts', 'homeposts')
        .then(callback);
}

function findSinglePostPage(postId, callback) {
    get('appdata', `posts\\?query={"postId": "${postId}"}`, 'kinvey')
        .then(callback);
}

export {findHomePosts, findSinglePostPage};
