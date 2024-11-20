document.getElementById('blogPostForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    const postContainer = document.getElementById('postsContainer');

    const post = document.createElement('div');
    post.className = 'post';
    
    post.innerHTML = `<h3>${title}</h3><p>${content}</p>`;
    postContainer.prepend(post);

    document.getElementById('blogPostForm').reset();
});
