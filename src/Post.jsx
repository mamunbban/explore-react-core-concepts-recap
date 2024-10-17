import './Post.css'
export default function Post({post}){
  const {body, id, title, userId} = post;
    return(
        <div className='post'>
            <h5>Title: {title} </h5>
            <p><small>userId: {userId}</small></p>
            <p>postId: {id}</p>
            <p>{body}</p>
        </div>
    )
}