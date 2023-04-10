import FormInput from "@/components/FormInput";
import SubmitBtn from "@/components/SubmitBtn";
import axios from "axios";
import React, { useState } from "react";
import { serverTimestamp } from "firebase/firestore";

function createArticle() {
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [description, setDescription] = useState("");
  const [body, setBody] = useState("");
  const [readingTime, setReadingTime] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const uid = sessionStorage.getItem("uid");
    try {
      const response = await axios.post("/api/articles", {
        title: title,
        genre: genre,
        description: description,
        body: body,
        readingTime: "readingTime",
        author_id: uid,
        views: "1",
        published: true,
        created_at: serverTimestamp(), // call the function
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="bg-cremeBg h-screen p-5">
      <div className="w-1/4">
        <form onSubmit={handleSubmit}>
          <FormInput
            label="Title"
            type="text"
            placeholder="Enter your title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <FormInput
            label="Genre"
            type="text"
            placeholder="Set your genre"
            value={genre}
            onChange={(event) => setGenre(event.target.value)}
          />
          <FormInput
            label="Description"
            type="text"
            placeholder="Enter your description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
          <FormInput
            label="Article"
            type="text"
            placeholder="Enter your content"
            value={body}
            onChange={(event) => setBody(event.target.value)}
          />
          <FormInput
            label="Reading time"
            type="text"
            placeholder="Enter the time"
            value={readingTime}
            onChange={(event) => setReadingTime(event.target.value)}
          />
          <SubmitBtn type="submit" submit="Post article" />
        </form>
      </div>
    </div>
  );
}

export default createArticle;
