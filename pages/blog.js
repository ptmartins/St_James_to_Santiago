import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Post from '../components/Post';
import { sortByDate } from '../utils';

export default function Blog({posts}) {

    return(
      <>
      <div className="inner-wrapper">
        <h1 className="page_title">Blog</h1>
        <div className="posts">
          {posts.map((post, index) => (
            <Post key={index} post={post} />
          ))}
        </div>
      </div>
      </>
    )
}


export async function getStaticProps() {
    // Get files from /posts directory
    const files = fs.readdirSync(path.join('posts'));

    // Get slug and frontmatter from posts
    const posts = files.map(filename => {
        // Create slug  
        const slug = filename.replace('.md', '');
        
        // Get frontmatter
        const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8'),
              {data: frontmatter} = matter(markdownWithMeta);

        return {
            slug,
            frontmatter
        }
    });
        

    return {
      props: {
        posts: posts.sort(sortByDate)
      },
    }
  }
  