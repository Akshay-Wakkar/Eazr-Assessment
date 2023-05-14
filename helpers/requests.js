import axios from "axios";
const baseUrl = "https://dog.ceo/api";
export const getRequest = async (url) => {
  const options = {
    method: "GET",
    url: `${baseUrl}/${url}`,
    headers: {
      Accept: "application/json",
    },
  };

  const response = await axios
    .request(options)
    .then(function (response) {
      return { value: true, data: response.data };
    })
    .catch(function (error) {
      return { value: false, data: error?.response?.data };
    });

  return response;
};
