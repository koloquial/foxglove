import axios from 'axios';

export const addReality = async (reality) => {
  return axios.post(`${process.env.REACT_APP_SERVER}/users/add-reality/${reality.uid}`, reality)
    .then(res => res)
}