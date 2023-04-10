import axios from "axios";

export const getUserInfo = async (id) => {
  const base_url = "/api/users?api_key=34njn2ie202r2fn";
  try {
    const response = await axios.get(`${base_url}&id=${id}`);
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
