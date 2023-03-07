import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import Image from 'next/image';
import Link from 'next/link';

export default function PostPage({
    frontmatter: {title, date, cover_image},
    slug,
    content
}) {

    return (
        <div className="singlePost">
            <div className="inner-wrapper">
                <Link href="/blog" className="u-link">Go Back</Link>
                <div className="singlePost__content">
                    <h1 className="singlePost__title">{title}</h1>
                    <Image    
                        src={cover_image}
                        width={600}
                        height={400}
                        alt="post cover image"
                        className='post__thumbnail'
                    />
                    <div className="singlePost__body">
                        <div dangerouslySetInnerHTML={{__html: marked(content)}} className="singlePost__content"/>
                    </div>
                </div>
            </div>
        </div>
    )
}


export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('posts'));

    const paths = files.map(filename => ({
        params: {
            slug: filename.replace('.md', '')
        }
    }));

    return {
        paths,
        fallback: false
    }
}


export async function getStaticProps({params: {slug}}) {
    const markdownWithMeta = fs.readFileSync(path.join('posts', slug + '.md'), 'utf-8');

    const {data: frontmatter, content} = matter(markdownWithMeta);

    return {
        props: {
            frontmatter,
            slug,
            content
        }
    }
}