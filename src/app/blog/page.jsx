import BlogPost from "./[postID]/page";

const posts = [
  {
    id: 1,
    title: "The Future of Web Development",
    author: "Priyanshu Agarwal",
    date: "Feb 5, 2024",
    blogIntro: "A look into the future trends and technologies in web development...",
  },
  {
    id: 2,
    title: "Understanding JavaScript",
    author: "Anshu Agarwal",
    date: "Feb 5, 2024",
    blogIntro: "An in-depth guide to understanding JavaScript and its use cases...",
  },
];

export default function Blog() {
  return (
    <div className='blog-page'>
      <div className='container'>
        <h1>Blog</h1>
        <div className='post-list'>
          {posts.map((post) => (
            <BlogPost post={post} key={post.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
