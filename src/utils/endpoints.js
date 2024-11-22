const LOGIN = {
  getUser: "todos",
  userLogin: "api/auth/login",
  requestReset: (email) => `/api/auth/request-reset?email=${email}`,
  resetPassword: "/api/auth/resetPassword",
  newPassword: "/api/auth/setNewPassword",
  enableMailChecking: (email) => `/api/auth/email?email=${email}`,
};
const ONBOARD = {
  getUsers: "/api/veruna/users",
};
const COMMUNITY = {
  getAll: "/api/community",
};
const COMMON = {
  getAllLocation: `/api/autocomplete`,
  getAllCommunity: `/api/community`,
  getAllCommunityManager: `/api/manager`,
  getAllPropertyManager: `/api/propertyManager`,
  getAllDocTypes: `/api/docTypes`,
};

export { LOGIN, ONBOARD, COMMON, COMMUNITY };
