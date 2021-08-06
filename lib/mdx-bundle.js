// https://dipeshwagle.com/blog/use-mdx-bundler-next-js

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { bundleMDX } from 'mdx-bundler';

import readingTime from 'reading-time';
import autolinkHeadings from 'remark-autolink-headings';
import TOC from 'remark-toc';
import remarkAlign from 'remark-align';
import rSlug from 'remark-slug';
import codeTitle from 'remark-code-titles';
import remarkCapitalize from 'remark-capitalize';

export const ROOT = process.cwd();
export const POSTS_PATH = path.join(process.cwd(), 'data/blog');

export const ComponentsInMdxPATH = path.join(
  process.cwd(),
  'data/blog-components'
);

export async function getFiles(type) {
  return fs.readdirSync(path.join(ROOT, 'data', type));
}

export const getFileContent = (filename) => {
  return fs.readFileSync(path.join(POSTS_PATH, filename), 'utf8');
};

// const getCompiledMDX = async (content) => {
//   if (process.platform === 'win32') {
//     process.env.ESBUILD_BINARY_PATH = path.join(
//       ROOT,
//       'node_modules',
//       'esbuild',
//       'esbuild.exe'
//     );
//   } else {
//     process.env.ESBUILD_BINARY_PATH = path.join(
//       ROOT,
//       'node_modules',
//       'esbuild',
//       'bin',
//       'esbuild'
//     );
//   }
//   // Add your remark and rehype plugins here
//   const remarkPlugins = [
//     [TOC, { maxDepth: 1 }],
//     [(remarkAlign, { center: 'align-center' })],
//     codeTitle,
//     rSlug,
//     [autolinkHeadings, { behavior: 'wrap' }],
//     remarkCapitalize,
//   ];

//   const rehypePlugins = [];

//   try {
//     return await bundleMDX(content, {
//       cwd: POSTS_PATH,
//       xdmOptions(options) {
//         options.remarkPlugins = [
//           ...(options.remarkPlugins ?? []),
//           ...remarkPlugins,
//         ];
//         options.rehypePlugins = [
//           ...(options.rehypePlugins ?? []),
//           ...rehypePlugins,
//         ];

//         return options;
//       },
//       grayMatterOptions: (options) => {
//         options.excerpt = true;

//         return options;
//       },
//     });
//   } catch (error) {
//     throw new Error(error);
//   }
// };

export const getCompiledMDX = async (source) => {
  // Add your remark and rehype plugins here
  const remarkPlugins = [
    [TOC, { maxDepth: 1 }],
    codeTitle,
    rSlug,
    [autolinkHeadings, { behavior: 'wrap' }],
    remarkCapitalize,
  ];

  // const remarkPlugins = [];
  //console.log(POSTS_PATH);

  const { code, frontmatter } = await bundleMDX(source, {
    cwd: ComponentsInMdxPATH,
    xdmOptions(options) {
      options.remarkPlugins = [
        ...(options.remarkPlugins ?? []),
        ...remarkPlugins,
      ];
      return options;
    },
  });

  return {
    frontmatter,
    code,
  };
};

export const getSinglePost = async (slug) => {
  const source = getFileContent(`${slug}.mdx`);
  // console.log(source);
  const { code, frontmatter } = await getCompiledMDX(source);

  return {
    frontMatter: {
      wordCount: code.split(/\s+/gu).length,
      readingTime: readingTime(code),
      slug: slug || null,
      ...frontmatter,
    },
    code,
  };
};

export const getAllPosts = () => {
  return fs
    .readdirSync(POSTS_PATH)
    .filter((path) => /\.mdx?$/.test(path))
    .map((fileName) => {
      const source = getFileContent(fileName);
      const slug = fileName.replace(/\.mdx?$/, '');
      const { data } = matter(source);
      return {
        frontmatter: { ...data },
        slug: slug,
      };
    });
};
