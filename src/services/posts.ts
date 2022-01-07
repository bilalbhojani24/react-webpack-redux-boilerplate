import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postApi = createApi({
  reducerPath: 'post',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/',
  }),
  tagTypes: ['Post', 'PostId'],
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => 'posts',
      providesTags: ['Post'],
    }),
    getPostById: builder.query({
      query: (id) => `posts/${id}`,
      providesTags: ['PostId'],
    }),
    createPost: builder.mutation({
      query: (body) => ({
        url: 'posts',
        method: 'POST',
        body,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
    }),
    updatePost: builder.mutation({
      query: ({ data, id }) => ({
        url: `posts/${id}`,
        method: 'PUT',
        body: data,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
    }),
    deletePost: builder.mutation({
      query: ({ id }) => ({
        url: `posts/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetPostsQuery, useGetPostByIdQuery, useCreatePostMutation, useUpdatePostMutation, useDeletePostMutation,
} = postApi;
