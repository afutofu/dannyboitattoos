import React, { useState, useEffect } from "react";
import axios from "axios";

const Gallery = () => {
  const [posts1, setPosts1] = useState([]);
  const [posts2, setPosts2] = useState([]);

  // Retreive posts from API
  useEffect(() => {
    axios
      .get("/api/posts")
      .then((res) => {
        // console.log(res.data);
        // Set posts immediately after retreiving data

        let tempPosts1 = [];
        let tempPosts2 = [];

        res.data.map((post, i) => {
          if (i < 6) tempPosts1.push(post);
          else tempPosts2.push(post);
        });
        setPosts1([...tempPosts1]);
        setPosts2([...tempPosts2]);
      })
      .catch((err) => {
        console.log(err.response.data.msg);
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
                  <img className="image" src={post.media_url} />
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
                  <img className="image" src={post.media_url} />
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
                  <img className="image" src={post.media_url} />
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
                  <img className="image" src={post.media_url} />
                </a>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
