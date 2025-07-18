import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

const baseUrl = 'http://localhost:5000'; // Update to your backend URL

const getToken = () => localStorage.getItem('token');

export const useUsers = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await axios.get(`${baseUrl}/api/user`, {
        headers: { Authorization: `Bearer ${getToken()}` }
      });
      return res.data.data;
    },
  });
};

export const useCreateUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (form) => {
      const res = await axios.post(`${baseUrl}/api/user/create-user`, form);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['users']);
    }
  });
};

export const useUpdateUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ id, form }) => {
      const res = await axios.patch(`${baseUrl}/api/user/${id}`, form);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['users']);
    }
  });
};

export const useDeleteUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id) => {
      await axios.delete(`${baseUrl}/api/user/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['users']);
    }
  });
};
