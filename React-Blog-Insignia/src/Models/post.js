/**
 * Created by Hristo on 02.12.2016 г..
 */
import {get, post, update} from './requester';

function findHomePosts(callback) {
    get('appdata', 'posts', 'homeposts')
        .then(callback);
}

function findSinglePostPage(postId, callback) {
    get('appdata', `posts/${postId}`, 'homeposts')
        .then(callback)
}

function createPost(title, body, author, date, rate, category, callback) {
    let userData = {
        title,
        body,
        author,
        date,
        rate,
        category
    };
    post('appdata', 'posts', userData, 'kinvey')
        .then(createSuccess);

    function createSuccess(postInfo) {
        callback(true);
    }
}

function findPostUpdatedRate(postId, callback) {
    get('appdata', `posts/${postId}`, 'homeposts')
        .then(updateRate);
    function updateRate(post) {
        let rate = Number(post.rate) + 1;
        let postData = {
            title: post.title,
            body: post.body,
            author: post.author,
            date: post.date,
            rate: rate,
            category: post.category
        };
        update('appdata', 'posts/' + post._id, postData, 'homeposts')
            .then(updatedPost);
        function updatedPost(updatePost) {
            get('appdata', `posts/${updatePost._id}`, 'homeposts')
                .then(callback);
        }
    }
}

export {findHomePosts, findSinglePostPage, createPost, findPostUpdatedRate};