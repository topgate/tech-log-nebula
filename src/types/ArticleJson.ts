export type ArticleJsonItem = {
  title: string;
  url: string;
  summary: string;
  tags: string[];
};

export type ArticleJson = {
  title: string;
  published: string;
  articles: ArticleJsonItem[];
};
