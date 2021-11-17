import { createContext, useState, useContext } from "react";
import useSWR from "swr";
import { useRouter } from "next/router";
import axios from "axios";
import { toast } from "react-toastify";

const authFetcher = (url) => {
  return axios.get(url).then((response) => {
    return response.data;
  });
};

const AuthenticationContext = createContext();

function AuthenticationProvider({ children }) {
  const [token, setToken] = useState(null);
  const router = useRouter();
  const privatePaths = [
    "/rsvp/confirm",
    "/rsvp/edit",
    "/rsvp/confirm",
    "our-story",
    "/registry",
    "/wedding-party",
    "livestream",
    "register-invitees",
  ];
  const path = router.asPath.split("?")[0];

  useSWR("/api/auth/refresh-token", authFetcher, {
    refreshInterval: 15 * 60 * 1000,
    refreshWhenHidden: true,
    revalidateIfStale: false,
    revalidateOnReconnect: false,
    revalidateOnMount: true,
    shouldRetryOnError: false,
    revalidateOnFocus: false,
    onSuccess: (data) => {
      setToken(data.token);
    },
    onError: (error) => {
      if (privatePaths.includes(path)) {
        toast.error(error.response.data.message);
        router.push("/rsvp");
      }
      setToken(null);
    },
  });

  return (
    <AuthenticationContext.Provider value={{ token, setToken }}>
      {children}
    </AuthenticationContext.Provider>
  );
}

function useAuthentication() {
  const context = useContext(AuthenticationContext);
  if (context === undefined) {
    throw new Error(
      "useAuthentication must be used within an AuthenticationProvider"
    );
  }
  return context;
}

export { useAuthentication, AuthenticationProvider };
