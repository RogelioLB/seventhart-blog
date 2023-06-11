export interface IArticle{
    article_image?: string;
    article_slug?: string;
    article_title?: string;
    category_id?: number;
    created_at?: string | null;
    id?: number;
    markdown_url?: string;
    user_id?: string | null;
}