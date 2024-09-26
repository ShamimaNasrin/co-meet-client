import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// base API configuration
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://co-meet-server.vercel.app/api",
  }),
  tagTypes: ["", "", "filteredItem"],
  endpoints: () => ({}),
});

// Export hooks for API endpoints
// export const {} = baseApi;
