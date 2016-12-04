/**
 * Created by Hristo on 03.12.2016 г..
 */

function cutText(content){
    if(content.length >= 200){
        return content.substring(0, 200);
    }
    return content;
}

export {cutText};