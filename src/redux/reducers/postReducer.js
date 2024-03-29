import { FETCH_POSTS_STARTED,FETCH_POSTS_SUCCESS,FETCH_POSTS_FAILURE } from "../actions/actionType";

const initialState = {
    loading:false,
    data:[],
    error:''
}

const postReducer =(state=initialState,action)=>{
    switch(action.type){
        case FETCH_POSTS_STARTED:
            return {...state, loading:true}
        case FETCH_POSTS_SUCCESS:
            return{...state, loading:false, data:action.payload,error:''}
        case FETCH_POSTS_FAILURE:
            return{...state, loading:false, data:[],error:action.payload}
        default:
            return state;
    }
}

export default postReducer;