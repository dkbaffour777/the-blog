export const allPosts = async () => {
    const response = await fetch(`/api/posts`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const results = response.json();
    return results;
}