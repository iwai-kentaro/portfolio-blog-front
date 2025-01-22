interface Post {
    id: number;
    title: string | undefined;
    content: string | undefined;
    created_at: string | null;
    updated_at: string | null;
}

export default Post;