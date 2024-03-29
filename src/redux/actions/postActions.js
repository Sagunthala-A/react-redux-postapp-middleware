import { FETCH_POSTS_STARTED,FETCH_POSTS_SUCCESS,FETCH_POSTS_FAILURE } from "./actionType";
import axios from "axios";

export function fetchPostsStarted(){
    return {
        type:FETCH_POSTS_STARTED
    }
}

export function fetchPostsSuccess(data){
    return{
        type:FETCH_POSTS_SUCCESS,
        payload:data
    }
}

export function fetchPostsFailure(error){
    return{
        type:FETCH_POSTS_FAILURE,
        payload:error
    }
}

// pseudo action creator

function fetchPosts (){
    return (dispatch)=>{
        dispatch(fetchPostsStarted());
        axios.get("https://gauravgitacc.github.io/postAppData/posts.json")
        .then(response=> dispatch(fetchPostsSuccess(response.data)))
        .catch(error => dispatch(fetchPostsFailure(error)));
    }
}

export default fetchPosts;