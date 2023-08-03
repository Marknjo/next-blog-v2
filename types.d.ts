type Meta = {
  id: string;
  title: string;
  date: string;
  tags: string;
};

type Post = {
  meta: Meta;
  content: any;
};
