import Link from 'next/link';
import Image from 'next/image';

export default function Post({post, index}) {
    return (
        <div key={index} className="card card--post post">
            <div className="post__image">
                <Image 
                    src={post.frontmatter.cover_image}
                    width={600}
                    height={400}
                    alt="post cover image"
                    className='post__thumbnail'
                />
            </div>
            <div className="post__body">
                <h3 className='post__title'>{post.frontmatter.title}</h3>
                <p className='post__date'>{post.frontmatter.date}</p>
                <p className='post__excerpt'>{post.frontmatter.excerpt}</p>
            </div>

        </div>
    )
}