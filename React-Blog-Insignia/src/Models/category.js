/**
 * Created by Hristo on 04.12.2016 г..
 */
import {get, post} from './requester';

function getCategories(callback) {
    get('appdata', 'Category', 'homeposts')
        .then(callback);
}

function createCategory(name) {
    let categoryData = {
        name
    };
    post('appdata', 'Category', categoryData, 'kinvey')
        .then();
}

export {getCategories, createCategory};