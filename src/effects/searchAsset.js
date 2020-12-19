import { serverUrl } from "../config";
const defaultHeader = new Headers({
  Accept: "application/json"
});

export const searchAsset = (searchKeyword, page) => {
  return fetch(
    searchKeyword && searchKeyword.trim() !== ""
      ? `${serverUrl}/assets?title=${searchKeyword}`
      : `${serverUrl}/assets`,
    {
      method: "GET",
      headers: defaultHeader
    }
  ).then((response) => {
    return response.json();
  });
};

export const getAssetDetail = (id) => {
  return fetch(`${serverUrl}/assets/${id}`, {
    method: "GET",
    headers: defaultHeader
  }).then((response) => {
    return response.json();
  });
};
