import { getPostsMeta } from '@/lib/posts';

export const revalidate = 0; //86400

type Props = {
  params: {
    tag: string;
  };
};

// export async function generateStaticParams() {
//   const posts = (await getPostsMeta()) || [];

//   if (posts.length === 0) return [];

//   const tags = new Set(posts.map((post) => post.tags).flat());

//   return Array.from(tags).map((tag) => ({
//     tag,
//   }));
// }

export function generateMetadata({ params: { tag } }: Props) {
  return {
    title: `Post about ${tag}`,
  };
}
