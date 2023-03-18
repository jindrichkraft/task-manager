import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

import { setAuth, resetAuth } from '../redux/slices/auth';

import type { AxiosError } from 'axios';

import type { RootState } from '../redux/store';
import type { IUserAuth } from '../typings/auth';
import { IAPIResponse } from '../typings/api';
import { AUTH_LOCAL_STORAGE_KEY } from '../utils/constants';

export const useAuth = () => {
  const { authData } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState<boolean>(false);

  const handleLogin = async ({
    username,
    password,
  }: IUserAuth): Promise<IAPIResponse | null> => {
    setLoading(true);
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_ENDPOINT}/auth/login`,
        {
          username,
          password,
        }
      );
      setLoading(false);

      const responseData = res.data;
      if (responseData.success) {
        dispatch(setAuth(responseData.data));
        localStorage.setItem(
          AUTH_LOCAL_STORAGE_KEY,
          JSON.stringify(responseData.data)
        );
      } else {
        dispatch(resetAuth());
      }

      return responseData;
    } catch (error) {
      setLoading(false);
      dispatch(resetAuth());
      console.log(error);
      return ((error as AxiosError).response?.data ??
        null) as IAPIResponse | null;
    }
  };

  const handleLogout = () => {
    dispatch(resetAuth());
    localStorage.removeItem(AUTH_LOCAL_STORAGE_KEY);
  };

  useEffect(() => {
    const localAuthData = localStorage.getItem(AUTH_LOCAL_STORAGE_KEY);
    if (!localAuthData) {
      dispatch(resetAuth());
      return;
    }
    const authData = JSON.parse(localAuthData);
    dispatch(setAuth(authData));
  }, []);

  return {
    auth: authData,
    loading,
    handleLogin,
    handleLogout,
  };
};
