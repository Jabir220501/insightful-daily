import axios from "axios";
import { Router } from "next/router";

export const getUserInfo = async (id) => {
  const base_url = "/api/users?api_key=34njn2ie202r2fn";
  try {
    const response = await axios.get(`${base_url}&id=${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getAllArticle = async () => {
  try {
    const response = await axios.get("/api/articles");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getArticleUser = async (id) => {
  const base_url = "/api/articles?author_id=";
  try {
    const response = await axios.get(`${base_url}${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteArticle = async (articleId) => {
  const base_url = "/api/articles?article_id=";
  try {
    const response = await axios.delete(`${base_url}${articleId}`);
  } catch (error) {
    console.log(error);
  }
};
