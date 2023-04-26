import FormInput from "@/components/FormInput";
import SubmitBtn from "@/components/SubmitBtn";
import ToggleSwitch from "@/components/ToggleSwitch";
import axios from "axios";
import { serverTimestamp, Timestamp } from "firebase/firestore";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import DragAndDropFile from "../../DragAndDropFile";
import TextEditorField from "../Create-New-Article/TextEditorField";

function UpdateBlogField(props) {
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [description, setDescription] = useState("");
  const [mainPicture, setMainPicture] = useState("");
  const [body, setBody] = useState("");
  const [readingTime, setReadingTime] = useState("");
  const [published, setPublished] = useState(false);
  const [docIdParam, setDocIdParam] = useState("");
  const [docIdData, setDocIdData] = useState([]);
  const router = useRouter();
  useEffect(() => {
    if (router.query && router.query.update) {
      const splitQuery = router.query.update.split("update-article-");
      setDocIdParam(splitQuery[1]);
    }
  }, [router.query]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/articles?id=${docIdParam}`, {});
        setDocIdData(response.data);
      } catch (error) {
        console.error(error);
        setDocIdData([]);
      }
    };

    if (docIdParam) {
      fetchData();
    }

    const test = () => {
      setTitle(docIdData.title);
    };

    if (docIdData.title) {
      test();
    }
  }, [docIdParam, docIdData.title]);
  console.log(title);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = Cookies.get("uid");
    try {
      const response = await axios.put(`/api/articles?${docIdParam}`, {
        title: title,
        genre: genre,
        description: description,
        mainPicture: mainPicture,
        body: body,
        readingTime: readingTime,
        author_id: id,
        views: 1,
        published: published,
        created_at: Timestamp.now(),
      });
      console.log(response);
      router.push("/dashboard/my-article");
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
          value={docIdData.genre}
          onChange={(e) => setGenre(e.target.value)}
        />
        <FormInput
          type="text"
          label="Give us a taste of what's to come!"
          placeholder="e.g. This article will give you a new appreciation for cats and their unique personalities."
          value={docIdData.description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <div class="flex items-center justify-center w-full mb-5 lg:mb-6">
          <DragAndDropFile />
        </div>
        <div className="mb-5 lg:mb-6">
          <TextEditorField
            label="Tell us everything!"
            value={docIdData.body}
            onChange={(newContent) => setBody(newContent)}
          />
        </div>
        <div className="mb-5 lg:mb-6">
          <ToggleSwitch
            label="Publish"
            value={published}
            checked={published}
            onClick={(e) => setPublished(!published)}
            onChange={(e) => setPublished(e.target.value ? true : false)}
          />
        </div>
        <div className="pb-5 lg:pb-6">
          <SubmitBtn type="submit" submit="Post Article" />
        </div>
      </form>
    </div>
  );
}

export default UpdateBlogField;
