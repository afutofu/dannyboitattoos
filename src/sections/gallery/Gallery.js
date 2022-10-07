import React, { useState, useEffect } from "react";
import axios from "axios";

const Gallery = () => {
  const [posts1, setPosts1] = useState([]);
  const [posts2, setPosts2] = useState([]);

  // Retreive posts from API
  useEffect(() => {
    console.log(process.env.REACT_APP_IG_ACCESS_TOKEN);

    // Use Instagram Basic Display API to access the posts
    axios
      .get(
        `https://graph.instagram.com/me/media?fields=id,media_type,media_url,permalink&access_token=${process.env.REACT_APP_IG_ACCESS_TOKEN}`
      )
      .then((IGres) => {
        let postCount = 0;
        let posts = IGres.data.data.filter((post) => {
          // Get at least 12 non-video posts
          if (postCount < 12 && post.media_type !== "VIDEO") {
            postCount++;
            return post;
          }
          return false;
        });

        let tempPosts1 = [];
        let tempPosts2 = [];

        // Keep half for upper posts and half for lower posts to be rendered
        for (let i = 0; i < posts.length; i++) {
          if (i < 6) tempPosts1.push(posts[i]);
          else tempPosts2.push(posts[i]);
        }

        setPosts1([...tempPosts1]);
        setPosts2([...tempPosts2]);
      })
      .catch((err) => {
        console.log("Error in retreiving posts");
        console.log(err);
      });
  }, []);

  return (
    <section id="gallery">
      <div className="container">
        <div className="info">
          <h2>Gallery</h2>
          <h3>Latest Works</h3>
          <p>
            More works available on{" "}
            <a
              href="https://www.instagram.com/dannyboimendez88/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="instagram">Instagram</span>
            </a>
          </p>
        </div>
      </div>
      <div className="image-container">
        <div className="image-container-1">
          {posts1 &&
            posts1.map((post) => {
              return (
                <a
                  key={post.id + new Date().getTime()}
                  href={post.permalink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="image"
                    alt="Instagram Post"
                    src={post.media_url}
                  />
                </a>
              );
            })}
          {posts1 &&
            posts1.map((post) => {
              return (
                <a
                  key={new Date().getTime() + post.id}
                  href={post.permalink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="image"
                    alt="Instagram Post"
                    src={post.media_url}
                  />
                </a>
              );
            })}
        </div>
        <div className="image-container-2">
          {posts2 &&
            posts2.map((post) => {
              return (
                <a
                  key={post.id + new Date().getTime()}
                  href={post.permalink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="image"
                    alt="Instagram Post"
                    src={post.media_url}
                  />
                </a>
              );
            })}
          {posts2 &&
            posts2.map((post) => {
              return (
                <a
                  key={new Date().getTime() + post.id}
                  href={post.permalink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="image"
                    alt="Instagram Post"
                    src={post.media_url}
                  />
                </a>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
