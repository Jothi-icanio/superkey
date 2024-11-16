import { useQuery } from "@tanstack/react-query";
import { api } from "api";

export const useGetUsers = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["login"],
    queryFn: api.onboard.getUsersData,
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.error(error);
    },
  });

  // Return the necessary states: data, isLoading, isError, error
  return { data, isLoading, isError, error };
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