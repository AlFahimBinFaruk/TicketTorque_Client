import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = process.env.REACT_APP_API_BASE_URL;


export const ticket_api = createApi({
    reducerPath: 'ticket_api',
    baseQuery: fetchBaseQuery({
        baseUrl,
        prepareHeaders: (headers) => {


            const token = localStorage.getItem("token");
            // getState().auth.token ||
            if (token) {
                headers.set("Authorization", `Bearer ${token}`);
            }

            headers.set("Content-Type", "application/json");

            return headers;
        }
    }),
    tagTypes: ["Ticket"],
    endpoints: (builder) => ({



        searchTicket: builder.mutation({
            query: (data) => ({
                url: "/ticket/search",
                method: "POST",
                body:data
            }),
            providesTags: ["Ticket"]
        }),

        getTicketList: builder.query({
            query: ({ vehicle_id, from_location_id, to_location_id }) => {
                const params = new URLSearchParams();
                if (vehicle_id) params.append('vehicle_id', vehicle_id);
                if (from_location_id) params.append('from_location_id', from_location_id);
                if (to_location_id) params.append('to_location_id', to_location_id);

                return {
                    url: `/ticket/all?${params.toString()}`,
                    method: 'GET',
                };
            },
            providesTags: ['Ticket'],
        }),

        getTicketDetails: builder.query({
            query: (id) => ({
                url: `/ticket/details/${id}`,
                method: "GET"
            }),
            providesTags: ["Ticket"]
        }),



        getLocationList: builder.query({
            query: () => ({
                url: "/location/all",
                method: "GET",
            }),
            providesTags: ["Location"],
        }),

        getVehicleList: builder.query({
            query: () => ({
                url: "/vehicle/all",
                method: "GET",
            }),
            providesTags: ["Vehicle"],
        }),








    }),
});

export const {


    useSearchTicketMutation,
    useGetTicketListQuery,
    useGetTicketDetailsQuery,
    useGetVehicleListQuery,
    useGetLocationListQuery






} = ticket_api;