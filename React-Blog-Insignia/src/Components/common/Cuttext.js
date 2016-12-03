/**
 * Created by Hristo on 03.12.2016 г..
 */

function cutText(content){
    let result = content.match( /[^\.!\?]+[\.!\?]+/g );

    if(result.length >= 3){
        return result.slice(0, 3);
    }
    return content
}

export {cutText};