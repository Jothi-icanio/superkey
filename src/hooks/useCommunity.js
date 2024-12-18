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

export const useUpdateCommunityById = (successHandler) => {
  const { updateSnackbar } = useSnackbar();
  const mutation = useMutation({
    mutationKey: ["updateCommunityById"],
    mutationFn: ({ id, body }) => api.community.updateCommunityById(id, body),
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

export const useOnboardCommunity = (successHandler) => {
  const { updateSnackbar } = useSnackbar();
  const mutation = useMutation({
    mutationKey: ["community-onboarding"],
    mutationFn: ({isFileUpload,payload}) => api.community.createCommunity(isFileUpload,payload),
    onSuccess: (data) => {
      successHandler?.();
      updateSnackbar({
        message: MESSAGE.communityOnboardedSuccess,
        severity: SEVERITY.success,
      });
    },
    onError: (error) => {
      const errorMessage = error?.response?.data || "An error occurred.";
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

export const useCommunityList = () => {
  return useMutation({
    mutationFn: (body) => api.community.getCommunityList(body),
  });
};

export const useDownloadOnboardingTemplate = () => {
  return useMutation({
    mutationFn: api.community.downloadOnboardingTemplate,
  });
};

export const useCreateMultiCommunity = () => {
  return useMutation({
    mutationFn: (body) => api.community.createMultiCommunity(body),
  });
};
export const useOffBoardCommunity = () => {
  const { updateSnackbar } = useSnackbar();

  const mutation = useMutation({
    mutationKey: ['community-offboarding'],
    mutationFn: async (payload, msg) => {
      // const { communityId, cmcId } = payload;
      console.log(msg, "str");
      const response = await api.community.offBoardCommunity(payload);
      return response.data;
    },
    onSuccess: (data, variables) => {
      console.log('Community off-boarded successfully:', data);
      updateSnackbar({
        message: typeof variables.msg === 'number' ? `You Have Off-boarded the ${variables.msg} communities successfully !` : `You Have Off-boarded the ${variables.msg} community successfully !`,
        severity: SEVERITY.success,
      });
    },
    onError: (error) => {
      const errorMessage = error?.response?.data?.token || "An error occurred.";
      console.error("Error off-boarding community:", errorMessage);
      updateSnackbar({
        message: errorMessage,
        severity: SEVERITY.error,
      });
    },
  });

  return mutation;
};

// export const useLoginUser = () => {
//   const navigate = useNavigate();
//   const {setAuthCookie}=useAuthCookies()
//   const { updateSnackbar } = useSnackbar();  // Get the updateSnackbar function

//   const {mutate,isSuccess, isError,error}= useMutation({
//     mutationKey: ["login"],
//     mutationFn: (credentialData) => api.login.userLogin(credentialData), // Pass `credentialData` to `mutate`
//     onSuccess: (response) => {
//       setAuthCookie("token", response.data.token)
//       navigate('/home');
//       updateSnackbar({
//         message:MESSAGE.loginSuccess,
//         severity:SEVERITY.success
//       });
//     },
//     onError: (error) => {
//       updateSnackbar({
//         message:error.response.data.token,
//         severity:SEVERITY.error
//       });
//       console.error(error);
//     },

//   });
//   const message=isSuccess?MESSAGE.loginSuccess:error?.response?.data?.token
//   return {mutate,isSuccess,isError,message}
// };
