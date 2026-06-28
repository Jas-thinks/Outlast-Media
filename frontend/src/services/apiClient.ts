import axios from "axios";

/**
 * Pre-configured Axios instance for the Gearbox MERN backend. All feature
 * services (waitlist, assets, auth, …) should import and use this client so
 * base URL, headers, and interceptors stay consistent.
 */
export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL ?? "/api",
  timeout: 15_000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Normalise errors into a predictable shape for the UI layer.
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const message =
      error?.response?.data?.message ??
      error?.message ??
      "Something went wrong. Please try again.";
    return Promise.reject(new Error(message));
  },
);
