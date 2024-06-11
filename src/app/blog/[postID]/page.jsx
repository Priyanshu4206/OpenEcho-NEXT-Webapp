export default function BlogPost({ post }) {
  return (
    <div className='post'>
      <h2>{post.title}</h2>
      <p className='meta'>
        By {post.author} on {post.date}
      </p>
      <p className='blogIntro'>{post.blogIntro}</p>
    </div>
  );
}
