export interface IPostsData {
  posts: {
    data: IPost[];
    meta: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface IPost {
  id: number;
  documentId: string;
  title: string;
  content: IPostContent[];
}

export interface IPostContent {
  type: string;
  children: {
    type: string;
    text: string;
    bold: boolean;
    [key: string]: unknown;
  }[];
  level: number;
}
