import { JSXElementConstructor, ReactElement } from 'react';

type Meta = {
  id: string;
  title: string;
  date: string;
  tags: string[];
};

type Post = {
  meta: Meta;
  content: ReactElement<any, string | JSXElementConstructor<any>>;
};
