import {useEffect} from "react";
import {useSelector,useDispatch} from 'react-redux';
// import axios from 'axios';
// import { fetchPostsStarted,fetchPostsSuccess,fetchPostsFailure } from "../redux/actions/postActions";
import fetchPosts from "../redux/actions/postActions";

const PostApp = ()=>{
    const {loading,data,error} = useSelector(state=>state)
    const dispatch = useDispatch();

    useEffect(()=>{
        // dispatch(fetchPostsStarted())
        // axios.get("https://gauravgitacc.github.io/postAppData/posts.json")
        // .then(response => dispatch(fetchPostsSuccess(response.data)))
        // .catch(error => dispatch(fetchPostsFailure(error)))

        // to avoid writing everytime for api call, 
        // we can call api function by using redux 

        dispatch(fetchPosts());
        // now wherever we want api call we can simply use this method dispatch(fetchPosts()); 
    },[])

    // async await method for fetch posts data
    // useEffect(async()=>{
    //     dispatch(fetchPostsStarted())
    //     try{
    //         const response = await axios.get("https://gauravgitacc.github.io/postAppData/posts.json")
    //         dispatch(fetchPostsSuccess(response.data))
    //     }
    //     catch(error){
    //         dispatch(fetchPostsFailure(error))
    //     }
    // },[])
    return(
        <div>
            <h1>POST APP</h1>
            {
                data.length > 0 && data.map(post =>(
                    <div key ={post.id} 
                        style= {{
                            border:"3px solid wheat",
                            padding:"10px",
                            margin:"10px"
                        }}
                    >
                        <h1>{post.title}</h1>
                        <p>{post.body}</p>
                    </div>
                ))
            }
            {
                error && (
                    <h3 
                    style={{
                        color:"red",
                        textAlign:"center",
                        marginTop:"100px"
                    }}>{error.message}/</h3>
                )
            }
        </div>
    )
}

export default PostApp;