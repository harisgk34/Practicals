async function getPostsByTitle(title) {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (!response.ok) {
        throw new Error('Failed to fetch posts');
      }
      const posts = await response.json();
      const filteredPosts = posts.filter(post => post.title.includes(title));
      console.log(filteredPosts);
    } catch (error) {
      console.error(error);
    }
  }
  
  
  getPostsByTitle('magnam');
  
