const LOGIN = {
  userLogin: "api/auth/login",
  requestReset: (email) => `/api/auth/request-reset?email=${email}`,
  resetPassword: "/api/auth/resetPassword",
  newPassword: "/api/auth/setNewPassword",
  enableMailChecking: (email) => `/api/auth/email?email=${email}`,
};

const COMMUNITY = {
  getAll: "/api/community",
  createCommunity: (isFileUpload) =>
    `/api/community/createWithFile?isFileUpload=${isFileUpload}`,
  getAllCommunityList: "/api/community/pagings",
  getCommunityList: `/api/community/pagings/CMCID`,
  getUsers: "/api/veruna/users",
  getCommunityById: (id) => `/api/community/CMCID/communities/${id}`,
  updateCommunityById: (id) => `/api/community/update/${id}`,
  deleteCommunityById: (id) => `/api/community/${id}`,
  downloadOnboardingTemplate: `api/community/bulk-upload-template`,
  createMultiCommunity: `api/community/bulk-create`,
  offBoardCommunity: `/api/community/offboardingCommunities`,
};
const COMMON = {
  getAllLocation: `api/googlemaps/autocomplete`,
  getAllCommunity: `/api/community/CMCID/name`,
  getAllCommunityManager: `/api/manager`,
  getAllPropertyManager: `/api/property-managers/all`,
  getAllDocTypes: `/api/document-types`,
  getUsers: "/api/veruna/users",
  getPriority: "/api/tasks/priority",
};
const TASK = {
  getStatus: "/api/tasks/status",
  getType: "/api/tasks/types",
  getPriority: "/api/tasks/priority",
  getContacts: "/api/tasks/contacts",
  createTask: "/api/tasks",
  markTaskCompletedById: (id) => `/api/tasks/${id}/complete`,
};
const DASHBOARD = {
  getActiveTask: "/api/tasks",
  getCompletedTask: "api/tasks/history",
  getActiveAndCompletedTaskByFilter: (sort, orderBy, page, size) =>
    `/api/tasks/community/CMCID?sort=${sort}&orderBy=${orderBy}&page=${page}&size=${size}`,
  //`api/tasks/community/0017x00000kF1kTAAS?sort=createdAt&orderBy=desc&page=1&size=30`,
  getDashboardMetrics: () => `/api/dashboard/metrics/CMCID`,
  getRenewals: `/api/dashboard/renewal/001bn00001CitW2AAJ`,
};

export { COMMON, COMMUNITY, DASHBOARD, LOGIN, TASK };
