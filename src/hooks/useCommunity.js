import { useMutation, useQuery } from "@tanstack/react-query";
import { api } from "api";
import { useSnackbar } from "components/AppComponents/SnackBarProvider";
import { MESSAGE, SEVERITY } from "utils/message";

export const useGetUsers = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["login"],
    queryFn: api.community.getUsersData,
    onSuccess: (data) => {},
    onError: (error) => {
      console.error(error);
    },
  });

  return { data, isLoading, isError, error };
};

export const useGetCommunityById = (id) => {
  return useQuery(["userInfo", id], () => api.community.getCommunityById(id), {
    keepPreviousData: true,
    onSuccess: (data) => {},
    onError: (error) => {
      console.error("Error fetching user data:", error);
    },
  });
};

export const useUpdateCommunityById = () =>
  useMutation({
    mutationKey: ["updateCommunityById"],
    mutationFn: ({ id, body }) => api.community.updateCommunityById(id, body),
    onSuccess: (data) => {
      console.log(data, "data");
    },
    onError: (error) => {
      console.error(error);
    },
  });
export const useDeleteCommunityById = () =>
  useMutation({
    mutationKey: ["deleteCommunityById"],
    mutationFn: ({ id, body }) => api.community.deleteCommunityById(id, body),
    onSuccess: (data) => {
      console.log(data, "data");
    },
    onError: (error) => {
      console.error(error);
    },
  });
// Return the necessary states: data, isLoading, isError, error

export const useOnboardCommunity = (successHandler) => {
  const { updateSnackbar } = useSnackbar();
  const mutation = useMutation({
    mutationKey: ["community-onboarding"],
    mutationFn: (payload) => api.community.createCommunity(payload),
    onSuccess: (data) => {
      successHandler?.();
      updateSnackbar({
        message: MESSAGE.communityOnboardedSuccess,
        severity: SEVERITY.success,
      });
    },
    onError: (error) => {
      const errorMessage = error?.response?.data?.token || "An error occurred.";
      console.error("Mutation error:", errorMessage);
      updateSnackbar({
        message: errorMessage,
        severity: SEVERITY.error,
      });
    },
  });

  return mutation;
};

export const useCommunityListQuery = (search) =>
  useQuery({
    queryKey: ["community-listing", search],
    queryFn: () => api.community.getAllCommunityList({ search }),
    keepPreviousData: true,
    select: (data) => {
      // Transform the data here
      return data.data;
    },
    onSuccess: (data) => {},
    onError: (error) => {
      console.error("Error fetching locations:", error);
    },
  });
