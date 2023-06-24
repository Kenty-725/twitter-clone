import { async } from "@firebase/util";
import { addDoc, collection } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase";
import "./CreatePost.css";

const CreatePost = ({ isAuth }) => {
  const [title, setTitle] = useState();
  const [text, setText] = useState();
  const navigate = useNavigate();

  const postCreate = async () => {
    await addDoc(collection(db, "posts"), {
      title: title,
      text: text,
      author: {
        username: auth.currentUser.displayName,
        id: auth.currentUser.uid,
      },
    });
    navigate("/");
  };

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="createPostPage">
      <div className="postContainer">
        <h1>記事を投稿する</h1>
        <div className="inputPost">
          <div>タイトル</div>
          <input
            type="text"
            placeholder="タイトルを記入"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="inputPost">
          <div>投稿</div>
          <textarea
            placeholder="投稿内容を記入"
            onChange={(e) => setText(e.target.value)}
          ></textarea>
        </div>
        <button className="postButton" onClick={postCreate}>
          投稿する
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
