import axios from 'axios';

export const getUser = async (id) => {
  return axios.get(`${process.env.REACT_APP_SERVER}/users/${id}`)
    .then(res => res);
};