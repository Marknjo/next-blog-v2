import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
const postsDir = path.join(process.cwd(), 'src', 'posts');

console.log(postsDir);

export default function getSortedPostsData() {
  // get file names unde /posts
  const fileNames = fs.readdirSync(postsDir);
  const allPostsData = fileNames.map((filename) => {
    // remove ".md" from file name to get id

    const id = filename.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDir, filename);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the metadata section
    const matterResult = matter(fileContents);

    const blogPost: Post = {
      id,
      title: matterResult.data.title,
      date: matterResult.data.date,
    };

    // Combine the date with the id
    return blogPost;
  });

  // Sort posts by date
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}
