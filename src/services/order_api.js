import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = process.env.REACT_APP_API_BASE_URL;


export const order_api = createApi({
    reducerPath: 'order_api',
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
    tagTypes: ["Order"],
    endpoints: (builder) => ({


        placeOrder:builder.mutation({
            query:(data)=>({
                url:"/order/add-new",
                method:"POST",
                body:data
            }),
            invalidatesTags:["Order"]
        }),

        getMyOrderList:builder.query({
            query:()=>({
                url:"/order/my/all"
            }),
            providesTags:["Order"]
        }),

        getMyOrderDetails:builder.query({
            query:(id)=>({
                url:`/order/my/details/${id}`
            }),
            providesTags:["Order"]
        })



        








    }),
});

export const {

    usePlaceOrderMutation,
    useGetMyOrderListQuery,
    useGetMyOrderDetailsQuery
    






} = order_api;