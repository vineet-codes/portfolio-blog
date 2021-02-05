import fs from 'fs';
import matter from 'gray-matter';
// import mdxPrism from 'mdx-prism';
import path from 'path';
import readingTime from 'reading-time';

import autolinkHeadings from 'remark-autolink-headings';
import TOC from 'remark-toc';
import remarkAlign from 'remark-align';
import rSlug from 'remark-slug';
import codeTitle from 'remark-code-titles';
import remarkCapitalize from 'remark-capitalize';

import renderToString from 'next-mdx-remote/render-to-string';

import MDXComponents from '@/components/MDXComponents';

const root = process.cwd();

export async function getFiles(type) {
  return fs.readdirSync(path.join(root, 'data', type));
}

export async function getFileBySlug(type, slug) {
  const source = slug
    ? fs.readFileSync(path.join(root, 'data', type, `${slug}.mdx`), 'utf8')
    : fs.readFileSync(path.join(root, 'data', `${type}.mdx`), 'utf8');

  const { data, content } = matter(source);
  // console.log(data, slug);
  const mdxSource = await renderToString(content, {
    components: MDXComponents,
    mdxOptions: {
      remarkPlugins: [
        [TOC, { maxDepth: 1 }],
        [(remarkAlign, { center: 'align-center' })],
        codeTitle,
        rSlug,
        [autolinkHeadings, { behavior: 'wrap' }],
        remarkCapitalize,
      ],
      // rehypePlugins: [mdxPrism],
    },
  });

  return {
    mdxSource,
    frontMatter: {
      wordCount: content.split(/\s+/gu).length,
      readingTime: readingTime(content),
      slug: slug || null,
      ...data,
    },
  };
}

export async function getAllFilesFrontMatter(type) {
  const files = fs.readdirSync(path.join(root, 'data', type));

  return files.reduce((allPosts, postSlug) => {
    const source = fs.readFileSync(
      path.join(root, 'data', type, postSlug),
      'utf8'
    );
    const { data } = matter(source);

    return [
      {
        ...data,
        slug: postSlug.replace('.mdx', ''),
      },
      ...allPosts,
    ];
  }, []);
}
