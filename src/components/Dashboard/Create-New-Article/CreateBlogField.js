import FormInput from "@/components/FormInput";
import SubmitBtn from "@/components/SubmitBtn";
import ToggleSwitch from "@/components/ToggleSwitch";
import axios from "axios";
import { serverTimestamp } from "firebase/firestore";
import React, { useState } from "react";
import DragAndDropFile from "../../DragAndDropFile";
import TextEditorField from "./TextEditorField";

function CreateBlogField() {
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [description, setDescription] = useState("");
  const [mainPicture, setMainPicture] = useState("");
  const [body, setBody] = useState("");
  const [readingTime, setReadingTime] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = sessionStorage.getItem("uid");
    try {
      const response = await axios.post("/api/articles", {
        title: title,
        genre: genre,
        description: description,
        mainPicture: mainPicture,
        body: body,
        readingTime: readingTime,
        author_id: id,
        views: "1",
        published: true,
        created_at: serverTimestamp,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          label="What's the title?"
          placeholder="e.g. How Cats Stole My Heart and Took Over My Home"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <FormInput
          type="text"
          label="What's the vibe?"
          placeholder="e.g. Furry Tales"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
        <FormInput
          type="text"
          label="Give us a taste of what's to come!"
          placeholder="e.g. This article will give you a new appreciation for cats and their unique personalities."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <div class="flex items-center justify-center w-full mb-5 lg:mb-6">
          <DragAndDropFile />
        </div>
        <div className="mb-5 lg:mb-6">
          <TextEditorField
            label="Tell us everything!"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
        <div className="mb-5 lg:mb-6">
          <ToggleSwitch label="Publish it" />
        </div>
        <div className="pb-5 lg:pb-6">
          <SubmitBtn type="submit" submit="Post Article" />
        </div>
      </form>
    </div>
  );
}

export default CreateBlogField;
