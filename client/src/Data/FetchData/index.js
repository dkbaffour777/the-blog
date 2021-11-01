export const allPosts =()=> {
    const response = await fetch(`/api/posts`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
    
      if (response.ok) {
        return response.json();
      } else {
        alert(response.statusText);
      }
}