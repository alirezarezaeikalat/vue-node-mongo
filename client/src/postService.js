import axios from 'axios';

const url = 'http://localhost:5000/api/posts/';

class PostService {
 
  // Get Posts
  static getPosts() {
    return new Promise(async (resolve, reject) => {
      try {
        // res it is the object that it has a array of data
        const res = await axios.get(url);
        const data = res.data;
        console.log('this is the test');
        resolve(
          data.map(post => {
            return {
              ...post,
              createdAt: new Date(post.createdAt)
            }
          })
        );
      } catch(error) {
        reject(error);
      }
    });
  }

  // Create Post
  static insertPost(text) {
    return axios.post(url, {
      text: text
    });
  }

  // Delete post
  static deletePost(id) {
    return axios.delete(`${url}${id}`);
  }

}

export default PostService;