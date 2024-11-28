import http from "http/http";
import { getRequest, postRequest, putRequest } from "http/request";
import { COMMUNITY, ONBOARD } from "utils/endpoints";
import { addQueryParams } from "utils/helpers";

const getUsersData = async ({ queryKey }) => {
  console.log(queryKey);

  const reponse = await http({
    method: "GET",
    url: ONBOARD.getUsers,
  });
  return reponse;
};
const getCommunityById = async (id) => {
  try {
    const requestUrl = addQueryParams(ONBOARD.getCommunityById(id));
    console.log(id, "afteridin api");
    console.log(requestUrl, "reurl");
    const response = await getRequest(requestUrl);
    return response;
  } catch (error) {
    console.error("Error fetching locations:", error);
    throw error;
  }
};
const updateCommunityById = async (id, body) => {
  try {
    const requestUrl = ONBOARD.updateCommunityById(id);

    const response = await putRequest(requestUrl, body);
    return response;
  } catch (error) {
    console.error("Error updating user:", error);
    throw error;
  }
};

const createCommunity = async (payload) => {
  const reponse = await postRequest(COMMUNITY.createCommunity, payload);
  return reponse;
};

const deleteCommunityById = async (id, body) => {
  try {
    const requestUrl = addQueryParams(ONBOARD.updateCommunityById(id));

    const response = await putRequest(requestUrl, body);

    return response;
  } catch (error) {
    console.error("Error updating user:", error);
    throw error;
  }
};

export const onboardApi = {
  getUsersData,
  getCommunityById,
  updateCommunityById,
  deleteCommunityById,
  createCommunity,
};
